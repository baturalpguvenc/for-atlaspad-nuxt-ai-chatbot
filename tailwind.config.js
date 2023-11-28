/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './components/**/*.{js,vue,ts}',
	  './layouts/**/*.vue',
	  './pages/**/*.vue',
	  './plugins/**/*.{js,ts}',
	  './nuxt.config.{js,ts}',
	  './app.vue'
	],
	theme: {
	  extend: {
		colors: {
		  // Ethereum Colors
		  'eth-blue': '#3C3C3D',
		  'eth-light-blue': '#7BA5D1',
		  'eth-dark-blue': '#232323',
		  'eth-gray': '#8C8C8C',
		  'eth-light-gray': '#E5E5E5',
		  'eth-black': '#141414',
		  'eth-white': '#FFFFFF',
		  'eth-green': '#57CB8B',

		  // Background Gradient
		  'bg-gradient': 'linear-gradient(109.6deg, rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1%)',
		},
		boxShadow: {
		  'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		  'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		},
		borderRadius: {
		  'md': '0.375rem',
		  'lg': '0.75rem',
		  'full': '9999px',
		},
		minHeight: {
		  '60vh': '60vh',
		},
		fontSize: {
		  'sm': '0.875rem',
		  'smp-2': '0.8125rem',
		},
		animation: {
		  'wave': 'wave 1.5s infinite',
		},
		keyframes: {
		  'wave': {
			'0%, 100%': { transform: 'translateY(-50%)' },
			'50%': { transform: 'translateY(0%)' },
		  },
		},
	  },
	},
	plugins: [],
  };
