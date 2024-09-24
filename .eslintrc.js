module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:prettier/recommended', // Tämä lisää Prettierin suositellut asetukset
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react-native/no-inline-styles': 'off',
  },
};
