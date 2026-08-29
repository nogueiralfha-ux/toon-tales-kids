sed -i 's/export const CreationQuiz: React.FC = () => {/interface CreationQuizProps {\n  quizData: QuizQuestion[];\n}\n\nexport const CreationQuiz: React.FC<CreationQuizProps> = ({ quizData }) => {/g' src/components/CreationQuiz.tsx
sed -i 's/import { CREATION_QUIZ } from '\''\.\.\/data\/creationScript'\'';/import { QuizQuestion } from '\''\.\.\/types'\'';/g' src/components/CreationQuiz.tsx
sed -i 's/CREATION_QUIZ/quizData/g' src/components/CreationQuiz.tsx
