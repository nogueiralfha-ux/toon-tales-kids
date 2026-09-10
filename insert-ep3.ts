import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const script = `
Personagem: NARRADOR
Diálogo: "Olá, pequenos exploradores da fé! Preparem seus corações, porque hoje a aventura vai ser INCRÍVEL! Hoje, nós vamos viajar para... A Arca de Noé! Na Temporada 1! Você vai conhecer Noé, um homem que obedeceu a Deus mesmo quando todos riam dele, e ver uma chuva gigante e muitos animais entrando dois a dois em uma arca enorme! Será que a arca vai aguentar a tempestade? Não perca nem um segundo!"

Personagem: NARRADOR
Diálogo: "Há muito tempo, o mundo estava cheio de maldade. As pessoas brigavam, mentiam e não queriam mais saber de Deus. Mas no meio de tanta escuridão, havia um homem diferente. Seu nome era Noé. Noé era justo, obediente e andava com Deus todos os dias."

Personagem: DEUS
Diálogo: "Noé, o fim de toda carne chegou perante a minha face. A terra está cheia de violência. Farei chover sobre a terra quarenta dias e quarenta noites, e destruirei todo ser vivente. Mas contigo farei a minha aliança."

Personagem: NARRADOR
Diálogo: "Deus deu uma ordem impressionante a Noé: 'Faze uma arca de madeira de cipreste. O comprimento será de trezentos côvados, a largura de cinquenta, e a altura de trinta.' Isso é maior que um campo de futebol!"

Personagem: NARRADOR
Diálogo: "Noé não questionou. Ele obedeceu! Pegou seu martelo, sua serra e começou a trabalhar. Martelada após martelada, tábuas de madeira de cipreste foram se encaixando. Um, dois, três... cento e cinquenta metros de comprimento! Era a maior embarcação que o mundo já havia visto!"

Personagem: NOE
Diálogo: "Deus me pediu, e eu vou fazer. Não importa o que os outros digam. Eu confio no Senhor!"

Personagem: NARRADOR
Diálogo: "E então aconteceu algo extraordinário! De todos os cantos da terra, os animais começaram a chegar. Dois a dois! Leões majestosos, elefantes enormes, girafas de pescoço longo, coelhinhos fofinhos, passarinhos coloridos... Todos marchando em direção à arca! Era como um desfile maravilhoso!"

Personagem: NARRADOR
Diálogo: "Noé abriu a grande porta da arca e os animais entraram. Os leões rugiram, os elefantes trombearam, os passarinhos cantaram. Noé e sua família - sua esposa, seus três filhos e as esposas deles - entraram por último. Deus mesmo fechou a porta!"

Personagem: DEUS
Diálogo: "Entra na arca, tu e toda a tua casa, porque tenho visto que és justo perante mim."

Personagem: NARRADOR
Diálogo: "De repente, o céu escureceu. Nuvens pretas cobriram o sol. Um trovão ecoou! E então... começou a chover. Gotas grossas como moedas caíam do céu. Um dia, dois dias, três dias... A chuva não parava! A água subia, subia, subia! As montanhas desapareceram. Só a arca de Noé flutuava sobre as águas."

Personagem: NARRADOR
Diálogo: "Lá dentro, porém, estava seguro e quentinho. Noé alimentava os leões, dava cenouras aos coelhos, cantava para os passarinhos. Os animais dormiam tranquilos enquanto a tempestade rugia lá fora. Noé orava e agradecia a Deus por protegê-los."

Personagem: NOE
Diálogo: "Obrigado, Senhor, por nos proteger. Tua palavra é fiel!"

Personagem: NARRADOR
Diálogo: "Depois de muitos dias, a chuva parou. Noé soltou uma pomba para ver se a terra havia secado. A pomba voou... e voltou com um raminho de oliveira no bico! A terra estava seca! Noé sorriu. Deus havia cumprido Sua promessa!"

Personagem: NARRADOR
Diálogo: "Noé abriu a porta da arca e os animais saíram correndo, pulando, voando! Todos livres novamente! E então, Deus fez algo lindo no céu. Um arco-íris gigante apareceu, com todas as cores: vermelho, laranja, amarelo, verde, azul, anil e violeta!"

Personagem: DEUS
Diálogo: "Ponho o meu arco nas nuvens como sinal da aliança entre mim e a terra. Nunca mais haverá dilúvio para destruir a terra."

Personagem: NARRADOR
Diálogo: "Uau! Que aventura incrível! Noé obedeceu a Deus e foi protegido da maior tempestade que o mundo já viu! Aprendemos que obedecer a Deus nos protege, mesmo quando tudo parece difícil! E sabe o que vem na próxima aventura? As pessoas vão tentar construir uma torre gigante até o céu! Será que vão conseguir? Será que Deus vai gostar disso? Ah, você NÃO pode perder o próximo episódio: A Torre de Babel! Agora, chame o papai ou a mamãe! Peça para eles clicarem no botão roxo aqui embaixo para baixar o livrinho dessa história e colorir a arca, os animais e o lindo arco-íris! É só imprimir e se divertir! Até a próxima aventura, pequenos heróis! Fiquem com Deus! Tchau tchau!"
`;

async function insertScenes() {
  const episodeId = 'dde98c99-ccd9-495f-addd-695308ce0841';

  // Limpar cenas antigas do Ep 3
  await supabase.from('scenes').delete().eq('episode_id', episodeId);

  const blocks = script.trim().split('\n\n');
  let sceneNumber = 1;

  for (const block of blocks) {
    const lines = block.split('\n');
    const charLine = lines.find(l => l.startsWith('Personagem:'));
    const dialLine = lines.find(l => l.startsWith('Diálogo:'));

    if (charLine && dialLine) {
      let character = charLine.replace('Personagem:', '').trim().toUpperCase();
      let dialogue = dialLine.replace('Diálogo:', '').trim();
      // Remover aspas no inicio e fim
      if (dialogue.startsWith('"')) dialogue = dialogue.substring(1);
      if (dialogue.endsWith('"')) dialogue = dialogue.substring(0, dialogue.length - 1);

      // NOÉ está com acento, o banco de dados tem NOE sem acento, mapear para NOE para ser safe com TTS
      if (character === 'NOÉ') character = 'NOE';

      await supabase.from('scenes').insert({
        episode_id: episodeId,
        scene_number: sceneNumber++,
        character_name: character,
        dialogue: dialogue,
        duration_seconds: Math.ceil(dialogue.split(' ').length * 0.4) // Estimativa leve
      });
      console.log(`✅ Cena ${sceneNumber-1} (${character}) inserida!`);
    }
  }

  console.log('✅ TODAS AS CENAS DO EPISÓDIO 3 FORAM INSERIDAS NO BANCO!');
}

insertScenes().catch(console.error);
