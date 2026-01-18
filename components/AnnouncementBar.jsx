"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const announcements = [
    "✨ توصيل مجاني لكل الطلبات فوق 500 جنيه!",
    "🎁 كود خصم 10% على أول طلب: MOU10",
    "💄 خصومات تصل إلى 50% على قسم العناية بالبشرة"
  ];
  
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  if (!isVisible) return null;

  return (
    <div className="relative z-[110] bg-primary-600 text-white py-2 overflow-hidden shadow-lg border-b border-primary-500/30">
      <div className="container mx-auto px-6 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="flex items-center gap-3 text-xs md:text-sm font-black tracking-widest uppercase"
          >
            <Sparkles size={14} className="text-accent-gold" />
            <span className="text-center">{announcements[current]}</span>
            <Sparkles size={14} className="text-accent-gold" />
          </motion.div>
        </AnimatePresence>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
