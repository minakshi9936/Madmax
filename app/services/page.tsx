import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'hoardings',
      title: 'Hoarding Advertising',
      description: 'Dominate the skyline with our premium hoarding advertising solutions. We offer strategic placements in high-traffic areas to maximize your brand visibility.',
      image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1762840810/hoardings_cdc9c8.jpg',
      features: [
        'Prime location networks across major cities',
        'Large format displays (up to 40x60 feet)',
        'Illuminated and non-illuminated options',
        'Monthly and long-term rental packages',
        'Professional installation and maintenance',
      ],
    },
    {
      id: 'banners',
      title: 'Banner Printing',
      description: 'High-quality vinyl banner printing for all your outdoor and indoor advertising needs. Perfect for events, store promotions, and temporary campaigns.',
      image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1762840826/banner_lfc52u.jpg',
      features: [
        'Custom sizes up to 50 feet wide',
        'UV-resistant, weatherproof materials',
        'Full-color high-resolution printing',
        'Hemming and grommets included',
        'Fast turnaround (24-48 hours available)',
      ],
    },
    {
      id: 'signage',
      title: 'Digital Signage',
      description: 'Modern LED displays and digital screens that bring your content to life. Dynamic, programmable advertising for maximum engagement and flexibility.',
      image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1762841182/ds_ynbxq4.avif',
      features: [
        'Full HD and 4K resolution displays',
        'Remote content management system',
        'Indoor and outdoor rated screens',
        'Flexible scheduling and playlists',
        'Real-time campaign updates',
      ],
    },
    {
      id: 'transit',
      title: 'Transit Advertising',
      description: 'Mobile advertising solutions including bus wraps, taxi toppers, and transit shelter displays. Reach audiences on the move with creative transit media.',
      image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1762844218/auto_blfvjo.png',
      features: [
        'Full and partial vehicle wraps',
        'Bus shelter advertising',
        'Metro station displays',
        'Airport advertising spaces',
        'High-traffic route selection',
      ],
    },
    {
      id: 'street',
      title: 'Street Furniture',
      description: 'Eye-level advertising on bus shelters, kiosks, and public benches. Perfect for localized campaigns and neighborhood targeting.',
      image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1762845321/ADD_ho4roq.png',
      features: [
        'Bus shelter panels',
        'Information kiosks',
        'Public benches with branding',
        'Pedestrian bridges and overpasses',
        'Strategic neighborhood placement',
      ],
    },
    {
      id: 'custom',
      title: 'Custom Solutions',
      description: 'Tailored advertising solutions for unique campaigns and special requirements. Our team works with you to create innovative outdoor advertising experiences.',
      image: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1762846337/custom-ad_yoe0aq.png',
      features: [
        'Building wraps and murals',
        '3D installations',
        'Interactive displays',
        'Projection advertising',
        'Event-specific structures',
      ],
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive outdoor advertising solutions designed to elevate your brand and maximize your reach
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-primary hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                  >
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts is here to guide you through the selection process and create a custom campaign that fits your goals and budget
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-accent hover:bg-accent-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
