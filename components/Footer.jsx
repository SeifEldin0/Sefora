import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left - Rights */}
        <div className="text-sm text-center md:text-left">
          © 2025 <span className="font-semibold">Seif Eldin</span>. All rights reserved.

           <div className="text-sm">
          للتواصل:{" "}
          <a
            href="https://wa.me/201090240933"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline font-medium"
          >
            <FaWhatsapp />
          </a>
        </div>
        </div>

        {/* Center - Contact Info */}
        <div className="text-sm">
          للتواصل:{" "}
          <a
            href="https://wa.me/201090240933"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline font-medium"
          >
          for any inquiries or collaborations, feel free to reach out via WhatsApp.عبر ايقونة الواتساب
            <FaWhatsapp />
          </a>
        </div>

        {/* Right - Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://wa.me/201108930939"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
            className="text-pink-600 text-xl hover:text-pink-800 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/seifeldin" // 👈 غيّر اللينك حسب حسابك
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-600 text-xl hover:text-pink-800 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/seifeldin" // 👈 غيّر اللينك حسب حسابك
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-pink-600 text-xl hover:text-pink-800 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
