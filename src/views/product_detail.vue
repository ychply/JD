<template>
	<div class="m_detail">
		<header class="top_bar" :class="topClass">
			<span @click="_back" class="icon_bg"><i class="icon iconarrow-l fwb"></i></span>
			<ul class="nav_list">
				<li><i class="icon icondingwei"></i> 商品</li>
				<li><i class="icon icondingwei"></i> 评价</li>
				<li><i class="icon icondingwei"></i> 详情</li>
				<li><i class="icon icondingwei"></i> 推荐</li>
			</ul>
			<span class="icon_bg"><i class="icon icongengduo "></i></span>
		</header>
		<div ref="main" class="product_main">
			<div class="main_top">
				<div class="lImg">
					<!--<img :src="item.image_url" v-for="(item,index) in listImg" :key="index" />-->
					<swipe style="text-align: center; width: 100%; background: #42b983;">
						<swipe-item v-for="(item,index) in listImg" :key="index">
							<img style="width:100%; height:300px;" :src="item.image_url" />
						</swipe-item>
					</swipe>
				</div>
				<div class="proNa" v-for="(item,index) in listData" :key="index">
					<p>{{item.product_name}}</p>
					<p class="price">
						<span>￥{{item.product_price}}</span>
						<a href="#">降价通知</a>
					</p>
					<pre class="pdetail">{{item.product_detail}}{{item.product_detail}}</pre>
				</div>

			</div>
		</div>
		<footer v-if='isShow' class="pro_footer">
			<div class="fot_left">
				<a href="#">
					<em class="cat_pic_icon"></em>
					<span>商家</span>
				</a>
				<a href="#">
					<em class="cat_pic_icon1"></em>
					<span>关注</span>
				</a>
				<a href="#">
					<em class="cat_pic_icon2"></em>
					<span>购物车</span>
				</a>
			</div>
			<div class="fot_right">
				<a href="#">加入购物车</a>
				<a href="#">立即购买</a>
			</div>
		</footer>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				listImg: [],
				listData: [],
				isShow: true,
				topClass: "top_bar_op0"
			}
		},
		methods: {
			feactData(pid) {
				var _this = this;
				_this.$http.get("/api/detail", {
					params: {
						pId: pid
					}
				}).then((res) => {
					//console.log(res.data[0]);
					this.listImg = res.data[0];
					this.listData = res.data[1];
					console.log(res.data[0]);

				}).catch((err) => {
					console.log(err);
				})
			},
			Show() {
				this.isShow = true;
			},
			_back(){
				this.$router.go(-1)
			},
			top_scroll() {
				console.log(this.isShow)
				let scrolled = this.$refs.main.scrollTop;
				if(scrolled == 0) {
					this.topClass = 'top_bar_op0';
				}
				if(scrolled > 8) {

					this.topClass = 'top_bar_op1';
				}
				if(scrolled > 16) {
					this.topClass = 'top_bar_op2';
				}
				if(scrolled > 34) {
					this.topClass = 'top_bar_op3';
				}
				if(scrolled > 32) {
					this.topClass = 'top_bar_op4';
				}
				if(scrolled > 40) {
					this.topClass = 'top_bar_op5';
				}
				if(scrolled > 48) {
					this.topClass = 'top_bar_op6';
				}
				if(scrolled > 56) {
					this.topClass = 'top_bar_op7';
				}
				if(scrolled > 64) {
					this.topClass = 'top_bar_op8';
				}
				if(scrolled > 72) {
					this.topClass = 'top_bar_op9';
				}
				if(scrolled > 80) {
					this.topClass = 'top_bar_op10';
				}
			}
		},
		watch: {
			$route(to) {
				var reg = /detail\/\d+/;
				if(reg.test(to.path)) {
					var categotyId = this.$route.params.uid || 0;
					this.feactData(categotyId);
				}
			}
		},
		created() {
			console.log(666)
			//console.log(this.$route.params.uid);

			this.feactData(this.$route.params.uid);
			//console.log(this.listImg);
		},
		mounted() {
			this.$refs.main.addEventListener('scroll', this.top_scroll);
			this.Show();
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.m_detail {
		background: #F3F4F6;
		height: 100vh;
		position: relative;
	}
	
	.top_bar {
		width: 100%;
		height: 70px;
		position: fixed;
		z-index: 2;
		/*background: $color_transparent;*/
		transition: all 0.2s linear;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
		border-bottom: 1px solid #e5e5e5;
		.icon_bg {
			width: 45px;
			height: 45px;
			background-color: $color_666;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			i {
				font: {
					size: 24px;
				}
				color:$color_fff;
			}
			.iconarrow-l{
				position: relative;
				left:-1px;
			}
		}
		.nav_list {
			width: 60%;
			height: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			li {
				flex: 1;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 20px;
				i {
					visibility: hidden;
					color: $color_primary;
					font-size: 20px;
				}
			}
		}
	}
	
	.top_bar_op0 {
		border-color: transparent;
		background: transparent;
		.nav_list {
			opacity: 0;
			display: none;
		}
		.icon_bg{
			background-color:rgba(102,102,102,1);
		}
	}
	
	.top_bar_op1 {
		background: hsla(0, 0%, 100%, .1);
		border-color: hsla(0, 0%, 90%, .1);
		.nav_list {
			opacity: .1;
			display: block;
		}
		.icon_bg{
			background-color:rgba(102,102,102,.9);
			i{
				color:rgba(255,255,255,0.9);
			}
		}
	}
	
	.top_bar_op2 {
		background: hsla(0, 0%, 100%, .2);
		border-color: hsla(0, 0%, 90%, .2);
		.nav_list {
			opacity: .2;
		}
		.icon_bg{
			background-color:rgba(102,102,102,.8);
			i{
				color:rgba(255,255,255,0.8);
			}
		}
	}
	
	.top_bar_op3 {
		background: hsla(0, 0%, 100%, .3);
		border-color: hsla(0, 0%, 90%, .3);
		.nav_list {
			opacity: .3;
		}
		.icon_bg{
			background-color:rgba(102,102,102,.7);
			i{
				color:rgba(255,255,255,0.7);
			}
		}
	}
	
	.top_bar_op4 {
		background: hsla(0, 0%, 100%, .4);
		border-color: hsla(0, 0%, 90%, .4);
		.nav_list {
			opacity: .4;
		}
		.icon_bg{
			background-color:rgba(102,102,102,.6);
			i{
				color:rgba(255,255,255,0.6);
			}
		}
	}
	
	.top_bar_op5 {
		background: hsla(0, 0%, 100%, .5);
		border-color: hsla(0, 0%, 90%, .5);
		.nav_list {
			opacity: .5;
		}
		.icon_bg{
			background-color:rgba(102,102,102,.5);
			i{
				color:rgba(255,255,255,0.5);
			}
		}
	}
	
	.top_bar_op6 {
		background: hsla(0, 0%, 100%, .6);
		border-color: hsla(0, 0%, 90%, .6);
		.nav_list {
			opacity: .6;
		}
		.icon_bg{
			background-color:rgba(102,102,102,.4);
			i{
				color:rgba(51,51,51,0.6);
			}
		}
	}
	
	.top_bar_op7 {
		background: hsla(0, 0%, 100%, .7);
		border-color: hsla(0, 0%, 90%, .7);
		.nav_list {
			opacity: .7;
		}
		.icon_bg{
			background-color:rgba(102,102,102,.3);
			i{
				color:rgba(51,51,51,0.7);
			}
		}
	}
	
	.top_bar_op8 {
		background: hsla(0, 0%, 100%, .8);
		border-color: hsla(0, 0%, 90%, .8);
		.nav_list {
			opacity: .8;
		}
		.icon_bg{
			background-color:rgba(102,102,102,.2);
			i{
				color:rgba(51,51,51,0.8);
			}
		}
	}
	
	.top_bar_op9 {
		background: hsla(0, 0%, 100%, .9);
		border-color: hsla(0, 0%, 90%, .9);
		.nav_list {
			opacity: .9;
		}
		.icon_bg{
			background-color:rgba(102,102,102,.1);
			i{
				color:rgba(51,51,51,0.9);
			}
		}
	}
	
	.top_bar_op10 {
		background: #fff;
		border-color: #e5e5e5;
		.nav_list {
			opacity: 1;
		}
		.icon_bg{
			background-color:rgba(102,102,102,0);
			i{
				color:rgba(51,51,51,1);
			}
		}
	}
	/*img*/
	
	.product_main {
		width: 640px;
		height: 90vh;
		overflow-y: scroll;
	}
	
	.product_main .main_top {
		width: 100%;
		height: 300px;
	}
	
	.product_main .main_top .lImg {
		width: 100%;
	}
	
	.product_main .main_top .lImg img {
		display: block;
	}
	
	.product_main .main_top .proNa {
		margin-top: 6px;
		text-align: left;
		width: 100%;
		font-size: 26px;
	}
	
	.product_main .main_top .proNa p.price {
		display: flex;
		flex-direction: row;
		height: 70px;
		justify-content: space-between;
	}
	
	.product_main .main_top .proNa p.pdetail {
		padding-top: 30px;
		padding-bottom: 100px;
	}
	
	.product_main .main_top .proNa p.price span {
		display: block;
		width: 100px;
		padding-left: 20px;
		height: 100%;
		line-height: 70px;
		color: red;
	}
	
	.product_main .main_top .proNa p.price a {
		display: block;
		margin-right: 20px;
		width: 140px;
		font-family: "微软雅黑";
		color: #666666;
		padding: 0 10px;
		height: 100%;
		text-align: center;
		line-height: 70px;
		border: 1px solid #999999;
		border-radius: 6px;
	}
	
	.pro_footer {
		box-shadow: 0 -2px 10px #ccc;
		width: 100%;
		height: 90px;
		position: fixed;
		left: 0;
		bottom: 0;
		background: #FFFFFF;
		z-index: 2;
		display: flex;
		flex-direction: row;
	}
	
	.pro_footer .fot_left {
		flex: 1;
		display: flex;
		height: 100%;
		flex-direction: row;
	}
	
	.pro_footer a {
		flex: 1;
		display: block;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
	
	.pro_footer a .cat_pic_icon {
		display: block;
		width: 50px;
		height: 40px;
		background: url("../assets/images/cart_sprits_all.png") no-repeat top center;
		background-size: 200px 200px;
		margin: 6px auto 0;
		background-position: -45px 0;
	}
	
	.pro_footer a .cat_pic_icon1 {
		display: block;
		width: 50px;
		height: 40px;
		background: url("../assets/images/cart_sprits_all.png") no-repeat top center;
		background-size: 200px 200px;
		margin: 6px auto 0;
		background-position: -97px 0;
	}
	
	.pro_footer a .cat_pic_icon2 {
		display: block;
		width: 50px;
		height: 40px;
		background: url("../assets/images/cart_sprits_all.png") no-repeat top center;
		background-size: 200px 200px;
		margin: 6px auto 0;
		background-position: 0px -42px;
	}
	
	.pro_footer a span {
		text-align: center;
	}
	
	.pro_footer .fot_right {
		flex: 1;
		height: 100%;
		display: flex;
		flex-direction: row;
	}
	
	.pro_footer .fot_right a {
		flex: 1;
		height: 100%;
		display: block;
		line-height: 90px;
	}
	
	.pro_footer .fot_right a:nth-child(1) {
		background: #FFB03F;
	}
	
	.pro_footer .fot_right a:nth-child(2) {
		background: #F23030;
	}
	/*底部*/
</style>