module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
plugins: [
  'react-refresh',
  '@typescript-eslint',
  'eslint-plugin-simple-import-sort',
  'eslint-plugin-import',
  'fsd-import'
],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': 'error',
    'prefer-const': 'error',
    'max-len': ['error', { code: 120 }],
    'no-trailing-spaces': 'error',
    // 'import/order': ["error", {
    //   "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
    //   "newlines-between": "always"
    // }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'fsd-import/fsd-relative-path': 'error',
    'fsd-import/public-api-imports': 'error',
    'fsd-import/layer-imports': 'error',
  }
}
