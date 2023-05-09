/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        modal_overlay: "rgba(0,0,0,0.53)",
      },
      boxShadow: {
        "modalBtn": "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      },
      rotate: {
        '270': '270deg',
      },
      'animation': {
        'main':'text 3s ease infinite',
        "text": 'fadeout 1s linear',
        'modal': 'modal 500ms linear',
        'shake': "shake 3s ease infinite"
      },
      'keyframes': {
        'text': {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        },
        'shake': {
          "0%, 100%": {
            "transform": 'scale(1)'
          },
          "50%": {
            "transform": 'scale(1.5)'
          }
        },
        "fadeout": {
          "100%": {
            'opacity': "0"
          },
          "0%": {
            'opacity': "1"
          }
        },
        "modal": {
          "0%": {
            "transform": 'scale(0)'
          },
          "100%": {
            "transform": 'scale(1.5)'
          }
        }
      },

    },
  },
  plugins: [],
}
