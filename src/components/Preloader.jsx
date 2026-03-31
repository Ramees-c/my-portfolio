import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ isLoading, onLoadingComplete }) => {
  const [showProgress, setShowProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setShowProgress(prev => {
        const next = prev + Math.random() * 25;
        if (next >= 95) {
          clearInterval(interval);
          return 95;
        }
        return next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setShowProgress(100);
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.6, delay: isLoading ? 0 : 0.2 }}
      className="fixed inset-0 bg-background z-50 flex items-center justify-center flex-col gap-6 sm:gap-8 pointer-events-none px-4"
      style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6">
        {/* Animated Logo/Circle */}
        <div className="relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24">
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 border-2 sm:border-[2.5px] md:border-3 border-transparent border-t-primary border-r-primary rounded-full"
          />

          {/* Middle rotating ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 border-2 sm:border-[2.5px] md:border-3 border-transparent border-b-secondary border-l-secondary rounded-full"
          />

          {/* Inner pulse circle */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-4 bg-gradient-to-br from-primary to-secondary rounded-full opacity-30 blur-sm"
          />

          {/* Center dot */}
          <motion.div
            animate={{ scale: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-6 sm:inset-5 md:inset-7 bg-gradient-to-br from-primary to-secondary rounded-full"
          />
        </div>

        {/* Text Animation */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent px-2"
          >
            Welcome to My Portfolio
          </motion.h2>

          {/* Loading dots */}
          <div className="flex justify-center gap-1 sm:gap-1.5 mt-3 sm:mt-4">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut'
                }}
                className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar - Smooth Animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary via-blue-400 to-secondary origin-left"
        animate={{ scaleX: showProgress / 100 }}
        transition={{
          duration: 0.5,
          ease: 'easeOut'
        }}
      />
    </motion.div>
  );
};

export default Preloader;
