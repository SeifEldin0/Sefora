"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import products from "@/data/products.json";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className={`relative flex items-center transition-all duration-300 ${isFocused ? 'scale-[1.02]' : ''}`}>
        <Search className={`absolute left-4 transition-colors duration-300 ${isFocused ? 'text-primary-500' : 'text-foreground/40'}`} size={20} />
        <input
          type="text"
          placeholder="Search for beauty products..."
          value={searchTerm}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-4 pl-12 pr-12 bg-background/50 border border-glass-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-foreground placeholder:text-foreground/30"
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm("")}
            className="absolute right-4 text-foreground/40 hover:text-primary-500 transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {results.length > 0 && isFocused && (
        <div className="absolute left-0 right-0 mt-4 glass border border-glass-border rounded-2xl premium-shadow overflow-hidden z-50 max-h-80 overflow-y-auto">
          {results.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              onClick={() => setSearchTerm("")}
              className="group flex items-center gap-4 px-6 py-4 hover:bg-primary-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-secondary">
                {product.images && product.images.length > 0 ? (
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-500">
                    <Search size={16} />
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground group-hover:text-primary-600 transition-colors">{product.name}</p>
                <p className="text-xs text-foreground/50 line-clamp-1">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
