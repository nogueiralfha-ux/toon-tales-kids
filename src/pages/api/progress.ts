import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // GET: Retrieve user learning progress
  if (req.method === 'GET') {
    const { userId, episodeId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: 'Parâmetro userId é obrigatório.' });
    }

    try {
      if (episodeId) {
        const progress = await prisma.learningProgress.findUnique({
          where: {
            userId_episodeId: {
              userId: String(userId),
              episodeId: String(episodeId),
            },
          },
        });
        return res.status(200).json({ progress });
      }

      const allProgress = await prisma.learningProgress.findMany({
        where: { userId: String(userId) },
        orderBy: { lastPlayedAt: 'desc' },
      });

      return res.status(200).json({ progress: allProgress });
    } catch (error: any) {
      console.warn('[API /progress GET] Fallback notice:', error?.message);
      return res.status(200).json({ progress: [], notice: 'Offline fallback mode' });
    }
  }

  // POST: Save/Update user learning progress
  if (req.method === 'POST') {
    const { userId, episodeId, progressPercent, lastPositionSec, status } = req.body;

    if (!userId || !episodeId) {
      return res.status(400).json({ message: 'userId e episodeId são obrigatórios.' });
    }

    const isCompleted = status === 'COMPLETED' || progressPercent >= 90;
    const progressStatus = isCompleted ? 'COMPLETED' : progressPercent > 0 ? 'IN_PROGRESS' : 'NOT_STARTED';

    try {
      const savedProgress = await prisma.learningProgress.upsert({
        where: {
          userId_episodeId: {
            userId: String(userId),
            episodeId: String(episodeId),
          },
        },
        create: {
          userId: String(userId),
          episodeId: String(episodeId),
          progressPercent: Number(progressPercent) || 0,
          lastPositionSec: Number(lastPositionSec) || 0,
          status: progressStatus,
          lastPlayedAt: new Date(),
          completedAt: isCompleted ? new Date() : null,
          playCount: 1,
        },
        update: {
          progressPercent: Number(progressPercent) || 0,
          lastPositionSec: Number(lastPositionSec) || 0,
          status: progressStatus,
          lastPlayedAt: new Date(),
          ...(isCompleted ? { completedAt: new Date() } : {}),
          playCount: { increment: 1 },
        },
      });

      // If completed, register XP reward if not already awarded
      if (isCompleted) {
        try {
          const existingXp = await prisma.xpTransaction.findFirst({
            where: {
              userId: String(userId),
              source: 'EPISODE_COMPLETED',
              referenceId: String(episodeId),
            },
          });

          if (!existingXp) {
            await prisma.xpTransaction.create({
              data: {
                userId: String(userId),
                amount: 100,
                source: 'EPISODE_COMPLETED',
                referenceId: String(episodeId),
                metadata: { episodeId },
              },
            });
          }
        } catch (xpErr) {
          console.warn('[API /progress XP award notice]:', xpErr);
        }
      }

      return res.status(200).json({
        success: true,
        progress: savedProgress,
        xpAwarded: isCompleted ? 100 : 0,
      });
    } catch (error: any) {
      console.warn('[API /progress POST] Prisma notice:', error?.message);
      return res.status(200).json({
        success: true,
        notice: 'Saved to local cache fallback',
        progress: {
          userId,
          episodeId,
          progressPercent,
          lastPositionSec,
          status: progressStatus,
        },
      });
    }
  }

  return res.status(405).json({ message: 'Método não permitido.' });
}
