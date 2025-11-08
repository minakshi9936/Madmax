'use client';

import Link from 'next/link';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gray-100 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-2 md:mb-0">
            <div className="flex items-center text-gray-700">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91-6389202030</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Mail className="h-4 w-4 mr-2" />
              <span>citywitty.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://facebook.com" className="text-gray-700 hover:text-primary transition-colors">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="https://twitter.com" className="text-gray-700 hover:text-primary transition-colors">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="https://instagram.com" className="text-gray-700 hover:text-primary transition-colors">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com" className="text-gray-700 hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
