'use client';

import { useEffect, useRef } from 'react';

export default function ChatbotEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <section id="chatbot" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-center mb-6">Chat mit unserem KI-Assistenten</h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Unser KI-Assistent kann Ihre Fragen zu KI-Integrationslösungen sofort beantworten.
          Testen Sie es direkt hier!
        </p>
        <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-white">
          <iframe 
            ref={iframeRef}
            src="https://app.stammer.ai/en/chatbot/embed/d9d19721-4107-4a18-b031-883051443ee2" 
            width="100%" 
            height="600" 
            frameBorder="0" 
            allow="microphone"
            title="Stammer.ai Chatbot"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
} 