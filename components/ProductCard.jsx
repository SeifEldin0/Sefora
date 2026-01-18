"use client";

import React, { useState, useRef, useEffect, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Eye, Sparkles, Heart } from 'lucide-react';

const ProductCard = memo(({ id, name, price, images, description, notes, isTrending, category, phoneNumber = "201108930939" }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const intervalRef = useRef(null);

  // Auto-loop images on hover
  useEffect(() => {
    if (images.length > 1 && isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 1500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length, isHovered]);

  // Touch swipe handling
  const touchStartX = useRef(0);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      } else {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
    }
  };

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl overflow-hidden flex flex-col h-full bg-gray-500 border border-pink-100 shadow-sm hover:shadow-xl hover:shadow-pink-200/40 transition-all duration-300"
    >
      {/* Image Container */}
      <div 
        className="relative aspect-square overflow-hidden bg-gradient-to-br from-pink-50/50 via-white to-rose-50/30"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-rose-50/50 animate-pulse" />
        )}
        
        <img
          src={images[currentImage]}
          alt={name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

        {/* Top Row */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-10">
          {isTrending && (
            <span className="px-3 py-1.5 rounded-full text-[10px] font-bold text-white bg-gradient-to-r from-pink-500 to-rose-400 shadow-lg shadow-pink-200/50">
              <Sparkles size={10} className="inline mr-1" />
              رائج
            </span>
          )}
          
          <button
            onClick={() => setIsLiked(!isLiked)}
            aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${
              isLiked 
                ? 'bg-gradient-to-br from-pink-500 to-rose-500 text-white scale-110' 
                : 'bg-white text-pink-400 hover:text-pink-500 hover:scale-105'
            } ${!isTrending ? 'ml-auto' : ''}`}
          >
            <Heart size={16} className={isLiked ? 'fill-current' : ''} />
          </button>
        </div>

        {/* Price */}
        <div className="absolute bottom-3 right-3 px-4 py-2 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg shadow-pink-300/40 z-10">
          {price} ج.م
        </div>

        {/* Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-3 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentImage(i)}
                aria-label={`View image ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  currentImage === i 
                    ? 'w-5 h-2 bg-white shadow-sm' 
                    : 'w-2 h-2 bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow bg-gradient-to-b from-white to-pink-50/30">
        {category && (
          <span className="text-[10px] font-bold text-pink-500 uppercase tracking-wider mb-1.5">
            {category}
          </span>
        )}
        
        <h3 className="text-base font-bold text-gray-700 mb-2 line-clamp-1 group-hover:text-pink-600 transition-colors duration-200">
          {name}
        </h3>
        
        <p className="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {notes && (
          <div className="mb-3 text-[10px] text-pink-700 bg-gradient-to-r from-pink-50 to-rose-50 p-2.5 rounded-xl border border-pink-100 line-clamp-2">
            💄 {notes}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-auto flex gap-2">
          <a
            href={`https://wa.me/${phoneNumber}?text=أنا%20مهتم%20بشراء%20${encodeURIComponent(name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-11 rounded-2xl font-bold text-xs text-white bg-gradient-to-r from-gray-500 to-gray-500 hover:from-gray-600 hover:to-gray-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-gray-200/50"
          >
            <MessageCircle size={16} />
            <span>اطلب الآن</span>
          </a>
          
          <Link 
            href={`/products/${id}`}
            prefetch={false}
            className="w-11 h-11 rounded-2xl text-pink-500 bg-pink-50 hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all duration-200 flex items-center justify-center border border-pink-100 hover:border-transparent"
            aria-label="View details"
          >
            <Eye size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
