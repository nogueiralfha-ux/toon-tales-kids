sed -i 's/import { MAR_VERMELHO_SCENES, EPISODE_META_T2E3, MAR_VERMELHO_QUIZ } from '\''\.\/data\/marVermelhoScript'\'';/import { MAR_VERMELHO_SCENES, EPISODE_META_T2E3, MAR_VERMELHO_QUIZ } from '\''\.\/data\/marVermelhoScript'\'';\nimport { JOSUE_SCENES, EPISODE_META_T2E4, JOSUE_QUIZ } from '\''\.\/data\/josueScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t2e3'\'' ? MAR_VERMELHO_SCENES : /const currentScenes = currentEpisodeId === '\''t2e4'\'' ? JOSUE_SCENES : currentEpisodeId === '\''t2e3'\'' ? MAR_VERMELHO_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t2e3'\'' ? EPISODE_META_T2E3 : /const currentMeta = currentEpisodeId === '\''t2e4'\'' ? EPISODE_META_T2E4 : currentEpisodeId === '\''t2e3'\'' ? EPISODE_META_T2E3 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t2e3'\'' ? MAR_VERMELHO_QUIZ : /const currentQuiz = currentEpisodeId === '\''t2e4'\'' ? JOSUE_QUIZ : currentEpisodeId === '\''t2e3'\'' ? MAR_VERMELHO_QUIZ : /g' src/App.tsx

sed -i 's/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'' || ep.id === '\''t1e4'\'' || ep.id === '\''t1e5'\'' || ep.id === '\''t2e1'\'' || ep.id === '\''t2e2'\'' || ep.id === '\''t2e3'\'') {/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'' || ep.id === '\''t1e4'\'' || ep.id === '\''t1e5'\'' || ep.id === '\''t2e1'\'' || ep.id === '\''t2e2'\'' || ep.id === '\''t2e3'\'' || ep.id === '\''t2e4'\'') {/g' src/App.tsx
