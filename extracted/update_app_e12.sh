sed -i 's/import { JESUS_NASCIMENTO_SCENES, EPISODE_META_T3E1, JESUS_NASCIMENTO_QUIZ } from '\''\.\/data\/jesusNascimentoScript'\'';/import { JESUS_NASCIMENTO_SCENES, EPISODE_META_T3E1, JESUS_NASCIMENTO_QUIZ } from '\''\.\/data\/jesusNascimentoScript'\'';\nimport { JESUS_TEMPLO_SCENES, EPISODE_META_T3E2, JESUS_TEMPLO_QUIZ } from '\''\.\/data\/jesusTemploScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t3e1'\'' ? JESUS_NASCIMENTO_SCENES : /const currentScenes = currentEpisodeId === '\''t3e2'\'' ? JESUS_TEMPLO_SCENES : currentEpisodeId === '\''t3e1'\'' ? JESUS_NASCIMENTO_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t3e1'\'' ? EPISODE_META_T3E1 : /const currentMeta = currentEpisodeId === '\''t3e2'\'' ? EPISODE_META_T3E2 : currentEpisodeId === '\''t3e1'\'' ? EPISODE_META_T3E1 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t3e1'\'' ? JESUS_NASCIMENTO_QUIZ : /const currentQuiz = currentEpisodeId === '\''t3e2'\'' ? JESUS_TEMPLO_QUIZ : currentEpisodeId === '\''t3e1'\'' ? JESUS_NASCIMENTO_QUIZ : /g' src/App.tsx

sed -i 's/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'' || ep.id === '\''t1e4'\'' || ep.id === '\''t1e5'\'' || ep.id === '\''t2e1'\'' || ep.id === '\''t2e2'\'' || ep.id === '\''t2e3'\'' || ep.id === '\''t2e4'\'' || ep.id === '\''t2e5'\'' || ep.id === '\''t3e1'\'') {/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'' || ep.id === '\''t1e4'\'' || ep.id === '\''t1e5'\'' || ep.id === '\''t2e1'\'' || ep.id === '\''t2e2'\'' || ep.id === '\''t2e3'\'' || ep.id === '\''t2e4'\'' || ep.id === '\''t2e5'\'' || ep.id === '\''t3e1'\'' || ep.id === '\''t3e2'\'') {/g' src/App.tsx
