module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.svg$/,
				loader: "svg-inline-loader?classPrefix"
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	}
};
