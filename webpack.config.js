var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var STYLE_DIR = path.resolve(__dirname, 'src/client/app/styles');

var config = {
  entry: [APP_DIR + '/app.jsx',  './node_modules/jquery/dist/jquery.min.js'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  module: {
    rules: [{
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.woff$|\.woff2$|\.ttf$|\.eot$|\.svg$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./src/client/app/styles/**'), path.resolve('./src/client/app/components'), path.resolve('./src/client/app/api'), "node_modules"],
    extensions: [".js", ".jsx", ".css", ".less"]
  },
  devtool: 'cheap-module-eval-source-map',

};

module.exports = config;