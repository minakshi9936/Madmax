'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Clients() {
  const clients = [
    { src: '/clients/dj.jpeg', alt: 'DJ Client Logo' },
    { src: '/clients/erricson.png', alt: 'Erricsson Client Logo' },
    { src: '/clients/essar.png', alt: 'Essar Client Logo' },
    { src: '/clients/ht.jpeg', alt: 'HT Client Logo' },
    { src: '/clients/ib.jpeg', alt: 'IB Client Logo' },
    { src: '/clients/icici.jpeg', alt: 'ICICI Client Logo' },
    { src: '/clients/itc.png', alt: 'ITC Client Logo' },
    { src: '/clients/lg.png', alt: 'LG Client Logo' },
    { src: '/clients/pepsi.png', alt: 'Pepsi Client Logo' },
    { src: '/clients/pioneer.png', alt: 'Pioneer Client Logo' },
    { src: '/clients/sb.jpeg', alt: 'SB Client Logo' },
    { src: '/clients/ushaphone.png', alt: 'Usha Phone Client Logo' },
    { src: '/clients/vodafone.png', alt: 'Vodafone Client Logo' },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted By Leading Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with industry leaders and innovative companies across various sectors
          </p>
        </div>
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll">
            {/* Duplicate the clients array to create seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-32 mx-4 transition-all duration-1000 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${(index % clients.length) * 100}ms`,
                }}
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex items-center justify-center h-20">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={120}
                    height={80}
                    className="h-12 w-auto object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
