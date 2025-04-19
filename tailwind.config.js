const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Ensure this covers all component locations
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)', // Keep default background/foreground if needed elsewhere
        foreground: 'var(--foreground)',
        gruvbox: { // Nested structure is key
          bg: '#282828',
          bg0: '#1d2021',
          bg1: '#3c3836',
          bg2: '#504945',
          bg3: '#665c54',
          bg4: '#7c6f64',
          fg: '#ebdbb2',
          fg0: '#fbf1c7',
          fg1: '#ebdbb2',
          fg2: '#d5c4a1',
          fg3: '#bdae93',
          fg4: '#a89984',
          red: '#cc241d',
          green: '#98971a',
          yellow: '#d79921',
          blue: '#458588',
          purple: '#b16286',
          aqua: '#689d6a',
          orange: '#d65d0e',
          'bright-red': '#fb4934', // Use kebab-case for multi-word keys
          'bright-green': '#b8bb26',
          'bright-yellow': '#fabd2f',
          'bright-blue': '#83a598',
          'bright-purple': '#d3869b',
          'bright-aqua': '#8ec07c',
          'bright-orange': '#fe8019',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono],
      },
    },
  },
  plugins: [],
}
