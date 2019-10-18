<template>
	<div>
		<section class="product_box">
			<div class="product_top">
				<img src="../assets/images/jd_skill.png" class="miaosha_icon" />
				<strong>六点场</strong>
				<span class="time">00:22:43</span>
			</div>
			<div class="product_main">
				<div class="product_main_item" v-for="(item,index) in listTop" :key="index">
					<router-link :to="'/detail/'+item.product_id">
						<img class="pro_icon" v-lazy="item.product_img_url" />
					</router-link>
					<p class="price">￥{{item.product_price}}</p>
					<p class="uprice">￥{{item.product_uprice}}</p>
				</div>

			</div>
		</section>

		<!--商品区-->
		<section class="idx_main">
			<img class="title" src="../assets/images/recommend.png" alt="" />
			<ul class="product_list">
				<router-link v-for="(item,index) in productList" :key="index" tag="li" :to="'/detail/'+item.product_id">
					<div class="imgs"><img v-lazy="item.product_img_url" /></div>
					<h2>{{item.product_name}}</h2>
					<p class="pro_name"><span>￥{{item.product_price}}</span>
						<i href="javascript:;">看相似</i>
					</p>
				</router-link>
			</ul>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				listTop: [],
				productList: []
			}
		},
		methods: {
			showList() {
				let _this = this;
				this.$http({
					method: "get",
					url: "list",
					data: {}
				}).then((res) => {
					_this.listTop = res.data.slice(20,24);
					_this.productList = res.data;

				}).catch((err) => {
					console.log(err);
				})
			}
		},
		mounted() {
			this.showList();
		}

	}
</script>

<style lang="scss" scoped="scoped">
	.product_box {
		width: 640px;
		margin-top: 20px;
	}
	
	.product_top {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		width: 100%;
		height: 36px;
		padding-bottom: 3px;
		border-bottom: 2px solid #999;
	}
	
	.product_top img.miaosha_icon {
		display: block;
		width: 80px;
		height: 35px;
		margin-right: 8px;
	}
	
	.product_top .time {
		margin-left: 8px;
		display: block;
		height: 20px;
		font-size: 12px;
		color: #999;
		margin-bottom: 3px;
		align-self: flex-end;
	}
	
	.product_main {
		background: white;
		margin-top: 6px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.product_main .product_main_item {
		flex: 1;
		padding-top: 6px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.product_main .product_main_item .pro_icon {
		display: block;
		margin: 0 auto;
		width: 120px;
		height: 100px;
	}
	
	.product_main .product_main_item .price {
		color: red;
	}
	
	.product_main .product_main_item .uprice {
		color: #666;
		text-decoration: line-through;
	}
	/*商品*/
	
	.idx_main {
		width: 100%;
		padding: 0 10px;
		margin-top: 20px;
		.product_list {
			width: 100%;
			margin-top: 10px;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			li {
				width: 300px;
				height: 400px;
				margin-right: 20px;
				background-color: $color_fff;
				margin-bottom: 10px;
				.imgs {
					display: block;
					width: 100%;
					height: 280px;
					overflow: hidden;
					img {
						display: block;
						width: 100%;
					}
				}
				h2 {
					width: 100%;
					color: $color_text;
					font-size: 20px;
					font-weight: 500;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					padding: 4px 0;
				}
				p {
					height: 40px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 15px;
					margin-top: 5px;
					span {
						font-size: 20px;
						color: $color_primary;
					}
					i {
						min-width: 90px;
						height: 32px;
						color: $color_666;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 16px;
						position: relative;
						&:after {
							position: absolute;
							content: "";
							width: 200%;
							height: 200%;
							top: 0;
							left: 0;
							border: 1px solid #bfbfbf;
							border-radius: 4px;
							transform: scale(0.5);
							transform-origin: top left;
						}
					}
				}
			}
			li:nth-child(2n) {
				margin-right: 0;
			}
		}
	}
</style>