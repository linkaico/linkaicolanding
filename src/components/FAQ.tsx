'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import ContactModal from './ContactModal';

const FAQ = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <AnimatedSection id="faq" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Häufig gestellte <span className="gradient-text">Fragen</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Hier finden Sie Antworten auf die häufigsten Fragen rund um KI-Integration und unsere Dienstleistungen.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <FaqItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Haben Sie weitere Fragen? Kontaktieren Sie uns direkt und wir helfen Ihnen gerne weiter.
            </p>
            <motion.button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-block px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors font-medium"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Kontakt aufnehmen
            </motion.button>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Modal - Moved outside the AnimatedSection */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
  delay: number;
}

const FaqItem = ({ question, answer, delay }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <button
        className="w-full py-5 px-6 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{question}</h3>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-gray-700 dark:text-gray-300">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const faqData = [
  {
    question: "Was genau ist KI-Integration und wie kann sie meinem Unternehmen helfen?",
    answer: "KI-Integration bedeutet, künstliche Intelligenz nahtlos in Ihre bestehenden Geschäftsprozesse und IT-Systeme einzubinden. Sie kann Ihrem Unternehmen helfen, Effizienz zu steigern, Kosten zu senken, Entscheidungsprozesse zu verbessern, neue Produkte oder Dienstleistungen zu entwickeln und wettbewerbsfähig zu bleiben."
  },
  {
    question: "Welche Voraussetzungen muss mein Unternehmen für eine erfolgreiche KI-Integration erfüllen?",
    answer: "Die wichtigsten Voraussetzungen sind ein innovatives Mindset und klare Geschäftsziele. Aber keine Sorge: Teil unserer Dienstleistung ist es, Ihre aktuelle Situation zu analysieren und gegebenenfalls notwendige Vorbereitungen zu treffen, um die Grundlagen für eine erfolgreiche KI-Integration zu schaffen."
  },
  {
    question: "Wie lange dauert ein typischer KI-Integrationsprozess?",
    answer: "Die Dauer variiert je nach Komplexität und Umfang des Projekts. Kleinere Projekte können in wenigen Tagen umgesetzt werden, während umfassendere Transformationen mehrere Wochen oder länger dauern können. In unserer Analysephase erstellen wir einen detaillierten Zeitplan für Ihr spezifisches Projekt."
  },
  
  {
    question: "Benötige ich spezielle IT-Kenntnisse, um eine KI-Integration durchzuführen?",
    answer: "Nein, wir übernehmen die technische Umsetzung vollständig für Sie. Sie müssen lediglich Ihre Geschäftsprozesse kennen und uns Einblicke in Ihre Abläufe gewähren. Unsere Experten kümmern sich um die gesamte Programmierung, Integration und technische Implementierung der KI-Lösungen, sodass Sie sich weiterhin auf Ihr Kerngeschäft konzentrieren können."
  },
  {
    question: "Wie groß ist die Investition einer KI-Integration?",
    answer: "Die Kosten variieren je nach Umfang. Wir bieten flexible Pakete für verschiedene Budgets an. Vereinbaren Sie ein kostenloses Erstgespräch für ein individuelles Angebot. Generell setzen sich die Preise aus einer Installation/Programmierungs-Gebühr und einem monatlichen Abonnement zusammen."
  }
];

export default FAQ; 