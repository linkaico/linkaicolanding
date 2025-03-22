'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-16 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute w-full h-full">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left side: Mission Statement */}
          <div className="w-full md:w-1/2 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="gradient-text text-6xl md:text-7xl lg:text-8xl">
                  Unsere Mission
                </span> 
                <br />
                <span className="leading-tight block mt-4">
                  Bis 2030 mithile von Künstlicher Intelligenz 242 Kleinunternehmern einen Wettbewerbsvorteil verschaffen
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
                Wir helfen Ihnen, mehr Zeit für das zu gewinnen, was Sie wirklich lieben. Mit maßgeschneiderten KI-Lösungen unterstützen wir Unternehmen dabei, effizienter zu arbeiten und ihre Prozesse zu optimieren.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <motion.a
                  href="https://calendly.com/linkaiconsulting/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-bg px-6 py-3 rounded-lg text-white font-medium text-center hover:opacity-90 transition-opacity text-xl"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Kostenloses Erstgespräch vereinbaren
                </motion.a>
                <motion.a
                  href="#process"
                  className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-center flex items-center justify-center text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-xl w-full sm:w-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  So sieht unsere Zusammenarbeit aus
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Right side: 3D Text Ring Animation */}
          <div className="w-full md:w-1/2">
            <motion.div
              className="relative mx-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-[450px] aspect-square mx-auto flex items-center justify-center">
                <TextRingAnimation />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3D Text Ring Animation Component
const TextRingAnimation = () => {
  const text = "Link.AI Consulting";
  const rings = 2;
  const ringSectors = 30;
  
  // Create array of sectors for each ring
  const getRingSectors = (ringIndex: number) => {
    return Array.from({ length: ringSectors }, (_, sectorIndex) => {
      const charIndex = sectorIndex % text.length;
      return text[charIndex] || "";
    });
  };
  
  return (
    <div className="preloader">
      {Array.from({ length: rings }, (_, ringIndex) => (
        <div key={`ring-${ringIndex}`} className={`preloader__ring ${ringIndex % 2 === 0 ? '' : 'reverse'}`}>
          {getRingSectors(ringIndex).map((char, sectorIndex) => (
            <div key={`sector-${ringIndex}-${sectorIndex}`} className="preloader__sector" style={{ 
              transform: `rotateY(${(360 / ringSectors) * sectorIndex}deg) translateZ(${ringIndex === 0 ? 9 : 11}rem)` 
            }}>
              {char || <span className="empty-sector"></span>}
            </div>
          ))}
        </div>
      ))}
      
      <style jsx>{`
        .preloader {
          animation: tiltSpin 8s linear infinite;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 28em;
          height: 28em;
          transform-style: preserve-3d;
        }
        
        .preloader__ring {
          animation: spin 4s linear infinite;
          transform-style: preserve-3d;
          font-size: 3.25em;
          position: relative;
          height: 5rem;
          width: 2.5rem;
        }
        
        .preloader__ring.reverse {
          animation-direction: reverse;
        }
        
        .preloader__sector {
          font-weight: 600;
          position: absolute;
          top: 0;
          left: 0;
          text-align: center;
          text-transform: uppercase;
          transform: translateZ(9rem);
          display: inline-block;
          width: 100%;
          height: 100%;
          color: var(--primary);
          text-shadow: 0 0 5px rgba(var(--primary-rgb), 0.5);
        }
        
        .empty-sector {
          display: inline-block;
          width: 100%;
          height: 100%;
          background: linear-gradient(transparent 45%, currentColor 45% 55%, transparent 55%);
        }
        
        @keyframes tiltSpin {
          from {
            transform: rotateY(0) rotateX(30deg);
          }
          to {
            transform: rotateY(1turn) rotateX(30deg);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotateY(0);
          }
          to {
            transform: rotateY(1turn);
          }
        }
        
        @media (max-width: 768px) {
          .preloader {
            width: 22em;
            height: 22em;
          }
          
          .preloader__ring {
            font-size: 2.75em;
            height: 4.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero; 