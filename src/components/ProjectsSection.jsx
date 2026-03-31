import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import Project1Image from "../assets/project1.png";
import Project2Image from "../assets/project2.png";
import Project3Image from "../assets/project3.png";
import Project4Image from "../assets/project4.png";
import Project5Image from "../assets/project5.png";
import Project6Image from "../assets/project6.png";

const projects = [
  {
    title: "Tutor Near Me",
    description:
      "A tutor discovery platform with advanced search, subject filtering, and role-based dashboards for tutors and students. Includes API integration and secure payment functionality.",
    image: Project1Image,
    tags: ["REACT", "TAILWIND CSS"],
    link: "https://tutor-nearme.com/",
  },
  {
    title: "Channel HMedia",
    description:
      "A cinema news and media platform with dynamic content rendering, category-based filtering, advertisement placements, and an admin panel for managing news and content.",
    image: Project2Image,
    tags: ["REACT", "TAILWIND CSS"],
    link: "https://channelhmedia.in/",
  },
  {
    title: "Magic Mansion",
    description:
      "A modern responsive UI project featuring clean layouts, smooth animations, and interactive design elements built with HTML, CSS, and JavaScript.",
    image: Project3Image,
    tags: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"],
    link: "https://www.magicmansion.ae/",
  },
  {
    title: "BrainFast Abacus",
    description:
      "An educational website showcasing abacus and Vedic math programs with responsive UI, course details, events, and contact features for students and parents.",
    image: Project4Image,
    tags: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"],
    link: "https://brainfastabacus.com/",
  },
  {
    title: "Eazy Care Medical Center",
    description:
      "A smart content generation platform leveraging Large Language Models to assist marketers in creating SEO-optimized blog posts and social media copy.",
    image: Project5Image,
    tags: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"],
    link: "https://eazycaremedicalcenter.com/",
  },
  {
    title: "Savoy Kannur",
    description:
      "A business website for a premium restaurant featuring menu highlights, services, and contact details with a responsive and visually appealing design.",
    image: Project6Image,
    tags: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"],
    link: "https://savoykannur.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-12 md:mb-16 gap-6 sm:gap-4">
          <div>
            <span className="text-primary text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 block">
              Portfolio
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
            >
              Featured Projects
            </motion.h2>
          </div>
          <a
            href="https://github.com/Ramees-c"
            target="_blank"
            className="flex items-center text-xs sm:text-sm font-medium hover:text-primary transition-colors tracking-widest uppercase"
          >
            View All Archive <span className="ml-2">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-lg overflow-hidden bg-card/30 backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-2xl hover:shadow-primary/20"
            >
             <div>
              <div className="h-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-20" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div> 
             </div>

              <div className="p-4 sm:p-5 md:p-7 relative z-30">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] xs:text-[10px] sm:text-[10px] uppercase tracking-[0.15em] font-black px-2.5 sm:px-3 py-0.5 sm:py-1 bg-white/5 text-muted group-hover:text-primary group-hover:bg-primary/10 transition-colors rounded-lg border border-white/5 group-hover:border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted/80 leading-relaxed mb-6 sm:mb-8">
                  {project.description}
                </p>

                <div className="flex items-center gap-6 text-[10px] xs:text-xs sm:text-xs font-bold uppercase tracking-widest">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-white hover:text-primary transition-all group/link"
                  >
                    View Live
                    <ExternalLink
                      size={14}
                      className="ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
