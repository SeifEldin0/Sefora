"use client";

import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: "Lips", label: "شفايف", icon: "💄", color: "from-pink-400 to-rose-500" },
  { name: "Eyes", label: "عيون", icon: "👁️", color: "from-blue-400 to-indigo-500" },
  { name: "Face", label: "بشرة", icon: "✨", color: "from-amber-400 to-orange-500" },
  { name: "Skincare", label: "عناية", icon: "🧴", color: "from-emerald-400 to-teal-500" },
  { name: "Tools", label: "أدوات", icon: "🎨", color: "from-purple-400 to-fuchsia-500" },
  { name: "Sets", label: "بوكسات", icon: "🎁", color: "from-red-400 to-primary-600" }
];

const CategoryGrid = ({ activeCategory, onCategoryChange }) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 blur-3xl -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 blur-3xl -z-10 rounded-full" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            تسوقي حسب <span className="gradient-text">الفئة</span>
          </motion.h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            اختاري القسم اللي بتدوري عليه وشوفي أحدث المنتجات والتريندات في عالم الجمال.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onCategoryChange(cat.name)}
              className={`group glass p-6 rounded-[2.5rem] border border-glass-border premium-shadow transition-all duration-300 relative overflow-hidden ${
                activeCategory === cat.name ? 'ring-2 ring-primary-500 border-transparent bg-white shadow-xl' : ''
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">
                {cat.name}
              </h3>
              <p className="text-xs text-foreground/40 mt-1 font-bold">
                {cat.label}
              </p>

              {activeCategory === cat.name && (
                <motion.div 
                  layoutId="active-cat-blob"
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-500"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
