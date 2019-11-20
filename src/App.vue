<template>
	<div id="app">
		<!--		<transition :name="transitionName">-->
		<transition name="router-fade" mode="out-in">
			<keep-alive>
				<router-view v-if="$route.meta.keepAlive" class="Router" />
			</keep-alive>
			</transition>
			<transition name="router-fade" mode="out-in">
				<router-view v-if="!$route.meta.keepAlive" class="Router" />
			</transition>
		
		<NavBottomView></NavBottomView>
	</div>
</template>
<script>
	import NavBottomView from './components/NavBottom.vue'
	export default {
		data() {
			return {
				isshow: true,
				transitionName: 'slide-right' // 默认动态路由变化为slide-right
			}
		},
		watch: {
			$route(to, from) { //使用watch 监听$router的变化
				//如果to的索引值为0，不添加任何动画；如果to索引大于from索引,判断为前进状态,反之则为后退状态
				if(to.meta.index > 0) {
					if(to.meta.index < from.meta.index) {
						this.transitionName = 'slide-right';
					} else {
						this.transitionName = 'slide-left';
					}
				} else if(to.meta.index == 0 && from.meta.index > 0) {
					this.transitionName = 'slide-right';
				}

				//当然，如果你没有需要设置索引值为0的页面可以直接用着一段
				if(to.meta.index < from.meta.index) {
					this.transitionName = 'slide-right';
				} else {
					this.transitionName = 'slide-left';
				}
			}

		},
		computed: {
			isShow() {
				return this.$store.state.isShow;
			}
		},
		components: {
			NavBottomView
		}
	}
</script>
<style lang="scss">
	@import "@/assets/styles/_vars.scss";
	*,
	::before,
	::after {
		padding: 0;
		margin: 0;
		/*去掉chorm浏览器中默认点击的颜色*/
		-webkit-tap-highlight-color: transparent;
		-webkit-box-sizing: border-box;
	}
	
	body {
		font-size: 14px;
		font-family: -apple-system,Helvetica,sans-serif;
		color: #000;
	}
	body.dialog-open {
	  position: fixed;
	  width: 100%;
	}
	
	a {
		text-decoration: none;
		color: #000;
	}
	
	ul {
		list-style: none;
	}
	
	input,
	textarea {
		border: none;
		resize: none;
		outline: none;
		/*清除移动设备中表单的默认样式*/
		-webkit-appearance: none;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	
	.Router {
		position: absolute;
		width: 100%;
		transition: all .8s ease;
		top: 0;
	}
	/*.slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all .3s;
        position: absolute;
        width:100%;
        left:0;
    }
    .slide-right-enter {
        transform: translateX(-100%);
    }
    .slide-right-leave-active {
        transform: translateX(100%);
    }
    .slide-left-enter {
        transform: translateX(100%);
    }
    .slide-left-leave-active {
        transform: translateX(-100%);
    }*/
	/*.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
		transition: all 300ms;
	}
	
	.slide-right-enter {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}
	
	.slide-right-leave-to {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}
	
	.slide-left-enter {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}
	
	.slide-left-leave-to {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}*/
	
	.router-fade-enter-active,
	.router-fade-leave-active {
		transition: opacity .2s;
	}
	
	.router-fade-enter,
	.router-fade-leave-active {
		opacity: 0;
	}
	
	:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: #999;
		font-size: 24px;
		letter-spacing: 1px;
	}
	
	::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: #999;
		font-size: 22px;
		letter-spacing: 1px;
	}
	
	input:-ms-input-placeholder,
	textarea:-ms-input-placeholder {
		color: #999;
		font-size: 24px;
		letter-spacing: 1px;
	}
	
	input::-webkit-input-placeholder,
	textarea::-webkit-input-placeholder {
		color: #999;
		font-size: 24px;
		letter-spacing: 1px;
	}
	
	.f22 {
		font-size: 22px!important;
	}
	
	.f24 {
		font-size: 24px!important;
	}
	
	.f26 {
		font-size: 26px!important;
	}
	
	.f28 {
		font-size: 28px!important;
	}
	
	.fwb {
		font-weight: bold!important;
	}
	
	.c333 {
		color: #333;
	}
	
	.c666 {
		color: #666;
	}
	
	.c999 {
		color: #999;
	}
	
	.pdt20 {
		padding-top: 20px;
	}
	.mgt20{
		margin-top:20px;
	}
	.mgt26{
		margin-top:26px;
	}
	.mgb20{
		margin-bottom:20px;
	}
	
	.mgl20 {
		margin-left: 20px;
	}
	
	.fwb {
		font-weight: bold;
	}
</style>