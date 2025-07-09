import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginVue from 'eslint-plugin-vue'
import typescriptEslintParser from '@typescript-eslint/parser'
import eslintPluginImport from 'eslint-plugin-import'

export default [
  {
    ignores: ['dist', 'eslint.config.js', 'vite.config.ts', 'scripts/sassPack.js']
  },
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: typescriptEslintParser,
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      'vue': eslintPluginVue,
      '@typescript-eslint': typescriptEslintPlugin,
      'prettier': eslintPluginPrettier,
      'import': eslintPluginImport
    },
    rules: {
      'no-useless-escape': 'off',
      'no-irregular-whitespace': 'off',
      'vue/custom-event-name-casing': 'off',
      'vue/no-v-model-argument': 'off',
      'vue/no-v-html': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'vue/return-in-computed-property': 'off',
      'vue/v-on-event-hyphenation': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/require-explicit-emits': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'import/extensions': ['error', 'never', {
        'js': 'never',
        'ts': 'never',
        'vue': 'always',
        'scss': 'always'
      }],
      '@typescript-eslint/consistent-type-imports': 'error',
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts'],
        },
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        }
      }
    }
  }
]
