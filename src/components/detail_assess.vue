<template>
	<div class="assess_box">
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
			<div class="cmt_cnt">料子摸着不错，做工也很细致，试了一下，上身效果👏👏👏👏👏同事说很漂亮！</div>
			<div class="cmt_box">
				<swiper :options="swiperOption" ref="mySwiper">
					<swiper-slide><img class="swiImg" src="http://img30.360buyimg.com/shaidan/s128x96_jfs/t1/81995/10/10670/237371/5d80c5f0Edf97d967/17e7d680908facb1.jpg!cc_100x100!q70.dpg.webp"></swiper-slide>
					<div class="swiper-scrollbar" slot="scrollbar"></div>
				</swiper>
			</div>
		</li>
		<li>
			<div class="cmt_user">
				<div class="user_info">
					<img src="//img11.360buyimg.com/jdphoto/s40x40_jfs/t1/25255/18/10701/1678/5c89f892E78c04688/684d63c0d68e39b1.png">
					<span class="user">Lin小可爱呐</span>
				</div>
				<span class="date">2019-08-19</span>
			</div>
			<div class="cmt_cnt">特别好看啊啊啊，手感非常棒，原谅我拍照不好看hah~就是买大了一码嘿嘿</div>
			<div class="cmt_box">
				<swiper :options="swiperOption" ref="mySwiper">
					<swiper-slide><img class="swiImg" src="https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/78684/5/11242/179459/5d8a15c4Eda1b587c/db0edc79b63a2231.jpg!cc_100x100!q70.dpg.webp"></swiper-slide>
					<swiper-slide><img class="swiImg" src="https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/43780/16/15751/149195/5d8a15c4Efcac0560/c5909dae484c3f39.jpg!cc_100x100!q70.dpg.webp"></swiper-slide>
					<swiper-slide><img class="swiImg" src="https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/67890/32/11232/70746/5d8a15c5E369f2b9d/9e2bf3764c481973.jpg!cc_100x100!q70.dpg.webp"></swiper-slide>
					<div class="swiper-scrollbar" slot="scrollbar"></div>
				</swiper>
			</div>
		</li>
	</ul>
	<a href="#" class="assess_more">查看全部评价 ></a>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				swiperOption: {
					notNextTick: true,
					slidesPerView: '4',
					scrollbar: {
						el: '.swiper-scrollbar',
						hide: true, //滚动条是否自动隐藏。默认：false，不会自动隐藏。
						snapOnRelease: false, //如果设置为false，释放滚动条时slide不会自动贴合。
						dragSize: 30, //设置滚动条指示的尺寸。默认'auto': 自动，或者设置num(px)。
						draggable: true,
					},
					mousewheelControl: true,
					speed: 300,
					grabCursor: true,
				},
			}
		},
		methods: {},
		components: {

		},
		mounted() {
			///this.play();
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.cmt_tag {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		background-color: $color_fff;
		padding: 20px 18px;
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
		border-bottom: 1px solid #e5e5e5;
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
	
.assess_more{
	width:200px;
	height:40px;
	margin:0 auto;
	font-size:20px;
	color:#333;
	border:1px solid #ccc;
	border-radius: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 18px;
}
.assess_box{
	background-color:#fff;
	padding-bottom: 20px;
	margin-bottom:20px;
}
	.swiper-container {
		padding-right: 30px;
	}
	
	.cmt_box .swiper-slide {
		margin-right: 10px;
	}
	
	.swiImg {
		width: 140px;
		border-radius: 6px;
	}
	
	.cmt_box {
		width: 100%;
		height: 140px;
		margin-top: 15px;
	}
	
	.cmt_list {
		background-color: $color_fff;
		padding: 0 16px 0px 16px;
		li {
			margin-bottom: 20px;
			padding-bottom:20px;
			border-bottom:1px solid #e5e5e5;
		}
	}
	
	.cmt_cnt {
		width: 100%;
		font-size: 22px;
		color: $color_333;
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
	/*轮播图*/
</style>