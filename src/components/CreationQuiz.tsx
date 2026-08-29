import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { audioEngine } from '../services/audioEngine';
import confetti from 'canvas-confetti';
import { Award, CheckCircle2, XCircle, RotateCcw, Sparkles, ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';

interface CreationQuizProps {
  quizData: QuizQuestion[];
}

export const CreationQuiz: React.FC<CreationQuizProps> = ({ quizData }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const question = quizData[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    setIsAnswered(true);

    if (idx === question.correctIndex) {
      setScore((prev) => prev + 1);
      audioEngine.triggerSoundEffect('toon_tales_jingle');
    } else {
      audioEngine.triggerSoundEffect('wind_sky');
    }
  };

  const handleNext = () => {
    if (currentIdx < quizData.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'],
      });
      audioEngine.playToonTalesOutroFanfare();
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div id="creation-quiz" className="w-full bg-white border-2 border-slate-100 rounded-3xl p-5 sm:p-7 shadow-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b-2 border-slate-100 pb-5 mb-6">
        <div>
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 font-brand">
            <Award className="w-5 h-5 text-orange-500" />
            Quiz dos 7 Dias da Criação
          </h3>
          <p className="text-xs text-slate-500 font-semibold mt-0.5">
            Descubra o quanto você aprendeu com o Episódio 01 de Toon Tales Kids!
          </p>
        </div>
        <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200 shadow-sm">
          Pontos: {score} de {quizData.length}
        </span>
      </div>

      {!isFinished ? (
        <div className="space-y-6">
          {/* Question Badge & Text */}
          <div className="bg-slate-50 p-5 sm:p-6 rounded-3xl border-2 border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-black bg-orange-500 text-white font-brand shadow-sm">
                {question.dayLabel} • Pergunta {currentIdx + 1} de {quizData.length}
              </span>
              <span className="text-xs text-slate-600 font-mono font-bold flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-orange-500" />
                {question.biblicalVerse}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-slate-900 leading-relaxed font-brand">
              {question.question}
            </h4>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-3">
            {question.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === question.correctIndex;

              let btnStyle = 'bg-white border-2 border-slate-200 hover:border-orange-300 hover:bg-orange-50/30 text-slate-800 font-bold';
              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-50 border-2 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-200';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-50 border-2 border-rose-400 text-rose-950 font-bold ring-2 ring-rose-200';
                } else {
                  btnStyle = 'bg-slate-50 border border-slate-200 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`p-4 sm:p-4.5 rounded-2xl border text-left font-bold text-sm flex items-center justify-between transition-all duration-200 shadow-sm ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-500 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner */}
          {isAnswered && (
            <div className={`p-4 sm:p-5 rounded-2xl border-2 text-xs leading-relaxed animate-fadeIn shadow-sm ${
              selectedAnswer === question.correctIndex
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : 'bg-orange-50 border-orange-300 text-orange-950'
            }`}>
              <p className="font-black mb-1 flex items-center gap-1 font-brand text-sm">
                <Sparkles className="w-4 h-4 text-orange-500" />
                {selectedAnswer === question.correctIndex ? 'Excelente resposta!' : 'Quase lá! Veja a explicação:'}
              </p>
              <p className="font-medium">{question.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="px-6 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-black font-brand flex items-center gap-2 shadow-md shadow-orange-200 active:scale-95 transition-all"
              >
                <span>{currentIdx < quizData.length - 1 ? 'Próxima Pergunta' : 'Ver Meu Certificado'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Certificate & Results Screen */
        <div className="text-center py-6 space-y-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-orange-50 via-white to-amber-50 border-4 border-orange-300 shadow-xl max-w-lg mx-auto relative overflow-hidden">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-200 mb-4">
              <ShieldCheck className="w-10 h-10" />
            </div>

            <span className="text-xs font-black uppercase tracking-widest text-orange-600 font-brand">
              Certificado Oficial Toon Tales Kids
            </span>

            <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-2 font-brand">
              Guardião da Criação
            </h4>

            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed mb-6 font-medium">
              Você completou com sucesso a jornada por esta aventura com uma pontuação de <strong>{score} de {quizData.length}</strong>!
            </p>

            <div className="bg-white p-3.5 rounded-2xl border-2 border-orange-200 text-xs text-orange-950 font-bold shadow-sm">
              "Deus viu tudo o que havia feito, e era muito bom!" • Gênesis 1:31
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold font-brand inline-flex items-center gap-2 shadow-md transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Jogar Novamente</span>
          </button>
        </div>
      )}
    </div>
  );
};
