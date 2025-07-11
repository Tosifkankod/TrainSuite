// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
// import eslintConfigPrettier from 'eslint-config-prettier'
import parser from '@typescript-eslint/parser'

export default tseslint.config({
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
        parser,
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            project: ['./tsconfig.json', './src/client/tsconfig.json', './src/server/tsconfig.json'],
            tsconfigRootDir: import.meta.dirname
        }
    },
    plugins: {
        '@typescript-eslint': tseslint.plugin
    },
    extends: [
        eslint.configs.recommended, 
        ...tseslint.configs.recommendedTypeChecked, 
        // eslintConfigPrettier
    ],
    rules: {
        'no-console': 'error',
        'no-useless-catch': 'off',
        quotes: ['error', 'single', { allowTemplateLiterals: true }]
    }
})