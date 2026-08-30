import React from 'react';

interface BiblicalSceneDrawingProps {
  pageNumber?: number;
  characterKey?: string;
  colored?: boolean;
  className?: string;
}

export const BiblicalSceneDrawing: React.FC<BiblicalSceneDrawingProps> = ({
  pageNumber = 1,
  characterKey,
  colored = false,
  className = '',
}) => {
  // Determine character/scene by characterKey or pageNumber
  let sceneKey = 'creation';

  if (characterKey) {
    sceneKey = characterKey;
  } else {
    const idx = ((pageNumber - 1) % 30) + 1;
    if ([1, 2, 5, 6, 7].includes(idx)) sceneKey = 'creation';
    else if ([3, 4].includes(idx)) sceneKey = 'noah';
    else if ([8, 9, 10, 11].includes(idx)) sceneKey = 'moses';
    else if ([12, 13, 14].includes(idx)) sceneKey = 'samson';
    else if ([15, 16, 17, 18, 19, 20].includes(idx)) sceneKey = 'david';
    else if ([21].includes(idx)) sceneKey = 'esther';
    else if ([22, 23].includes(idx)) sceneKey = 'daniel';
    else if ([24].includes(idx)) sceneKey = 'jonah';
    else if ([25, 26].includes(idx)) sceneKey = 'nativity';
    else sceneKey = 'shepherd';
  }

  const modeSuffix = colored ? '_color.jpg' : '_bw.jpg';
  const imageSrc = /activities/;

  return (
    <div className={elative flex items-center justify-center w-full h-full p-2 select-none }>
      <img
        src={imageSrc}
        alt={Cena Bíblica Oficial - }
        className=" max-h-[300px] w-auto object-contain mx-auto rounded-xl shadow-xs transition-all duration-300 print:shadow-none print:max-h-[420px]\
 onError={(e) => {
 // Fallback to characters directory if activity image fails
 const target = e.currentTarget;
 if (!target.src.includes('/characters/')) {
 target.src = /characters/.jpg;
 }
 }}
 />
 </div>
 );
};
