import React, { useState } from 'react';
import { Crown, Gift, Check, X, Timer, Users } from 'lucide-react';

interface FoundersPlanProps {
  onCheckout: (planType: 'lump' | 'annual') => void;
}

export const FoundersPlan: React.FC<FoundersPlanProps> = ({ onCheckout }) => {
  const [paymentType, setPaymentType] = useState<'lump' | 'annual'>('lump');
  const [spotsLeft] = useState(73); // Atualize dinamicamente

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50" id="planos">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Badge de Urgência */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full font-bold animate-pulse">
            <Timer className="w-5 h-5" />
            <span>APENAS {spotsLeft} VAGAS RESTANTES</span>
          </div>
        </div>

        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold mb-4">
            <Crown className="w-5 h-5" />
            <span>PLANO EXCLUSIVO FUNDADORES PIONEIROS</span>
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 font-brand tracking-tight">
            Seja Um dos 100 Primeiros
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Acesso <strong>por 3 anos</strong> a TUDO que a plataforma já gerou e gerar durante este compromisso. 
            Quando as 100 vagas se esgotarem, esse plano será <strong>descontinuado para sempre</strong>.
          </p>
        </div>

        {/* Card Principal */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-yellow-400 max-w-4xl mx-auto">
          
          {/* Header do Card */}
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-2 font-brand">🏆 PLANO FUNDADORES PIONEIROS</h3>
            <p className="text-lg opacity-90">Acesso completo a todas as novidades durante 3 anos</p>
          </div>

          <div className="p-8 lg:p-12">
            
            {/* Toggle de Pagamento */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-full p-1 flex gap-1 flex-wrap sm:flex-nowrap justify-center">
                <button
                  onClick={() => setPaymentType('lump')}
                  className={`px-6 py-3 rounded-full font-bold transition-all ${
                    paymentType === 'lump'
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'text-gray-600'
                  }`}
                >
                  💰 À Vista (Melhor Oferta)
                </button>
                <button
                  onClick={() => setPaymentType('annual')}
                  className={`px-6 py-3 rounded-full font-bold transition-all ${
                    paymentType === 'annual'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600'
                  }`}
                >
                  📅 3 Anos (Menor Mensal)
                </button>
              </div>
            </div>

            {/* Preço */}
            <div className="text-center mb-8">
              {paymentType === 'lump' ? (
                <>
                  <p className="text-gray-500 line-through text-xl mb-2">De R$ 1.997,00</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl font-extrabold text-gray-900 tracking-tight">R$ 1.497</span>
                    <span className="text-gray-600 text-xl">à vista</span>
                  </div>
                  <p className="text-green-600 font-bold mt-2 text-lg">
                    ou 12x de R$ 149,70 no cartão
                  </p>
                  <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold mt-4">
                    🎉 Você economiza R$ 500,00!
                  </div>
                </>
              ) : (
                <>
                  <p className="text-gray-500 text-lg mb-2">3 pagamentos anuais de</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl font-extrabold text-gray-900 tracking-tight">R$ 665,67</span>
                    <span className="text-gray-600 text-xl">/ano</span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Total: R$ 1.997,00 em 3 anos
                  </p>
                  <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold mt-4">
                     Apenas R$ 55,47/mês
                  </div>
                </>
              )}
            </div>

            {/* Benefícios */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">✅ O QUE ESTÁ INCLUÍDO:</h4>
                <ul className="space-y-3">
                  {[
                    '4 Temporadas de Áudio 3D (29 episódios)',
                    'Livros Ilustrados em PDF (Colorido)',
                    'Versões P&B para Colorir (ilimitado)',
                    'LabKids em Português (30 vídeos)',
                    'LabKids em Inglês (30 vídeos)',
                    '5ª Temporada (em produção)',
                    'Todas as temporadas futuras',
                    'Todas as novidades da plataforma',
                    'Grupo VIP no WhatsApp',
                    '1 Livro Físico de Brinde (enviado em casa)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">🎁 BÔNUS EXCLUSIVOS:</h4>
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 space-y-3">
                  {[
                    { icon: '📚', text: 'Biblioteca Digital (Acesso 3 Anos)' },
                    { icon: '🎨', text: 'Studio de Colorir 3D' },
                    { icon: '📖', text: 'Guia dos Pais "Conectando Fé"' },
                    { icon: '🏆', text: 'Certificado Fundador Pioneiro' },
                    { icon: '🛡️', text: 'Garantia de 30 Dias' },
                  ].map((bonus, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                      <span className="text-2xl">{bonus.icon}</span>
                      <span className="font-semibold text-gray-800 text-sm md:text-base">{bonus.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-red-800 font-bold mb-2">
                    <Users className="w-5 h-5" />
                    <span>OFERTA LIMITADA</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Restam apenas <strong>{spotsLeft} vagas</strong> de 100. 
                    Quando esgotar, o plano será descontinuado permanentemente.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => onCheckout(paymentType)}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-black font-brand text-xl md:text-2xl py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
            >
              {paymentType === 'lump' 
                ? ' QUERO SER FUNDADOR (R$ 1.497)' 
                : '📅 ASSINAR POR 3 ANOS (R$ 665,67/ano)'}
            </button>

            <p className="text-center text-xs md:text-sm text-gray-500 mt-4 font-semibold">
              🔒 Pagamento 100% seguro • Garantia de 30 dias • Acesso imediato
            </p>
          </div>
        </div>

        {/* Prova Social */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4 font-bold">Já são fundadores:</p>
          <div className="flex justify-center -space-x-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 md:border-4 border-white flex items-center justify-center text-white font-bold shadow-sm">
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 border-2 md:border-4 border-white flex items-center justify-center text-gray-600 font-bold text-xs md:text-sm shadow-sm z-10">
              +{100 - spotsLeft}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
