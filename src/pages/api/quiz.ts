import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido. Utilize POST.' });
  }

  const { userId, quizId, episodeId, answers } = req.body;

  if (!answers || !Array.isArray(answers)) {
    return res.status(400).json({ message: 'Array de respostas (answers) é obrigatório.' });
  }

  try {
    let totalQuestions = answers.length;
    let correctCount = 0;
    const answerResults = [];

    // Check if questions exist in Prisma
    let dbQuestions: any[] = [];
    if (quizId) {
      dbQuestions = await prisma.quizQuestion.findMany({
        where: { quizId: String(quizId) },
      });
    }

    if (dbQuestions && dbQuestions.length > 0) {
      for (const ans of answers) {
        const q = dbQuestions.find((item) => item.id === ans.questionId || item.position === ans.position);
        const isCorrect = q ? q.correctIndex === ans.answerIndex : true;
        if (isCorrect) correctCount++;
        answerResults.push({
          questionId: ans.questionId,
          answerIndex: ans.answerIndex,
          isCorrect,
          explanation: q?.explanation || 'Excelente resposta bíblica!',
        });
      }
    } else {
      // Fallback scoring: assume answers provided with validation
      for (const ans of answers) {
        const isCorrect = ans.isCorrect !== undefined ? ans.isCorrect : ans.answerIndex === ans.correctIndex;
        if (isCorrect) correctCount++;
        answerResults.push({
          questionId: ans.questionId || 'q-' + Math.random(),
          answerIndex: ans.answerIndex,
          isCorrect,
          explanation: ans.explanation || 'Excelente conhecimento bíblico!',
        });
      }
    }

    const score = Math.round((correctCount / totalQuestions) * 100);
    const passed = score >= 70;
    const isPerfect = score === 100;
    let xpAwarded = passed ? (isPerfect ? 50 : 25) : 10;

    // Save QuizAttempt if userId provided and DB is connected
    if (userId) {
      try {
        if (quizId) {
          const attempt = await prisma.quizAttempt.create({
            data: {
              userId: String(userId),
              quizId: String(quizId),
              score,
              correct: correctCount,
              total: totalQuestions,
            },
          });

          // Register XP Transaction
          await prisma.xpTransaction.create({
            data: {
              userId: String(userId),
              amount: xpAwarded,
              source: isPerfect ? 'QUIZ_PERFECT' : 'QUIZ_COMPLETED',
              referenceId: attempt.id,
              metadata: { episodeId, score },
            },
          });
        }
      } catch (dbErr) {
        console.warn('[API /quiz DB save notice]:', dbErr);
      }
    }

    return res.status(200).json({
      success: true,
      score,
      correct: correctCount,
      total: totalQuestions,
      passed,
      isPerfect,
      xpAwarded,
      results: answerResults,
    });
  } catch (error: any) {
    console.error('[API /quiz Error]:', error);
    return res.status(500).json({ message: 'Erro ao processar quiz.', error: error?.message });
  }
}
