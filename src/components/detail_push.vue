<template>
	<div class="push_box">
		<h2 class="push_title">猜你喜欢</h2>
		<div class="push_list">
			<swiper :options="swiperOption" class="wrapper">
				<swiper-slide v-for='(item,index) of productList' :key='index'>
					<ul class="slide_item">
						<li class="list_item" v-for='(li_item,index1) of item' :key='index1'>
							<img class="swiper-lazy" :data-src="li_item.product_img_url" alt="" />
							<div class="swiper-lazy-preloader"></div>
							<p class="price">¥<span class="int">{{li_item.product_price}}</span>.00</p>
						</li>
					</ul>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				swiperOption: {
					preloadImages : true,
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
					lazy: true,

				},
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
					var arr = [];
					arr[0] = res.data.slice(0, 9);
					arr[1] = res.data.slice(10, 19);
					arr[2] = res.data.slice(20, 29);
					arr[3] = res.data.slice(30, 39);
                    _this.productList= arr;
				}).catch((err) => {
					console.log(err);
				})
			}
		},
		components: {

		},
		created() {
			this.showList();
		},
		mounted() {
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.wrapper /deep/ .swiper-pagination-bullet-active {
		width: 15px;
	}
	
	.wrapper /deep/ .swiper-pagination-bullet {
		margin-right: 10px;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 6px;
	}
	
	.wrapper /deep/ .swiper-pagination {
		width: 100%;
		bottom: 10px;
		left: 0;
	}
	
	.push_list {
		width: 100%;
		.slide_item {
			width: 100%;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			padding: 0 5px 30px 5px;
			background-color: #fff;
			.list_item {
				width: 205px;
				height: 200px;
				margin-right: 7px;
				margin-bottom: 7px;
				position: relative;
				img {
					max-width: 100%;
					max-height: 100%;
				}
				&:nth-child(3n) {
					margin-right: 0;
				}
				p {
					position: absolute;
					bottom: 0;
					right: 0;
					height: 30px;
					min-width: 80px;
					padding: 5px 10px;
					background-color: rgba(0, 0, 0, 0.5);
					border-radius: 6px 0 0 0;
					color: #fff;
				}
			}
		}
	}
	
	.push_title {
		width: 100%;
		padding: 0 15px;
		background-color: #fff;
		font-size: 22px;
		color: #333;
		text-align: left;
		height: 60px;
		line-height: 60px;
		font-weight: 400;
	}
	
	.push_box {
		margin-bottom: 20px;
	}
</style>