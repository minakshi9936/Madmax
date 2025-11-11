import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Gallery() {
  const galleryImages = [
    {
      src: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1762840810/hoardings_cdc9c8.jpg',
    
    },
    {
      src: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1762845321/ADD_ho4roq.png',
     
    },
    {
      src: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1762840826/banner_lfc52u.jpg',
      
    },
    {
      src: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1762841182/ds_ynbxq4.avif',
      
    },
    {
      src: 'https://res.cloudinary.com/dh9uxczld/image/upload/v1762844218/auto_blfvjo.png',
      
    },
    {
      src: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg',
      
    },
  ];

  return (
    <section
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful outdoor advertising campaigns and creative installations
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center"
              >
                <div
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <p className="text-lg font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="text-center mt-12"
        >
          <div
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center text-primary hover:text-accent font-semibold text-lg transition-colors transform hover:scale-105 transition-transform duration-200"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
