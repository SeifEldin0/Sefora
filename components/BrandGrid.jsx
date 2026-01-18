"use client";

import React from 'react';
import { motion } from 'framer-motion';

const BrandGrid = () => {
  const brands = [
    { name: "L'Oreal", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/L%27Oreal_logo.svg" },
    { name: "Maybelline", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Maybelline_New_York_Logo.svg" },
    { name: "Dior", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Dior_logo.svg" },
    { name: "Chanel", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Chanel_logo_interlocking_cs.svg" },
    { name: "MAC", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/MAC_Cosmetics_logo.svg" },
    { name: "Sephora", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Sephora_logo.svg" },
  ];

  return (
    <section className="py-20 border-y border-glass-border bg-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-500 mb-4">Trusted Partners</p>
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter">أشهر الماركات العالمية</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center grayscale opacity-50 hover:grayscale-0 transition-all duration-700">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-8 glass rounded-3xl border border-glass-border/30 hover:border-primary-500/50 transition-all hover:bg-white/10 group"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-h-8 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandGrid;
