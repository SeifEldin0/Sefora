"use client";

import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "201108930939"; // رقم الواتساب بدون +

  const handleSend = () => {
    if (!name || !message) {
      alert("من فضلك اكتب الاسم والرسالة.");
      return;
    }

    const fullMessage = `مرحبًا، أنا ${name}.\n${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-pink-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-pink-600 mb-4 text-center">تواصل معنا</h1>
        <p className="text-gray-700 mb-6 text-center">
          اكتب اسمك ورسالتك، وهنرد عليك على واتساب في أسرع وقت 💬
        </p>

        <div className="mb-4">
          <label className="block text-right text-sm font-medium text-gray-700 mb-1">الاسم</label>
          <input
            type="text"
            placeholder="اسمك"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-right text-sm font-medium text-gray-700 mb-1">الرسالة</label>
          <textarea
            placeholder="اكتب استفسارك أو رسالتك هنا..."
            className="w-full border border-gray-300 p-2 h-32 rounded resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          onClick={handleSend}
          className="w-full bg-pink-600 text-white py-2 rounded-full font-semibold hover:bg-pink-700 transition hover:scale-105"
        >
          إرسال عبر واتساب
        </button>
      </div>
    </section>
  );
};

export default Contact;
