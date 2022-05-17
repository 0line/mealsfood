module.exports = {
	mode: "aot",
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts,scss,css,js,jsx,ts,tsx,vue}",
			'./public/**/*.html',
		],
		options: {
			defaultExtractor: (content) => [
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
		},
		safelist: [/^svelte-[\d\w]+$/],
	},
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Century Gothic'," ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
			},
			colors: {
				'drpm-verde': {
					light: "#00ee59",
					default:'#008833',
					dark:"#005520"
				},
				'drpm-gris': {
					light:"#a9aaad",
					default:'#75777B',
					dark:"#5c5e61"
				},
				'drpm-negro': {
					default:'#221F1C',
				}
			}
		},
	},
	variants: {
		extend: {borderColor: ['responsive', 'hover', 'focus', 'focus-within']},
	},
	plugins: [],
};
