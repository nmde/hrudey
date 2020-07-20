/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const repl = require('repl');
const packageJson = require('../package.json');
const common = require('./common');

const exclude = [];
const externals = {};
exclude
  // eslint-disable-next-line no-underscore-dangle
  .concat(repl._builtinLibs)
  .concat(Object.keys(packageJson.dependencies))
  .forEach((lib) => {
    externals[lib] = `commonjs ${lib}`;
  });

module.exports = {
  ...common,
  entry: {
    backend: path.resolve(__dirname, '..', 'src', 'backend', 'index.ts'),
  },
  externals,
  node: false,
};