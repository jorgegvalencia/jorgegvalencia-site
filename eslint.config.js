import eslintPluginAstro from 'eslint-plugin-astro'
import stylistic from '@stylistic/eslint-plugin'

export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	...eslintPluginAstro.configs.recommended,
  
	{
		plugins: {
			'@stylistic': stylistic
		},
		rules: {
			'@stylistic/semi': ['warn', 'never'],
			'@stylistic/indent': ['error', 'tab'],
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
		}
	}
]