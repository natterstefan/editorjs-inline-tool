module.exports = {
  extends: [
    'eslint-config-ns',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'class-methods-use-this': 0,
    'import/extensions': 0,
    'sort-keys': 0,
    '@typescript-eslint/interface-name-prefix': [
      2,
      {
        prefixWithI: 'always',
        allowUnderscorePrefix: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': 0,
  },
  overrides: [
    {
      files: [
        '.storybook',
        '**/__stories__/**/*.ts',
        '**/__stories__/**/*.tsx',
      ],
      rules: {
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
    {
      files: ['@types/**/*.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
