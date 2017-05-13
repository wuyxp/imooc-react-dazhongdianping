var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
    //entry: path.resolve(__dirname, 'app/index.jsx'),
	entry: "./app/index.jsx",
	output: {
		filename: "bundle.js"
	},
	resolve :{
		extensions:[".js",".jsx"]
	},
	module:{
		loaders:[
			{
				test: /\.(js|jsx)$/,
				exclude : /node_modules/,
				loader:"babel-loader",
                query:{
                    presets:[
                        "es2015",
                        "react"
                    ]
                }
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!postcss-loader!less-loader"
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!postcss-loader"
			},{
				test: /.(png|gif|jpg|jpeg|bmp)$/i,
				loader:"url-loader?limit=5000"
			},{
				test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
				loaders:"url-loader?limit=5000"
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:"./app/index.tmp.html"
		}),

		new webpack.HotModuleReplacementPlugin(),

		new OpenBrowserPlugin({
			url: "http://localhost:8080"
		}),

		new webpack.DefinePlugin({
            //__DEV__ : process.env.NODE_ENV =='dev' || 'false'
			__DEV__ : "true"
		})
	],
	devServer: {
		proxy: {
          	// 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
          	'/get': {
	            target: 'http://localhost:3000',
	            secure: false
			},
			'/post': {
				  target: 'http://localhost:3000',
				  secure: false
			}
        },
		historyApiFallback : true,
		inline: true,
		hot:true
	}
};
