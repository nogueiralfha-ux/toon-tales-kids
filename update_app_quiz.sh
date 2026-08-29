sed -i 's/import { CREATION_SCENES, EPISODE_META } from '\''\.\/data\/creationScript'\'';/import { CREATION_SCENES, EPISODE_META, CREATION_QUIZ } from '\''\.\/data\/creationScript'\'';/g' src/App.tsx
sed -i 's/import { ADAO_EVA_SCENES, EPISODE_META_2 } from '\''\.\/data\/adaoEvaScript'\'';/import { ADAO_EVA_SCENES, EPISODE_META_2, ADAO_EVA_QUIZ } from '\''\.\/data\/adaoEvaScript'\'';/g' src/App.tsx
sed -i 's/const currentMeta = currentEpisodeId === '\''t1e2'\'' ? EPISODE_META_2 : EPISODE_META;/const currentMeta = currentEpisodeId === '\''t1e2'\'' ? EPISODE_META_2 : EPISODE_META;\n  const currentQuiz = currentEpisodeId === '\''t1e2'\'' ? ADAO_EVA_QUIZ : CREATION_QUIZ;/g' src/App.tsx
sed -i 's/<CreationQuiz \/>/<CreationQuiz quizData={currentQuiz} \/>/g' src/App.tsx
