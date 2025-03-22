'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactModal from './ContactModal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold gradient-text">Link.AI Consulting</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <NavLink href="#mission">Mission</NavLink>
              <NavLink href="#problems">Herausforderungen</NavLink>
              <NavLink href="#solution">Lösung</NavLink>
              <NavLink href="#process">Prozess</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
            </nav>
            <div className="md:hidden">
              <MobileMenu onContactClick={() => setIsContactModalOpen(true)} />
            </div>
            <div className="hidden md:flex">
              <motion.button 
                onClick={() => setIsContactModalOpen(true)}
                className="gradient-bg text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Kontakt
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Contact Modal - Moved outside the header */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium"
    >
      {children}
    </Link>
  );
};

const MobileMenu = ({ onContactClick }: { onContactClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-800 dark:text-gray-200 focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <motion.div
          className="absolute top-16 right-0 left-0 bg-white dark:bg-gray-900 p-4 shadow-lg rounded-b-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="#mission" onClick={() => setIsOpen(false)}>Mission</MobileNavLink>
            <MobileNavLink href="#problems" onClick={() => setIsOpen(false)}>Herausforderungen</MobileNavLink>
            <MobileNavLink href="#solution" onClick={() => setIsOpen(false)}>Lösung</MobileNavLink>
            <MobileNavLink href="#process" onClick={() => setIsOpen(false)}>Prozess</MobileNavLink>
            <MobileNavLink href="#faq" onClick={() => setIsOpen(false)}>FAQ</MobileNavLink>
            <motion.button
              onClick={() => {
                setIsOpen(false);
                onContactClick();
              }}
              className="gradient-bg text-white font-medium py-2 px-4 rounded-lg text-center hover:opacity-90 transition-opacity w-full"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Kontakt
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => {
  return (
    <Link
      href={href}
      className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium block py-2"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar; 