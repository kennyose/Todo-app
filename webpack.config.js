var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'src/client/config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}

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
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
      }
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
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
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
    modules: [
      path.resolve('./src/client/app/styles/**'), 
      path.resolve('./src/client/app/styles'), 
      path.resolve('./src/client/app/components'), 
      path.resolve('./src/client/app/api'),
      path.resolve('./src/client/app/actions'), 
      path.resolve('./src/client/app/reducers'), 
      path.resolve('./src/client/app/store'), 
      path.resolve('./src/client/app/router'), 
      "node_modules"
    ],
    extensions: [".js", ".jsx", ".css", ".less", ".scss"]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};

module.exports = config;