import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ripple: {
          burgundy: '#800020',
          dark: '#111111',
          card: '#1E1E1E',
          soft: '#F4F4F5'
        }
      },
      borderRadius: {
        ripple: '1.25rem'
      }
    }
  },
  plugins: []
} satisfies Config;
