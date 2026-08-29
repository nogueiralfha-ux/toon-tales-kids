sed -i 's/import { NAUFRAGIO_SCENES, EPISODE_META_T4E8, NAUFRAGIO_QUIZ } from '\''\.\/data\/naufragioScript'\'';/import { MALTA_SCENES, EPISODE_META_T4E9, MALTA_QUIZ } from '\''\.\/data\/maltaScript'\'';\nimport { NAUFRAGIO_SCENES, EPISODE_META_T4E8, NAUFRAGIO_QUIZ } from '\''\.\/data\/naufragioScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t4e8'\'' ? NAUFRAGIO_SCENES : /const currentScenes = currentEpisodeId === '\''t4e9'\'' ? MALTA_SCENES : currentEpisodeId === '\''t4e8'\'' ? NAUFRAGIO_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t4e8'\'' ? EPISODE_META_T4E8 : /const currentMeta = currentEpisodeId === '\''t4e9'\'' ? EPISODE_META_T4E9 : currentEpisodeId === '\''t4e8'\'' ? EPISODE_META_T4E8 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t4e8'\'' ? NAUFRAGIO_QUIZ : /const currentQuiz = currentEpisodeId === '\''t4e9'\'' ? MALTA_QUIZ : currentEpisodeId === '\''t4e8'\'' ? NAUFRAGIO_QUIZ : /g' src/App.tsx

sed -i 's/ep.id === '\''t4e8'\''/ep.id === '\''t4e8'\'' || ep.id === '\''t4e9'\''/g' src/App.tsx
