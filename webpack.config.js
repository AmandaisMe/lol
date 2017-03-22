var webpack = require('webpack');

module.exports = {
	//用于调试代码
	devtool: 'source-map',
	entry:'./index.js',
	output:{
		path:__dirname+'/public',
		filename:'bundle.js'
	},
	module:{
		loaders:[{
			test:/\.css$/,
			loader:'style-loader!css-loader'
		},{
			test:/\.html$/,
			loader:'html-loader' //引入template是 //vue-template-compiler
		},{
			test:/\.vue$/,
			loader:'vue-loader'
		}]
	},
	//vue 2.0 需要加入这句
	resolve:{
		alias:{
			vue:'vue/dist/vue.js'
		}
	},
	devServer:{
		contentBase:'./public',
		inline:true,
		port:2312
	}
}