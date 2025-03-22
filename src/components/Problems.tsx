'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Problems = () => {
  return (
    <AnimatedSection id="problems" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">Herausforderungen</span> im Unternehmeralltag ohne KI 
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
          Traditionelle Methoden kosten Unternehmen täglich wertvolle Zeit und Ressourcen. Mit Link.AI's KI-Lösungen eröffnen sich neue Möglichkeiten für Effizienz und Wachstum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard 
              key={index} 
              title={problem.title} 
              description={problem.description} 
              icon={problem.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

interface ProblemCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ProblemCard = ({ title, description, icon, delay }: ProblemCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6"
    >
      <div className="text-primary dark:text-primary mb-4 text-2xl">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-lg text-gray-700 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const problems = [
  {
    title: "Kundenservice-Chaos",
    description: "Ständig überlastet durch wiederholte Anfragen? Unregelmäßige Reaktionszeiten und unerreichbar außerhalb der Geschäftszeiten? Manuelle Kundenbetreuung frisst wertvolle Zeit, die besser in Wachstum investiert wäre.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    )
  },
  {
    title: "Verlorene Leads",
    description: "Potenzielle Kunden gehen verloren durch langsame Reaktionen oder fehlende Follow-ups? Unqualifizierte Leads rauben Zeit und Ressourcen, während echte Chancen ungenutzt bleiben.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    )
  },
  {
    title: "Verpasste Termine",
    description: "Vergessene Terminerinnerungen, doppelte Buchungen und ständige Terminänderungen sorgen für Chaos? Unzufriedene Kunden und entgangene Chancen sind die Folge.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    )
  }
];

export default Problems; 