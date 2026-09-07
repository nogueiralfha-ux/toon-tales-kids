import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import { ALL_EPISODES } from '../../data/catalog';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método não permitido. Utilize GET.' });
  }

  const { seasonId, locale = 'pt-BR' } = req.query;

  try {
    // Attempt to query PostgreSQL via Prisma
    const dbEpisodes = await prisma.episode.findMany({
      where: {
        ...(seasonId ? { seasonId: String(seasonId) } : {}),
        status: 'PUBLISHED',
      },
      include: {
        translations: {
          where: { locale: String(locale) },
        },
        audioAssets: {
          where: { locale: String(locale) },
        },
        season: {
          include: {
            translations: {
              where: { locale: String(locale) },
            },
          },
        },
        quiz: {
          include: {
            questions: {
              include: {
                translations: {
                  where: { locale: String(locale) },
                },
              },
            },
          },
        },
      },
      orderBy: [{ seasonId: 'asc' }, { episodeNumber: 'asc' }],
    });

    if (dbEpisodes && dbEpisodes.length > 0) {
      return res.status(200).json({
        source: 'database',
        count: dbEpisodes.length,
        episodes: dbEpisodes,
      });
    }
  } catch (error) {
    console.warn('[API /episodes] Prisma fallback notice:', error);
  }

  // Graceful Fallback: Return in-memory catalog
  let filtered = ALL_EPISODES;
  if (seasonId) {
    filtered = filtered.filter((ep) => ep.seasonId === seasonId);
  }

  return res.status(200).json({
    source: 'catalog_fallback',
    count: filtered.length,
    episodes: filtered,
  });
}
