sed -i 's/import { JOSE_SCENES, EPISODE_META_T2E1, JOSE_QUIZ } from '\''\.\/data\/joseScript'\'';/import { JOSE_SCENES, EPISODE_META_T2E1, JOSE_QUIZ } from '\''\.\/data\/joseScript'\'';\nimport { MOISES_SCENES, EPISODE_META_T2E2, MOISES_QUIZ } from '\''\.\/data\/moisesScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t2e1'\'' ? JOSE_SCENES : /const currentScenes = currentEpisodeId === '\''t2e2'\'' ? MOISES_SCENES : currentEpisodeId === '\''t2e1'\'' ? JOSE_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t2e1'\'' ? EPISODE_META_T2E1 : /const currentMeta = currentEpisodeId === '\''t2e2'\'' ? EPISODE_META_T2E2 : currentEpisodeId === '\''t2e1'\'' ? EPISODE_META_T2E1 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t2e1'\'' ? JOSE_QUIZ : /const currentQuiz = currentEpisodeId === '\''t2e2'\'' ? MOISES_QUIZ : currentEpisodeId === '\''t2e1'\'' ? JOSE_QUIZ : /g' src/App.tsx

sed -i 's/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'' || ep.id === '\''t1e4'\'' || ep.id === '\''t1e5'\'' || ep.id === '\''t2e1'\'') {/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'' || ep.id === '\''t1e4'\'' || ep.id === '\''t1e5'\'' || ep.id === '\''t2e1'\'' || ep.id === '\''t2e2'\'') {/g' src/App.tsx
