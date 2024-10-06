module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        'primary-foreground': '#ffffff',
        secondary: '#E5E7EB',
        'secondary-foreground': '#1F2937',
        background: '#F9FAFB',
        foreground: '#1F2937',
        input: '#D1D5DB',
        accent: '#10B981',
      },
    },
  },
  plugins: [],
}