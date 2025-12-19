const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.mjs');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/javascript'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {},
  },
];
