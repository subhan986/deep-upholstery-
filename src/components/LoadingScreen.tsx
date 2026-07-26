import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import logoImg from '../assets/images/LOGO (1).png';

interface LoadingScreenProps {
  onFinished?: () => void;
  duration?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onFinished,
  duration = 1600,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinished) onFinished();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onFinished]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-6 overflow-hidden select-none"
    >
      {/* Center Animated Logo Container */}
      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{
            scale: [0.95, 1.05, 1],
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="relative flex items-center justify-center p-4"
        >
          {/* Subtle Ambient Glow Behind Logo on White Canvas */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full bg-cyan-200/50 blur-2xl pointer-events-none"
          />

          {/* Logo Image */}
          <motion.img
            src={logoImg}
            alt="Restore DEEP Carpet & Upholstery Cleaning"
            className="h-20 sm:h-28 md:h-32 object-contain relative z-10 filter drop-shadow-md"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
