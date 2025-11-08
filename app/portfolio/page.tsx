import ProjectGrid from '@/components/ProjectGrid';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Downtown Billboard Campaign',
      image: 'https://images.pexels.com/photos/3789871/pexels-photo-3789871.jpeg',
      category: 'Hoarding',
    },
    {
      id: 2,
      title: 'Retail Store Banner',
      image: 'https://images.pexels.com/photos/1046641/pexels-photo-1046641.jpeg',
      category: 'Banner',
    },
    {
      id: 3,
      title: 'Shopping Mall LED Display',
      image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg',
      category: 'Digital Signage',
    },
    {
      id: 4,
      title: 'Highway Billboard Network',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      category: 'Hoarding',
    },
    {
      id: 5,
      title: 'Event Promotional Banners',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      category: 'Banner',
    },
    {
      id: 6,
      title: 'Transit Shelter Campaign',
      image: 'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg',
      category: 'Street Furniture',
    },
    {
      id: 7,
      title: 'Building Wrap Installation',
      image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg',
      category: 'Custom',
    },
    {
      id: 8,
      title: 'Bus Advertising Campaign',
      image: 'https://images.pexels.com/photos/2842853/pexels-photo-2842853.jpeg',
      category: 'Transit',
    },
    {
      id: 9,
      title: 'Airport Digital Displays',
      image: 'https://images.pexels.com/photos/1592477/pexels-photo-1592477.jpeg',
      category: 'Digital Signage',
    },
    {
      id: 10,
      title: 'Stadium Perimeter Advertising',
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg',
      category: 'Hoarding',
    },
    {
      id: 11,
      title: 'Restaurant Grand Opening',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
      category: 'Banner',
    },
    {
      id: 12,
      title: 'City Center LED Screen',
      image: 'https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg',
      category: 'Digital Signage',
    },
  ];

  const categories = ['All', 'Hoarding', 'Banner', 'Digital Signage', 'Transit', 'Street Furniture', 'Custom'];

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our successful campaigns and see how we've helped brands make a lasting impression
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors font-semibold"
              >
                {category}
              </button>
            ))}
          </div>

          <ProjectGrid projects={projects} />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Campaign?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your next outdoor advertising project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-accent hover:bg-accent-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );
}
