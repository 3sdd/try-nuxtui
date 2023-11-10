module.exports = {
	root: true,
	extends: ["@nuxtjs/eslint-config-typescript", "prettier"],
	overrides: [
		{
			rules: {
				"vue/multi-word-component-names": "off",
			},
		},
	],
};
