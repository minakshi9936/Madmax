"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Clients() {
  const clients = [
    { src: "/clients/dj.jpeg", alt: "DJ Client Logo" },
    { src: "/clients/erricson.png", alt: "Erricsson Client Logo" },
    { src: "/clients/essar.png", alt: "Essar Client Logo" },
    { src: "/clients/ht.jpeg", alt: "HT Client Logo" },
    { src: "/clients/ib.jpeg", alt: "IB Client Logo" },
    { src: "/clients/icici.jpeg", alt: "ICICI Client Logo" },
    { src: "/clients/itc.png", alt: "ITC Client Logo" },
    { src: "/clients/lg.png", alt: "LG Client Logo" },
    { src: "/clients/pepsi.png", alt: "Pepsi Client Logo" },
    { src: "/clients/pioneer.png", alt: "Pioneer Client Logo" },
    { src: "/clients/sb.jpeg", alt: "SB Client Logo" },
    { src: "/clients/ushaphone.png", alt: "Usha Phone Client Logo" },
    { src: "/clients/vodafone.png", alt: "Vodafone Client Logo" },
  ];

  const duplicatedClients = [...clients, ...clients];

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-20 px-6 lg:px-24 overflow-hidden">
      {/* Glowing BG Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Header */}
      <div className="text-center mb-12 relative">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide mb-4 relative">
          Trusted By  
          <span className="text-yellow-600"> Leading Brands</span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-yellow-500 rounded"></span>
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We are proud to have collaborated with leading companies across industries.
        </p>
      </div>

      {/* Infinite Scrolling Carousel */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          style={{ willChange: 'transform' }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-36 md:w-40 h-24 bg-white/30 border border-yellow-500/30 backdrop-blur-sm shadow-lg rounded-2xl p-4 flex items-center justify-center 
              transition-all duration-300 hover:scale-105 hover:shadow-yellow-300/60 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${(index % clients.length) * 80}ms` }}
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={120}
                height={60}
                className="object-contain opacity-80 hover:opacity-100 transition duration-300"
                sizes="(max-width: 768px) 120px, 140px"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
