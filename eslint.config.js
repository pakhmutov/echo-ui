import js from '@eslint/js';
import vue from 'eslint-plugin-vue';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    ignores: ['dist/**', 'node_modules/**', '.vite/**', 'eslint.config.js', '**/*.d.ts'],
  },
  js.configs.recommended,
  ...vue.configs['flat/essential'],
  {
    name: 'app/vue-setup',
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
  },
  {
    name: 'app/node-files',
    files: ['vite.config.ts', 'eslint.config.js'],
    languageOptions: {
      globals: {
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        console: 'readonly',
      },
    },
  },
  {
    name: 'app/custom-rules',
    rules: {
      'vue/multi-word-component-names': 'off',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
];
