/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        chalk:['chalk'],
        header:['header'],
        foot:['foot'],
        heading:['heading']
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        slideInFloat: 'slideIn 0.75s ease-in-out forwards, float 6s ease-in-out infinite 0.75s',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-15%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}