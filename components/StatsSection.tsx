import { Users, Trophy, Clock } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Trophy, value: '1200+', label: 'Projects Completed' },
    { icon: Clock, value: '15+', label: 'Years Experience' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}