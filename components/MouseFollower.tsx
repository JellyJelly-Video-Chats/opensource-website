'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const MouseFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      />
      <motion.div
        className="absolute w-8 h-8 rounded-full border border-white/20"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      />
    </div>
  );
};

export default MouseFollower; 