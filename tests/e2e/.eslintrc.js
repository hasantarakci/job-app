module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['prettier', 'plugin:vue/essential', '@vue/prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
