module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/standard',
		'@vue/typescript/recommended'
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
		'no-tabs': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
		'comma-dangle': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
		'indent': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
		'semi': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
		'quotes': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
		'eol-last': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
		'spaced-comment': 'off',
		'comma-spacing': 'off',
		'template-curly-spacing': 'off',
		'prefer-const': 'off',
		'no-trailing-spaces': 'off',
		'no-multiple-empty-lines': 'off',
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'keyword-spacing': 'off',
		'space-before-function-paren': 'off',
		'no-whitespace-before-property': 'off',
		'@typescript-eslint/no-inferrable-types': 'off'
	}
}
