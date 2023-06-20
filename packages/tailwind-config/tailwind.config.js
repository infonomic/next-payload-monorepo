/** @type {import('tailwindcss').Config} */

// The server was started in app/server - so for the moment
// we make the config path relative for content[]

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  // darkMode: 'class',
  content: [
    '../web/pages/**/*.{js,ts,jsx,tsx,mdx}',
    '../web/components/**/*.{js,ts,jsx,tsx,mdx}',
    '../web/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/uikit/src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
}
