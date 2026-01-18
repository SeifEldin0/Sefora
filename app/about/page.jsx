"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, Lightbulb, Heart } from "lucide-react";

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      icon: Target,
      title: "هدفنا",
      content: "نكون جزء من رحلتك للعناية بنفسك، ونوفّرلك منتجات تجميل وعناية شخصية فعالة، بسيطة وآمنة… من غير تعقيد أو وعود كاذبة.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: Lightbulb,
      title: "منتجاتنا",
      content: "بنختارها بعناية، مش بس علشان تكون تريندي أو شكلها حلو، لكن علشان تستاهليها فعلًا وتناسبك وتناسب روتينك اليومي.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      icon: Heart,
      title: "رؤيتنا",
      content: "كل بنت تكون عندها الأدوات اللي تساعدها تحب نفسها أكتر. بنقدملك تجربة جمال طبيعية – من غير فلاتر، فوتوشوب، أو وعود كاذبة.",
      color: "text-primary-500",
      bg: "bg-primary-50"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div 
          {...fadeIn}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-bold mb-6">
            <Sparkles size={16} />
            <span>عن البراند</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            إحنا <span className="gradient-text tracking-tight">✨MOU✨</span> <br />
            براند تجميل مصري ناشئ بفكر جديد
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed italic">
            "بنآمن إن الجمال مش قواعد ثابتة، ومفيش قالب واحد لكل البنات. الجمال الحقيقي هو إنك تكوني مرتاحة في شكلك وتفاصيلك من غير ما تقلدي حد."
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-8 rounded-3xl premium-shadow border border-glass-border hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-14 h-14 ${section.bg} ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                <section.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{section.title}</h3>
              <p className="text-foreground/60 leading-relaxed text-right">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Section */}
        <motion.div 
          {...fadeIn}
          className="glass p-10 md:p-16 rounded-[3rem] premium-shadow border border-glass-border text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/20 blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/10 blur-3xl -z-10" />
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            اختاري الصح، واختاري <span className="gradient-text tracking-tight">✨MOU✨</span>
          </h2>
          <p className="text-xl text-foreground/60 mb-10 max-w-2xl mx-auto">
            لأنك تستاهلي تعيشي جمالك بطريقتك. بنوعدك نكون دايمًا على تواصل معاكي، نسمعك، ونتعلم منك علشان نطور ونكون أفضل.
          </p>
          <div className="text-2xl font-bold gradient-text">
            لأنك تستاهلي 💖
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default AboutPage;
