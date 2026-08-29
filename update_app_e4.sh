sed -i 's/import { NOE_SCENES, EPISODE_META_3, NOE_QUIZ } from '\''\.\/data\/noeScript'\'';/import { NOE_SCENES, EPISODE_META_3, NOE_QUIZ } from '\''\.\/data\/noeScript'\'';\nimport { BABEL_SCENES, EPISODE_META_4, BABEL_QUIZ } from '\''\.\/data\/babelScript'\'';/g' src/App.tsx

sed -i 's/const currentScenes = currentEpisodeId === '\''t1e3'\'' ? NOE_SCENES : currentEpisodeId === '\''t1e2'\'' ? ADAO_EVA_SCENES : CREATION_SCENES;/const currentScenes = currentEpisodeId === '\''t1e4'\'' ? BABEL_SCENES : currentEpisodeId === '\''t1e3'\'' ? NOE_SCENES : currentEpisodeId === '\''t1e2'\'' ? ADAO_EVA_SCENES : CREATION_SCENES;/g' src/App.tsx

sed -i 's/const currentMeta = currentEpisodeId === '\''t1e3'\'' ? EPISODE_META_3 : currentEpisodeId === '\''t1e2'\'' ? EPISODE_META_2 : EPISODE_META;/const currentMeta = currentEpisodeId === '\''t1e4'\'' ? EPISODE_META_4 : currentEpisodeId === '\''t1e3'\'' ? EPISODE_META_3 : currentEpisodeId === '\''t1e2'\'' ? EPISODE_META_2 : EPISODE_META;/g' src/App.tsx

sed -i 's/const currentQuiz = currentEpisodeId === '\''t1e3'\'' ? NOE_QUIZ : currentEpisodeId === '\''t1e2'\'' ? ADAO_EVA_QUIZ : CREATION_QUIZ;/const currentQuiz = currentEpisodeId === '\''t1e4'\'' ? BABEL_QUIZ : currentEpisodeId === '\''t1e3'\'' ? NOE_QUIZ : currentEpisodeId === '\''t1e2'\'' ? ADAO_EVA_QUIZ : CREATION_QUIZ;/g' src/App.tsx

sed -i 's/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'') {/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'' || ep.id === '\''t1e3'\'' || ep.id === '\''t1e4'\'') {/g' src/App.tsx
