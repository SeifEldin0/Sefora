"use client";

import React from 'react';
import { motion } from 'framer-motion';

const BrandGrid = () => {
  const brands = [
    { name: "L'Oreal" },
    { name: "Maybelline" },
    { name: "Dior" },
    { name: "Chanel" },
    { name: "MAC" },
    { name: "NYX" },
  ];

  return (
    <section className="py-20 border-y border-glass-border bg-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-500 mb-4">Trusted Partners</p>
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter">أشهر الماركات العالمية</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-6 h-24 glass rounded-3xl border border-glass-border hover:border-primary-500/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="text-xl font-black text-foreground/50 group-hover:text-primary-500 transition-colors duration-300 tracking-tight">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandGrid;
