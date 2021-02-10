const merge = require("webpack-merge"); //eslint-disable-line
const common = require("./webpack.common.js");

module.exports = merge(common, {
  entry: ["./src/demo"],
  output: {
    path: `${__dirname}/dist`,
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  devtool: "cheap-module-eval-source-map",
});
