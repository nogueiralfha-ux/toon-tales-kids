sed -i 's/import { DAVI_GOLIAS_SCENES, EPISODE_META_T2E5, DAVI_GOLIAS_QUIZ } from '\''\.\/data\/daviGoliasScript'\'';/import { DAVI_GOLIAS_SCENES, EPISODE_META_T2E5, DAVI_GOLIAS_QUIZ } from '\''\.\/data\/daviGoliasScript'\'';\nimport { JESUS_NASCIMENTO_SCENES, EPISODE_META_T3E1, JESUS_NASCIMENTO_QUIZ } from '\''\.\/data\/jesusNascimentoScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t2e5'\'' ? DAVI_GOLIAS_SCENES : /const currentScenes = currentEpisodeId === '\''t3e1'\'' ? JESUS_NASCIMENTO_SCENES : currentEpisodeId === '\''t2e5'\'' ? DAVI_GOLIAS_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t2e5'\'' ? EPISODE_META_T2E5 : /const currentMeta = currentEpisodeId === '\''t3e1'\'' ? EPISODE_META_T3E1 : currentEpisodeId === '\''t2e5'\'' ? EPISODE_META_T2E5 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t2e5'\'' ? DAVI_GOLIAS_QUIZ : /const currentQuiz = currentEpisodeId === '\''t3e1'\'' ? JESUS_NASCIMENTO_QUIZ : currentEpisodeId === '\''t2e5'\'' ? DAVI_GOLIAS_QUIZ : /g' src/App.tsx

sed -i 's/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'' || ep.id === '\''t1e4'\'' || ep.id === '\''t1e5'\'' || ep.id === '\''t2e1'\'' || ep.id === '\''t2e2'\'' || ep.id === '\''t2e3'\'' || ep.id === '\''t2e4'\'' || ep.id === '\''t2e5'\'') {/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'' || ep.id === '\''t1e4'\'' || ep.id === '\''t1e5'\'' || ep.id === '\''t2e1'\'' || ep.id === '\''t2e2'\'' || ep.id === '\''t2e3'\'' || ep.id === '\''t2e4'\'' || ep.id === '\''t2e5'\'' || ep.id === '\''t3e1'\'') {/g' src/App.tsx
