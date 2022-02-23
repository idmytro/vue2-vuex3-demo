module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb-vue-idmytro',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-shadow': [2, { allow: ['state'] }],
  },
};
