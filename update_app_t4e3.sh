sed -i 's/import { PEDRO_SCENES, EPISODE_META_T4E2, PEDRO_QUIZ } from '\''\.\/data\/pedroScript'\'';/import { PEDRO_SCENES, EPISODE_META_T4E2, PEDRO_QUIZ } from '\''\.\/data\/pedroScript'\'';\nimport { ESTEVAO_SCENES, EPISODE_META_T4E3, ESTEVAO_QUIZ } from '\''\.\/data\/estevaoScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t4e2'\'' ? PEDRO_SCENES : /const currentScenes = currentEpisodeId === '\''t4e3'\'' ? ESTEVAO_SCENES : currentEpisodeId === '\''t4e2'\'' ? PEDRO_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t4e2'\'' ? EPISODE_META_T4E2 : /const currentMeta = currentEpisodeId === '\''t4e3'\'' ? EPISODE_META_T4E3 : currentEpisodeId === '\''t4e2'\'' ? EPISODE_META_T4E2 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t4e2'\'' ? PEDRO_QUIZ : /const currentQuiz = currentEpisodeId === '\''t4e3'\'' ? ESTEVAO_QUIZ : currentEpisodeId === '\''t4e2'\'' ? PEDRO_QUIZ : /g' src/App.tsx

sed -i 's/ep.id === '\''t4e2'\''/ep.id === '\''t4e2'\'' || ep.id === '\''t4e3'\''/g' src/App.tsx
