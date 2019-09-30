<template>
	<div class="">
		<swiper :options="swiperOption" class="swiper-container wrapper">
			<!-- slides -->
			<swiper-slide v-for='(item,index) of swiperList' :key='index'>
				<img class='' :src="require( '../assets/images/'+item)" alt="" />
			</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<!-- Optional controls ,显示小点-->

	</div>
</template>
<script>
	export default {
		data() {
			return {
				swiperOption: {
					// 参数选项,显示小点
					pagination: '.swiper-pagination ',
					//循环
					loop: true,
					//每张播放时长3秒，自动播放
					autoplay: 2000,
					//滑动速度
					speed: 300,
					// delay:1000
					grabCursor: true,

				},
				index: 0,
				swiperList: ["l1.jpg", "l2.jpg", "l3.jpg", "l4.jpg", "l5.jpg", "l6.jpg", "l7.jpg", "l8.jpg"],
				timer: null
			}
		},
		methods: {
			play() {
				this.timer = setInterval(() => {
					this.index++;
					if(this.index > 7) {
						this.index = 0;
					}
				}, 1000)

			},
			clearPlay() {
				clearInterval(this.timer);
			}
		},
		components:{
			
		},
		mounted() {
			///this.play();
		}
	}
</script>
<style lang="scss" scoped="scoped">
/*样式穿透到全局*/
.wrapper /deep/ .swiper-pagination-bullet-active {
  background: #ffffff;
}
        
	/*轮播图*/
</style>