import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-accent text-sm font-semibold">{project.category}</span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
