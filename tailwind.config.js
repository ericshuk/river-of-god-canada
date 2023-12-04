/* eslint-disable @typescript-eslint/no-var-requires */
const { nextui } = require('@nextui-org/react');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Nunito Sans'", 'sans-serif'],
        serif: ["'Playfair Display'", 'serif'],
        fantasy: ["'Great Vibes'", 'fantasy'],
      },
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
              50: '#8A86A9', // lightest shade
              100: '#7C78A0',
              200: '#6E6A97',
              300: '#605C8E',
              400: '#525084',
              500: '#45447B',
              600: '#373672',
              700: '#292868',
              800: '#1B1A5E',
              900: '#0D0C55', // darkest shade
              DEFAULT: '#8A86A9',
              foreground: '#000000',
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
              50: '#1A1833', // lightest shade
              100: '#211F3B',
              200: '#282643',
              300: '#2F2D4C',
              400: '#363454',
              500: '#3D3B5D',
              600: '#444266',
              700: '#4B496E',
              800: '#525076',
              900: '#59577F', // darkest shade
              DEFAULT: '#1A1833',
              foreground: '#ffffff',
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
