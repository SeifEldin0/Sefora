"use client";

import React, { useState } from 'react';
import styles from './porductCard.module.css';
import Link from 'next/link';

const ProductCard = ({ id,name, price, images, description, notes, phoneNumber = "201108930939" }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.card} id='#'>
     
      <div className={styles['image-container']}>
        <img
          src={images[currentImage]}
          alt={`صورة لمنتج ${name}`}
          className={styles['product-image']}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className={`${styles['nav-button']} ${styles.left}`}
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className={`${styles['nav-button']} ${styles.right}`}
            >
              ▶
            </button>
          </>
        )}
      </div>

      <h2 className={styles.name}>{name}</h2>
      <p className={styles.price}>{price} جنيه</p>
      <p className={styles.description}>{description}</p>
      {notes && <p className={styles.notes}>{notes}</p>}

      <a
        href={`https://wa.me/${phoneNumber}?text=أنا%20مهتم%20بشراء%20${encodeURIComponent(name)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles['whatsapp-button']}
      >
        اطلب عبر واتساب
      </a>
      <Link href={`/products/${id}`} className={styles['details-link']}>
      Product Details
      </Link>
    </div>
  );
};

export default ProductCard;
