module.exports = {
  root: true,
  plugins: ['stylelint-prettier', 'stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order',
    'stylelint-config-idiomatic-css',
    'stylelint-config-prettier'
  ],
  rules: {
    'function-name-case': ['lower', { ignoreFunctions: ['pxTransform'] }],
    'value-keyword-case': ['lower', { ignoreKeywords: ['state.searchBarWidth'] }],
    'prettier/prettier': [
      true,
      {
        parser: 'less',
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extend',
          'at-root',
          'debug',
          'warn',
          'error',
          'if',
          'else',
          'for',
          'each',
          'while',
          'mixin',
          'include',
          'content',
          'return',
          'function',
          'tailwind',
          'layer',
          'apply',
        ],
      },
    ],
  },
}
