import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Material UI", icon: <SiMui className="text-blue-500" /> },
  {
    name: "REST API Integration",
    icon: <SiPostman className="text-orange-500" />,
  },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> }, // No dark: prefix here
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-card/30 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16"
        >
          The Developer <span className="text-secondary">Behind</span> the Code
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 text-base sm:text-lg md:text-lg text-muted mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            I’m a detail-oriented frontend developer passionate about building
            intuitive and visually appealing web applications. I focus on
            writing clean, reusable code and delivering smooth user experiences
            across all devices.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            With hands-on experience in React.js, Tailwind CSS, and API
            integrations, I build scalable interfaces that are both performant
            and user-friendly. I enjoy turning ideas into real-world digital
            products.
          </motion.div>
        </div>

       <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
  {skills.map((skill, index) => (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="relative group rounded-lg p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/40 hover:to-secondary/40 transition-all"
    >
      {/* Glass Card */}
      <div className="rounded-lg bg-card/80 backdrop-blur-xl px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3 border border-white/10 group-hover:border-transparent transition-all">
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl bg-primary/20 transition-all"></div>

        {/* Icon */}
        <div className="text-2xl sm:text-3xl md:text-4xl z-10 group-hover:scale-125 transition-transform duration-300">
          {skill.icon}
        </div>

        {/* Text */}
        <span className="text-[10px] sm:text-xs md:text-xs font-semibold tracking-wide text-muted group-hover:text-white transition-colors z-10 text-center">
          {skill.name}
        </span>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

export default AboutSection;
