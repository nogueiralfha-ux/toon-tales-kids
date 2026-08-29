sed -i 's/import { JESUS_TEMPLO_SCENES, EPISODE_META_T3E2, JESUS_TEMPLO_QUIZ } from '\''\.\/data\/jesusTemploScript'\'';/import { JESUS_TEMPLO_SCENES, EPISODE_META_T3E2, JESUS_TEMPLO_QUIZ } from '\''\.\/data\/jesusTemploScript'\'';\nimport { JESUS_BATISMO_SCENES, EPISODE_META_T3E3, JESUS_BATISMO_QUIZ } from '\''\.\/data\/jesusBatismoScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t3e2'\'' ? JESUS_TEMPLO_SCENES : /const currentScenes = currentEpisodeId === '\''t3e3'\'' ? JESUS_BATISMO_SCENES : currentEpisodeId === '\''t3e2'\'' ? JESUS_TEMPLO_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t3e2'\'' ? EPISODE_META_T3E2 : /const currentMeta = currentEpisodeId === '\''t3e3'\'' ? EPISODE_META_T3E3 : currentEpisodeId === '\''t3e2'\'' ? EPISODE_META_T3E2 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t3e2'\'' ? JESUS_TEMPLO_QUIZ : /const currentQuiz = currentEpisodeId === '\''t3e3'\'' ? JESUS_BATISMO_QUIZ : currentEpisodeId === '\''t3e2'\'' ? JESUS_TEMPLO_QUIZ : /g' src/App.tsx

sed -i 's/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'' || ep.id === '\''t1e4'\'' || ep.id === '\''t1e5'\'' || ep.id === '\''t2e1'\'' || ep.id === '\''t2e2'\'' || ep.id === '\''t2e3'\'' || ep.id === '\''t2e4'\'' || ep.id === '\''t2e5'\'' || ep.id === '\''t3e1'\'' || ep.id === '\''t3e2'\'') {/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'' || ep.id === '\''t1e4'\'' || ep.id === '\''t1e5'\'' || ep.id === '\''t2e1'\'' || ep.id === '\''t2e2'\'' || ep.id === '\''t2e3'\'' || ep.id === '\''t2e4'\'' || ep.id === '\''t2e5'\'' || ep.id === '\''t3e1'\'' || ep.id === '\''t3e2'\'' || ep.id === '\''t3e3'\'') {/g' src/App.tsx
