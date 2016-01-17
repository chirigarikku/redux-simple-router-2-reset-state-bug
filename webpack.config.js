var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'script.js',
    path: __dirname + '/public/dist/'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx|es6)$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.es6']
  },
  plugins: [
    new webpack.DefinePlugin({
      _ENV_: process.env.NODE_ENV,
      _DEV_: process.env.NODE_ENV !== 'production',
      _PRODUCTION_: process.env.NODE_ENV === 'production',
      _REDUX_DEVTOOLS_: true
    })
  ]
};
