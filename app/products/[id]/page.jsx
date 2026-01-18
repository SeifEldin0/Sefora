"use client";

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import React, { useState } from 'react';
import products from '../../../data/products.json';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, MessageCircle, ShoppingBag } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const ProductDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id?.toString();

  const product = products.find((p) => p.id.toString() === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="glass p-10 rounded-3xl text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">المنتج غير موجود</h1>
        <button onClick={() => router.push('/')} className="btn-outline">العودة للرئيسية</button>
      </div>
    </div>
  );

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);

  const suggestedProducts = products.filter((p) => p.id.toString() !== id);

  return (
    <main className="min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={() => router.back()} 
          className="group flex items-center gap-2 text-foreground/60 hover:text-primary-500 transition-colors mb-12"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-sm">Back to Products</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery Section */}
          <div className="space-y-6">
            <motion.div 
              layoutId={`img-${id}`}
              className="glass rounded-[2rem] overflow-hidden premium-shadow border border-glass-border relative aspect-square bg-secondary"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={product.images[currentImage]}
                  alt={product.name}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {product.images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button onClick={prevImage} className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-all shadow-lg">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextImage} className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-all shadow-lg">
                    <ChevronRight size={24} />
                  </button>
                </div>
              )}
            </motion.div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`relative w-24 h-24 rounded-2xl overflow-hidden glass border-2 transition-all ${currentImage === i ? 'border-primary-500 scale-105' : 'border-glass-border opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col h-full"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-50 text-primary-600 text-xs font-bold uppercase tracking-widest self-start">
              Premium Collection
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-3xl font-bold gradient-text mb-8">
              {product.price} ج.م
            </p>

            <div className="glass p-8 rounded-3xl border border-glass-border mb-10">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <ShoppingBag size={20} className="text-primary-500" />
                Description
              </h3>
              <p className="text-foreground/60 leading-relaxed mb-6">
                {product.description}
              </p>
              {product.notes && (
                <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-2xl border border-primary-100 italic text-primary-600">
                  <span className="font-bold">✨ Note:</span>
                  <p>{product.notes}</p>
                </div>
              )}
            </div>

            <div className="mt-auto flex gap-4">
              <a
                href={`https://wa.me/201108930939?text=مرحبًا، أريد طلب المنتج: ${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium flex-1 h-14 rounded-2xl flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle size={24} />
                <span>اطلبه من واتساب</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Suggested Section */}
        <div className="mt-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-foreground">منتجات مشابهة</h2>
            <Link href="/" className="text-primary-500 font-bold hover:underline">عرض الكل</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {suggestedProducts.slice(0, 4).map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
