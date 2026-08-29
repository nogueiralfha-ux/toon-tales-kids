sed -i 's/import { MALTA_SCENES, EPISODE_META_T4E9, MALTA_QUIZ } from '\''\.\/data\/maltaScript'\'';/import { ROMA_SCENES, EPISODE_META_T4E10, ROMA_QUIZ } from '\''\.\/data\/romaScript'\'';\nimport { MALTA_SCENES, EPISODE_META_T4E9, MALTA_QUIZ } from '\''\.\/data\/maltaScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t4e9'\'' ? MALTA_SCENES : /const currentScenes = currentEpisodeId === '\''t4e10'\'' ? ROMA_SCENES : currentEpisodeId === '\''t4e9'\'' ? MALTA_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t4e9'\'' ? EPISODE_META_T4E9 : /const currentMeta = currentEpisodeId === '\''t4e10'\'' ? EPISODE_META_T4E10 : currentEpisodeId === '\''t4e9'\'' ? EPISODE_META_T4E9 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t4e9'\'' ? MALTA_QUIZ : /const currentQuiz = currentEpisodeId === '\''t4e10'\'' ? ROMA_QUIZ : currentEpisodeId === '\''t4e9'\'' ? MALTA_QUIZ : /g' src/App.tsx

sed -i 's/ep.id === '\''t4e9'\''/ep.id === '\''t4e9'\'' || ep.id === '\''t4e10'\''/g' src/App.tsx
