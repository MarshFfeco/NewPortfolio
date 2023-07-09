const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/assets/ts/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src', 'assets', 'js'),
  },
  devtool: 'source-map'
};
