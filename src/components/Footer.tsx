'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus(null);

    try {
      // Call our API endpoint to store the email
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(data.message || 'Vielen Dank für Ihre Anmeldung!');
        setEmail('');
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'Es gab ein Problem bei der Anmeldung. Bitte versuchen Sie es später erneut.');
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Es gab ein Problem bei der Anmeldung. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold gradient-text">Link.AI</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Spezialisierte KI-Integrationsberatung für Unternehmen in Deutschland. Wir verbinden Technologie mit Geschäftserfolg.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Schnellzugriff</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>In der Rehwiese 9<br/>40629, Deutschland</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:support@linkaiconsulting.com" className="hover:text-white transition-colors">support@linkaiconsulting.com</a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+4930123456789" className="hover:text-white transition-colors">+49 1624102244</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Abonnieren Sie unseren Newsletter für die neuesten Updates und Einblicke in die Welt der KI-Integration.
            </p>
            <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
              <div>
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full gradient-bg text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Wird abonniert...' : 'Abonnieren'}
              </motion.button>
              
              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm p-2 rounded ${
                    submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} link.AI Consulting. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const socialLinks = [
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184c-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.64 3.162a4.92 4.92 0 001.523 6.574 4.923 4.923 0 01-2.229-.618v.063c0 2.39 1.7 4.38 3.952 4.83a4.88 4.88 0 01-2.213.082 4.935 4.935 0 004.604 3.417 9.866 9.866 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.955 13.955 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
      </svg>
    )
  },
  {
    href: 'https://xing.com',
    label: 'Instagram',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.051c-.099.188-.093.381 0 .529.085.142.239.234.45.234h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.315-.434-.659-.962-.659H3.648v.016z" />
      </svg>
    )
  },
  {
    href: 'https://github.com',
    label: 'GitHub',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    )
  }
];

const quickLinks = [
  { href: '#mission', label: 'Mission' },
  { href: '#problems', label: 'Herausforderungen' },
  { href: '#solution', label: 'Lösung' },
  { href: '#process', label: 'Prozess' },
  { href: '#faq', label: 'FAQ' },
  { href: '#', label: 'Karriere' },
  { href: '#', label: 'Blog' }
];

const legalLinks = [
  { href: '#', label: 'Datenschutz' },
  { href: '#', label: 'Impressum' },
  { href: '#', label: 'AGB' },
  { href: '#', label: 'Cookie-Einstellungen' }
];

export default Footer; 