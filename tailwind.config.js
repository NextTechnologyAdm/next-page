/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep_purple': '#070010',
        'cetacean_blue': '#0a0b2e',
        'auro_metal': '#6b7280',
        'lavender_indigo': '#6a5acd',
        'picton_blue': '#4adede',        
      },
    },
  },
  plugins: [],
}