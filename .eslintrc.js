module.exports = {
  extends: ['taro', 'airbnb', 'prettier', 'prettier/react'],
  plugins: ['eslint-comments', 'react-hooks', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/sort-comp': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-this-in-sfc': 'off',
    'import/no-commonjs': 'off',
    'import/no-unresolved': 'off',
    'global-require': 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: 'Taro' }],
    semi: ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
  },
  parser: 'babel-eslint',
}
