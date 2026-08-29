sed -i 's/import { MOISES_SCENES, EPISODE_META_T2E2, MOISES_QUIZ } from '\''\.\/data\/moisesScript'\'';/import { MOISES_SCENES, EPISODE_META_T2E2, MOISES_QUIZ } from '\''\.\/data\/moisesScript'\'';\nimport { MAR_VERMELHO_SCENES, EPISODE_META_T2E3, MAR_VERMELHO_QUIZ } from '\''\.\/data\/marVermelhoScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t2e2'\'' ? MOISES_SCENES : /const currentScenes = currentEpisodeId === '\''t2e3'\'' ? MAR_VERMELHO_SCENES : currentEpisodeId === '\''t2e2'\'' ? MOISES_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t2e2'\'' ? EPISODE_META_T2E2 : /const currentMeta = currentEpisodeId === '\''t2e3'\'' ? EPISODE_META_T2E3 : currentEpisodeId === '\''t2e2'\'' ? EPISODE_META_T2E2 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t2e2'\'' ? MOISES_QUIZ : /const currentQuiz = currentEpisodeId === '\''t2e3'\'' ? MAR_VERMELHO_QUIZ : currentEpisodeId === '\''t2e2'\'' ? MOISES_QUIZ : /g' src/App.tsx

sed -i 's/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'' || ep.id === '\''t1e4'\'' || ep.id === '\''t1e5'\'' || ep.id === '\''t2e1'\'' || ep.id === '\''t2e2'\'') {/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'' || ep.id === '\''t1e4'\'' || ep.id === '\''t1e5'\'' || ep.id === '\''t2e1'\'' || ep.id === '\''t2e2'\'' || ep.id === '\''t2e3'\'') {/g' src/App.tsx
