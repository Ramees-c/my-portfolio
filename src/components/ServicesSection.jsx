import { motion } from 'framer-motion';
import { Layout, PenTool, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, scalable, and high-performance web applications using modern frameworks.',
    icon: <PenTool size={28} className="text-secondary" />
  },
  {
    title: 'UI to Code Conversion',
    description: 'Converting Figma or design files into pixel-perfect responsive websites.',
    icon: <Layout size={28} className="text-primary" />
  },
  {
    title: 'Website Optimization',
    description: 'Improving speed, performance, and user experience for better engagement and SEO.',
    icon: <Smartphone size={28} className="text-purple-400" />
  }
];

const ServicesSection = () => {
  return (
    <section id='services' className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative">
      <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
        <span className="text-secondary text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 block">Offerings</span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          Services
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="glass-card p-6 sm:p-8 md:p-10 hover:border-primary/50 transition-colors group cursor-default"
          >
            <div className="w-12 sm:w-13 md:w-14 h-12 sm:h-13 md:h-14 rounded-lg bg-white/5 flex items-center justify-center mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
