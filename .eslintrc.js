module.exports = {
  extends: ['react-app', 'airbnb', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
      { usePrettierrc: true },
    ],
  },
};
