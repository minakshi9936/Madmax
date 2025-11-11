import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      title: 'Hoarding Advertising',
      description: 'Large-scale outdoor billboards in prime locations for maximum visibility and brand impact.',
      image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1762840810/hoardings_cdc9c8.jpg',
      href: '/services#hoardings',
    },
    {
      title: 'Banner Printing',
      description: 'High-quality vinyl banners in all sizes, perfect for events, promotions, and storefront displays.',
      image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1762840826/banner_lfc52u.jpg',
      href: '/services#banners',
    },
    {
      title: 'Digital Signage',
      description: 'Modern LED displays and digital screens for dynamic, eye-catching advertising campaigns.',
      image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1762841182/ds_ynbxq4.avif',
      href: '/services#signage',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive outdoor advertising solutions tailored to your brand's unique needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="transition-transform duration-300"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
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
  );
}