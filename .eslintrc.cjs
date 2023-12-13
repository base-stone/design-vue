module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
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
    '@typescript-eslint/ban-ts-comment': 'off'
  }
}
