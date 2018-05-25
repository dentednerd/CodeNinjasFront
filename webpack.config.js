const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
    publicPath: '/',
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader'
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/',
    port: 9000,
    historyApiFallback: true,
  },
};
