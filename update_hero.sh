sed -i 's/PT-BR • Gênesis 1 & 2/{currentMeta.biblicalText}/g' src/App.tsx
sed -i 's/A CRIAÇÃO — <span className="text-orange-500">Quando Deus Fez o Mundo<\/span>/{currentMeta.title} — <span className="text-orange-500">{currentMeta.subtitle}<\/span>/g' src/App.tsx
sed -i 's/{EPISODE_META.moralLesson}/{currentMeta.moralLesson}/g' src/App.tsx
