"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Gift, Sparkles } from 'lucide-react';

const NewsletterSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-grainy p-12 md:p-24 rounded-[4rem] relative overflow-hidden text-center border-2 border-primary-500/10"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-primary-100 rounded-3xl flex items-center justify-center text-primary-600 mx-auto mb-10 shadow-xl rotate-12">
              <Gift size={40} />
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tighter leading-tight">
              اشتركي في <span className="gradient-text">النشرة الإخبارية</span><br />
              واحصلي على خصم 10%
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/50 mb-12 font-medium">
              كوني أول من يعرف عن أحدث المنتجات، العروض الحصرية، ونصائح الجمال من خبرائنا.
            </p>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="relative max-w-xl mx-auto"
                >
                  <input 
                    type="email" 
                    required
                    placeholder="عنوان بريدك الإلكتروني"
                    className="w-full h-20 bg-white/50 backdrop-blur-xl border-2 border-glass-border rounded-3xl px-10 text-lg focus:outline-none focus:border-primary-500 transition-all font-bold text-center"
                  />
                  <button 
                    type="submit"
                    className="btn-premium absolute left-2 top-2 bottom-2 px-8 h-auto !rounded-2xl flex items-center gap-2 group"
                  >
                    <span>اشتراك</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary-500/10 border-2 border-primary-500/20 p-8 rounded-3xl max-w-xl mx-auto"
                >
                  <div className="text-primary-500 font-black text-xl mb-2 flex items-center justify-center gap-2">
                    <Sparkles /> تم الاشتراك بنجاح!
                  </div>
                  <p className="text-foreground/60 font-medium">راجعي بريدك الإلكتروني للحصول على كود الخصم 🎁</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 flex items-center justify-center gap-6 text-foreground/40 text-xs font-black uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-accent-gold" />
                <span>عروض حصرية</span>
              </div>
              <div className="w-1 h-1 bg-foreground/20 rounded-full" />
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-accent-gold" />
                <span>نصائح جمال</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
