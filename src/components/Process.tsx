'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Process = () => {
  return (
    <AnimatedSection id="process" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Unser <span className="gradient-text">3-Phasen-Prozess</span> für erfolgreiche KI-Integration
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            Wir begleiten Sie Schritt für Schritt auf dem Weg zu einer erfolgreichen KI-Integration, die Ihr Unternehmen nachhaltig transformiert.
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 z-0"></div>
          
          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <TimelineStep 
                key={index}
                step={index + 1}
                title={step.title}
                description={step.description}
                details={step.details}
                isLeft={index % 2 === 0}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <motion.a
            href="https://calendly.com/linkaiconsulting/30min"
            target="_blank"
            className="gradient-bg inline-block px-8 py-3 rounded-lg text-white font-medium text-center hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Ihren KI-Integrationsprozess starten
          </motion.a>
        </div>
      </div>
    </AnimatedSection>
  );
};

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  details: string[];
  isLeft: boolean;
  delay: number;
}

const TimelineStep = ({ step, title, description, details, isLeft, delay }: TimelineStepProps) => {
  return (
    <div className="md:grid md:grid-cols-2 items-center gap-8">
      <motion.div
        className={`mb-8 md:mb-0 ${isLeft ? 'md:order-1' : 'md:order-2'}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
      >
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}>
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full gradient-bg text-white font-bold text-xl">
              {step}
            </div>
            <h3 className="ml-4 text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">{description}</p>
          
          <ul className="space-y-3">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <svg className="flex-shrink-0 w-5 h-5 mt-1.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2 text-lg text-gray-700 dark:text-gray-300">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      
      <div className={`hidden md:flex ${isLeft ? 'md:order-2 justify-start' : 'md:order-1 justify-end'}`}>
        <motion.div
          className="h-12 w-12 rounded-full bg-primary flex items-center justify-center relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          <motion.div
            className="absolute h-full w-full rounded-full bg-primary/30"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

const steps = [
  {
    title: "Umfassende Unternehmensanalyse",
    description: "Wir beginnen mit einem tiefgreifenden Verständnis Ihrer aktuellen Geschäftsprozesse und Herausforderungen. In dieser Phase arbeiten wir eng mit Ihnen zusammen, um die Schmerzpunkte zu identifizieren und die optimalen KI-Lösungen für Ihre spezifischen Anforderungen zu ermitteln.",
    details: [
      "Vollständige Bewertung bestehender Arbeitsabläufe und Problemfelder",
      "Kollaborative Entdeckungssitzungen mit wichtigen Entscheidungsträgern",
      "Identifikation von KI-Integrationsmöglichkeiten mit hoher Wirksamkeit",
      "Maßgeschneiderte Lösungsplanung in Übereinstimmung mit Ihren Unternehmenszielen"
    ]
  },
  {
    title: "KI-Programmentwicklung & Integration",
    description: "Unser Expertenteam konzipiert und implementiert maßgeschneiderte KI-Lösungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind. Wir übernehmen die Programmierung von KI-Werkzeugen zur Automatisierung von Workflows, Kundendienst und Lead-Generierung, um die täglichen Aufgaben in Ihrem Unternehmen effizienter zu gestalten.",
    details: [
      "Individuelle Programmierung von KI-Tools zur Automatisierung kritischer Arbeitsabläufe",
      "Einsatz intelligenter Kundenservice- und Lead-Generierungsagenten",
      "Nahtlose Integration in bestehende Unternehmenssysteme und -prozesse",
      "Umfassendes Training und Onboarding zur Sicherstellung einer reibungslosen Einführung"
    ]
  },
  {
    title: "Kontinuierliche Überwachung & Weiterentwicklung",
    description: "Wir bieten fortlaufende Unterstützung, um optimale Leistung zu gewährleisten und Ihre KI-Investitionen zukunftssicher zu machen. Durch kontinuierliches Monitoring stellen wir sicher, dass Ihre Lösungen mit Ihren Geschäftsanforderungen Schritt halten und von neuen KI-Entwicklungen profitieren.",
    details: [
      "Proaktive Leistungsüberwachung und Wartung",
      "Schulungen für Ihre Mitarbeiter zur effektiven Nutzung der neuen Technologien",
      "Regelmäßige Updates und Verbesserungen basierend auf den neuesten KI-Entwicklungen",
      "Strategische Beratung zur Skalierung Ihrer KI-Fähigkeiten im Unternehmen"
    ]
  }
];

export default Process; 