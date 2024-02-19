// const colors = require('tailwindcss/colors')
import colors from 'tailwindcss/colors.js'

export default  {
	purge    : ["./src/**/*.html", "./src/**/*.vue"],
	darkMode : false, // or 'media' or 'class'
	theme    : {
		extend : {
			fontFamily : {
				sans : ["'Open Sans'", "sans-serif"],
			},
			colors    : {
				primary: '#5c6ac4',
				secondary: '#ecc94b',
			},
			textColor: {
				primary: colors.coolGray['700']
			}
		},

	},
	variants : {
		extend : {},
	},
	// plugins  : [require("@tailwindcss/forms")],
	plugins: [import('@tailwindcss/forms')]
};
