const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}

		},
		{
		test: /\.css$/,
		use: ExtractTextPlugin.extract(
		  {
		    fallback: 'style-loader',
		    use: ['css-loader']
		  })
		}
		]
	},
	plugins: [
		new HtmlWebpackPlugin(
		{
			template: './src/index.html'
		}),
		new ExtractTextPlugin('dist/styles/main.css', {
		    allChunks: true
		  }),
		// 'transform-runtime', {
		// 	'polyfill': false,
		// 	'regenerator': true
		// }
	]
};
