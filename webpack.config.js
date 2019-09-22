const path = require('path');

module.exports = {
  entry: {
    daybreak: './example.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'daybreak',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel',
        test: /\.jsx?$/,
      },
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.scss$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
