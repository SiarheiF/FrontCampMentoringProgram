'use strict';
const webpack = require('webpack');

module.exports = {
	entry: ["webpack-dev-server/client","./script"],
	output:{
		filename: "build.js"
	},
	modules:{
		loaders:[{
			test: /\*.js$/,
			loader: 'babel-loader'
		},{
			test: /\.(eot|woff|ttf|svg|png|jpg)$/,
			loader: 'url-loader?limit=30000&name=[path][name]-[hash].[ext]'
		},{
			test: /\*.css$/,
			loader: 'css-loader'
		}]
	},
	plugins:[
	new webpack.DefinePlugin({PRODUCTION: true}),
	new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
	  filename: "commons.js",
      minChunks: 2,
	  chunks:["script", "filldocument"]
    }),
	new webpack.NoErrorsPlugin(),
	new webpack.HotModuleReplacementPlugin()
	],
	devServer:{
		hot:true,
		host:"localhost",
		port:"6666",
		contentBase:"~/build"
	}
}