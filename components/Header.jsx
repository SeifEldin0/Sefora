"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Star, CheckCircle2, Heart, ShoppingBag } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [stats, setStats] = useState({ products: 0, customers: 0, quality: 0 });

  useEffect(() => {
    // Trigger animations after mount
    setIsLoaded(true);

    // Animate stats counter
    const duration = 2000;
    const startTime = Date.now();
    const targets = { products: 500, customers: 10, quality: 100 };

    const animateStats = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setStats({
        products: Math.round(targets.products * easeOut),
        customers: Math.round(targets.customers * easeOut),
        quality: Math.round(targets.quality * easeOut)
      });

      if (progress < 1) {
        requestAnimationFrame(animateStats);
      }
    };

    const timer = setTimeout(animateStats, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Use words for Arabic text to preserve ligatures
  const titleWords = [ "بجمال", "تألقي"];
  const brandChars = "MOU".split('');

  return (
    <header
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-br from-background via-primary-50/20 to-background"
    >
      {/* CSS Animations Keyframes */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -10px); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes charReveal {
          from { transform: translateY(100%) rotateX(90deg); opacity: 0; }
          to { transform: translateY(0) rotateX(0deg); opacity: 1; }
        }
        .animate-float1 { animation: float1 4s ease-in-out infinite; }
        .animate-float2 { animation: float2 5s ease-in-out infinite; }
        .animate-float3 { animation: float3 3.5s ease-in-out infinite; }
        .animate-blob { animation: blob 15s ease-in-out infinite; }
        .animate-slideUp { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-charReveal { animation: charReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* Cinematic Blobs Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="animate-blob absolute top-[-15%] right-[-15%] w-[60vw] h-[60vw] bg-gradient-to-br from-primary-300/25 to-primary-100/15 blur-[100px] rounded-full" />
        <div className="animate-blob absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tr from-accent-gold/15 to-primary-200/10 blur-[120px] rounded-full" style={{ animationDelay: '-5s' }} />
        <div className="animate-blob absolute top-1/3 left-1/3 w-[35vw] h-[35vw] bg-gradient-to-r from-primary-100/15 to-accent-gold/10 blur-[80px] rounded-full" style={{ animationDelay: '-10s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(236, 72, 153, 0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-xl text-primary-600 text-xs font-black uppercase tracking-widest mb-8 border border-primary-100 shadow-lg shadow-primary-100/20 ${isLoaded ? 'animate-scaleIn' : 'opacity-0'}`}
            >
              <Sparkles size={14} className="fill-current animate-pulse" />
              <span>Premium Collection 2026</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.05] mb-6 tracking-tight" style={{ perspective: '1000px' }}>
              <span className="block overflow-hidden">
                {titleWords.map((word, i) => (
                  <span 
                    key={i} 
                    className={`inline-block ${isLoaded ? 'animate-charReveal' : 'opacity-0'}`}
                    style={{ 
                      transformOrigin: 'bottom',
                      animationDelay: `${0.3 + i * 0.15}s`
                    }}
                  >
                    {word}{i < titleWords.length - 1 ? '\u00A0' : ''}
                  </span>
                ))}
              </span>
              <span className="block overflow-hidden mt-2">
                {brandChars.map((char, i) => (
                  <span 
                    key={i} 
                    className={`inline-block gradient-text ${isLoaded ? 'animate-charReveal' : 'opacity-0'}`}
                    style={{ 
                      transformOrigin: 'bottom',
                      animationDelay: `${0.3 + (titleWords.length + i) * 0.12}s`
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>

            {/* Description */}
            <p 
              className={`text-lg sm:text-xl md:text-2xl text-foreground/60 mb-10 max-w-lg lg:mr-0 mx-auto font-medium leading-relaxed ${isLoaded ? 'animate-slideUp' : 'opacity-0'}`}
              style={{ animationDelay: '0.8s' }}
            >
              اكتشفي عالمنا الساحر من مستحضرات التجميل الأصلية. 
              <span className="text-primary-500 font-bold"> نحن هنا لنكون جزءاً من جمالك اليومي.</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link 
                href="#shop" 
                className={`btn-premium text-base sm:text-lg px-8 sm:px-12 h-14 sm:h-16 group relative overflow-hidden ${isLoaded ? 'animate-slideUp' : 'opacity-0'}`}
                style={{ animationDelay: '1s' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ShoppingBag size={20} />
                  <span>تسوقي الآن</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/about" 
                className={`btn-outline text-base sm:text-lg px-8 sm:px-12 h-14 sm:h-16 group ${isLoaded ? 'animate-slideUp' : 'opacity-0'}`}
                style={{ animationDelay: '1.15s' }}
              >
                <Heart size={18} className="group-hover:scale-110 transition-transform" />
                <span>اكتشفي المزيد</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10">
              {[
                { value: stats.products, suffix: '+', label: 'منتج أصلي' },
                { value: stats.customers, suffix: 'K+', label: 'عميلة سعيدة' },
                { value: stats.quality, suffix: '%', label: 'ضمان الجودة' }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className={`text-center ${isLoaded ? 'animate-slideUp' : 'opacity-0'}`}
                  style={{ animationDelay: `${1.2 + i * 0.1}s` }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
                    <span>{stat.value}</span>
                    <span className="text-primary-500">{stat.suffix}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/50 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative order-1 lg:order-2">
            <div 
              className={`relative z-10 w-full max-w-md mx-auto lg:max-w-none aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary-200/30 border-4 border-white/60 ${isLoaded ? 'animate-scaleIn' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              <Image 
                src="/bg-hero.png" 
                alt="MOU Beauty" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Overlay Glass Tag */}
              <div className="absolute bottom-6 left-6 right-6 glass px-6 py-4 rounded-2xl border border-white/50 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-500 text-[10px] font-black uppercase tracking-widest mb-0.5">New Arrivals</p>
                    <p className="text-xl font-black text-foreground leading-tight">Summer Glow &apos;26</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center text-white shadow-lg">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Element 1 - Star */}
            <div className="animate-float1 absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-20 h-20 sm:w-28 sm:h-28 glass rounded-full flex items-center justify-center border border-white/50 shadow-xl z-20">
              <Star size={32} className="text-accent-gold fill-accent-gold sm:w-10 sm:h-10" />
            </div>

            {/* Floating Element 2 - Guarantee */}
            <div className="animate-float2 absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 glass px-4 py-3 sm:px-6 sm:py-4 rounded-2xl border border-white/50 shadow-xl z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-white shadow-md">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-black uppercase text-foreground/50 tracking-wider">Guaranteed</p>
                  <p className="text-sm sm:text-base font-black text-foreground">100% Original</p>
                </div>
              </div>
            </div>

            {/* Floating Element 3 - Discount */}
            <div className="animate-float3 absolute top-1/2 -left-2 sm:-left-12 glass px-4 py-2 rounded-xl border border-white/50 shadow-xl z-20 hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="text-2xl">🎁</div>
                <div>
                  <p className="text-[10px] font-black text-primary-500">خصم 10%</p>
                  <p className="text-xs font-bold text-foreground/70">على أول طلب</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </header>
  );
};

export default Hero;
