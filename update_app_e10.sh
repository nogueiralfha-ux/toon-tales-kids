sed -i 's/import { JOSUE_SCENES, EPISODE_META_T2E4, JOSUE_QUIZ } from '\''\.\/data\/josueScript'\'';/import { JOSUE_SCENES, EPISODE_META_T2E4, JOSUE_QUIZ } from '\''\.\/data\/josueScript'\'';\nimport { DAVI_GOLIAS_SCENES, EPISODE_META_T2E5, DAVI_GOLIAS_QUIZ } from '\''\.\/data\/daviGoliasScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t2e4'\'' ? JOSUE_SCENES : /const currentScenes = currentEpisodeId === '\''t2e5'\'' ? DAVI_GOLIAS_SCENES : currentEpisodeId === '\''t2e4'\'' ? JOSUE_SCENES : /g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t2e4'\'' ? EPISODE_META_T2E4 : /const currentMeta = currentEpisodeId === '\''t2e5'\'' ? EPISODE_META_T2E5 : currentEpisodeId === '\''t2e4'\'' ? EPISODE_META_T2E4 : /g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t2e4'\'' ? JOSUE_QUIZ : /const currentQuiz = currentEpisodeId === '\''t2e5'\'' ? DAVI_GOLIAS_QUIZ : currentEpisodeId === '\''t2e4'\'' ? JOSUE_QUIZ : /g' src/App.tsx

sed -i 's/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'' || ep.id === '\''t1e4'\'' || ep.id === '\''t1e5'\'' || ep.id === '\''t2e1'\'' || ep.id === '\''t2e2'\'' || ep.id === '\''t2e3'\'' || ep.id === '\''t2e4'\'') {/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'' || ep.id === '\''t1e4'\'' || ep.id === '\''t1e5'\'' || ep.id === '\''t2e1'\'' || ep.id === '\''t2e2'\'' || ep.id === '\''t2e3'\'' || ep.id === '\''t2e4'\'' || ep.id === '\''t2e5'\'') {/g' src/App.tsx
