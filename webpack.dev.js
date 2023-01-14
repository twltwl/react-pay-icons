module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  entry: ["./src/demo.js"],
  output: {
    path: `${__dirname}/docs`,
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: "./docs",
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
  devtool: "inline-nosources-cheap-module-source-map",
};
