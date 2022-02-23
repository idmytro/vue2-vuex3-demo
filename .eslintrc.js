module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-shadow': [2, { allow: ['state'] }],
    'space-before-function-paren': [2, {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always',
    }],
  },
};
