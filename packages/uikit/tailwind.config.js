const sharedConfig = require("@org/tailwind-config/tailwind.config.js");

module.exports = {
  presets: [sharedConfig],
  darkMode: 'class',
  content: [
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
};
