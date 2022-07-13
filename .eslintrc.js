module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		"plugin:vue/vue3-essential",
		"airbnb-base",
		"plugin:prettier/recommended", // 添加 prettier 插件
		"plugin:import/typescript"
	],
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module"
	},
	plugins: ["vue", "@typescript-eslint"],
	rules: {
		"import/no-extraneous-dependencies": 0
	},
	settings: {
		"import/resolver": {
			alias: [
				["@", "./src"],
				["_c", "./src/components"],
				["_v", "./src/views"]
			]
		}
	}
}
