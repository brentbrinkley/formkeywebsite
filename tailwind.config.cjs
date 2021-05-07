const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
	mode: "aot",
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts}",
		],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
		},
		safelist: [/^svelte-[\d\w]+$/, "filter", "backdrop-filter", "backdrop-blur-lg"],
	},
	theme: {
		extend: {
			colors: {
				"fkGreen": "#47B8AF",
				"fkOrange": "#FAAF43",
				"fkRed": "#F16C66",
				"fkBlue": "#64CDEA",
				"fkWhite": "#FBF4E9",
				"fkGray": "#C6BFB7",
				"fkText": "#878682",
				"fkBlack": "#424242"
			},
			fontFamily: {
				headline: ['Quicksand'],
				body: ['Poppins']
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
