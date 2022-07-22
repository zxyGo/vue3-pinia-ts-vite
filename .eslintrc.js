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
		"import/no-extraneous-dependencies": 0,
		"no-param-reassign": 0, // 禁止对函数参数再赋值
		"no-underscore-dangle": 0, // 禁止标识符中有悬空下划线
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never"
			}
		]
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
