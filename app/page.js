"use client";

import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json"; // تأكد إن الملف موجود فعلاً
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4 pt-6 w-full max-w-6xl flex flex-col items-center">
        <Header />
        <SearchBar />
        <h1 className="text-3xl font-bold text-center mt-6 py-0.5 text-gray-600 mb-4">All Products</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            images={product.images}
            description={product.description}
            name={product.name}
            price={product.price}
            notes={product.notes}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
