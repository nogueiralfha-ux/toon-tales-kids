sed -i 's/import { A_RESSURREICAO_SCENES, EPISODE_META_T3E9, A_RESSURREICAO_QUIZ } from '\''\.\/data\/aRessurreicaoScript'\'';/import { A_RESSURREICAO_SCENES, EPISODE_META_T3E9, A_RESSURREICAO_QUIZ } from '\''\.\/data\/aRessurreicaoScript'\'';\nimport { PENTECOSTES_SCENES, EPISODE_META_T4E1, PENTECOSTES_QUIZ } from '\''\.\/data\/pentecostesScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t3e9'\'' ? A_RESSURREICAO_SCENES : /const currentScenes = currentEpisodeId === '\''t4e1'\'' ? PENTECOSTES_SCENES : currentEpisodeId === '\''t3e9'\'' ? A_RESSURREICAO_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t3e9'\'' ? EPISODE_META_T3E9 : /const currentMeta = currentEpisodeId === '\''t4e1'\'' ? EPISODE_META_T4E1 : currentEpisodeId === '\''t3e9'\'' ? EPISODE_META_T3E9 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t3e9'\'' ? A_RESSURREICAO_QUIZ : /const currentQuiz = currentEpisodeId === '\''t4e1'\'' ? PENTECOSTES_QUIZ : currentEpisodeId === '\''t3e9'\'' ? A_RESSURREICAO_QUIZ : /g' src/App.tsx

sed -i 's/ep.id === '\''t3e9'\''/ep.id === '\''t3e9'\'' || ep.id === '\''t4e1'\''/g' src/App.tsx
