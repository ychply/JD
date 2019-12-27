<template>
	<div class="wrap">
		<swiper :options="swiperOption" class="swiper-container wrapper">
			<swiper-slide v-for='(item,index) of swiperList' :key='index'>
				<img class='' :src="require( '../../assets/images/'+item)" alt="" />
			</swiper-slide>			
             <div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				swiperOption: {
					// 参数选项,显示小点
					 pagination: { 
					 	el: '.swiper-pagination' 
					 },
					 notNextTick: true,
					 //设定初始化时slide的索引
                     initialSlide:0,
					//循环
					loop: true,
					//自动播放
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
					//滑动速度
					speed: 300,
					// delay:1000
					grabCursor: true,

				},
				index: 0,
				swiperList: ["l1.jpg", "l2.jpg", "l3.jpg", "l4.jpg", "l5.jpg", "l6.jpg", "l7.jpg", "l8.jpg"]
			}
		},
		methods: {
			
		},
		components:{
			
		},
		mounted() {
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