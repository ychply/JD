<template>
	<div class="push_box">
		<h2 class="push_title">猜你喜欢</h2>
		<ul class="push_list">
			<li><img src="https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/74472/7/6634/229086/5d4a4168E8c558887/7b49c1fd42d26f7f.jpg!q70.dpg.webp" alt="" /><p class="price">¥<span class="int">132</span>.00</p></li>
						<li><img src="https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/74472/7/6634/229086/5d4a4168E8c558887/7b49c1fd42d26f7f.jpg!q70.dpg.webp" alt="" /><p class="price">¥<span class="int">132</span>.00</p></li>

			<li><img src="https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/74472/7/6634/229086/5d4a4168E8c558887/7b49c1fd42d26f7f.jpg!q70.dpg.webp" alt="" /><p class="price">¥<span class="int">132</span>.00</p></li>

			<li><img src="https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/74472/7/6634/229086/5d4a4168E8c558887/7b49c1fd42d26f7f.jpg!q70.dpg.webp" alt="" /><p class="price">¥<span class="int">132</span>.00</p></li>

			<li><img src="https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/74472/7/6634/229086/5d4a4168E8c558887/7b49c1fd42d26f7f.jpg!q70.dpg.webp" alt="" /><p class="price">¥<span class="int">132</span>.00</p></li>

			<li><img src="https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/74472/7/6634/229086/5d4a4168E8c558887/7b49c1fd42d26f7f.jpg!q70.dpg.webp" alt="" /><p class="price">¥<span class="int">132</span>.00</p></li>

			<li><img src="https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/74472/7/6634/229086/5d4a4168E8c558887/7b49c1fd42d26f7f.jpg!q70.dpg.webp" alt="" /><p class="price">¥<span class="int">132</span>.00</p></li>

			<li><img src="https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/74472/7/6634/229086/5d4a4168E8c558887/7b49c1fd42d26f7f.jpg!q70.dpg.webp" alt="" /><p class="price">¥<span class="int">132</span>.00</p></li>

		</ul>
		</swiper>
	</div>
</template>
<script>
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
				productList: []
			}
		},
		methods: {
			showList() {
				let _this = this;
				this.$http({
					method: "get",
					url: "/api/list",
					data: {}
				}).then((res) => {
					
					_this.productList = res.data.slice(0,9);
					console.log(res.data.slice(0,9));

				}).catch((err) => {
					console.log(err);
				})
			}
		},
		components: {

		},
		mounted() {
			this.showList();
			///this.play();
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.push_list {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		li {
			width: 206px;
			height: 200px;
			margin-right: 10px;
			margin-bottom:10px;
			position: relative;
			img{
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
				padding:5px 10px;
				background-color: rgba(0, 0, 0, 0.5);
				border-radius: 6px 0 0 0;
				color:#fff;
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