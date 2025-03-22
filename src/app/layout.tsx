import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// Modern primary font
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
});

// Modern secondary font
const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
});

// Keep Geist for mono/code sections
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Link.AI - KI-Integrationslösungen für Unternehmen",
  description: "Link.AI bietet spezialisierte KI-Beratung und Integrationslösungen für Unternehmen in Deutschland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Keep any existing head content */}
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Stammer.ai chatbot script - properly placed at the end of body */}
        <Script
          src="https://app.stammer.ai/static/chatbot/js/chatbubble.js"
          data-id="d9d19721-4107-4a18-b031-883051443ee2"
          data-domain="https://app.stammer.ai"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
