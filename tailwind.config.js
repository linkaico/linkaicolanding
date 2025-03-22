/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-code)'],
      },
      letterSpacing: {
        tighter: 'var(--letter-spacing-tight)',
        wider: 'var(--letter-spacing-wide)',
      },
    },
  },
  plugins: [],
} 