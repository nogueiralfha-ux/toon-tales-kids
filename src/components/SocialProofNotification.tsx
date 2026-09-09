import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X } from 'lucide-react';

interface Purchase {
  name: string;
  product: string;
  timeAgo: string;
  location: string;
}

const purchasesPT: Purchase[] = [
  { name: 'Maria F.', product: 'Lab Kids', timeAgo: 'há 3 minutos', location: 'São Paulo, SP' },
  { name: 'João P.', product: 'Combo VIP Anual', timeAgo: 'há 7 minutos', location: 'Rio de Janeiro, RJ' },
  { name: 'Ana C.', product: 'Toon Tales (Vitalício)', timeAgo: 'há 12 minutos', location: 'Curitiba, PR' },
  { name: 'Roberto S.', product: 'Lab Kids', timeAgo: 'há 15 minutos', location: 'Belo Horizonte, MG' },
  { name: 'Juliana R.', product: 'Kit 100 Atividades', timeAgo: 'há 22 minutos', location: 'Brasília, DF' },
  { name: 'Fernanda M.', product: 'Lab Kids', timeAgo: 'há 28 minutos', location: 'Campinas, SP' },
];

const purchasesEN: Purchase[] = [
  { name: 'Mary S.', product: 'Lab Kids', timeAgo: '3 minutes ago', location: 'Texas, USA' },
  { name: 'John D.', product: 'Annual VIP Pass', timeAgo: '7 minutes ago', location: 'Florida, USA' },
  { name: 'Sarah W.', product: 'Lab Kids', timeAgo: '12 minutes ago', location: 'London, UK' },
  { name: 'Michael T.', product: 'Activity Books', timeAgo: '15 minutes ago', location: 'Sydney, AUS' },
  { name: 'Emily R.', product: 'Lab Kids', timeAgo: '22 minutes ago', location: 'Ontario, CAN' },
];

interface Props {
  language?: 'pt' | 'en';
}

export const SocialProofNotification: React.FC<Props> = ({ language = 'pt' }) => {
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const purchaseList = language === 'en' ? purchasesEN : purchasesPT;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const showNextPurchase = () => {
      const randomPurchase = purchaseList[Math.floor(Math.random() * purchaseList.length)];
      setCurrentPurchase(randomPurchase);
      setIsVisible(true);

      timeoutId = setTimeout(() => {
        setIsVisible(false);
        const nextDelay = Math.floor(Math.random() * 15000) + 10000;
        timeoutId = setTimeout(showNextPurchase, nextDelay);
      }, 5000);
    };

    const initialDelay = setTimeout(() => {
      showNextPurchase();
    }, 5000);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeoutId);
    };
  }, [purchaseList]);

  return (
    <AnimatePresence>
      {isVisible && currentPurchase && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 left-6 z-[100] max-w-sm w-[calc(100%-3rem)] bg-white border border-purple-200 shadow-2xl rounded-2xl p-4 flex items-start gap-3 pointer-events-auto"
        >
          <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 shadow-inner">
            <ShoppingBag className="w-5 h-5" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <p className="text-sm font-bold text-slate-900 truncate pr-2">
                {currentPurchase.name}
              </p>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-slate-400 hover:text-slate-600 shrink-0 p-0.5 rounded-md hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              {language === 'en' ? 'Purchased' : 'Adquiriu'}{' '}
              <span className="font-bold text-purple-700">{currentPurchase.product}</span>
            </p>
            <div className="flex items-center gap-2 mt-1.5 text-[10px] text-slate-400 font-medium">
              <span>{currentPurchase.timeAgo}</span>
              <span>•</span>
              <span className="truncate">{currentPurchase.location}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
