sed -i 's/import { PENTECOSTES_SCENES, EPISODE_META_T4E1, PENTECOSTES_QUIZ } from '\''\.\/data\/pentecostesScript'\'';/import { PENTECOSTES_SCENES, EPISODE_META_T4E1, PENTECOSTES_QUIZ } from '\''\.\/data\/pentecostesScript'\'';\nimport { PEDRO_SCENES, EPISODE_META_T4E2, PEDRO_QUIZ } from '\''\.\/data\/pedroScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t4e1'\'' ? PENTECOSTES_SCENES : /const currentScenes = currentEpisodeId === '\''t4e2'\'' ? PEDRO_SCENES : currentEpisodeId === '\''t4e1'\'' ? PENTECOSTES_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t4e1'\'' ? EPISODE_META_T4E1 : /const currentMeta = currentEpisodeId === '\''t4e2'\'' ? EPISODE_META_T4E2 : currentEpisodeId === '\''t4e1'\'' ? EPISODE_META_T4E1 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t4e1'\'' ? PENTECOSTES_QUIZ : /const currentQuiz = currentEpisodeId === '\''t4e2'\'' ? PEDRO_QUIZ : currentEpisodeId === '\''t4e1'\'' ? PENTECOSTES_QUIZ : /g' src/App.tsx

sed -i 's/ep.id === '\''t4e1'\''/ep.id === '\''t4e1'\'' || ep.id === '\''t4e2'\''/g' src/App.tsx
