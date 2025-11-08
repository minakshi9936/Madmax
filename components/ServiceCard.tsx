import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export default function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  const content = (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
    >
      <div
        className="relative h-48 overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {href && (
          <div
            className="flex items-center text-primary font-semibold group-hover:text-accent transition-colors"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
