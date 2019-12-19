<template>
	<div class="m_cart">
		<headTitle message="确认订单"></headTitle>
		<addressInfo></addressInfo>
		<div class="desktop_main">
			<div class="order_info">
				<div class="order_shopBar">恒盼服饰专营店</div>
				<ul>
					<li class="hproduct"  v-if="listImg.length > 0">
						<img class="img" :src="listImg[0].image_url" />
						<div class="info">
							<h2>{{listData[0].product_name}}</h2>
							<p class="p1">藏青色 , XL</p>	
							<p class="p2">
								<span class="span1">￥<em>1888</em>.00</span>
								<span class="span2"><setnumber :number="p_number" :min-number="1" :max-number="999" @on-minus="onMinus" @on-add="onAdd"></setnumber></span>
							</p>
							<p class="p3"><img class="icon_optional" src="//img11.360buyimg.com/jdphoto/s30x30_jfs/t24454/180/2585111474/1236/c5718bb0/5b863011Ncc8682f5.png"> 支持7天无理由退货
							<img class="icon_optional pricetip" src="//img11.360buyimg.com/jdphoto/s30x30_jfs/t26866/245/112279834/912/e70ec77a/5b863013Ne69c7156.png"> 价格说明
							</p>
						</div>
					</li>
				</ul>	
				<div class="cell_item line mgt26"><span class="title">配送快递  </span><span class="val">京东快递  <i class="icon iconarrow-r"></i></span></div>
				<div class="cell_item line"><span class="title">退换无优  </span><span class="val">商家赠送<i class="icon iconarrow-r"></i></span></div>
			</div>
	        <div class="buy_checkout">
				<div class="cell_item line"><span class="title">发票信息   </span><span class="val">不开票<i class="icon iconarrow-r"></i></span></div>	
				<div class="cell_item line"><span class="title">京东劵   </span><span class="val">无可用<i class="icon iconarrow-r"></i></span></div>	
				<div class="cell_item line"><span class="title">礼品卡   </span><span class="val">无可用<i class="icon iconarrow-r"></i></span></div>	
				<div class="cell_item line"><span class="title">红包   </span><span class="val">无可用<i class="icon iconarrow-r"></i></span></div>	
				<div class="cell_item line"><span class="title">京豆   </span><span class="val">无可用<i class="icon iconarrow-r"></i></span></div>					
	        </div>
		</div>
	</div>
</template>

<script>
	import headTitle from "../components/head_title.vue"
	import addressInfo from "../components/desktop/address.vue"
	import setnumber from "@/components/number.vue"
	import { mapGetters } from "vuex"
	export default {
		data() {
			return {
				p_number: 1,
				listData: [
					[]
				],
				listImg: []
			}
		},
		methods: {
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
			onMinus() {
				this.p_number--;
			},
			onAdd() {
				this.p_number++;
			},
		},
		created(){

		},
		mounted() {
		
		},
		computed: {
			//获取用户信息
			...mapGetters(["userInfo"]),
			
		},
		components: {
			headTitle,
			addressInfo,
			setnumber
		},
		created() {
			this.feactData(this.$route.params.uid);
		},
		//		watch(){
		//			login(val) {
		//		     console.log(val)
		//		    }
		//		}
	}
</script>

<style lang="scss" scoped="scoped">
.desktop_main{
	width:100%;
	background-color:#F7F7F7;
	overflow: hidden;
	.order_info{
		width:100%;
		background-color:#fff;
		margin: 20px auto;
		padding: 0 18px;
		.order_shopBar{
			width:100%;
			height: 70px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-size: 26px;
			color:#333;
			font-weight: bold;
		}
		.hproduct{
			width:100%;
			display: flex;
			justify-content: flex-start;
			.img{
				display: block;
				width:140px;
				height: 140px;
			}
			.info{
				flex: 1;
				padding-left: 15px;
				h2{
					font-size: 24px;
					color:#333;
					text-align: left;
				}
				.p1{
					font-size: 22px;
					color:#999;
					text-align: left;
					margin: 4px 0;
				}
				.p2{
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 54px;
					.span1{
						font-size: 20px;
						color:#e93b3d;
						font-weight: bold;
						em{
							font-size: 28px;
						}						
					}
					.span2{
						display: block;
						height: 100%;
					}
				}
				.p3{
					display: flex;
					width: 100%;
					height: 55px;
					justify-content: flex-start;
					align-items: center;
					font-size: 22px;
					.icon_optional{
						display: block;
						width: 26px;
						height: 26px;
					}
					.pricetip{
						margin-left:15px;
					}
				}
			}
		}
	}
	.buy_checkout{
		padding: 0 15px;
		background-color:#fff;
	}
}
.cell_item {
	width: 100%;
	height: 75px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: left;
	background-color: #fff;
	padding: 0 18px;
	position: relative;
	.title {
		font-size: 28px;
		color: #222;
		width: 50%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.val {
		font-size: 20px;
		color: #999;
		i {
			font-weight: bold;
		}
	}
}

.line {
	&:before {
		content: "";
		display: block;
		position: absolute;
		width: 97%;
		height: 2px;
		background-color: #e5e5e5;
		bottom: 0;
		right: 0;
		z-index: 1;
		transform: scaleY(0.5);
		opacity: 0.6;
	}
}

</style>