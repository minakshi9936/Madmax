import Link from 'next/link';
import { Check, ArrowRight, Star } from 'lucide-react';

export default function Packages() {
  const packages = [
    {
      name: 'Starter Package',
      price: '$499',
      duration: '1 Month',
      description: 'Perfect for small businesses looking to get started with outdoor advertising.',
      features: [
        '1 Billboard Location',
        'Basic Design Service',
        'Installation & Maintenance',
        'Monthly Performance Report',
        '24/7 Support'
      ],
      popular: false,
    },
    {
      name: 'Professional Package',
      price: '$1,299',
      duration: '3 Months',
      description: 'Ideal for growing businesses needing comprehensive outdoor advertising solutions.',
      features: [
        '3 Premium Billboard Locations',
        'Advanced Design Service',
        'Installation & Maintenance',
        'Weekly Performance Reports',
        'Social Media Integration',
        '24/7 Priority Support',
        'Custom Branding Consultation'
      ],
      popular: true,
    },
    {
      name: 'Enterprise Package',
      price: '$2,499',
      duration: '6 Months',
      description: 'Complete outdoor advertising solution for large businesses and corporations.',
      features: [
        '5+ Strategic Locations',
        'Premium Design Service',
        'Installation & Maintenance',
        'Daily Performance Analytics',
        'Multi-Platform Integration',
        'Dedicated Account Manager',
        '24/7 VIP Support',
        'Custom Campaign Strategy',
        'Competitor Analysis'
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advertising Packages
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose the perfect package for your business needs. From starter solutions to enterprise campaigns,
            we have the right outdoor advertising package for you.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-primary transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="bg-primary text-white text-center py-2">
                    <Star className="h-4 w-4 inline mr-1" />
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">/ {pkg.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                      pkg.popular
                        ? 'bg-primary hover:bg-primary-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't see a package that fits your needs? Contact us for a custom solution tailored to your business requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-accent hover:bg-accent-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Contact Us for Custom Package
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
