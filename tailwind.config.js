/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx}",
    "./src/**/*.{md,mdx}",
    "./pages/**/*.{md,mdx}",
    "./docusaurus.config.js",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Dark-first theme colors based on the design plan
        'dark-bg': {
          900: '#0f172a', // Primary dark background
          800: '#1e293b', // Secondary dark surface
          700: '#334155', // Tertiary dark surface
        },
        'light-text': {
          50: '#f8fafc', // Primary text
          100: '#f1f5f9', // Secondary text
          200: '#e2e8f0', // Muted text
        },
        // Accents based on the design plan
        'accent-primary': {
          400: '#22d3ee', // Blue/cyan for CTAs and highlights
          500: '#06b6d4',
          600: '#0891b2',
        },
        'accent-secondary': {
          400: '#a78bff', // Purple for technical elements
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        'accent-success': {
          400: '#34d399', // Green for positive states
          500: '#10b981',
          600: '#059669',
        },
        'accent-warning': {
          400: '#fbbf24', // Orange for alerts
          500: '#f59e0b',
          600: '#d97706',
        },
        'accent-error': {
          400: '#f87171', // Red for errors
          500: '#ef4444',
          600: '#dc2626',
        },
        // Technology-specific badges
        'tech-ros': {
          400: '#ff6600', // Orange for ROS 2
          500: '#e65100',
        },
        'tech-gazebo': {
          400: '#4f8fff', // Blue for Gazebo
          500: '#2962ff',
        },
        'tech-isaac': {
          400: '#a07cd9', // Purple for Isaac
          500: '#7c4dff',
        },
        'tech-vla': {
          400: '#2dd4bf', // Green for VLA
          500: '#0d9488',
        }
      },
      // Add custom spacing based on design requirements
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
      }
    },
  },
  plugins: [],
}
