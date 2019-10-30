const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
	entry: ["./src/PaymentIcon.jsx"],
	output: {
		path: `${__dirname}/build`,
		filename: "index.js",
		library: "react-payment-icons-inline",
		libraryTarget: "commonjs2"
	},
	plugins: [new UglifyJSPlugin()]
});
