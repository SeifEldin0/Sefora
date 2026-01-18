"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { title: 'الرئيسية', href: '/' },
    { title: 'المنتجات', href: '/#shop' },
    { title: 'من نحن', href: '/about' },
    { title: 'اتصلي بنا', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'pt-2' : 'pt-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass px-8 h-20 rounded-[2rem] flex items-center justify-between border-white/30 backdrop-blur-2xl transition-all duration-500 shadow-2xl ${scrolled ? 'mx-0' : 'mx-4'}`}>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
               <Image src="/logo.svg" alt="MOU Logo" width={48} height={48} className="w-full h-full" />
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-700 group-hover:text-pink-500 transition-colors">MOU</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-black uppercase tracking-widest text-foreground/50 hover:text-primary-500 transition-all hover:-translate-y-0.5"
              >
                {item.title}
              </Link>
            ))}
            <Link href="/#shop" className="btn-premium !py-2.5 !px-6 !text-[10px]">
               Shop Collection
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden w-12 h-12 glass rounded-xl flex items-center justify-center text-primary-500 border-white/20 active:scale-95 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-32 left-6 right-6 z-[99]"
          >
            <div className="glass-grainy p-10 rounded-[3rem] border border-white/40 shadow-3xl text-center space-y-6">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-black text-foreground hover:text-primary-500 transition-colors block"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6">
                <Link href="/#shop" onClick={() => setIsOpen(false)} className="btn-premium w-full h-16 text-lg">
                  تسوقي الآن
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
