module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'hologram': 'hologram 3s ease-in-out infinite',
        'neon': 'neon 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff' },
          '100%': { boxShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff' },
        },
        hologram: {
          '0%': { opacity: 0.3, transform: 'scale(0.95)' },
          '50%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0.3, transform: 'scale(0.95)' },
        },
        neon: {
          '0%': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0ff' },
          '100%': { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0ff' },
        }
      },
      backgroundImage: {
        'quantum-gradient': 'linear-gradient(45deg, #000428, #004e92, #000428)',
        'cyber-grid': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}