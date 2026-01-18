"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState("");

  const phoneNumber = "201108930939";

  const handleSend = () => {
    if (!name || !message) {
      alert("من فضلك اكتب الاسم والرسالة.");
      return;
    }

    const fullMessage = `مرحبًا، أنا ${name}.\n${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--color-primary-100),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,var(--color-accent-gold),transparent_40%)] opacity-10 -z-10" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass p-8 md:p-12 rounded-[2.5rem] premium-shadow border border-glass-border max-w-lg w-full"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle size={32} />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">تواصل معنا</h1>
          <p className="text-foreground/60 leading-relaxed">
            اكتب اسمك ورسالتك، وهنرد عليك على واتساب في أسرع وقت 💬
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative group">
            <label className={`block text-right text-sm font-bold mb-2 transition-colors ${isFocused === 'name' ? 'text-primary-500' : 'text-foreground/60'}`}>
              الاسم
            </label>
            <div className="relative">
              <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isFocused === 'name' ? 'text-primary-500' : 'text-foreground/30'}`} size={18} />
              <input
                type="text"
                placeholder="اسمك الكريم"
                onFocus={() => setIsFocused("name")}
                onBlur={() => setIsFocused("")}
                className="w-full bg-background/50 border border-glass-border p-4 pl-12 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-foreground text-right"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="relative group">
            <label className={`block text-right text-sm font-bold mb-2 transition-colors ${isFocused === 'message' ? 'text-primary-500' : 'text-foreground/60'}`}>
              الرسالة
            </label>
            <div className="relative">
              <MessageSquare className={`absolute left-4 top-4 transition-colors ${isFocused === 'message' ? 'text-primary-500' : 'text-foreground/30'}`} size={18} />
              <textarea
                placeholder="اكتب استفسارك أو رسالتك هنا..."
                onFocus={() => setIsFocused("message")}
                onBlur={() => setIsFocused("")}
                className="w-full bg-background/50 border border-glass-border p-4 pl-12 h-40 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-foreground text-right"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={handleSend}
            className="w-full btn-premium py-4 rounded-2xl flex items-center justify-center gap-3 text-lg group active:scale-[0.98]"
          >
            <span>إرسال عبر واتساب</span>
            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-10 pt-8 border-t border-glass-border grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-xs text-foreground/40 mb-1 uppercase tracking-widest">WhatsApp</p>
            <p className="font-bold text-sm text-foreground">01108930939</p>
          </div>
          <div className="text-center border-r border-glass-border">
            <p className="text-xs text-foreground/40 mb-1 uppercase tracking-widest">Location</p>
            <p className="font-bold text-sm text-foreground">Cairo, Egypt</p>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Contact;
