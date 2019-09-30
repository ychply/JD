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

					<swiper :options="swiperOption" class="swiper-container wrapper">
						<swiper-slide class="slide_item" v-for='(item,index) of listImg' :key='index'>
							<img class='' :src="item.image_url" alt="" />
						</swiper-slide>
						<div class="swiper-pagination" slot="pagination"></div>
					</swiper>
				</div>
				<!--<div class="proNa" v-for="(item,index) in listData" :key="index">
					<p>{{item.product_name}}</p>
					<p class="price">
						<span>￥{{item.product_price}}</span>
						<a href="#">降价通知</a>
					</p>
					<pre class="pdetail">{{item.product_detail}}{{item.product_detail}}</pre>
				</div>-->
				<div class="product" v-for="(item,index) in listData" :key="index">
					<div class="price_box">
						<span class="price">￥ <i class="f28">{{item.product_price}}</i></span>
						<div class="remind">
							<span class="remind_item">
							<i class="icon iconjinqian"></i>
							<em>降价提醒</em>
						</span>
							<span class="remind_item">
							<i class="icon iconshoucang2"></i>
							<em>收藏</em>
						</span>
						</div>
					</div>
					<div class="title">{{item.product_name}}</div>
					<div class="mod_discount mgt20">
						<span class="mod_title">优惠</span>
						<div class="content">
							<div class="dicount_coupon">
								<span class="coupon coupon_item">满699减10</span>
								<span class="coupon1 bg_red coupon_item">满1299减100</span>
							</div>
							每满300可减30元现金
						</div>
						<div class="see">
							<i class="icon icongengduo"></i>
						</div>
					</div>
					<div class="mod_discount">
						<div class="line"></div>
						<span class="mod_title">白条</span>
						<div class="content">
							3期免息
						</div>
						<div class="see">
							<i class="icon icongengduo"></i>
						</div>
					</div>
					<div class="mod_discount mgt20">
						<span class="mod_title">已选</span>
						<div class="content">
							套餐1
						</div>
						<div class="see">
							<i class="icon icongengduo"></i>
						</div>
					</div>
					<div class="mod_discount">
						<div class="line"></div>
						<span class="mod_title">送至</span>
						<div class="content">
							广州黄埔区时代春树里
						</div>
						<div class="see">
							<i class="icon icongengduo"></i>
						</div>
					</div>
					<div class="mod_discount">
						<div class="line"></div>
						<div class="content">
							<span class="detail_serve_item "><i class="icon iconxuanzhong"></i> 商家发货&售后</span>
							<span class="detail_serve_item "><i class="icon iconxuanzhong"></i> 七天无理由退货</span>
							<span class="detail_serve_item "><i class="icon iconxuanzhong"></i> 送运费险</span>
						</div>
						<div class="see">
							<i class="icon icongengduo"></i>
						</div>
					</div>
				</div>
				<div class="ass_title">
					<span class="span1">评价 <i>好评100%</i></span>
					<span class="span2">共 80+ 条</span>
				</div>
				<ul class="cmt_tag">
					<li>舒适度爆棚(25)</li>
					<li>穿行舒适(18)</li>
					<li>尺码精准(8)</li>
					<li>新颖时尚(6)</li>
					<li>做工精细(3)</li>
					<li>颜色纯正(2)</li>
					<li>样式靓丽(2)</li>
					<li>质地上乘(2)</li>
					<li>豪无色差(1)</li>
					<li>风格百搭(1)</li>
					<li>底软舒适(1)</li>
				</ul>
				<ul class="cmt_list">
					<li>
						<div class="cmt_user">
							<div class="user_info">
								<img src="//img11.360buyimg.com/jdphoto/s40x40_jfs/t1/25255/18/10701/1678/5c89f892E78c04688/684d63c0d68e39b1.png">
								<span class="user">jd_134333ddv</span>
							</div>
							<span class="date">2019-08-19</span>
						</div>
						<div class="cmt_cnt">这鞋面料不错，不磨脚。也很修脚形。黑色很百搭，我工作鞋的，平时也能搭衣服</div>
						<div class="cmt_box">
							<div class="cmt_att">
								<img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t1/41414/8/12332/75635/5d59f48bE87c89021/2d124e4aec7e85d0.jpg!cc_100x100!q70.dpg.webp">
								<img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t1/78314/15/7540/70114/5d59f48cE27bfc2f7/38d29631cb8ccb36.jpg!cc_100x100!q70.dpg.webp">
								<img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t1/73837/28/7663/46487/5d59f48cE640709fd/63aa7f00b418149b.jpg!cc_100x100!q70.dpg.webp">
								<img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t1/80866/32/7555/58939/5d59f48cE3d7e0957/64841dd1b6582b5e.jpg!cc_100x100!q70.dpg.webp">
							</div>
						</div>
					</li>
				</ul>
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
				swiperOption: {
					initialSlide: 0,
					// 参数选项,显示小点
					pagination: '.swiper-pagination ',
					//循环
					loop: false,
					//每张播放时长3秒，自动播放
					//					autoplay: 2000,
					//滑动速度
					speed: 300,
					// delay:1000
					grabCursor: true,

				},
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
					//					console.log(res.data[0]);
					this.listImg = res.data[0];
					this.listData = res.data[1];
					console.log(this.listData);

				}).catch((err) => {
					console.log(err);
				})
			},
			Show() {
				this.isShow = true;
			},
			_back() {
				this.$router.go(-1)
			},
			top_scroll() {
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
	.wrapper /deep/ .swiper-pagination-bullet-active {
		background: #ffffff;
	}
	
	.slide_item {
		height: 600px;
	}
	
	.cmt_box {
		width: 100%;
		height: 200px;
		overflow-x: scroll;
		.cmt_att {
			width: 200%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			img {
				display: block;
				width: 200px;
				height: 200px;
				margin-right: 20px;
			}
		}
	}
	
	.cmt_list {
		background-color: $color_fff;
		padding: 0 16px;
	}
	
	.cmt_cnt {
		width: 100%;
		font-size: 24px;
		color: $color_000;
		text-align: left;
	}
	
	.cmt_user {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.user_info {
			width: 60%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			height: 60px;
			img {
				width: 45px;
				height: 45px;
				display: block;
				border-radius: 50%;
				overflow: hidden;
			}
			.user {
				font-size: 18px;
				color: $color_000;
			}
		}
		.date {
			font-size: 20px;
			color: $color_999;
		}
	}
	
	.cmt_tag {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		background-color: $color_fff;
		padding: 10px 18px;
		li {
			padding: 3px 15px;
			background-color: #fdf0f0;
			color: $color_666;
			margin-right: 20px;
			margin-bottom: 15px;
			border-radius: 4px;
			font-size: 18px;
		}
	}
	
	.ass_title {
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
		padding: 0 40px 0 20px;
		background-color: $color_fff;
		margin-bottom: 1px;
		.span1 {
			font-size: 22px;
			color: $color_000;
			i {
				color: $color_primary;
				font-size: 18px;
				margin-left: 15px;
			}
		}
		.span2 {
			font-size: 18px;
			color: $color_999;
		}
	}
	
	.mod_discount {
		padding: 20px;
		width: 100%;
		background-color: $color_fff;
		display: flex;
		justify-content: space-between;
		position: relative;
		.line {
			width: 96%;
			height: 2px;
			position: absolute;
			background-color: #F3F4F6;
			top: 0;
			right: 0;
		}
		.mod_title {
			width: 10%;
			color: $color_999;
			font-size: 20px;
		}
		.see {
			width: 10%;
			color: $color_333;
			i {
				font-size: 22px;
				font-weight: bold;
			}
		}
		.content {
			width: 80%;
			min-height: 40px;
			text-align: left;
			font-size: 18px;
			padding-top: 1px;
			.detail_serve_item {
				display: inline-block;
				margin-right: 15px;
				&:last-child {
					margin-right: 0;
				}
				i {
					font-size: 24px;
					color: $color_primary;
				}
			}
			.dicount_coupon {
				width: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;
				.bg_red {
					background-color: #e4393c;
				}
				.coupon_item {
					min-width: 110px;
					border-top: 1px solid #e4393c;
					border-bottom: 1px solid #e4393c;
					height: 26px;
					position: relative;
					box-sizing: border-box;
					font-size: 14px;
					overflow: hidden;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 0 18px;
					line-height: 1em;
					&:before {
						position: absolute;
						content: "";
						top: -1px;
						left: 0px;
						background-repeat: no-repeat;
						height: 26.5px;
					}
					&:after {
						position: absolute;
						content: "";
						top: -1px;
						right: -1px;
						background-size: 20px 100%;
						background-repeat: no-repeat;
						background-position: -11px 0;
						height: 26.5px;
					}
				}
				.coupon {
					margin-right: 20px;
					color: #333;
					&:before {
						background-image: url('../assets/images/coupon1.png');
						background-size: 20px 100%;
						width: 15px;
					}
					&:after {
						background-image: url('../assets/images/coupon1.png');
						width: 10px;
					}
				}
				.coupon1 {
					color: #fff;
					&:before {
						background-image: url('../assets/images/coupon2.png');
						background-size: 20px 100%;
						width: 12px;
						background-color: #fff;
					}
					&:after {
						background-size: 20px 100%;
						background-image: url('../assets/images/coupon2.png');
						width: 10px;
						background-color: #fff;
						background-position: -14px 0;
						right: -5px;
						background-color: #fff;
					}
				}
			}
		}
	}
	
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
			.iconarrow-l {
				position: relative;
				left: -1px;
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
		.icon_bg {
			background-color: rgba(102, 102, 102, 1);
		}
	}
	
	.top_bar_op1 {
		background: hsla(0, 0%, 100%, .1);
		border-color: hsla(0, 0%, 90%, .1);
		.nav_list {
			opacity: .1;
			display: block;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .9);
			i {
				color: rgba(255, 255, 255, 0.9);
			}
		}
	}
	
	.top_bar_op2 {
		background: hsla(0, 0%, 100%, .2);
		border-color: hsla(0, 0%, 90%, .2);
		.nav_list {
			opacity: .2;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .8);
			i {
				color: rgba(255, 255, 255, 0.8);
			}
		}
	}
	
	.top_bar_op3 {
		background: hsla(0, 0%, 100%, .3);
		border-color: hsla(0, 0%, 90%, .3);
		.nav_list {
			opacity: .3;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .7);
			i {
				color: rgba(255, 255, 255, 0.7);
			}
		}
	}
	
	.top_bar_op4 {
		background: hsla(0, 0%, 100%, .4);
		border-color: hsla(0, 0%, 90%, .4);
		.nav_list {
			opacity: .4;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .6);
			i {
				color: rgba(255, 255, 255, 0.6);
			}
		}
	}
	
	.top_bar_op5 {
		background: hsla(0, 0%, 100%, .5);
		border-color: hsla(0, 0%, 90%, .5);
		.nav_list {
			opacity: .5;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .5);
			i {
				color: rgba(255, 255, 255, 0.5);
			}
		}
	}
	
	.top_bar_op6 {
		background: hsla(0, 0%, 100%, .6);
		border-color: hsla(0, 0%, 90%, .6);
		.nav_list {
			opacity: .6;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .4);
			i {
				color: rgba(51, 51, 51, 0.6);
			}
		}
	}
	
	.top_bar_op7 {
		background: hsla(0, 0%, 100%, .7);
		border-color: hsla(0, 0%, 90%, .7);
		.nav_list {
			opacity: .7;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .3);
			i {
				color: rgba(51, 51, 51, 0.7);
			}
		}
	}
	
	.top_bar_op8 {
		background: hsla(0, 0%, 100%, .8);
		border-color: hsla(0, 0%, 90%, .8);
		.nav_list {
			opacity: .8;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .2);
			i {
				color: rgba(51, 51, 51, 0.8);
			}
		}
	}
	
	.top_bar_op9 {
		background: hsla(0, 0%, 100%, .9);
		border-color: hsla(0, 0%, 90%, .9);
		.nav_list {
			opacity: .9;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .1);
			i {
				color: rgba(51, 51, 51, 0.9);
			}
		}
	}
	
	.top_bar_op10 {
		background: #fff;
		border-color: #e5e5e5;
		.nav_list {
			opacity: 1;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, 0);
			i {
				color: rgba(51, 51, 51, 1);
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
	
	.price_box {
		width: 100%;
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 15px;
		background-color: $color_fff;
		.price {
			font-size: 22px;
			font-weight: bold;
			color: $color_primary;
		}
		.col_right {
			width: 250px;
			height: 100%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.cheaper_info {}
		}
	}
	
	.remind {
		width: 50%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		.remind_item {
			min-width: 50px;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-left: 18px;
			i {
				font-size: 23px;
				color: $color_999;
			}
			em {
				font-size: 16px;
				color: $color_999;
				margin-top: 2px;
			}
		}
	}
	
	.title {
		width: 100%;
		min-height: 60px;
		padding: 5px 15px;
		line-height: 1.6em;
		color: $color_333;
		text-align: left;
		background-color: $color_fff;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		font: {
			size: 24px;
			weight: bold;
		}
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