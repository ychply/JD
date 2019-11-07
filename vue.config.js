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
	// 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  //例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。
      //baseUrl 从 Vue CLI 3.3 起已弃用，请使用publicPath
    //baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
    publicPath: process.env.NODE_ENV === "prod" ? "./" : "/",
    // publicPath: "/", // history模式打包用
    // outputDir: 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）
    outputDir: "dist",
    //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: "assets",
    //指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
  // indexPath: "myIndex.html",
    //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: false,
 
  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,
  //如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置
  // lintOnSave: process.env.NODE_ENV !== 'production',
 
  //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。(默认false)
  // runtimeCompiler: false,
 
  /**
   * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   *  打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
   *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
   *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
   * */
  productionSourceMap: false,
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
//		host: '192.168.1.210',
		  host: '192.168.1.4',
		//  host: '127.0.0.1',

		https: false, // https:{type:Boolean}
		open: true, //配置自动启动浏览器
//		 proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
		proxy: {
			'/api': {
				target: 'http://192.168.1.4:3100/',
//				target: 'http://192.168.1.210:3100/',
				ws: true,// 是否启用websockets
				changeOrigin: true,//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
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