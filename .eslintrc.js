module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['react', 'react-hooks', 'react-native', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  rules: {
    'react/forbid-prop-types': 'off',
    'no-useless-escape': 'off',
    'no-shadow': 'error',
    'no-unused-expressions': 'off',
    'react/destructuring-assignment': [0],
    'import/named': 0,
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': ['error', {skipUndeclared: true}],
    'comma-dangle': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'import/prefer-default-export': 'off',
    'max-len': ['error', {code: 120}],
    // indent: 'warn',
    'object-curly-newline': 'off',
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'react/jsx-key': 'error',
    'react/no-array-index-key': 'error',
    'react/no-deprecated': 'error',
    'react/prefer-stateless-function': ['warn', {ignorePureComponents: true}],
    'react-native/no-inline-styles': 'warn',
    'react-native/no-single-element-style-arrays': 'error',
    'react-native/no-unused-styles': 'warn',
    'react/jsx-wrap-multilines': [
      'error',
      {declaration: false, assignment: false},
    ],
    'react/jsx-handler-names': 'warn',
    // hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  globals: {
    fetch: false,
  },
};