/* eslint-disable @typescript-eslint/no-var-requires */
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-video': "url('/videos/hero.mp4')", // https://www.pexels.com/video/shadows-of-clouds-on-the-grounds-surface-2815408/
        'hero-video-dark': "url('/videos/hero-dark.mp4')", // https://www.pexels.com/video/thick-clouds-of-the-sky-reflections-on-a-river-2815411/
      },
    },
  },
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          extend: 'dark',

          colors: {
            background: {
              800: '#0f1024',
              900: '#000000',
              DEFAULT: '#000000',
            },
            foreground: '#ffffff',
            primary: {
              50: '#FFC600',
              100: '#FFD600',
              200: '#FFE600',
              300: '#FFF700',
              400: '#FFFF00',
              500: '#FFFF00',
              600: '#FFFF00',
              700: '#FFFF00',
              800: '#FFFF00',
              900: '#FFFF00',
              DEFAULT: '#FFFF00',
              foreground: '#ffffff',
            },
            focus: '#FFFF00',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
        light: {
          extend: 'light',
          colors: {
            background: {
              800: '#C1DDE2',
              900: '#ffffff',
            },
            foreground: '#000000',
            primary: {
              50: '#B27300',
              100: '#BF7B00',
              200: '#CC8400',
              300: '#D88C00',
              400: '#E59400',
              500: '#F29C00',
              600: '#FFA500',
              700: '#FFAD00',
              800: '#FFB500',
              900: '#FFB500',
              DEFAULT: '#F29C00',
              foreground: '#000000',
            },
            focus: '#FFA500',
          },
          layout: {
            disabledOpacity: '0.7',
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
      },
    }),
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
};
