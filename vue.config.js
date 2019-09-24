module.exports={
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
        port: 8088, // 端口号
          host: '192.168.1.217',
//      host: '192.168.1.3',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
//              target: 'http://192.168.1.3:3100/',
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