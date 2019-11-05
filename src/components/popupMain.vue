<template>
	<div class="pop_box">
		<div class="pop_bg"></div>
		<div class="main">
			<div class="header">
				<div class="imgs"><img src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/82878/35/14523/106345/5dc01aacEbec8d015/9fc46c371462c0eb.jpg!q80.dpg.webp" alt="" /></div>
				<div class="header_con">
					<p class="p1">￥<em>1888</em>.00</p>
					<p class="p2"><em>已选</em> 碳纤黑,6GB 128GB,1个</p>
				</div>
				<div class="close"><i class="icon iconcuo"></i></div>
			</div>
			<div class="body" ref="body_main">
				<div class="scroll_body">
					<div class="sku_kind">颜色</div>
					<ul class="sku_choose">
						<li class="active">碳纤黑</li>
						<li>电光紫</li>
					</ul>
					<div class="sku_kind">版本</div>
					<ul class="sku_choose">
						<li class="active">6GB 128GB</li>
						<li>8GB 64GB</li>
						<li>8GB 128GB</li>
					</ul>
					<div class="sku_kind"><span>版本</span>
						<setnumber :number="p_number" :min-number="1" :max-number="999" @on-minus="onMinus" @on-add="onAdd"></setnumber>
					</div>
					<div class="sku_kind">保障服务</div>
					<div class="service">
						<div class="title">
							<span class="name">全面保障</span>
							<span class="guide">服务介绍 <i class="icon iconarrow-r"></i></span>
						</div>
						<ul class="items">
							<li class="active">
								<div class="type"><span>京享无忧2年<i class="discount">原厂物料+保值</i></span><span class="price">¥169.00</span></div>
								<div class="content">原厂物料2年全保修+回收换新补贴</div>
							</li>
							<li class="">
								<div class="type"><span>全保修3年</span><span class="price">¥159.00</span></div>
								<div class="content">三包硬件+碎屏溅液等故障全保修</div>
							</li>
							<li class="">
								<div class="type"><span>全保修2年</span><span class="price">¥139.00</span></div>
								<div class="content">三包硬件+碎屏溅液等故障全保修</div>
							</li>
						</ul>
					</div>
					<div class="service">
						<div class="title">
							<span class="name">全面保障</span>
							<span class="guide">服务介绍 <i class="icon iconarrow-r"></i></span>
						</div>
						<ul class="items">
							<li class="active">
								<div class="type"><span>京享无忧2年<i class="discount">原厂物料+保值</i></span><span class="price">¥169.00</span></div>
								<div class="content">原厂物料2年全保修+回收换新补贴</div>
							</li>
							<li class="">
								<div class="type"><span>全保修3年</span><span class="price">¥159.00</span></div>
								<div class="content">三包硬件+碎屏溅液等故障全保修</div>
							</li>
							<li class="">
								<div class="type"><span>全保修2年</span><span class="price">¥139.00</span></div>
								<div class="content">三包硬件+碎屏溅液等故障全保修</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	import setnumber from "../components/number.vue"
	export default {
		props: {

		},
		data() {
			return {
				p_number: 1
			}
		},
		methods: {
			onMinus() {
				this.p_number--;
			},
			onAdd() {
				this.p_number++;
			},
			_initScroll() {
				this.shopBoxScroll = new BScroll(this.$refs.body_main, {
					// better-scroll 会将点击事件去掉，要在这里开启，同时点击在PC 会被执行两次，要在这里控制
					click: true
				});
			}
		},
		mounted() {

		},
		computed: {

		},
		components: {
			setnumber
		},
		created() {
			this.$nextTick(() => {
				this._initScroll();
			})
		}
		//		watch(){
		//			login(val) {
		//		     console.log(val)
		//		    }
		//		}
	}
</script>

<style lang="scss" scoped="scoped">
	.service {
		width: 100%;
		padding: 0 20px;
		.items {
			width: 100%;
			background-color: #F7F7F7;
			border-radius: 8px;
			margin-bottom: 30px;
			li {
				width: 100%;
				padding: 20px 18px 20px 74px;
				display: flex;
				flex-direction: column;
				position: relative;
				&:before {
					font-family: "iconfont" !important;
					font-size: 16px;
					font-style: normal;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
					content: "\e614";
					font-size: 40px;
					color: #999;
					position: absolute;
					top: 20px;
					left: 20px;
				}
				&.active:before {
					content: "\e626";
					color: #e4393c;
				}
				.content {
					font-size: 18px;
					color: #999;
					text-align: left;
				}
				.type {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 40px;
					font-size: 22px;
					color: #333;
					margin-bottom: 3px;
					.price {
						color: #e4393c;
						font-size: 22px;
					}
					.discount {
						position: relative;
						display: inline-block;
						vertical-align: text-bottom;
						color: #e4393c;
						font-size: 20px;
						text-align: center;
						height: 30px;
						line-height: 30px;
						margin-left: 10px;
						top: 2px;
						padding: 0 4px;
						&:before {
							content: "";
							display: block;
							position: absolute;
							top: -2px;
							left: 0;
							right: -100%;
							bottom: -100%;
							border: 1px solid #e4393c;
							-webkit-transform: scale(.5);
							-webkit-transform-origin: 0 0;
							pointer-events: none;
						}
					}
				}
			}
		}
		.title {
			width: 100%;
			height: 74px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.name {
				padding-left: 45px;
				font-size: 22px;
				color: #333;
				position: relative;
				&:before {
					content: "";
					position: absolute;
					top: -3px;
					left: 0;
					width: 40px;
					height: 40px;
					display: block;
					background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTEub+0ub+1Gj/0ub+/j7/v///3Kx/Nbo/rrZ/Vqj+6fO/ZbF/IO6/Oz0/h8eL3QAAAAEdFJOUwDpphz5/MqVAAAA+klEQVQoz2NgVnRBA0IGDIYuGECYQQVT0IlBBFPQkcEFCyBLcAoWwbqIJeiCXjfCwiJLUARnzngaFlEXFtox+whc0DstLTTyisuJ0LS0dCTB2cdB9PKT08IRghkwK9woETxWginoHXYFTRDonanRaNp9s1w8Q4+gCXqnTWmNwbDoamToFRRBnzgXF98wEH9pFFzQPRRozTVQGF0NQYTSsxZg4IECMHQKQvBqHMT1K1KXIAS9w8AqvNJykUN+Gjgu6sJKkAV9woCOXAl2AFIc1YW+9QmFRR084qamPg09gh7FXq2puzDj3X0WZWkJSRBrosWavLFmBGxZBgCCgu8JjyrAbQAAAABJRU5ErkJggg==') no-repeat;
					background-size: 90% 90%;
				}
			}
			.guide {
				font-size: 22px;
				color: #999;
				i {
					font-size: 20px;
					font-weight: bold;
					color: #999;
				}
			}
		}
	}
	
	.sku_kind /deep/ .num_wrap {
		width: 168px;
		.item {
			width: 48px;
		}
		.input_wrap {
			width: 68px;
		}
	}
	
	.pop_box {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, .7);
		z-index: 110;
		.pop_bg {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 112;
		}
		.main {
			position: absolute;
			bottom: 0;
			bottom: env(safe-area-inset-bottom);
			bottom: constant(safe-area-inset-bottom);
			width: 100%;
			min-height: 700px;
			max-height: 900px;
			background-color: #fff;
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
			-webkit-transition: -webkit-transform .2s cubic-bezier(0, 0, .25, 1);
			transition: -webkit-transform .2s cubic-bezier(0, 0, .25, 1);
			transition: transform .2s cubic-bezier(0, 0, .25, 1);
			transition: transform .2s cubic-bezier(0, 0, .25, 1), -webkit-transform .2s cubic-bezier(0, 0, .25, 1);
			z-index: 115;
			display: flex;
			flex-direction: column;
			.body {
				position: absolute;
				top: 150px;
				height: 500px;
				width: 100%;
				overflow-y: hidden;
				background-color: #fff;
				.scroll_body{
					padding-bottom:50px;
				}
				.sku_kind {
					width: 100%;
					height: 54px;
					font-size: 20px;
					color: #999;
					padding: 0 20px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 10px;
				}
				.sku_choose {
					width: 100%;
					padding-left: 20px;
					display: flex;
					justify-content: flex-start;
					li {
						background-color: #f7f7f7;
						color: #333;
						border-radius: 8px;
						padding: 0 20px;
						display: flex;
						justify-content: center;
						align-items: center;
						height: 52px;
						font-size: 24px;
						margin: 0 20px 20px 0;
					}
					.active {
						background: -webkit-linear-gradient(131deg, #ff4f18, #ff2000 24%, #f10000);
						background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
						color: #fff;
					}
				}
			}
			.header {
				width: 100%;
				height: 150px;
				display: flex;
				justify-content: flex-start;
				padding: 0 15px;
				position: relative;
				.close {
					position: absolute;
					top: 5px;
					right: 5px;
					width: 40px;
					height: 40px;
					display: flex;
					justify-content: center;
					align-items: center;
					i {
						font-size: 30px;
						color: #ccc;
					}
				}
				.imgs {
					width: 170px;
					height: 170px;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: #fff;
					position: relative;
					top: -40px;
					border-radius: 6px;
					overflow: hidden;
					img {
						max-width: 100%;
					}
				}
				.header_con {
					margin-left: 20px;
					flex: 1;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: flex-start;
					padding: 20px 0;
					.p1 {
						font-size: 22px;
						color: #e4393c;
						em {
							font-size: 28px;
						}
					}
					.p2 {
						font-size: 20px;
						color: #333;
						em {
							color: #999;
						}
					}
				}
			}
		}
	}
</style>