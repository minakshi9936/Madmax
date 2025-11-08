'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, CheckCircle, Users, Trophy, Clock, MessageCircle, Megaphone } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Gallery from '../components/Gallery';
import Clients from '../components/Clients';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const whatsappMessage = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
  const whatsappUrl = `https://wa.me/6389202030?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      title: 'Hoarding Advertising',
      description: 'Large-scale outdoor billboards in prime locations for maximum visibility and brand impact.',
      image: 'https://images.pexels.com/photos/3789871/pexels-photo-3789871.jpeg',
      href: '/services#hoardings',
    },
    {
      title: 'Banner Printing',
      description: 'High-quality vinyl banners in all sizes, perfect for events, promotions, and storefront displays.',
      image: 'https://images.pexels.com/photos/1046641/pexels-photo-1046641.jpeg',
      href: '/services#banners',
    },
    {
      title: 'Digital Signage',
      description: 'Modern LED displays and digital screens for dynamic, eye-catching advertising campaigns.',
      image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg',
      href: '/services#signage',
    },
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Trophy, value: '1200+', label: 'Projects Completed' },
    { icon: Clock, value: '15+', label: 'Years Experience' },
  ];

  return (
    <>
      <section
        className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-gradient-to-r from-primary to-accent py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{ boxShadow: '0 0 100px rgba(59, 130, 246, 0.5), 0 0 200px rgba(59, 130, 246, 0.3), 0 0 300px rgba(59, 130, 246, 0.1)' }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-accent drop-shadow-lg">
                <Image
                  src="/megaphone.gif"
                  alt="Megaphone"
                  width={60}
                  height={60}
                  className="inline mr-4 mb-4 drop-shadow-md"
                  style={{ mixBlendMode: 'multiply' }}
                />
                Elevate Your Brand Visibility in Lucknow
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 font-medium drop-shadow-sm">
                Transform your marketing with premium outdoor advertising solutions that command attention and deliver results
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-accent hover:bg-accent-700 text-white font-bold px-8 py-4 rounded-lg transition-colors transform hover:scale-105 transition-transform duration-200"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="max-w-2xl mx-auto md:mx-0 md:justify-self-end p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/40 animate-fade-in hover:bg-gradient-to-br hover:from-white/30 hover:to-white/20 hover:shadow-3xl hover:scale-102 transition-all">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-sm hover:shadow-md"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-sm hover:shadow-md"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-sm hover:shadow-md"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-sm hover:shadow-md resize-none"
                  />
                </div>
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 text-base rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send via WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Madmax is a leading outdoor advertising company with over 15 years of experience
                in creating impactful campaigns. We specialize in strategic placement, creative design,
                and high-quality execution across all outdoor media formats.
              </p>
              <ul className="space-y-4">
                {[
                  'Prime location networks',
                  'Custom design services',
                  'Fast turnaround times',
                  'Professional installation',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center text-primary hover:text-accent font-semibold mt-6 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
                alt="Our team working on outdoor advertising"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive outdoor advertising solutions tailored to your brand's unique needs
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="transition-transform duration-300"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center text-primary hover:text-accent font-semibold text-lg transition-colors transform hover:scale-105 transition-transform duration-200"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Gallery />
      <Clients />

      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make Your Brand Visible?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how we can help you reach your target audience with strategic outdoor advertising
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-accent hover:bg-accent-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
