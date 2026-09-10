import React, { useState } from 'react';
import { 
  Star, 
  ShieldCheck, 
  MessageCircleQuestion, 
  ChevronDown, 
  Heart,
  Sparkles,
  CheckCircle2,
  Play
} from 'lucide-react';

// ============================================
// SEÇÃO DE DEPOIMENTOS
// ============================================
const testimonials = [
  {
    name: 'Ana Carolina M.',
    role: 'Mãe do Pedro (5 anos) • São Paulo, SP',
    rating: 5,
    text: 'Meu filho não largava o YouTube Kids, mesmo com conteúdo duvidoso. Quando coloquei o Toon Tales, ele pediu "mais Davi!" no dia seguinte. Pela primeira vez, tela virou aprendizado de verdade.',
    highlight: 'Tela virou aprendizado',
    avatar: 'AC',
    color: 'from-pink-400 to-rose-500',
  },
  {
    name: 'Pr. Ricardo Almeida',
    role: 'Pai de 3 filhos • Escola Bíblica Dominical',
    rating: 5,
    text: 'Uso os áudios na minha classe de crianças de 4 a 7 anos. A qualidade do áudio 3D é impressionante - as crianças ficam em silêncio absoluto ouvindo. Os pais começaram a perguntar o que eu estava usando!',
    highlight: 'Silêncio absoluto na classe',
    avatar: 'RA',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Juliana e Marcos',
    role: 'Pais da Sofia (6) e Lucas (4) • Brasília, DF',
    rating: 5,
    text: 'Assinamos o plano familiar e em 2 semanas já tínhamos impresso 8 livrinhos para colorir. A Sofia diz que é "a princesa da história". Vale cada centavo, principalmente pela paz que temos na hora do lanche.',
    highlight: 'Paz na hora do lanche',
    avatar: 'JM',
    color: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Fernanda Costa',
    role: 'Mãe solo do Miguel (7) • Curitiba, PR',
    rating: 5,
    text: 'Trabalho o dia todo e me sentia culpada pelo tempo de tela. Agora o Miguel ouve as histórias enquanto desenha. Ele aprendeu a oração do Pai Nosso inteiro só ouvindo o episódio 3. Chorei.',
    highlight: 'Aprendeu o Pai Nosso ouvindo',
    avatar: 'FC',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'Carlos Eduardo',
    role: 'Pai da Helena (5) • Rio de Janeiro, RJ',
    rating: 5,
    text: 'Comprei o plano Fundadores no primeiro dia. Quando o livro físico chegou, minha filha abraçou e disse "papai, é meu!". Momento que vale mais que qualquer assinatura do mundo.',
    highlight: 'Livro físico emocionou',
    avatar: 'CE',
    color: 'from-purple-400 to-violet-500',
  },
  {
    name: 'Dra. Patrícia Lima',
    role: 'Pediatra e mãe do Tomás (6) • BH, MG',
    rating: 5,
    text: 'Como médica, sou rigorosa com conteúdo infantil. O Toon Tales é um dos poucos que recomendo: sem violência, sem estímulos exagerados, com narrativa calma. Finalmente um app que eu deixo meu filho usar.',
    highlight: 'Recomendado por pediatra',
    avatar: 'PL',
    color: 'from-cyan-400 to-blue-500',
  },
];

// ============================================
// SEÇÃO DE FAQ
// ============================================
const faqs = [
  {
    question: 'Qual a idade recomendada para o conteúdo?',
    answer: 'O Toon Tales Kids foi desenvolvido para crianças de 3 a 8 anos. As histórias são adaptadas para serem compreensíveis e envolventes nessa faixa etária, com linguagem simples e narrativas visuais claras. Crianças maiores (9-10 anos) também aproveitam, especialmente os áudios 3D.',
  },
  {
    question: 'Como funciona o acesso do Plano Fundadores Pioneiros?',
    answer: 'Ao se tornar um Fundador Pioneiro, você garante acesso completo por 3 anos a TODO o conteúdo atual (4 temporadas, livros, LabKids PT/EN) E a todas as novidades futuras que lançarmos (5ª temporada, novos recursos, etc). É um compromisso de 3 anos com a nossa plataforma. Apenas 100 vagas disponíveis.',
  },
  {
    question: 'O livro físico de brinde chega em quanto tempo?',
    answer: 'Após a confirmação do pagamento, enviamos o livro físico em até 15 dias úteis para todo o Brasil (frete incluso). Você receberá o código de rastreio por e-mail. O livro é impresso em papel de alta qualidade, com capa dura e acabamento profissional.',
  },
  {
    question: 'Posso imprimir os livros PDF quantas vezes quiser?',
    answer: 'Sim! Durante sua assinatura ativa, você pode baixar e imprimir os livros ilustrados (coloridos e para colorir) quantas vezes desejar, para uso pessoal e familiar. Muitos pais imprimem várias cópias para presentear avós, tios e amigos.',
  },
  {
    question: 'O conteúdo é seguro? Tem anúncios ou links externos?',
    answer: '100% seguro e sem anúncios. O Toon Tales Kids é um ambiente fechado, sem propagandas, sem links para YouTube, sem compras dentro do app. Criamos um espaço digital protegido onde seu filho pode explorar sem riscos. Todo o conteúdo é revisado por pedagogos e teólogos.',
  },
  {
    question: 'Funciona em quais dispositivos?',
    answer: 'Funciona em qualquer dispositivo com navegador: celular (Android/iPhone), tablet, computador, Smart TV e até videogames. Não precisa baixar aplicativo - é tudo via web, sempre atualizado. Recomendamos fones de ouvido para a melhor experiência com o áudio 3D.',
  },
  {
    question: 'E se meu filho não gostar? Posso pedir reembolso?',
    answer: 'Oferecemos garantia incondicional de 30 dias. Se por qualquer motivo você ou seu filho não ficarem satisfeitos, basta enviar um e-mail e devolvemos 100% do valor pago, sem perguntas, sem burocracia. O risco é todo nosso.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos cartão de crédito (em até 12x), boleto bancário e PIX. Para o Plano Fundadores à vista, oferecemos 5% de desconto adicional no PIX. Todas as transações são processadas por gateways certificados (Stripe/Mercado Pago) com criptografia de ponta.',
  },
  {
    question: 'O que é o "LabKids" e por que tem em dois idiomas?',
    answer: 'LabKids é nosso canal de 30 videoaulas de ciências para crianças (corpo humano, espaço, natureza, tecnologia). Oferecemos em Português (para aprendizado nativo) e Inglês (para introdução bilíngue). Os pais adoram porque é conteúdo educativo real, não apenas entretenimento.',
  },
  {
    question: 'Como acesso o Grupo VIP de Fundadores?',
    answer: 'Após a compra do Plano Fundadores, você recebe um e-mail em até 24h com o link de acesso ao grupo exclusivo no WhatsApp. Lá eu compartilho bastidores, faço enquetes sobre próximas histórias e tiro dúvidas diretamente. É um canal direto comigo.',
  },
  {
    question: 'As histórias são fiéis à Bíblia ou são adaptadas?',
    answer: 'As histórias são 100% fiéis aos textos bíblicos originais, mas adaptadas na linguagem para o universo infantil. Não inventamos nada que não esteja nas Escrituras, apenas tornamos a narrativa envolvente e apropriada para crianças. Cada episódio passa por revisão teológica.',
  },
];

export const SocialProofSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* ============================================ */}
      {/* SEÇÃO DE DEPOIMENTOS */}
      {/* ============================================ */}
      <section className="py-20 bg-white" id="depoimentos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-bold mb-4">
              <Heart className="w-4 h-4 fill-amber-600" />
              <span>FAMÍLIAS QUE JÁ TRANSFORMARAM O TEMPO DE TELA</span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              O Que os Pais Estão Dizendo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de <strong className="text-indigo-600">2.500 famílias</strong> já fazem parte do Toon Tales Kids. 
              Veja o que elas estão experimentando.
            </p>
            
            {/* Rating Geral */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-500">• baseado em 847 avaliações</span>
            </div>
          </div>

          {/* Grid de Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Estrelas */}
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Texto */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{t.text}"
                </p>

                {/* Highlight */}
                <div className="bg-indigo-50 border-l-4 border-indigo-500 px-4 py-2 mb-6 rounded-r-lg">
                  <p className="text-sm font-bold text-indigo-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    {t.highlight}
                  </p>
                </div>

                {/* Autor */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Banner de Prova Social Extra */}
          <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-4xl md:text-5xl font-extrabold mb-2">2.500+</p>
                <p className="text-indigo-200 text-sm">Famílias Ativas</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold mb-2">4.9★</p>
                <p className="text-indigo-200 text-sm">Avaliação Média</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold mb-2">98%</p>
                <p className="text-indigo-200 text-sm">Taxa de Satisfação</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold mb-2">15 dias</p>
                <p className="text-indigo-200 text-sm">Garantia Total</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SEÇÃO DE FAQ */}
      {/* ============================================ */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-bold mb-4">
              <MessageCircleQuestion className="w-4 h-4" />
              <span>TIRE SUAS DÚVIDAS</span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa saber antes de começar a jornada com seu filho.
            </p>
          </div>

          {/* Accordion de FAQ */}
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-indigo-500 shadow-lg' : 'border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isOpen ? 'text-indigo-600' : 'text-gray-400'}`} />
                      <span className={`font-bold text-lg ${isOpen ? 'text-indigo-900' : 'text-gray-900'}`}>
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-indigo-600' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed pl-8">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Final Após FAQ */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 max-w-2xl mx-auto">
              <ShieldCheck className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ainda tem dúvidas?
              </h3>
              <p className="text-gray-700 mb-6">
                Nossa equipe responde em até 2 horas em dias úteis. 
                <br />
                <strong className="text-green-700">E lembre-se: você tem 30 dias de garantia total.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/5516997327255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105"
                >
                  <MessageCircleQuestion className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
                <a
                  href="mailto:alssolucoesltda@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold px-6 py-3 rounded-xl transition-all"
                >
                  <Play className="w-5 h-5" />
                  Enviar E-mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
