const path = require('path'); // CommonJS

module.exports = {
  mode: 'production',
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    },{
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
  ]
  },
  devtool: 'source-map'
};
