"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-glass-border pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link href="/" className="text-3xl font-bold gradient-text tracking-tight">
            MOU
          </Link>
          <p className="text-foreground/60 leading-relaxed">
            Elevating beauty through premium selections. Discover our curated collection of luxury cosmetic products.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: MessageCircle, href: "https://wa.me/201108930939", color: "hover:text-[#25D366]" },
              { icon: Instagram, href: "https://instagram.com/moucosmetics", color: "hover:text-primary-500" },
              { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-600" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 glass flex items-center justify-center rounded-full transition-all duration-300 ${social.color} hover:-translate-y-1`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-foreground">Quick Links</h4>
          <ul className="space-y-4">
            {["Home", "Products", "About Us", "Contact"].map((item) => (
              <li key={item}>
                <Link 
                  href={`/${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-foreground/60 hover:text-primary-500 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 scale-0 group-hover:scale-100 transition-transform" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-foreground">Support</h4>
          <ul className="space-y-4">
            {["Terms of Service", "Privacy Policy", "Shipping Policy", "Refund Policy"].map((item) => (
              <li key={item}>
                <Link 
                  href="#" 
                  className="text-foreground/60 hover:text-primary-500 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-foreground">Get in Touch</h4>
          <ul className="space-y-4 text-foreground/60">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary-500" />
              <span>+20 110 893 0939</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary-500" />
              <span>contact@mou-cosmetics.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-primary-500" />
              <span>Cairo, Egypt</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-10 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-foreground/40 text-sm">
          © {currentYear} <span className="font-bold text-foreground">MOU</span>. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link href="#" className="text-foreground/40 text-sm hover:text-primary-500 transition-colors">Privacy</Link>
          <Link href="#" className="text-foreground/40 text-sm hover:text-primary-500 transition-colors">Terms</Link>
          <Link href="#" className="text-foreground/40 text-sm hover:text-primary-500 transition-colors">Security</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
