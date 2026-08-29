sed -i 's/import { PAULO_ROMA_SCENES, EPISODE_META_T4E6, PAULO_ROMA_QUIZ } from '\''\.\/data\/pauloRomaScript'\'';/import { PAULO_ROMA_SCENES, EPISODE_META_T4E6, PAULO_ROMA_QUIZ } from '\''\.\/data\/pauloRomaScript'\'';\nimport { NAUFRAGIO_SCENES, EPISODE_META_T4E7, NAUFRAGIO_QUIZ } from '\''\.\/data\/naufragioScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t4e6'\'' ? PAULO_ROMA_SCENES : /const currentScenes = currentEpisodeId === '\''t4e7'\'' ? NAUFRAGIO_SCENES : currentEpisodeId === '\''t4e6'\'' ? PAULO_ROMA_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t4e6'\'' ? EPISODE_META_T4E6 : /const currentMeta = currentEpisodeId === '\''t4e7'\'' ? EPISODE_META_T4E7 : currentEpisodeId === '\''t4e6'\'' ? EPISODE_META_T4E6 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t4e6'\'' ? PAULO_ROMA_QUIZ : /const currentQuiz = currentEpisodeId === '\''t4e7'\'' ? NAUFRAGIO_QUIZ : currentEpisodeId === '\''t4e6'\'' ? PAULO_ROMA_QUIZ : /g' src/App.tsx

sed -i 's/ep.id === '\''t4e6'\''/ep.id === '\''t4e6'\'' || ep.id === '\''t4e7'\''/g' src/App.tsx
