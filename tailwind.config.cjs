/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    './index.html',
  ],
  theme: {
    extend: {
        'animation': {
            'gradient':'gradient 8s ease infinite',
        },
             'keyframes': {
            'gradient': {
                '0%, 100%': {
                   
                    'background-size':'100% 400%',
                    'background-position': 'left right'
                },
                '50% ': {
                    'background-size':'400% 100%',
                    'background-position': ' right left'
                }
            },
    
        }
         
    }
},

  plugins: [],
}