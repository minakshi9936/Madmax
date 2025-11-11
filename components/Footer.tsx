import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-gray-900 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo + Text */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/Madmax-logoo.png"
                alt="Madmax Advertising Logo"
                width={160}
                height={160}
                className="object-contain"
              />
              <span className="text-xl font-bold">Madmax Advertising</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Your trusted partner for outdoor advertising solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-600 hover:text-accent transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Hoarding Advertising</li>
              <li className="text-gray-600">Banner Printing</li>
              <li className="text-gray-600">Digital Signage</li>
              <li className="text-gray-600">Custom Solutions</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>

            <p className="text-gray-600 text-sm">
              <a href="tel:+916389202030" className="hover:text-accent">
                (91) 6389202030
              </a>
            </p>
            <p className="text-gray-600 text-sm">
              <a href="mailto:citywitty.com" className="hover:text-accent">
                citywitty.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Madmax Advertising. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

