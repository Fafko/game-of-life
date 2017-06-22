const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  },
  watchOptions: {
    ignored: /node_modules/
  },
  context: path.join(__dirname, '/'),
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new CopyWebpackPlugin([
      {from: './src/css/app.css', to: './css/app.css'}
    ])
  ]

};