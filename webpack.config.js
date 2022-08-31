const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ['./client/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/oauth/**': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/protected/**': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/logout': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/google/**': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/dist',
    },
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
    }),
  ],
};

module.exports = config;
