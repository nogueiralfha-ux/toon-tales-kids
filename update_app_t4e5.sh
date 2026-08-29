sed -i 's/import { PAULO_SCENES, EPISODE_META_T4E4, PAULO_QUIZ } from '\''\.\/data\/pauloScript'\'';/import { PAULO_SCENES, EPISODE_META_T4E4, PAULO_QUIZ } from '\''\.\/data\/pauloScript'\'';\nimport { PAULO_SILAS_SCENES, EPISODE_META_T4E5, PAULO_SILAS_QUIZ } from '\''\.\/data\/pauloSilasScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t4e4'\'' ? PAULO_SCENES : /const currentScenes = currentEpisodeId === '\''t4e5'\'' ? PAULO_SILAS_SCENES : currentEpisodeId === '\''t4e4'\'' ? PAULO_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t4e4'\'' ? EPISODE_META_T4E4 : /const currentMeta = currentEpisodeId === '\''t4e5'\'' ? EPISODE_META_T4E5 : currentEpisodeId === '\''t4e4'\'' ? EPISODE_META_T4E4 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t4e4'\'' ? PAULO_QUIZ : /const currentQuiz = currentEpisodeId === '\''t4e5'\'' ? PAULO_SILAS_QUIZ : currentEpisodeId === '\''t4e4'\'' ? PAULO_QUIZ : /g' src/App.tsx

sed -i 's/ep.id === '\''t4e4'\''/ep.id === '\''t4e4'\'' || ep.id === '\''t4e5'\''/g' src/App.tsx
