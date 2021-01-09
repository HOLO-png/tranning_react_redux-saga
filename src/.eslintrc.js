module.exports = {
  parser: babel-eslint,
  parserOptions:{
      ecmaVersion: 6,
      sourceType: module,
      ecmaFeatures: {
          jsx: true
      }
  },
  extends: ['airbnb', 'plugin:react/recommended', 'airbnb', 'prettier'],
  rules: {
    semi: 1,
    'react/prop-types': 2,
    'react/jsx-max-props-per-line': 1,
    'linebreak-style': 0,
    indent: 0,
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'comma-dangle': 0,
    'prettier/prettier': ['error'],
    'react/jsx-uses-vars': 2
  },
  plugin: ['prettier'],
  env: {
      'es6': true,
      'browser': true,
      'node': true
  },
  "husky": {
      "hooks": {
          "pre-commit": "lint-staged"
      }
  },
  "lint-staged": {
      "**/*.{js,css}": [
          "eslint src",
          "npm run format",
          "git add ."
      ]
  }

};
