var Webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './source/main.js',
  output: {
    path: path.join(__dirname, '..', '..', 'lib', 'plugins'),
    filename: 'ccNetViz-export-image-plugin.js',
  },
  mode: 'production', // development
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
};
