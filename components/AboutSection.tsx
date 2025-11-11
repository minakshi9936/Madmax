import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
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
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}