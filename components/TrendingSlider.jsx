"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { ChevronRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const TrendingSlider = ({ products }) => {
  const scrollRef = useRef(null);

  const trendingProducts = products.filter(p => p.isTrending);

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-primary-600 font-bold text-sm uppercase tracking-[0.2em] mb-4"
          >
            <TrendingUp size={16} />
            <span>Trending Now</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            الأكثر <span className="gradient-text">طلبًا</span>
          </motion.h2>
        </div>
        
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-foreground/60 hover:text-primary-500 font-bold transition-all"
        >
          <span>عرض الكل</span>
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="relative group">
        <motion.div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto px-6 md:px-[calc(50vw-500px)] pb-12 no-scrollbar scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {trendingProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px -100px 0px -100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-[350px] scroll-snap-align-start"
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays for scroll fade */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none hidden md:block" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none hidden md:block" />
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scroll-snap-align-start {
          scroll-snap-align: start;
        }
      `}</style>
    </section>
  );
};

export default TrendingSlider;
