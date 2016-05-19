var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react-with-addons.min.js');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

var config = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
      alias: {
        'react': pathToReact,
        'react-dom': pathToReactDOM
      },
      extensions: ['', '.js', '.jsx']
    },
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
        loader: 'style!css'
      }],
      noParse: [pathToReact]
    }
};

module.exports = config;
