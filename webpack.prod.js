const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
	entry: ["./src/index.jsx"],
	output: {
		path: `${__dirname}/build`,
		filename: "index.js",
		library: "react-payment-icons-inline",
		libraryTarget: "commonjs2",
		chunkFilename: "[name].[chunkhash].js"
	},
	plugins: [new UglifyJSPlugin()],
	// optimization: {
	// 	minimizer: [new TerserJSPlugin({})]
	// }
	externals: {
		react: {
			root: "React",
			commonjs2: "react",
			commonjs: "react",
			amd: "react"
		},
		"react-dom": {
			root: "ReactDOM",
			commonjs2: "react-dom",
			commonjs: "react-dom",
			amd: "react-dom"
		}
	}
});
