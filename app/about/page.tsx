import Image from 'next/image';
import { Target, Eye, Award, Users, MapPin, Phone, Mail } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower brands with impactful marketing solutions that blend the power of outdoor advertising with the reach of digital media.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To create an ecosystem where creativity meets strategy — helping businesses grow both on-ground and online through collaborative efforts and consistent brand communication.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in design, production, and service delivery, ensuring every campaign is exceptional.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build long-term relationships with our clients, becoming a true extension of their marketing teams.',
    },
  ];

  const strengths = [
    'Prime Rooftop Hoarding Locations across Lucknow',
    'Flex Boards, Banners, and Transit Advertising',
    'Print Media Campaigns (Newspapers, Magazines, Pamphlets)',
    'Outdoor Event Branding & On-Ground Activations'
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Madmax Advertising</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Lucknow's Premier Outdoor and Print Marketing Solutions
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Mr. Vinod Bansal
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  <strong>Mr. Vinod Bansal</strong> is the Proprietor and Head of Advertising at Madmax Advertising,
                  a well-established name in Lucknow's outdoor and print marketing industry. With his sharp business
                  acumen, creative vision, and hands-on experience in advertising, he has been instrumental in shaping
                  brand presence for numerous local and national clients.
                </p>
                <p>
                  Under his leadership, Madmax Advertising has built a strong reputation for delivering impactful
                  outdoor hoardings, print campaigns, and offline promotional solutions that grab attention and
                  drive real-world engagement.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg bg-orange-200 overflow-hidden shadow-xl">
              <Image
                src="https://res.cloudinary.com/dh9uxczld/image/upload/v1762838294/madmax-owner_byx24e.jpg"
                alt="Mr. Vinod Bansal - Proprietor & Head of Advertising"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Madmax Advertising
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based in the heart of Hazratganj, Lucknow, Madmax Advertising specializes in rooftop hoardings,
              outdoor branding, and print marketing solutions. The agency has extensive reach and premium
              advertising sites across the city, ensuring clients get maximum visibility and brand recall.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Strengths</h3>
              <ul className="space-y-3">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h3>
              <p className="text-gray-600 mb-4">
                With a team of creative professionals and on-ground experts, Madmax delivers high-impact
                advertising that connects brands with their target audience in the real world.
              </p>
              <div className="flex items-center text-gray-700">
                <Users className="h-5 w-5 text-accent mr-3" />
                Creative Professionals & On-Ground Experts
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Power of Collaboration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Madmax Advertising x CityWitty - Complete 360° Marketing Solutions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                To deliver complete 360° marketing solutions, Madmax Advertising has joined hands with
                CityWitty, a digital-first platform known for its innovative online campaigns and social
                media expertise.
              </p>
              <p className="text-lg text-gray-600">
                While Madmax strengthens a brand's offline presence through hoardings, print, and physical
                promotions, CityWitty takes care of digital marketing, social media promotions, and online
                reputation management.
              </p>
              <p className="text-lg text-gray-600">
                This collaboration ensures that businesses get the best of both worlds — strong offline
                visibility and powerful online engagement — driving overall brand growth and customer reach.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Together, We Help Brands:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-3 text-xl">✅</span>
                  Build strong city-wide recognition through outdoor media
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-3 text-xl">✅</span>
                  Enhance digital presence and customer engagement online
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-3 text-xl">✅</span>
                  Achieve integrated marketing impact — from streets to screens
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <value.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Contact Information
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Office Address</h3>
                  <p className="text-blue-100">
                    15, Jahgira Bad Mention<br />
                    Hazrat Ganj, Lucknow<br />
                    Uttar Pradesh – 226001, India
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Proprietor</h3>
                  <p className="text-blue-100">
                    Mr. Vinod Bansal<br />
                    Head of Advertising
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the Madmax Advertising difference. Contact us today to discuss how we can help your brand stand out.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-accent hover:bg-accent-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
