sed -i 's/import { NAUFRAGIO_SCENES, EPISODE_META_T4E7, NAUFRAGIO_QUIZ } from '\''\.\/data\/naufragioScript'\'';/import { TEMPESTADE_SCENES, EPISODE_META_T4E7, TEMPESTADE_QUIZ } from '\''\.\/data\/tempestadeScript'\'';\nimport { NAUFRAGIO_SCENES, EPISODE_META_T4E8, NAUFRAGIO_QUIZ } from '\''\.\/data\/naufragioScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t4e7'\'' ? NAUFRAGIO_SCENES : /const currentScenes = currentEpisodeId === '\''t4e8'\'' ? NAUFRAGIO_SCENES : currentEpisodeId === '\''t4e7'\'' ? TEMPESTADE_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t4e7'\'' ? EPISODE_META_T4E7 : /const currentMeta = currentEpisodeId === '\''t4e8'\'' ? EPISODE_META_T4E8 : currentEpisodeId === '\''t4e7'\'' ? EPISODE_META_T4E7 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t4e7'\'' ? NAUFRAGIO_QUIZ : /const currentQuiz = currentEpisodeId === '\''t4e8'\'' ? NAUFRAGIO_QUIZ : currentEpisodeId === '\''t4e7'\'' ? TEMPESTADE_QUIZ : /g' src/App.tsx

sed -i 's/ep.id === '\''t4e7'\''/ep.id === '\''t4e7'\'' || ep.id === '\''t4e8'\''/g' src/App.tsx
