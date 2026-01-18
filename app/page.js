"use client";

import React, { useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";
import { Sparkles, ShoppingBag, Filter, ArrowDown } from "lucide-react";

// Lazy load heavy components
const SearchBar = dynamic(() => import("@/components/SearchBar"), { ssr: false });
const BenefitsBanner = dynamic(() => import("@/components/BenefitsBanner"));
const TrendingSlider = dynamic(() => import("@/components/TrendingSlider"));
const CategoryGrid = dynamic(() => import("@/components/CategoryGrid"));
const BrandGrid = dynamic(() => import("@/components/BrandGrid"));
const NewsletterSection = dynamic(() => import("@/components/NewsletterSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const AnnouncementBar = dynamic(() => import("@/components/AnnouncementBar"));

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Memoize filtered products
  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = useCallback((cat) => {
    setActiveCategory(cat);
  }, []);

  return (
    <main className="overflow-hidden">
      <AnnouncementBar />
      <Header />

      {/* Quick Access Grid / Categories */}
      <CategoryGrid
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <TrendingSlider products={products} />

      <BrandGrid />

      <BenefitsBanner />

      {/* Main Shop Section */}
      <section id="shop" className="py-12 sm:py-20 bg-gradient-to-b from-pink-50/30 to-white relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
            <div className="text-center md:text-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-[10px] font-bold uppercase tracking-wider mb-4">
                <ShoppingBag size={12} />
                <span>متجرنا</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700">
                استكشفي{" "}
                <span className="text-pink-500">مجموعتنا</span>
              </h2>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex items-center justify-center lg:justify-end gap-2 sm:gap-4 bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-full border border-pink-100 shadow-sm">
                <Filter size={16} className="text-pink-400 hidden sm:block" />
                <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
                  {["All", "Lips", "Face", "Skincare"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`px-3 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
                        activeCategory === cat 
                          ? "bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-md" 
                          : "hover:bg-pink-50 text-gray-500 hover:text-pink-500"
                      }`}
                    >
                      {cat === "All" ? "الكل" : cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 sm:mb-16">
            <SearchBar />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-16 sm:py-24 text-center bg-pink-50/50 rounded-3xl border border-pink-100">
              <div className="text-6xl mb-6">💄</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
                لايوجد منتجات في هذه الفئة حالياً
              </h3>
              <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto mb-6 px-4">
                جربي تشوفي فئات تانية أو ارجعي للكل
              </p>
              <button
                onClick={() => handleCategoryChange("All")}
                className="px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 transition-all shadow-md"
              >
                عرض كل المنتجات
              </button>
            </div>
          )}

          <div className="mt-12 text-center">
            <button className="text-pink-300 hover:text-pink-500 transition-colors flex flex-col items-center gap-2 mx-auto">
              <span className="text-[10px] font-bold uppercase tracking-wider">
                استمري بالاستكشاف
              </span>
              <ArrowDown size={18} className="animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      <NewsletterSection />

      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-pink-50 via-white to-pink-50 p-8 sm:p-16 rounded-3xl text-center border border-pink-100 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center shadow-lg">
              <Sparkles className="text-white" size={28} />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-6">
              جاهزة تتألقي مع{" "}
              <span className="text-pink-500">MOU؟</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              الجمال هو التوازن المثالي بين ما أنتي عليه وبين ما تظهرينه للعالم
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-white bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 transition-all text-sm sm:text-base shadow-lg shadow-pink-200"
            >
              ابدأي رحلة الجمال ✨
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
