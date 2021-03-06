/* eslint-disable no-undef */

module.exports = {
  extends: [
    './rules/possible-errors',
    './rules/best-practices',
    './rules/strict-mode',
    './rules/variables',
    './rules/nodejs-and-commonjs',
    './rules/stylistic-issues',
    './rules/ECMAScript-6',
    './rules/react',
    './rules/react-jsx',
    './rules/react-a11y',
    './rules/typescript-ts'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {}
};

/* eslint-enable no-undef */
