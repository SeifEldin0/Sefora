'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
// import { Search } from 'lucide-react' // أيقونة بحث بسيطة، تأكد إنك مثبت Lucide أو استخدم SVG
import products from '../data/products.json'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([])
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setResults(filtered)
    }
  }, [searchTerm])

  return (
    <div className="relative max-w-xl w-full mx-auto px-4 py-3">
      <div className="relative">
        <input
          type="text"
          placeholder="🔍 ابحث عن منتج..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 pl-10 border bg-gray-400 border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all"
        />
        {/* <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" /> */}
      </div>

      {results.length > 0 && (
        <div className="absolute left-0 right-0 bg-white border border-gray-200 rounded-lg mt-2 shadow-lg z-50 max-h-64 overflow-y-auto">
          {results.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              onClick={() => setSearchTerm('')}
              className="block px-4 py-2 hover:bg-pink-50 transition-colors text-sm text-gray-700"
            >
              {product.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
