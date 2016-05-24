/*
* @Author: chaofan
* @Date:   2016-05-24 17:58:16
* @Last Modified by:   chaofan
* @Last Modified time: 2016-05-24 17:59:17
*/

var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './todoMVC/index.js'
  ],
  output: {
    path: path.join(__dirname, 'reddit/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    alias: {
      'react': pathToReact,
      'react-dom': pathToReactDOM
    },
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }, {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=25000'
    }, {
      test: /\.css$/,
      loader: 'style!css!postcss'
    }],
    noParse: [pathToReact]
  }
};

module.exports = config;
