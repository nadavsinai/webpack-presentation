module.exports = {
  entry: './entry',

  output: {
    path: 'output',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.ts/, loader: 'ts' }
    ]
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  }
};
