"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Zap, Heart } from 'lucide-react';

const BenefitsBanner = () => {
  const benefits = [
    {
      icon: Truck,
      title: "توصيل سريع",
      desc: "شحن لكل المحافظات في أسرع وقت ممكن.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: ShieldCheck,
      title: "منتجات أصلية",
      desc: "جميع منتجاتنا أصلية 100% وبأعلى جودة.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Zap,
      title: "أفضل سعر",
      desc: "بنقدملك أقوى الخصومات وأفضل قيمة مقابل سعر.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: Heart,
      title: "خدمة عملاء",
      desc: "موجودين دايماً للرد على استفساراتكم ومساعدتكم.",
      color: "bg-primary-50 text-primary-600"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-glass-border premium-shadow flex flex-col items-center text-center transition-transform hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                <benefit.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsBanner;
