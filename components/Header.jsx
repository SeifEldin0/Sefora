"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, Sparkles, Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const imageRef = useRef(null);
  const blobsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered text entrance
      gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out",
      });

      gsap.from(textRef.current, {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(btnRef.current, {
        y: 20,
        opacity: 0,
        delay: 0.7,
        duration: 1,
        ease: "power3.out",
      });

      // Floating image with parallax
      gsap.from(imageRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
      });

      // Blobs animation
      gsap.to(".hero-blob", {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 2,
          from: "random",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-background"
    >
      {/* Cinematic Blobs Background */}
      <div ref={blobsRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="hero-blob absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary-200/20 blur-[120px] rounded-full" />
        <div className="hero-blob absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent-gold/10 blur-[100px] rounded-full" />
        <div className="hero-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-primary-100/10 blur-[80px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-right">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/50 text-primary-600 text-xs font-black uppercase tracking-widest mb-8 border border-primary-200/30 backdrop-blur-md"
          >
            <Sparkles size={14} className="fill-current" />
            <span>Premium Collection 2026</span>
          </motion.div>

          <h1 className="hero-title text-6xl md:text-8xl font-black text-foreground leading-[1.1] mb-8 tracking-tighter">
            <span className="inline-block">تألقي</span><br />
            <span className="inline-block">بجمال</span><br />
            <span className="gradient-text inline-block">MOU</span>
          </h1>

          <p 
            ref={textRef}
            className="text-xl md:text-2xl text-foreground/50 mb-12 max-w-xl lg:mr-0 mx-auto font-medium leading-relaxed"
          >
            اكتشفي عالمنا الساحر من مستحضرات التجميل الأصلية. نحن هنا لنكون جزءاً من جمالك اليومي.
          </p>

          <div ref={btnRef} className="hero-btns flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="#shop" className="btn-premium text-lg px-10 h-16 group">
               <span>تسوقي الآن</span>
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" className="btn-outline text-lg px-10 h-16">
               اكتشفي المزيد
            </Link>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={imageRef}
            className="relative z-10 w-full aspect-[4/5] rounded-[4rem] overflow-hidden premium-shadow border-8 border-white/50 backdrop-blur-xl"
          >
            <img 
              src="/bg-hero.png" 
              alt="MOU Beauty" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            {/* Overlay Glass Tag */}
            <div className="absolute bottom-10 left-10 glass px-8 py-4 rounded-3xl border border-white/40 backdrop-blur-2xl">
              <p className="text-foreground/40 text-xs font-black uppercase tracking-widest mb-1">New Arrivals</p>
              <p className="text-2xl font-black text-foreground leading-none">Summer Glow &apos;26</p>
            </div>
          </div>
          
          {/* Floating Element 1 */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: -1, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-32 h-32 glass rounded-full flex items-center justify-center p-6 border-white/40 shadow-2xl z-20"
          >
            <Star size={40} className="text-accent-gold fill-accent-gold" />
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: -1, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-2xl border-white/40 shadow-2xl z-20 flex items-center gap-3"
          >
             <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                <CheckCircle2 size={24} />
             </div>
             <div>
               <p className="text-[10px] font-black uppercase text-foreground/40">Guaranteed</p>
               <p className="text-sm font-black text-foreground">100% Original</p>
             </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
