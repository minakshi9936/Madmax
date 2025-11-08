import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/6389202030"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-200"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
    </Link>
  );
}
