var path = require('path');
var webpack = require('webpack');

module.exports = {
  // entry: './src/client.js',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3001/',
    'webpack/hot/only-dev-server',
    './src/client.js'
  ],
  output: {
    // filename: './src/dist/bundle.js'
    path: path.join(__dirname, 'src/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        // loader: 'babel', // 'babel-loader' is also a legal name to reference
        loaders: ['react-hot', 'babel'] // ,
        // query: {
        //   presets: ['es2015', 'react']
        // }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:' + (process.env.PORT) || 1337
    },
    host: '127.0.0.1'
  }
};
