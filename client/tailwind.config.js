/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			keyframes: {
				showAlert: {
					"0%": {
						opacity: 0,
						visibility: "unvisible"
					},
					"100%": {
						opacity: 1,
						visibilty: "visible"
					}
				},
				hideAlert: {
					"0%": {
						opacity: 1,
						visibility: "visible"
					},
					"100%": {
						opacity: 0,
						visibility: "unvisible"
					}
				}
			},
			animation: {
				"show-alert": "showAlert .5s linear",
				"hide-alert": "hideAlert .5s linear"
			}
		}
	},
	plugins: []
};
