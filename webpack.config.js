'use strict';
const webpack = require('webpack');

module.exports = {
	entry: ["./script"],
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
	new webpack.NoErrorsPlugin()
	],
	devServer:{
		host:"localhost",
		port:"4567",
	}
}