const defaultRules = {
	// No console statements in production
	'no-console': process.env.NODE_ENV !== 'development' ? 'error' : 'off',
	// No debugger statements in production
	'no-debugger': process.env.NODE_ENV !== 'development' ? 'error' : 'off',
	// Enforce prettier formatting
	'prettier/prettier': 'error',
	'padding-line-between-statements': [
		'error',
		{
			blankLine: 'always',
			prev: [
				'block',
				'block-like',
				'cjs-export',
				'class',
				'export',
				'import',
				'multiline-block-like',
				'multiline-const',
				'multiline-expression',
				'multiline-let',
				'multiline-var',
			],
			next: '*',
		},
		{
			blankLine: 'always',
			prev: ['const', 'let'],
			next: ['block', 'block-like', 'cjs-export', 'class', 'export', 'import'],
		},
		{
			blankLine: 'always',
			prev: '*',
			next: ['multiline-block-like', 'multiline-const', 'multiline-expression', 'multiline-let', 'multiline-var'],
		},
		{ blankLine: 'any', prev: ['export', 'import'], next: ['export', 'import'] },
	],
	'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
	'no-nested-ternary': 'error',
	curly: ['error', 'multi-line'],
	'@typescript-eslint/no-non-null-assertion': 'off',
	'@typescript-eslint/no-explicit-any': 'off',
	'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
	"react/react-in-jsx-scope": "off"
};

module.exports = {
	// Stop looking for ESLint configurations in parent folders
	root: true,
	// Global variables: Browser and Node.js
	env: {
		browser: true,
	},
	// Basic configuration for js files
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/jsx-runtime',
		'prettier',
	],
	rules: defaultRules,
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	overrides: [
		// Jest
		{
			files: ['**/*.test.js'],
			env: {
				jest: true,
			},
			plugins: ['jest'],
			rules: defaultRules,
		},
	],
};
