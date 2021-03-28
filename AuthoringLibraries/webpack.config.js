const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    library: { name: 'webpackNumbers', type: 'umd' },
  },
  externals: {
    // ライブラリの依存関係を仕様側に委譲しライブラリのbundleサイズを削減する
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};