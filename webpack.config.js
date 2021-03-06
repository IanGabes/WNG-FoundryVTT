const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ASSET_PATH = 'assets/'

module.exports = {
  output: {
    publicPath: ''
  },
  entry: [
    './src/wng.js',
    './assets/sass/wng.scss'
  ],
  context: path.join(__dirname, "./"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'wng.js',
    publicPath: ""
  },
  /* SASS --> CSS */ 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'assets/css/', name: '[name].min.css', publicPath: ''}
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'assets/fonts', to: 'assets/fonts' },
        { from: 'assets/img', to: 'assets/img' },
        { from: 'assets/templates', to: 'assets/templates' },
        { from: 'config/', to: '.' }
      ],
    }),
  ],
};
