'use client'

import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import products from '../../../data/products.json'
import styles from './deta.module.css'

const ProductDetailsPage = () => {
  const router = useRouter()
  const params = useParams()
  const id = params.id?.toString()

  const product = products.find((p) => p.id.toString() === id)

  const [currentImage, setCurrentImage] = useState(0)

  if (!product) return <div className="text-center text-red-500 p-10">المنتج غير موجود</div>

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const handleBack = () => {
    router.back()
  }

  // المنتجات الأخرى (بدون المنتج الحالي)
  const suggestedProducts = products.filter((p) => p.id.toString() !== id)

  return (
    <div className={styles.wrapper}>
      {/* زر الرجوع */}
      <button onClick={handleBack} className={styles.backButton}>
        ← Back
      </button>

      {/* عرض الصور داخل كارد مع أزرار */}
      <div className={styles.card}>
        <img
          src={product.images[currentImage]}
          alt={product.name}
          className={styles.image}
        />
        {product.images.length > 1 && (
          <div className={styles.sliderControls}>
            <button onClick={prevImage} className={styles.arrow}>⟨</button>
            <button onClick={nextImage} className={styles.arrow}>⟩</button>
          </div>
        )}
      </div>

      {/* بيانات المنتج */}
      <div className={styles.info}>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>💰 السعر: {product.price || 'اسأل عن السعر'} جنيه</p>
        {product.notes && <p className={styles.notes}>{product.notes}</p>}

        <a
          href={`https://wa.me/201108930939?text=مرحبًا، أريد طلب المنتج: ${encodeURIComponent(product.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsapp}
        >
          اطلبه من واتساب
        </a>
      </div>

      {/* اقتراحات */}
      <div className={styles.suggestions}>
        <h2 className="text-xl font-bold mb-4 text-pink-700">منتجات مشابهة</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {suggestedProducts.slice(0, 4).map((item) => (
            <div key={item.id} className={styles.suggestedCard}>
              <img src={item.images[0]} alt={item.name} className="w-full h-32 object-cover rounded" />
              <h3 className="text-sm font-semibold mt-2 forced-colors:bg-gray-600">{item.name}
                
              </h3>
              <a
                href={`/products/${item.id}`}
                className="text-white-600 text-sm mt-1 inline-block hover:underline border-b-2  border-pink-600"
              >
              Products Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage
