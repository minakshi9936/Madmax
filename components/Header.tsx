'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Megaphone } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/packages', label: 'Packages' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
          >
            <Link href="/" className="flex items-center space-x-2">
              <Megaphone className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-900">Madmax Advertising</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <div
                key={link.href}
              >
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
            ))}
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <div
              >
                <X className="h-6 w-6" />
              </div>
            ) : (
              <div
              >
                <Menu className="h-6 w-6" />
              </div>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className="md:hidden border-t overflow-hidden"
          >
            <div className="py-4">
              {navLinks.map((link, index) => (
                <div
                  key={link.href}
                >
                  <Link
                    href={link.href}
                    className="block py-2 text-gray-700 hover:text-primary font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
