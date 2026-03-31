import { motion } from "framer-motion";

import profileImage from "../assets/profile.png";

const HeroSection = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 px-6 flex items-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] bg-cyan-900/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40rem] h-[40rem] bg-purple-900/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6 md:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Available for Freelance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Building Fast{" "}
            <span className="gradient-text bg-gradient-to-r from-primary via-blue-400 to-secondary animate-gradient bg-300%">
              &
            </span>
            <br />
            Modern Web Experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-muted mb-8 md:mb-10 max-w-lg leading-relaxed mx-auto lg:mx-0"
          >
            I’m a Frontend Developer with 1+ year of experience creating
            responsive, high-performance web applications using React.js,
            Next.js, and modern UI technologies. I focus on clean design,
            scalability, and seamless user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-black hover:bg-white rounded-lg font-bold uppercase tracking-widest text-xs transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
            >
              View Projects
            </a>
            <a
              href="https://wa.me/918086842985"
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:bg-white/5 rounded-lg font-bold uppercase tracking-widest text-xs transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Content - Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[30rem] lg:w-[32rem] lg:h-[38rem] rounded-lg overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <img
              src={profileImage}
              alt="Developer Portrait"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </motion.div>

          {/* Experience Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-10 -left-4 bg-background/60 backdrop-blur-xl border border-primary/20 p-4 sm:p-5 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 flex items-center gap-4 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-all duration-500" />
              <div className="relative text-3xl sm:text-4xl font-black gradient-text bg-gradient-to-br from-primary to-blue-400">
                1+
              </div>
            </div>
            <div className="text-[10px] sm:text-xs text-muted font-bold uppercase tracking-[0.2em] leading-tight">
              Years of
              <br />
              <span className="text-white">Experience</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
