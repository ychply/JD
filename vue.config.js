const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin; //Webpack包文件分析器
// 代码压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'prod';
console.log(process.env)
// 本地环境是否需要使用cdn
const devNeedCdn = false;
//console.log(isProduction)
// cdn预加载使用
//const externals = {
//	vue: 'Vue',
//	'vue-router': 'VueRouter',
//	vuex: 'Vuex',
//	axios: 'axios'
//
//}
const cdn = {
	// 开发环境
	externals: {
		'vue': 'Vue',
		'vuex': 'Vuex',
		'vue-router': 'VueRouter',
		'axios': 'axios',
		'vue-lazyload': 'VueLazyload',
		'mint-ui': 'MINT',
	},
	css: ['https://lib.baomitu.com/mint-ui/2.2.13/style.min.css'],
	js: [
		'https://lib.baomitu.com/vue/2.6.6/vue.min.js',
		'https://lib.baomitu.com/vue-router/3.0.1/vue-router.min.js',
		'https://lib.baomitu.com/vuex/3.0.1/vuex.min.js',
		'https://lib.baomitu.com/axios/0.18.0/axios.min.js',
		'https://lib.baomitu.com/vue-lazyload/1.2.6/vue-lazyload.js',
		'https://lib.baomitu.com/mint-ui/2.2.13/index.js'
	]

}

module.exports = {

	//productionSourceMap: false,
	//	chainWebpack: config => {
	//		config.plugin("define").tap(args => {
	//			args[0]["process.env"].BASE_URL = JSON.stringify(process.env.BASE_URL);
	//			return args;
	//		});
	//	},
	//	configureWebpack: {
	//		resolve: {
	//			alias: {
	//				"@": path.resolve("./src")
	//			}
	//		}
	//	},
	//
	css: {
		loaderOptions: {
			// options here will be passed to css-loader
			sass: {
				data: `@import "@/assets/scss/mixin.scss";
                       @import "@/assets/scss/variable.scss";`
			},
			//		       scss: {
			//		       	data: `@import "@/assets/styles/_vars.scss";`
			//		        },
			postcss: {
				// options here will be passed to postcss-loader
				plugins: [require('postcss-px2rem')({
					remUnit: 64
				})]
			}
		}
	},
	productionSourceMap: false,
	chainWebpack: config => {

		// ============注入cdn start============
		config.plugin('html').tap(args => {
			// 生产环境或本地需要cdn时，才注入cdn
			if(isProduction || devNeedCdn) args[0].cdn = cdn
			return args
		})
		// ============注入cdn start============
	},
	configureWebpack: config => {
		// 用cdn方式引入，则构建时要忽略相关资源
		if(isProduction || devNeedCdn) config.externals = cdn.externals

		// 生产环境相关配置
		if(isProduction) {
			// 代码压缩
			config.plugins.push(
				new UglifyJsPlugin({
					uglifyOptions: {
						//生产环境自动删除console
						compress: {
							//                          warnings: false, // 若打包错误，则注释这行
							drop_debugger: true,
							drop_console: true,
							pure_funcs: ['console.log']
						}
					},
					sourceMap: false,
					parallel: true
				})
			)
			//
			// gzip压缩
			const productionGzipExtensions = ['html', 'js', 'css']
			config.plugins.push(
				new CompressionWebpackPlugin({
					filename: '[path].gz[query]',
					algorithm: 'gzip',
					test: new RegExp(
						'\\.(' + productionGzipExtensions.join('|') + ')$'
					),
					threshold: 10240, // 只有大小大于该值的资源会被处理 10240
					minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
					deleteOriginalAssets: false // 删除原文件
				})
			)

			// 公共代码抽离
			config.optimization = {
				splitChunks: {
					cacheGroups: {
						vendor: {
							chunks: 'all',
							test: /node_modules/,
							name: 'vendor',
							minChunks: 1,
							maxInitialRequests: 5,
							minSize: 0,
							priority: 100
						},
						common: {
							chunks: 'all',
							test: /[\\/]src[\\/]js[\\/]/,
							name: 'common',
							minChunks: 2,
							maxInitialRequests: 5,
							minSize: 0,
							priority: 60
						},
						styles: {
							name: 'styles',
							test: /\.(sa|sc|c)ss$/,
							chunks: 'all',
							enforce: true
						},
						runtimeChunk: {
							name: 'manifest'
						}
					}
				}
			}
		}
	},

	devServer: {
		disableHostCheck: true, //内网穿透
		port: 8088, // 端口号
//		host: '192.168.1.210',
				  host: '192.168.1.4',
		//  host: '127.0.0.1',

		https: false, // https:{type:Boolean}
		open: true, //配置自动启动浏览器
		//		 proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
		proxy: {
			'/api': {
								target: 'http://192.168.1.4:3600/',
//				target: 'http://192.168.1.210:3600/',
				ws: true, // 是否启用websockets
				changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
				pathRewrite: {
					'^/api': '/'
					//这里理解成用‘/api’代替target里面的地址，
					// 后面组件中我们掉接口时直接用api代替 比如我要调
					// 用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
				}

			}

		}
	}

}