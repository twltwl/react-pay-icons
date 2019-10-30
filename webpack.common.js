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
	},
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
	},
	output: {
		chunkFilename: "[name].[chunkhash].js"
	}
};
