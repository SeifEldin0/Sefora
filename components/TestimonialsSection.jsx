"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "سارة أحمد",
    role: "عميلة مميزة",
    text: "المنتجات تحفة بجد! الروج ثباته طول اليوم والأسعار مش موجودة في أي مكان تاني. بجد موا من أحلى البراندات اللي جربتها.",
    image: "https://i.pravatar.cc/100?img=47",
    rating: 5
  },
  {
    name: "نورا محمد",
    role: "بلوجر مكياج",
    text: "بوكس Eva ده اختراع! الروايح بتاعته تجنن وثباتها عالي جداً. والكونسيلر تغطيته تحفة ومات خالص. شكراً ليكم على الذوق ده.",
    image: "https://i.pravatar.cc/100?img=44",
    rating: 5
  },
  {
    name: "ليلى محمود",
    role: "ميكب آرتيست",
    text: "أنا بستخدم منتجاتكم في شغلي والبنات بيتبهروا بالنتيجة. الكحل سواده فحمي ومش بيسيح خالص. أنصح أي بنت تجرب MOU",
    image: "https://i.pravatar.cc/100?img=45",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-50/30 blur-[120px] -z-10 rounded-full" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Star size={14} className="fill-current" />
            <span>آراء عملائنا</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            إيه البنات بيقولوا عن <span className="gradient-text">MOU</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[2rem] border border-glass-border premium-shadow relative group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="absolute top-6 right-8 text-primary-100 group-hover:text-primary-200 transition-colors">
                <Quote size={40} />
              </div>

              <div className="flex gap-1 mb-6 text-amber-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-foreground/70 leading-relaxed italic mb-8 relative z-10">
                &quot;{t.text}&quot;
              </p>

              <div className="flex items-center gap-4 border-t border-glass-border pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm font-bold">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-xs text-primary-500 font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
