const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin; //Webpack包文件分析器
//const isProduction = process.env.NODE_ENV === 'production';
//console.log(isProduction)
// cdn预加载使用
//const externals = {
//	vue: 'Vue',
//	'vue-router': 'VueRouter',
//	vuex: 'Vuex',
//	axios: 'axios'
//
//}
//const cdn = {
//	// 开发环境
//	dev: {
//		css: [
//
//		],
//		js: []
//	},
//	// 生产环境
//	build: {
//		css: [],
//		js: [
//			'https://lib.baomitu.com/vue/2.6.6/vue.min.js',
//			'https://lib.baomitu.com/vue-router/3.0.1/vue-router.min.js',
//			'https://lib.baomitu.com/vuex/3.0.1/vuex.min.js',
//			'https://lib.baomitu.com/axios/0.18.0/axios.min.js',
//		]
//	}
//}

module.exports = {
	chainWebpack: config => {
		config.plugin("define").tap(args => {
			args[0]["process.env"].BASE_URL = JSON.stringify(process.env.BASE_URL);
			return args;
		});
	},
	configureWebpack: {
		resolve: {
			alias: {
				"@": path.resolve("./src")
			}
		}
	},

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

	devServer: {
		disableHostCheck: true, //内网穿透
		port: 8088, // 端口号
		host: '192.168.1.217',
		//  host: '192.168.1.4',
		//  host: '127.0.0.1',

		https: false, // https:{type:Boolean}
		open: true, //配置自动启动浏览器
		// proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
		proxy: {
			'/api': {
				//target: 'http://192.168.1.4:3100/',
				target: 'http://192.168.1.217:3100/',
				ws: true,
				changeOrigin: true,
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