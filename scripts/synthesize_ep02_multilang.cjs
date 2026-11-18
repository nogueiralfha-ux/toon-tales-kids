const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const ffmpegStatic = require('ffmpeg-static');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

const r2Client = new S3Client({
  region: 'auto',
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_KEY,
  },
});

const outDir = path.resolve('render/ep02_multilang');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const linesEN = [
  { id: 'e2_s1_l1', character: 'narrator', text: 'After creating the heavens and the Earth, God prepared a very special place.' },
  { id: 'e2_s1_l2', character: 'narrator', text: 'A garden unlike any other place that had ever existed.' },
  { id: 'e2_s1_l3', character: 'narrator', text: 'Its name was...' },
  { id: 'e2_s1_l4', character: 'narrator', text: 'Eden.' },
  { id: 'e2_s1_l5', character: 'narrator', text: 'There were beautiful trees. Plants of every kind.' },
  { id: 'e2_s1_l6', character: 'narrator', text: 'Rivers of crystal-clear water. And animals living in peace.' },
  { id: 'e2_s1_l7', character: 'narrator', text: 'It was a perfect place.' },
  { id: 'e2_s1_l8', character: 'narrator', text: 'And it was in that place that God placed the first man.' },
  { id: 'e2_s2_l1', character: 'narrator', text: 'God formed the man from the dust of the ground and breathed into his nostrils the breath of life.' },
  { id: 'e2_s2_l2', character: 'narrator', text: 'And the man became a living being.' },
  { id: 'e2_s2_l3', character: 'narrator', text: 'His name was Adam.' },
  { id: 'e2_s2_l4', character: 'narrator', text: 'Adam opened his eyes... and saw a wonderful world before him.' },
  { id: 'e2_s2_l5', character: 'adam', text: 'What an incredible place!' },
  { id: 'e2_s2_l6', character: 'narrator', text: 'He could hear the birds. Feel the gentle wind. Walk among the trees. And watch the animals.' },
  { id: 'e2_s3_l1', character: 'god', text: 'Adam, this garden has been placed under your care.' },
  { id: 'e2_s3_l2', character: 'god', text: 'You may freely eat from the trees in the garden.' },
  { id: 'e2_s3_l3', character: 'god', text: 'But there is one tree from which you must not eat.' },
  { id: 'e2_s3_l4', character: 'god', text: 'It is the tree of the knowledge of good and evil. Do not eat of its fruit.' },
  { id: 'e2_s3_l5', character: 'narrator', text: 'God had given Adam everything he needed. But He also gave him a choice.' },
  { id: 'e2_s3_l6', character: 'narrator', text: 'Adam could trust in God.' },
  { id: 'e2_s4_l1', character: 'narrator', text: 'But God noticed something.' },
  { id: 'e2_s4_l2', character: 'narrator', text: 'It was not good for the man to be alone. So God said:' },
  { id: 'e2_s4_l3', character: 'god', text: 'I will make a helper suitable for him.' },
  { id: 'e2_s4_l4', character: 'narrator', text: 'And God created the woman.' },
  { id: 'e2_s4_l5', character: 'narrator', text: 'When Adam saw her, he was amazed.' },
  { id: 'e2_s4_l6', character: 'adam', text: 'She is part of me!' },
  { id: 'e2_s4_l7', character: 'narrator', text: 'Her name was Eve.' },
  { id: 'e2_s4_l8', character: 'eve', text: 'Hello, Adam.' },
  { id: 'e2_s4_l9', character: 'adam', text: 'Hello, Eve.' },
  { id: 'e2_s4_l10', character: 'narrator', text: 'Now Adam and Eve walked together through the garden. They talked. They met the animals. They cared for creation. And they enjoyed each other’s company.' },
  { id: 'e2_s5_l1', character: 'narrator', text: 'Every day was full of new discoveries.' },
  { id: 'e2_s5_l2', character: 'narrator', text: 'There was no fear. No sadness. No sickness. No death.' },
  { id: 'e2_s5_l3', character: 'narrator', text: 'Adam and Eve lived in perfect harmony with God.' },
  { id: 'e2_s5_l4', character: 'narrator', text: 'But there was one thing they needed to remember.' },
  { id: 'e2_s5_l5', character: 'narrator', text: 'The word of God.' },
  { id: 'e2_s6_l1', character: 'narrator', text: 'Among the animals, there was a serpent.' },
  { id: 'e2_s6_l2', character: 'narrator', text: 'It was crafty and sly.' },
  { id: 'e2_s6_l3', character: 'snake', text: 'Did God really say that?' },
  { id: 'e2_s6_l4', character: 'eve', text: 'God said we may eat fruit from the trees in the garden.' },
  { id: 'e2_s6_l5', character: 'eve', text: 'And that we must not eat fruit from that tree.' },
  { id: 'e2_s6_l6', character: 'snake', text: 'You will not certainly die.' },
  { id: 'e2_s6_l7', character: 'snake', text: 'God knows that when you eat from it, your eyes will be opened. You will be like God, knowing good and evil.' },
  { id: 'e2_s7_l1', character: 'narrator', text: 'Eve looked at the tree.' },
  { id: 'e2_s7_l2', character: 'narrator', text: 'The fruit looked beautiful. It seemed desirable.' },
  { id: 'e2_s7_l3', character: 'narrator', text: 'She knew what God had commanded. But now there was doubt in her heart.' },
  { id: 'e2_s7_l4', character: 'eve', text: 'Could it be...?' },
  { id: 'e2_s7_l5', character: 'narrator', text: 'Eve took the fruit.' },
  { id: 'e2_s7_l6', character: 'narrator', text: 'And ate it.' },
  { id: 'e2_s7_l7', character: 'narrator', text: 'And then she also gave some to Adam.' },
  { id: 'e2_s7_l8', character: 'adam', text: 'Eve...' },
  { id: 'e2_s7_l9', character: 'eve', text: 'Try it.' },
  { id: 'e2_s7_l10', character: 'narrator', text: 'And Adam ate it too.' },
  { id: 'e2_s8_l1', character: 'narrator', text: 'At that very moment...' },
  { id: 'e2_s8_l2', character: 'narrator', text: 'something changed.' },
  { id: 'e2_s8_l3', character: 'narrator', text: 'Adam and Eve realized they were naked. They felt ashamed. They felt afraid.' },
  { id: 'e2_s8_l4', character: 'adam', text: 'We need to hide!' },
  { id: 'e2_s8_l5', character: 'eve', text: 'God is coming!' },
  { id: 'e2_s8_l6', character: 'narrator', text: 'And for the very first time...' },
  { id: 'e2_s8_l7', character: 'narrator', text: 'they were afraid to meet God.' },
  { id: 'e2_s9_l1', character: 'god', text: 'Adam...' },
  { id: 'e2_s9_l2', character: 'god', text: 'Adam, where are you?' },
  { id: 'e2_s9_l3', character: 'narrator', text: 'Adam heard the voice of God.' },
  { id: 'e2_s9_l4', character: 'adam', text: 'I heard You in the garden... and I was afraid. So I hid.' },
  { id: 'e2_s9_l5', character: 'god', text: 'Who told you that you were naked?' },
  { id: 'e2_s9_l6', character: 'god', text: 'Have you eaten from the tree that I commanded you not to eat from?' },
  { id: 'e2_s9_l7', character: 'adam', text: 'It was the woman You put here with me.' },
  { id: 'e2_s9_l8', character: 'narrator', text: 'And Eve answered.' },
  { id: 'e2_s9_l9', character: 'eve', text: 'The serpent deceived me.' },
  { id: 'e2_s10_l1', character: 'narrator', text: 'Adam and Eve’s choice brought consequences.' },
  { id: 'e2_s10_l2', character: 'narrator', text: 'The harmony that once existed was broken. Pain entered human history.' },
  { id: 'e2_s10_l3', character: 'narrator', text: 'Death became part of the world. Adam and Eve could no longer live forever in that garden as before.' },
  { id: 'e2_s10_l4', character: 'narrator', text: 'But there was something else they still needed to know.' },
  { id: 'e2_s11_l1', character: 'narrator', text: 'Even in the face of disobedience... God did not stop caring for them.' },
  { id: 'e2_s11_l2', character: 'narrator', text: 'God made garments of skin for Adam and Eve, and prepared them for a new reality.' },
  { id: 'e2_s11_l3', character: 'narrator', text: 'They would have to leave the Garden of Eden.' },
  { id: 'e2_s11_l4', character: 'narrator', text: 'But God would remain present.' },
  { id: 'e2_s12_l1', character: 'narrator', text: 'Adam and Eve looked back one last time at the garden.' },
  { id: 'e2_s12_l2', character: 'eve', text: 'Adam... do you think one day everything will be different?' },
  { id: 'e2_s12_l3', character: 'adam', text: 'I don’t know.' },
  { id: 'e2_s12_l4', character: 'adam', text: 'But we must trust in God.' },
  { id: 'e2_s12_l5', character: 'narrator', text: 'And so they walked forward.' },
  { id: 'e2_s12_l6', character: 'narrator', text: 'The garden was left behind.' },
  { id: 'e2_s12_l7', character: 'narrator', text: 'But the story of humanity was only just beginning.' },
  { id: 'e2_s13_l1', character: 'narrator', text: 'And what can we learn from Adam and Eve?' },
  { id: 'e2_s13_l2', character: 'narrator', text: 'God created us to live in friendship with Him. He gives us freedom to choose. But our choices have consequences.' },
  { id: 'e2_s13_l3', character: 'narrator', text: 'When we make mistakes, we need to admit them, and remember that God is still our Creator.' },
  { id: 'e2_s13_l4', character: 'narrator', text: 'He calls us to trust in Him.' },
  { id: 'e2_s14_l1', character: 'narrator', text: 'Adam and Eve left the garden... but God did not abandon humanity.' },
  { id: 'e2_s14_l2', character: 'narrator', text: 'The story would continue. New people would be born. New adventures would happen. And many years later... God would reveal His plan of love even more clearly.' },
  { id: 'e2_s14_l3', character: 'narrator', text: 'But that... is a story for another episode.' },
  { id: 'e2_s15_l1', character: 'narrator', text: 'And that was another adventure of the Audio Bible. But the story is not over yet... A brand new adventure is waiting for you.' },
  { id: 'e2_s15_l2', character: 'child', text: 'Toon Tales Kids!' },
  { id: 'e2_s15_l3', character: 'narrator', text: 'Stories that teach...' },
  { id: 'e2_s15_l4', character: 'child', text: '...and adventures that transform!' }
];

const linesES = [
  { id: 'e2_s1_l1', character: 'narrator', text: 'Después de crear los cielos y la Tierra, Dios preparó un lugar muy especial.' },
  { id: 'e2_s1_l2', character: 'narrator', text: 'Un jardín diferente a cualquier otro lugar que jamás haya existido.' },
  { id: 'e2_s1_l3', character: 'narrator', text: 'Su nombre era...' },
  { id: 'e2_s1_l4', character: 'narrator', text: 'Edén.' },
  { id: 'e2_s1_l5', character: 'narrator', text: 'Allí había árboles hermosos. Plantas de todo tipo.' },
  { id: 'e2_s1_l6', character: 'narrator', text: 'Ríos de aguas cristalinas. Y animales viviendo en paz.' },
  { id: 'e2_s1_l7', character: 'narrator', text: 'Era un lugar perfecto.' },
  { id: 'e2_s1_l8', character: 'narrator', text: 'Y fue en aquel lugar donde Dios puso al primer hombre.' },
  { id: 'e2_s2_l1', character: 'narrator', text: 'Dios formó al hombre del polvo de la tierra y sopló en él aliento de vida.' },
  { id: 'e2_s2_l2', character: 'narrator', text: 'Y el hombre comenzó a vivir.' },
  { id: 'e2_s2_l3', character: 'narrator', text: 'Su nombre era Adán.' },
  { id: 'e2_s2_l4', character: 'narrator', text: 'Adán abrió los ojos... y vio un mundo maravilloso delante de él.' },
  { id: 'e2_s2_l5', character: 'adam', text: '¡Qué lugar tan increíble!' },
  { id: 'e2_s2_l6', character: 'narrator', text: 'Podía escuchar a los pájaros. Sentir el viento. Caminar entre los árboles. Y observar a los animales.' },
  { id: 'e2_s3_l1', character: 'god', text: 'Adán, este jardín ha sido puesto bajo tu cuidado.' },
  { id: 'e2_s3_l2', character: 'god', text: 'Podrás comer libremente de todos los árboles del jardín.' },
  { id: 'e2_s3_l3', character: 'god', text: 'Pero hay un árbol del cual no debes comer.' },
  { id: 'e2_s3_l4', character: 'god', text: 'Es el árbol del conocimiento del bien y del mal. No comas de su fruto.' },
  { id: 'e2_s3_l5', character: 'narrator', text: 'Dios le había dado a Adán todo lo que necesitaba. Pero también le dio una elección.' },
  { id: 'e2_s3_l6', character: 'narrator', text: 'Adán podía confiar en Dios.' },
  { id: 'e2_s4_l1', character: 'narrator', text: 'Pero Dios notó algo.' },
  { id: 'e2_s4_l2', character: 'narrator', text: 'No era bueno que el hombre estuviera solo. Entonces Dios dijo:' },
  { id: 'e2_s4_l3', character: 'god', text: 'Le haré una ayuda idónea para él.' },
  { id: 'e2_s4_l4', character: 'narrator', text: 'Y Dios creó a la mujer.' },
  { id: 'e2_s4_l5', character: 'narrator', text: 'Cuando Adán la vio, quedó maravillado.' },
  { id: 'e2_s4_l6', character: 'adam', text: '¡Ella es parte de mí!' },
  { id: 'e2_s4_l7', character: 'narrator', text: 'Su nombre era Eva.' },
  { id: 'e2_s4_l8', character: 'eve', text: 'Hola, Adán.' },
  { id: 'e2_s4_l9', character: 'adam', text: 'Hola, Eva.' },
  { id: 'e2_s4_l10', character: 'narrator', text: 'Ahora Adán y Eva caminaban juntos por el jardín. Conversaban. Conocían a los animales. Cuidaban la creación. Y disfrutaban la compañía del otro.' },
  { id: 'e2_s5_l1', character: 'narrator', text: 'Todos los días estaban llenos de descubrimientos.' },
  { id: 'e2_s5_l2', character: 'narrator', text: 'No había miedo. No había tristeza. No había enfermedad. No había muerte.' },
  { id: 'e2_s5_l3', character: 'narrator', text: 'Adán y Eva vivían en perfecta armonía con Dios.' },
  { id: 'e2_s5_l4', character: 'narrator', text: 'Pero había una cosa que necesitaban recordar.' },
  { id: 'e2_s5_l5', character: 'narrator', text: 'La palabra de Dios.' },
  { id: 'e2_s6_l1', character: 'narrator', text: 'Entre los animales había una serpiente.' },
  { id: 'e2_s6_l2', character: 'narrator', text: 'Era muy astuta.' },
  { id: 'e2_s6_l3', character: 'snake', text: '¿Conque Dios les dijo eso?' },
  { id: 'e2_s6_l4', character: 'eve', text: 'Dios dijo que podemos comer de los frutos de los árboles del jardín.' },
  { id: 'e2_s6_l5', character: 'eve', text: 'Y que no debemos comer del fruto de aquel árbol.' },
  { id: 'e2_s6_l6', character: 'snake', text: 'No morirán.' },
  { id: 'e2_s6_l7', character: 'snake', text: 'Dios sabe que el día que coman de él, serán abiertos sus ojos y serán como Dios, sabiendo el bien y el mal.' },
  { id: 'e2_s7_l1', character: 'narrator', text: 'Eva miró el árbol.' },
  { id: 'e2_s7_l2', character: 'narrator', text: 'El fruto parecía hermoso. Parecía deseable.' },
  { id: 'e2_s7_l3', character: 'narrator', text: 'Ella sabía lo que Dios había ordenado. Pero ahora había una duda en su corazón.' },
  { id: 'e2_s7_l4', character: 'eve', text: '¿Será verdad...?' },
  { id: 'e2_s7_l5', character: 'narrator', text: 'Eva tomó el fruto.' },
  { id: 'e2_s7_l6', character: 'narrator', text: 'Y comió.' },
  { id: 'e2_s7_l7', character: 'narrator', text: 'Y luego le dio también a Adán.' },
  { id: 'e2_s7_l8', character: 'adam', text: 'Eva...' },
  { id: 'e2_s7_l9', character: 'eve', text: 'Pruébalo.' },
  { id: 'e2_s7_l10', character: 'narrator', text: 'Y Adán también comió.' },
  { id: 'e2_s8_l1', character: 'narrator', text: 'En aquel momento...' },
  { id: 'e2_s8_l2', character: 'narrator', text: 'algo cambió.' },
  { id: 'e2_s8_l3', character: 'narrator', text: 'Adán y Eva se dieron cuenta de que estaban desnudos. Sintieron vergüenza. Sintieron miedo.' },
  { id: 'e2_s8_l4', character: 'adam', text: '¡Tenemos que escondernos!' },
  { id: 'e2_s8_l5', character: 'eve', text: '¡Dios viene hacia acá!' },
  { id: 'e2_s8_l6', character: 'narrator', text: 'Y por primera vez...' },
  { id: 'e2_s8_l7', character: 'narrator', text: 'sintieron miedo de encontrarse con Dios.' },
  { id: 'e2_s9_l1', character: 'god', text: 'Adán...' },
  { id: 'e2_s9_l2', character: 'god', text: 'Adán, ¿dónde estás?' },
  { id: 'e2_s9_l3', character: 'narrator', text: 'Adán escuchó la voz de Dios.' },
  { id: 'e2_s9_l4', character: 'adam', text: 'Oí tu voz en el jardín... y tuve miedo. Por eso me escondí.' },
  { id: 'e2_s9_l5', character: 'god', text: '¿Quién te dijo que estabas desnudo?' },
  { id: 'e2_s9_l6', character: 'god', text: '¿Has comido del árbol del que te ordené que no comieras?' },
  { id: 'e2_s9_l7', character: 'adam', text: 'Fue la mujer que Tú me diste por compañera.' },
  { id: 'e2_s9_l8', character: 'narrator', text: 'Y Eva respondió.' },
  { id: 'e2_s9_l9', character: 'eve', text: 'La serpiente me engañó.' },
  { id: 'e2_s10_l1', character: 'narrator', text: 'La elección de Adán y Eva trajo consecuencias.' },
  { id: 'e2_s10_l2', character: 'narrator', text: 'La armonía que existía se rompió. El dolor entró en la historia humana.' },
  { id: 'e2_s10_l3', character: 'narrator', text: 'La muerte pasó a ser parte del mundo. Adán y Eva ya no podrían vivir para siempre en aquel jardín como antes.' },
  { id: 'e2_s10_l4', character: 'narrator', text: 'Pero había algo más que aún necesitaban saber.' },
  { id: 'e2_s11_l1', character: 'narrator', text: 'Incluso ante la desobediencia... Dios no dejó de cuidar de ellos.' },
  { id: 'e2_s11_l2', character: 'narrator', text: 'Dios hizo ropas para Adán y Eva. Y los preparó para enfrentar una nueva realidad.' },
  { id: 'e2_s11_l3', character: 'narrator', text: 'Tendrían que dejar el Jardín del Edén.' },
  { id: 'e2_s11_l4', character: 'narrator', text: 'Pero Dios seguiría presente.' },
  { id: 'e2_s12_l1', character: 'narrator', text: 'Adán y Eva miraron por última vez el jardín.' },
  { id: 'e2_s12_l2', character: 'eve', text: 'Adán... ¿crees que algún día todo volverá a ser diferente?' },
  { id: 'e2_s12_l3', character: 'adam', text: 'No lo sé.' },
  { id: 'e2_s12_l4', character: 'adam', text: 'Pero debemos confiar en Dios.' },
  { id: 'e2_s12_l5', character: 'narrator', text: 'Y entonces siguieron adelante.' },
  { id: 'e2_s12_l6', character: 'narrator', text: 'El jardín quedó atrás.' },
  { id: 'e2_s12_l7', character: 'narrator', text: 'Pero la historia de la humanidad apenas comenzaba.' },
  { id: 'e2_s13_l1', character: 'narrator', text: '¿Y qué podemos aprender de Adán y Eva?' },
  { id: 'e2_s13_l2', character: 'narrator', text: 'Dios nos creó para vivir en amistad con Él. Nos da libertad para elegir. Pero nuestras elecciones tienen consecuencias.' },
  { id: 'e2_s13_l3', character: 'narrator', text: 'Cuando nos equivocamos, debemos reconocer nuestro error. Y recordar que Dios sigue siendo nuestro Creador.' },
  { id: 'e2_s13_l4', character: 'narrator', text: 'Él nos llama a confiar en Él.' },
  { id: 'e2_s14_l1', character: 'narrator', text: 'Adán y Eva dejaron el jardín... pero Dios no abandonó a la humanidad.' },
  { id: 'e2_s14_l2', character: 'narrator', text: 'La historia continuaría. Nacerían nuevas personas. Ocurrirían nuevas aventuras. Y muchos años después... Dios revelaría aún más claramente su plan de amor.' },
  { id: 'e2_s14_l3', character: 'narrator', text: 'Pero esa... es una historia para otro episodio.' },
  { id: 'e2_s15_l1', character: 'narrator', text: 'Y esta fue otra aventura de la Biblia en Audio. Pero la historia aún no termina... Una nueva aventura te está esperando.' },
  { id: 'e2_s15_l2', character: 'child', text: '¡Toon Tales Kids!' },
  { id: 'e2_s15_l3', character: 'narrator', text: 'Historias que enseñan...' },
  { id: 'e2_s15_l4', character: 'child', text: '...¡y aventuras que transforman!' }
];

function getVoiceConfig(lang, character) {
  if (lang === 'en') {
    if (character === 'god') return { voice: 'en-US-ChristopherNeural', pitch: '-12Hz', rate: '-10%' };
    if (character === 'adam') return { voice: 'en-US-BrianNeural', pitch: '+2Hz', rate: '+2%' };
    if (character === 'eve') return { voice: 'en-US-JennyNeural', pitch: '+2Hz', rate: '+0%' };
    if (character === 'snake') return { voice: 'en-US-SteffanNeural', pitch: '-8Hz', rate: '-8%' };
    if (character === 'child') return { voice: 'en-US-AnaNeural', pitch: '+4Hz', rate: '+4%' };
    return { voice: 'en-US-GuyNeural', pitch: '+0Hz', rate: '+0%' };
  } else {
    if (character === 'god') return { voice: 'es-ES-AlvaroNeural', pitch: '-12Hz', rate: '-10%' };
    if (character === 'adam') return { voice: 'es-MX-JorgeNeural', pitch: '+6Hz', rate: '+4%' };
    if (character === 'eve') return { voice: 'es-MX-DaliaNeural', pitch: '+2Hz', rate: '+0%' };
    if (character === 'snake') return { voice: 'es-ES-AlvaroNeural', pitch: '-6Hz', rate: '-10%' };
    if (character === 'child') return { voice: 'es-MX-DaliaNeural', pitch: '+16Hz', rate: '+6%' };
    return { voice: 'es-MX-JorgeNeural', pitch: '+0Hz', rate: '+0%' };
  }
}

async function synthesizeWithRetry(voice, text, outputFile, pitch = '+0Hz', rate = '+0%', retries = 5) {
  if (fs.existsSync(outputFile) && fs.statSync(outputFile).size > 1000) return;
  for (let i = 1; i <= retries; i++) {
    try {
      const tts = new MsEdgeTTS();
      await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
      const { audioStream } = tts.toStream(text, { pitch, rate });
      await new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          reject(new Error('TTS Stream Timeout'));
        }, 12000);
        const ws = fs.createWriteStream(outputFile);
        audioStream.pipe(ws);
        audioStream.on('error', (err) => { clearTimeout(timer); reject(err); });
        ws.on('finish', () => {
          clearTimeout(timer);
          if (fs.existsSync(outputFile) && fs.statSync(outputFile).size > 500) resolve();
          else reject(new Error('Empty audio'));
        });
        ws.on('error', (err) => { clearTimeout(timer); reject(err); });
      });
      return;
    } catch (err) {
      console.log(`Retry ${i}/${retries} for ${path.basename(outputFile)}: ${err.message}`);
      await new Promise(r => setTimeout(r, 1500));
    }
  }
  throw new Error('Failed after retries: ' + outputFile);
}

async function buildLanguageTrack(lang, lines, finalMp3Name) {
  const langDir = path.join(outDir, lang);
  if (!fs.existsSync(langDir)) fs.mkdirSync(langDir, { recursive: true });

  console.log(`\n=== Sintetizando EP02 [${lang.toUpperCase()}] (${lines.length} falas) ===`);
  const silencePath = path.join(langDir, 'silence_035.mp3');
  if (!fs.existsSync(silencePath)) {
    execFileSync(ffmpegStatic, ['-y', '-f', 'lavfi', '-i', 'anullsrc=r=24000:cl=mono', '-t', '0.35', '-q:a', '4', silencePath], { stdio: 'ignore' });
  }

  const concatList = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const cfg = getVoiceConfig(lang, line.character);
    const clipPath = path.join(langDir, `${String(i + 1).padStart(2, '0')}_${line.id}.mp3`);
    await synthesizeWithRetry(cfg.voice, line.text, clipPath, cfg.pitch, cfg.rate);
    concatList.push(`file '${clipPath.replace(/\\/g, '/')}'`);
    concatList.push(`file '${silencePath.replace(/\\/g, '/')}'`);
    if ((i + 1) % 15 === 0 || i === lines.length - 1) {
      console.log(`  [${lang.toUpperCase()}] ${i + 1}/${lines.length} falas prontas.`);
    }
  }

  const listFile = path.join(langDir, 'concat.txt');
  fs.writeFileSync(listFile, concatList.join('\n'), 'utf8');

  const finalPath = path.join(outDir, finalMp3Name);
  execFileSync(ffmpegStatic, ['-y', '-f', 'concat', '-safe', '0', '-i', listFile, '-c:a', 'libmp3lame', '-b:a', '128k', '-ar', '24000', finalPath], { stdio: 'ignore' });
  const sizeMB = (fs.statSync(finalPath).size / (1024 * 1024)).toFixed(2);
  console.log(`✅ Master ${finalMp3Name} gerado (${sizeMB} MB)!`);
  return finalPath;
}

async function uploadToR2(filePath, r2Key) {
  console.log(`☁️ Uploading ${r2Key}...`);
  const buffer = fs.readFileSync(filePath);
  await r2Client.send(new PutObjectCommand({
    Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME || 'toontales-media',
    Key: r2Key,
    Body: buffer,
    ContentType: 'audio/mpeg',
  }));
  console.log(`✅ Upload concluído: https://pub-bf22f5d21d6d4607a123c603ac5632d1.r2.dev/${r2Key}`);
}

async function main() {
  const mp3En = await buildLanguageTrack('en', linesEN, 'episode02-en.mp3');
  const mp3Es = await buildLanguageTrack('es', linesES, 'episode02-es.mp3');

  await uploadToR2(mp3En, 'season1/episode02/episode02-en.mp3');
  await uploadToR2(mp3Es, 'season1/episode02/episode02-es.mp3');
  console.log('\n🎉 EPISÓDIO 2 (EN & ES) 100% PRONTO E ONLINE NO R2!');
}

main().catch(err => {
  console.error('Erro:', err);
  process.exit(1);
});
