<template>
	<div class="m_detail">
		<header class="top_bar" :class="topClass">
			<span @click="_back" class="icon_bg"><i class="icon iconarrow-l fwb"></i></span>
			<ul class="nav_list">
				<li :class="{'active':nav_id==index}" :data-floor="index" @click="nav_click($event,index)" v-for="(item,index) of nav" :key="index"><i class="icon icondingwei"></i> {{item}}</li>
				<!--<li><i class="icon icondingwei"></i> 商品</li>
				<li><i class="icon icondingwei"></i> 评价</li>
				<li><i class="icon icondingwei"></i> 详情</li>
				<li><i class="icon icondingwei"></i> 推荐</li>-->
			</ul>
			<span class="icon_bg"><i class="icon icongengduo "></i></span>
		</header>
		<div ref="main" class="product_main">
			<div class="main_top">
				<div class="lImg" id="floor1">
					<!--<img :src="item.image_url" v-for="(item,index) in listImg" :key="index" />-->
					<swiper :options="swiperOption" class="swiper-container wrapper">
						<swiper-slide class="slide_item" v-for='(item,index) of listImg' :key='index'>
							<img class='' :src="item.image_url" alt="" />						
<!--							<img v-lazy="item.image_url" />
-->						</swiper-slide>
						<div class="swiper-pagination" slot="pagination"></div>
					</swiper>
				</div>
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
				<assess id="floor2"></assess>
				<div class="detail_faqbox">
					<div class="detail_faqbox_head">
						<div class="detail_faqbox_head_tit">问答专区</div>
						<div class="detail_faqbox_head_num">查看全部问答 <i class="icon iconarrow-r"></i></div>
					</div>
					<ul class="detail_faqbox_list">
						<li><p>这款风衣有里子吗？</p><span>暂无回答</span></li>
						<li><p>这款风衣好看吗？</p><span>2个回答</span></li>
					</ul>
				</div>
				<pushList id="floor3"></pushList>
				<info id="floor4"></info>
			</div>
		</div>
		<bottom @showCartPop="showCart"></bottom>
		<popupMain :popType="popType" @hidePop="showCart" :info_data="listData" v-if='listData.length'></popupMain>
	</div>
</template>
<script>
	import assess from "../components/detail_assess.vue"
	import bottom from "../components/detail_footer.vue"
	import pushList from "../components/detail_push.vue"
	import info from "../components/detail_info.vue"
	import popupMain from "../components/popupMain.vue"
    import BScroll from 'better-scroll';
	export default {
		data() {
			return {
				swiperOption: {
					initialSlide: 0,
					// 参数选项,显示小点
					pagination: {
						el: '.swiper-pagination '
					},
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
				topClass: "top_bar_op0",
				nav:['商品','评价','推荐','详情'],
				nav_id:0,
				popType:'false'
			}
		},
		methods: {
			showCart(type){
				if(type == 'true'){
					ModalHelper.afterOpen();
				}else{
					ModalHelper.beforeClose();
				}
				this.popType = type;
			},
			feactData(pid) {
				var _this = this;
				_this.$http.get("detail", {
					params: {
						pId: pid
					}
				}).then((res) => {
					this.listImg = res.data[0];
					this.listData = res.data[1];
				}).catch((err) => {
					console.log(err);
				})
			},
//			Show() {
//				this.isShow = true;
//			},
			_back() {
				 window.history.length > 1
			        ? this.$router.go(-1)
			        : this.$router.push('/');
			},
			nav_click(event,index){
				var floor = event.target.dataset.floor;
				floor++;
				var floor_st = this.$refs.main.querySelector('#floor'+floor).offsetTop;
				this.$refs.main.scrollTop = floor_st-40;
				
            },
			top_scroll() {
//				let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;   // 设备/屏幕高度
//				let scrollObj = document.getElementById(div); // 滚动区域
//		        let scrollTop = scrollObj.scrollTop; // div 到头部的距离
//		        let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
		         //滚动条到底部的条件
//          if(scrollTop+clientHeight == scrollHeight){
//              // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
//          }  
				let scrolled = this.$refs.main.scrollTop;
				let floor1 = this.$refs.main.querySelector('#floor1').offsetTop;
				let floor2 = this.$refs.main.querySelector('#floor2').offsetTop - 60;
				let floor3 = this.$refs.main.querySelector('#floor3').offsetTop - 60;
				let floor4 = this.$refs.main.querySelector('#floor4').offsetTop - 60;
//                 let total = jump[index].offsetTop;  
                if(scrolled > floor1){
                	this.nav_id = 0;
                }
                if(scrolled > floor2){
                	this.nav_id = 1;
                }
                if(scrolled > floor3){
                	this.nav_id = 2;
                }
                if(scrolled > floor4){
                	this.nav_id = 3;
                }
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
			this.$nextTick(() => {
				this.feactData(this.$route.params.uid);
			})
//			console.log(this.listData);
		},
		mounted() {
			this.$refs.main.addEventListener('scroll', this.top_scroll);
//			this.Show();
//			this.scroll = new BScroll(this.$refs.main, {
//					    click: true,
//					  });

		},
		components: {
			assess,
			bottom,
			pushList,
			info,
			popupMain
		},
		destroyed: function () {
//      this.$refs.main.removeEventListener('scroll', this.top_scroll);   //  离开页面清除（移除）滚轮滚动事件
      }
	}
</script>

<style lang="scss" scoped="scoped">
.detail_faqbox_list{
	padding:0 15px;
	li{
		height:50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		p{
			font-size:22px;
			color:#333;
			&:before{
				content: "Q";
				display: inline-block;	
				width:25px;
				height: 25px;
				line-height: 25px;
				text-align: center;
				background-color:#ff9600;
				color:#fff;
				font-size: 20px;
				border-radius: 2px;
				margin-right:6px;
				margin-top:-6px;
			}
		}
		span{
			font-size: 20px;
			color:#999;
			
		}
	}
}
.detail_faqbox{
	margin-bottom:20px;
	background-color:#fff;
	.detail_faqbox_head{
		height: 70px;
		display:flex;
		padding:0 15px;
		justify-content: space-between;
		align-items: center;
		border-bottom:1px solid #e5e5e5;
		.detail_faqbox_head_tit{
			font-size:22px;
			color:#333;
		}
		.detail_faqbox_head_num{
			font-size:20px;
			color:#666;
			i{
				font-size:24px;
				color:#666;
				position: relative;
				top:2px;
			}
		}
	}
}
	.wrapper /deep/ .swiper-pagination-bullet {
		background: #fff;
	}
	
	.slide_item {
		height: 600px;
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
					margin-top:3px;
					margin-right:4px;
				}
			}
			.active{
				i{
					visibility: visible;
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
		border-bottom: 1px solid hsla(0, 0%, 90%, .8);
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
		border-bottom: 1px solid hsla(0, 0%, 90%, .9);
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
		border-bottom: 1px solid #e5e5e5;
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
		height: 92vh;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
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
</style>