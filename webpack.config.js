const path = require('path');

module.exports = {
  mode: "development",
  entry: './app.js',
  devServer: {
  contentBase: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};