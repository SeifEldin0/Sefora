"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles["navbar-container"]}>
      <nav className={styles.navbar}>
     
        <Link href="/" className={styles.logo}>
         ✨SEFORA✨
         
        </Link>

        <button className={styles["menu-toggle"]} onClick={toggleMenu}>
          ☰
        </button>

        <div
          className={`${styles["nav-links"]} ${isOpen ? styles.active : ""}`}
        >
          <Link href="/" className={styles["nav-link"]}>
            Home
          </Link>
          <Link href="/about" className={styles["nav-link"]}>
            About
          </Link>
          <Link href="/contact" className={styles["nav-link"]}>
            Contact Me
          </Link>
        </div>
      </nav>
      <hr className={styles.divider} />
    </header>
  );
};

export default Navbar;
