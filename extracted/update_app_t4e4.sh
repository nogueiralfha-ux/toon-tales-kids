sed -i 's/import { ESTEVAO_SCENES, EPISODE_META_T4E3, ESTEVAO_QUIZ } from '\''\.\/data\/estevaoScript'\'';/import { ESTEVAO_SCENES, EPISODE_META_T4E3, ESTEVAO_QUIZ } from '\''\.\/data\/estevaoScript'\'';\nimport { PAULO_SCENES, EPISODE_META_T4E4, PAULO_QUIZ } from '\''\.\/data\/pauloScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t4e3'\'' ? ESTEVAO_SCENES : /const currentScenes = currentEpisodeId === '\''t4e4'\'' ? PAULO_SCENES : currentEpisodeId === '\''t4e3'\'' ? ESTEVAO_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t4e3'\'' ? EPISODE_META_T4E3 : /const currentMeta = currentEpisodeId === '\''t4e4'\'' ? EPISODE_META_T4E4 : currentEpisodeId === '\''t4e3'\'' ? EPISODE_META_T4E3 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t4e3'\'' ? ESTEVAO_QUIZ : /const currentQuiz = currentEpisodeId === '\''t4e4'\'' ? PAULO_QUIZ : currentEpisodeId === '\''t4e3'\'' ? ESTEVAO_QUIZ : /g' src/App.tsx

sed -i 's/ep.id === '\''t4e3'\''/ep.id === '\''t4e3'\'' || ep.id === '\''t4e4'\''/g' src/App.tsx
