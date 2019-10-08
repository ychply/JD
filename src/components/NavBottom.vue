<template>
	<transition name="slide">
		<ul class="footer-nav" v-if="visible">
			<!--<router-link tag="li" to="/home" class="tabItem">
				<a href="javascript:;" class="tab-item-link">
					<img src="../assets/images/a-home.png" alt="" class="tab-item-icon" />
				</a>
			</router-link>
			<router-link tag="li" to="/catgory" class="tabItem">
				<a href="javascript:;" class="tab-item-link">
					<img src="../assets/images/n-catergry.png" alt="" class="tab-item-icon" />
				</a>
			</router-link>
			<router-link tag="li" to="/find" class="tabItem">
				<a href="javascript:;" class="tab-item-link">
					<img src="../assets/images/n-find.png" alt="" class="tab-item-icon" />
				</a>
			</router-link>
			<router-link tag="li" to="/cart" class="tabItem">
				<a href="javascript:;" class="tab-item-link">
					<img src="../assets/images/n-cart.png" alt="" class="tab-item-icon" />
				</a>
			</router-link>
			<router-link tag="li" to="/mine" class="tabItem">
				<a href="javascript:;" class="tab-item-link">
					<img src="../assets/images/n-me.png" alt="" class="tab-item-icon" />
				</a>
			</router-link>-->
			<router-link v-for="nav in footerNav" :key="nav.key" tag="li" active-class="active" :to="nav.key" class="tabItem">
				<i class="icon" :class="nav.icon"></i>
				<span>{{nav.title}}</span>
			</router-link>
		</ul>
	</transition>
</template>
<script>
	export default {
		data() {
			return {
				footerNav: [{
						key: '/home',
						title: '首页',
						icon: 'icon-home'
					},
					{
						key: '/catgory',
						title: '分类',
						icon: 'icon-catgory'
					},
					{
						key: '/find',
						title: '发现',
						icon: 'icon-find'
					},
					{
						key: '/cart',
						title: '购物车',
						icon: 'icon-cart'
					},
					{
						key: '/mine',
						title: '我的',
						icon: 'icon-mine'
					},
				]

			}
		},
		methods: {
			fixedTo() {

				// 检测浏览器的resize事件，当高度过小时就可以判定为出现这种情况，这时把定位改成ab或者直接隐藏掉之类的。
				//          var h = document.documentElement.clientHeight;
				//          
				//            window.onresize = ()=>{
				//           if (document.documentElement.clientHeight<h) {
				//	       		
				//           	console.log(123)
				//              //document.getElementsByTagName("nav")[0].style.display = "none";
				//              this.$refs.foot.style.display="none";
				//             }else{
				//                this.$refs.foot.style.display="block";
				//                console.log(456)
				//             }
				//          }

			}
		},
		mounted() {
			//	       	this.fixedTo();
		},
		computed: {
			visible() {
				return this.$route.meta.showFooter;
			},
		}

	}
</script>

<style lang="scss" scoped>
	.footer-nav {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		height: 90px;
		color: $color_text;
		box-shadow: 0 3px 14px 2px rgba(0, 0, 0, .12);
		background-color: $color_background;
		li {
			height: 100%;
			display: flex;
			flex-direction: column;
			flex: 1;
			align-items: center;
			justify-content: center;
			&.active {
				color: $color_primary;
			}
			.icon {
				font-size: 30px;
				margin-bottom: 4px;
			}
		}
		&.slide-enter,
		&.slide-leave-to {
			transform: translateY(100%);
		}
		&.slide-enter-active,
		&.slide-leave-active {
			transition: transform 250ms;
		}
	}
</style>