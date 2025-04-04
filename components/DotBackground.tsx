'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const DotBackground = () => {
  const [dots, setDots] = useState<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      for (let i = 0; i < 100; i++) {
        newDots.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
        });
      }
      setDots(newDots);
    };
    generateDots();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default DotBackground; 