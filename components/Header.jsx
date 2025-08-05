"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  const fullTitle = "Stay in style with";
  const fullText =
    "Discover our latest beauty products and stay radiant with our premium selections made just for you.";

  useEffect(() => {
    let titleIndex = 0;
    let textIndex = 0;

    const titleInterval = setInterval(() => {
      if (titleIndex < fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleInterval);
      }
    }, 80);

    const textTimeout = setTimeout(() => {
      const textInterval = setInterval(() => {
        if (textIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, textIndex + 1));
          textIndex++;
        } else {
          clearInterval(textInterval);
        }
      }, 30);
    }, fullTitle.length * 80);

    return () => {
      clearInterval(titleInterval);
      clearTimeout(textTimeout);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-start px-4 sm:px-10 md:px-20 overflow-hidden"
      style={{
        backgroundImage: "url('/bg-hero.png')",
        backgroundSize: "cover", // تغطية كاملة للشاشة
        backgroundPosition: "center", // توسيط الصورة
      }}
    >
      <div className="bg-white/80 backdrop-blur-md p-8 sm:p-12 rounded-xl max-w-xl animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          {displayedTitle}
          <span className="text-pink-600 ml-2 animate-bounce inline-block">
            Cosmetic Store
          </span>
        </h1>

        <p className="mt-6 text-gray-700 text-lg sm:text-xl animate-textReveal">
          {displayedText}
        </p>

        <Link
          href="/"
          className="mt-8 inline-block bg-pink-600 text-gray-500 text-lg font-semibold px-6 py-3 rounded-full transition hover:bg-pink-700 hover:scale-105 shadow-lg"
        >
          Discover Latest Products
        </Link>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            clip-path: inset(0 100% 0 0);
          }
          to {
            opacity: 1;
            clip-path: inset(0 0 0 0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-textReveal {
          animation: textReveal 0.8s ease-out forwards;
          animation-delay: ${fullTitle.length * 0.08}s;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
           @media (max-height: 500px) {
      #hero {
        min-height: 600px;
      }
      `}</style>
    </section>
  );
};

export default Hero;
