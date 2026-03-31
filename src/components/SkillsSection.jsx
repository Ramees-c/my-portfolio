import { motion } from 'framer-motion';
import { Code2, Layers, Cpu, Zap, Layout, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code2 size={28} className="text-primary" />,
    skills: [
      'React.js / Next.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5 / CSS3',
    ],
  },
  {
    title: 'UI & Styling',
    icon: <Layers size={28} className="text-secondary" />,
    skills: [
      'Tailwind CSS',
      'Bootstrap',
      'Material UI (MUI)',
      'CSS Animations',
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: <Cpu size={28} className="text-purple-400" />,
    skills: [
      'Git / GitHub',
      'API Integration',
      'Axios / Fetch API',
      'Performance Optimization',
    ],
  },
  {
    title: 'React Ecosystem',
    icon: <Zap size={28} className="text-yellow-400" />,
    skills: [
      'React Hooks',
      'Context API',
      'React Router',
      'Code Splitting',
    ],
  },
  {
    title: 'UI/UX & Design',
    icon: <Layout size={28} className="text-cyan-400" />,
    skills: [
      'Figma to Code',
      'Responsive Design',
      'UX Optimization',
      'Accessibility (WCAG)',
    ],
  },
  {
    title: 'Additional Skills',
    icon: <Globe size={28} className="text-emerald-400" />,
    skills: [
      'SEO Basics',
      'Form Handling (Formik / Yup)',
      'Chart.js',
      'Cross-Browser Compatibility',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id='skills' className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 md:mb-20 text-center"
        >
          Technical <span className="gradient-text bg-gradient-to-r from-primary to-blue-400">Ecosystem</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="group relative p-[1px] rounded-lg bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/40 hover:to-secondary/40 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-2xl bg-primary/10 transition-all -z-10" />
              
              <div className="h-full relative z-10 p-5 sm:p-6 md:p-8 rounded-lg bg-card/90 backdrop-blur-2xl border border-white/5 group-hover:border-transparent transition-all duration-500">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500">
                    {category.icon}
                  </div>
                  <h3 className="text-[10px] xs:text-xs sm:text-xs font-black tracking-[0.2em] uppercase text-muted group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                  {category.skills.map((skillName, i) => (
                    <motion.div 
                      key={skillName}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (catIndex * 0.1) + (i * 0.05) }}
                      className="flex items-center group/item"
                    >
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary/40 mr-3 sm:mr-4 group-hover/item:bg-primary group-hover/item:scale-150 transition-all" />
                      <div className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-muted group-hover/item:text-white transition-colors uppercase">
                        {skillName}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
