module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'react/prop-types': 0,
  },
  env: {
    jest: true,
    browser: true,
  },
};
