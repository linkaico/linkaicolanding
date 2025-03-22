'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Solution = () => {
  return (
    <AnimatedSection id="solution" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side graphic/animation */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div 
              className="relative mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
                
                {/* Abstract AI visualization */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.circle
                      cx="400"
                      cy="300"
                      r="80"
                      stroke="var(--primary)"
                      strokeWidth="2"
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: 0.7 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.circle
                      cx="400"
                      cy="300"
                      r="120"
                      stroke="var(--secondary)"
                      strokeWidth="2"
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                    />
                    <motion.circle
                      cx="400"
                      cy="300"
                      r="160"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: 0.6 }}
                      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                    />
                    
                    {/* Nodes */}
                    {[...Array(12)].map((_, i) => {
                      const angle = (i * 30) * Math.PI / 180;
                      const x = 400 + 200 * Math.cos(angle);
                      const y = 300 + 200 * Math.sin(angle);
                      
                      return (
                        <motion.circle 
                          key={i}
                          cx={x}
                          cy={y}
                          r="8"
                          fill="var(--primary)"
                          initial={{ opacity: 0.5, scale: 0.8 }}
                          animate={{ opacity: 1, scale: [0.8, 1.2, 0.8] }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                        />
                      );
                    })}
                    
                    {/* Lines connecting nodes */}
                    {[...Array(12)].map((_, i) => {
                      const angle1 = (i * 30) * Math.PI / 180;
                      const angle2 = ((i + 1) % 12 * 30) * Math.PI / 180;
                      
                      const x1 = 400 + 200 * Math.cos(angle1);
                      const y1 = 300 + 200 * Math.sin(angle1);
                      const x2 = 400 + 200 * Math.cos(angle2);
                      const y2 = 300 + 200 * Math.sin(angle2);
                      
                      return (
                        <motion.line 
                          key={i}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="var(--accent)"
                          strokeWidth="1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.3 }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                        />
                      );
                    })}
                    
                    {/* Lines connecting to center */}
                    {[...Array(6)].map((_, i) => {
                      const angle = (i * 60) * Math.PI / 180;
                      const x = 400 + 200 * Math.cos(angle);
                      const y = 300 + 200 * Math.sin(angle);
                      
                      return (
                        <motion.line 
                          key={i}
                          x1="400"
                          y1="300"
                          x2={x}
                          y2={y}
                          stroke="var(--primary)"
                          strokeWidth="1.5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.6 }}
                          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: i * 0.3 }}
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right side content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">Link.AI</span>: Ihr Partner für erfolgreiche KI-Integration
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
                  Als spezialisiertes Beratungsunternehmen für KI-Integration unterstützen wir deutsche Unternehmen dabei, das volle Potenzial künstlicher Intelligenz zu erschließen und nahtlos in ihre bestehenden Geschäftsprozesse zu integrieren.
                </p>
                
                <div className="space-y-8">
                  {solutionPoints.map((point, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-4" 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <div className="flex-shrink-0 mt-1 text-primary">
                        <span className="text-2xl">{point.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                          {point.title}
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                          {point.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const solutionPoints = [
  {
    title: "Entwicklung einer individuell angepassten KI",
    description: "Wir programmieren eine auf Ihr Unternehmen maßgeschneiderte KI-Software. Diese automatisiert Kundenbetreuung, Akquise und Terminvereinbarung und gibt Ihnen so mehr Zeit für das Wesentliche.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    )
  },
  {
    title: "Integration von KI-Automatisierungen in Ihre Unternehmensprozesse",
    description: "Nach einer Status-quo-Analyse identifizieren wir automatisierbare Prozesse und integrieren unsere KI-Lösungen nahtlos in Ihre Systeme, um Abläufe effizienter zu gestalten und Programme intelligent zu verknüpfen.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    )
  },
  {
    title: "Social Media Management",
    description: "Unser Team setzt für sie gezielte Social Media - Marketingstrategien, um die Sichtbarkeit Ihres Unternehmens zu erhöhen. Dies ermöglicht den KI-Integartionen, ihr volles Potenzial auszuschöpfen.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
      </svg>
    )
  }
];

export default Solution; 