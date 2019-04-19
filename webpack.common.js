module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-inline-loader?classPrefix',
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};

