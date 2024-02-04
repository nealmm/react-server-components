const path = require('path');
const ReactServerPlugin = require('react-server-dom-webpack/plugin');

module.exports = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ReactServerPlugin({ isServer: false })
  ]
};
