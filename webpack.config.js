const path = require('path');

module.exports = {
  entry: './src/taskpane/taskpane.js',
  output: {
    filename: 'taskpane.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
    fixed:24390
  }
};
