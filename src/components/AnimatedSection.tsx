'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const AnimatedSection = ({
  children,
  className = '',
  id,
  delay = 0.2,
  direction = 'up',
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getDirectionVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case 'down':
        return {
          hidden: { y: -50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case 'left':
        return {
          hidden: { x: 50, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case 'right':
        return {
          hidden: { x: -50, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case 'none':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      default:
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
    }
  };

  const variants = getDirectionVariants();

  return (
    <section id={id} className={className} ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{
          duration: 0.5,
          delay,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default AnimatedSection; 