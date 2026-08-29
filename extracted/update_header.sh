sed -i 's/interface HeaderProps {/interface HeaderProps {\n  currentMeta: any;\n/g' src/components/Header.tsx
sed -i 's/export const Header: React.FC<HeaderProps> = ({/export const Header: React.FC<HeaderProps> = ({\n  currentMeta,/g' src/components/Header.tsx
sed -i 's/Temporada 1 • <span className="text-orange-600 font-bold">O Começo<\/span>/Temporada 1 • <span className="text-orange-600 font-bold">{currentMeta.title}<\/span>/g' src/components/Header.tsx

sed -i 's/<Header/<Header currentMeta={currentMeta}/g' src/App.tsx
