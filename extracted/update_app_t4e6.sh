sed -i 's/import { PAULO_SILAS_SCENES, EPISODE_META_T4E5, PAULO_SILAS_QUIZ } from '\''\.\/data\/pauloSilasScript'\'';/import { PAULO_SILAS_SCENES, EPISODE_META_T4E5, PAULO_SILAS_QUIZ } from '\''\.\/data\/pauloSilasScript'\'';\nimport { PAULO_ROMA_SCENES, EPISODE_META_T4E6, PAULO_ROMA_QUIZ } from '\''\.\/data\/pauloRomaScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t4e5'\'' ? PAULO_SILAS_SCENES : /const currentScenes = currentEpisodeId === '\''t4e6'\'' ? PAULO_ROMA_SCENES : currentEpisodeId === '\''t4e5'\'' ? PAULO_SILAS_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t4e5'\'' ? EPISODE_META_T4E5 : /const currentMeta = currentEpisodeId === '\''t4e6'\'' ? EPISODE_META_T4E6 : currentEpisodeId === '\''t4e5'\'' ? EPISODE_META_T4E5 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t4e5'\'' ? PAULO_SILAS_QUIZ : /const currentQuiz = currentEpisodeId === '\''t4e6'\'' ? PAULO_ROMA_QUIZ : currentEpisodeId === '\''t4e5'\'' ? PAULO_SILAS_QUIZ : /g' src/App.tsx

sed -i 's/ep.id === '\''t4e5'\''/ep.id === '\''t4e5'\'' || ep.id === '\''t4e6'\''/g' src/App.tsx
