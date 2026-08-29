sed -i 's/import { CREATION_SCENES, EPISODE_META } from '\''\.\/data\/creationScript'\'';/import { CREATION_SCENES, EPISODE_META } from '\''\.\/data\/creationScript'\'';\nimport { ADAO_EVA_SCENES, EPISODE_META_2 } from '\''\.\/data\/adaoEvaScript'\'';/g' src/App.tsx

sed -i 's/const \[activeTab, setActiveTab\] = useState<\'\''catalog'\'' | '\''player'\'' | '\''script'\'' | '\''soundboard'\'' | '\''quiz'\''>(/\n  const [currentEpisodeId, setCurrentEpisodeId] = useState<string>('\''t1e1'\'');\n  const currentScenes = currentEpisodeId === '\''t1e2'\'' ? ADAO_EVA_SCENES : CREATION_SCENES;\n  const currentMeta = currentEpisodeId === '\''t1e2'\'' ? EPISODE_META_2 : EPISODE_META;\n\n  const [activeTab, setActiveTab] = useState<'\''catalog'\'' | '\''player'\'' | '\''script'\'' | '\''soundboard'\'' | '\''quiz'\''>(/g' src/App.tsx

sed -i 's/const currentScene = CREATION_SCENES\[currentSceneIndex\] || CREATION_SCENES\[0\];/const currentScene = currentScenes[currentSceneIndex] || currentScenes[0];/g' src/App.tsx

sed -i 's/audioEngine.startEpisode(CREATION_SCENES, sceneIdx, lineIdx, {/audioEngine.startEpisode(currentScenes, sceneIdx, lineIdx, {/g' src/App.tsx

sed -i 's/const scene = CREATION_SCENES.find((s) => s.id === sceneId);/const scene = currentScenes.find((s) => s.id === sceneId);/g' src/App.tsx

sed -i 's/const idx = CREATION_SCENES.findIndex((s) => s.id === sceneId);/const idx = currentScenes.findIndex((s) => s.id === sceneId);/g' src/App.tsx

sed -i 's/if (currentSceneIndex < CREATION_SCENES.length - 1) {/if (currentSceneIndex < currentScenes.length - 1) {/g' src/App.tsx

sed -i 's/allScenes={CREATION_SCENES}/allScenes={currentScenes}/g' src/App.tsx

sed -i 's/{CREATION_SCENES.map((scene, idx) => {/{currentScenes.map((scene, idx) => {/g' src/App.tsx

sed -i 's/scenes={CREATION_SCENES}/scenes={currentScenes}/g' src/App.tsx

# In handleSelectEpisode:
sed -i 's/if (ep.id === '\''t1e1'\'') {/if (ep.id === '\''t1e1'\'' || ep.id === '\''t1e2'\'') {\n      setCurrentEpisodeId(ep.id);\n      setCurrentSceneIndex(0);\n      audioEngine.initContext();\n      audioEngine.stopEpisode();\n      setIsPlaying(false);\n/g' src/App.tsx

