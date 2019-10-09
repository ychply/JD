<template>
	<div class="main">
		<ul class="info_tabs" @click="switchSwiper($event)">
			<li :class="{'on':index == 0}" data-index="0">商品介绍</li>
			<li :class="{'on':index == 1}" data-index="1">规格参数</li>
			<li :class="{'on':index == 2}" data-index="2">售后保障</li>
		</ul>
		<swiper :options="swiperOption" ref="mySwiper" class="swiper-container wrapper swiper-no-swiping">
			<swiper-slide class="info slide_item">
				<div id="commDesc" class="detail_pc">
					<div class="detail_txet">
						<p style="margin:0;width:0;height:0;overflow:hidden;"><img src="//img12.360buyimg.com/imgzone/jfs/t1/8221/34/10517/2790/5c21b1aeEc29a166b/38758f8f6ecc51e0.png!q70.webp" loaded="11"></p>
						<p style="margin:0 0 5.0px 0;width:0;height:0;overflow:hidden;"><br><img src="//img12.360buyimg.com/imgzone/jfs/t1/8221/34/10517/2790/5c21b1aeEc29a166b/38758f8f6ecc51e0.png!q70.webp" loaded="10"></p>
						<p style="margin-top:1.12em;margin-bottom:1.12em;color:#000000;text-align:center;"><strong><span style="font-size:18.0px;"><span style="font-family:microsoft yahei;">S&nbsp;肩宽不限 &nbsp;胸围110 &nbsp;衣长78 &nbsp;袖长56</span></span></strong></p>
						<p style="margin-top:1.12em;margin-bottom:1.12em;color:#000000;text-align:center;"><strong><span style="font-size:18.0px;"><span style="font-family:microsoft yahei;">M&nbsp;肩宽不限 &nbsp;胸围112 &nbsp;衣长80 &nbsp; 袖长58</span></span></strong></p>
						<p style="margin-top:1.12em;margin-bottom:1.12em;color:#000000;text-align:center;"><strong><span style="font-size:18.0px;"><span style="font-family:microsoft yahei;">L &nbsp;肩宽不限 &nbsp;胸围116 &nbsp;衣长82 &nbsp;袖长60&nbsp;</span></span></strong></p>
						<p style="margin-top:1.12em;margin-bottom:1.12em;color:#000000;text-align:center;"><strong><span style="font-size:18.0px;"><span style="font-family:microsoft yahei;"><strong>XL &nbsp;肩宽不限 &nbsp;胸围120 &nbsp;衣长84 &nbsp; 袖长61</strong></span>
							</span>
							</strong>
						</p>
						<p style="margin-top:1.12em;margin-bottom:1.12em;color:#000000;">&nbsp;</p>
						<p style="margin-top:1.12em;margin-bottom:1.12em;color:#000000;text-align:center;">（理论上这款不限身高、体重、胖瘦都可以穿哦，百搭款）</p>
						<p style="margin-top:1.12em;margin-bottom:1.12em;color:#000000;text-align:center;">&nbsp;</p>
						<p style="margin-top:1.12em;margin-bottom:1.12em;color:#000000;text-align:center;"><strong><span style="font-size:18.0px;"><u><span style="font-family:microsoft yahei;">风衣非常厚实， 以至于南方的们甚至可以穿着它过冬；</span></u></span></strong></p>
						<p style="margin-top:1.12em;margin-bottom:1.12em;color:#000000;text-align:center;"><strong><span style="font-size:18.0px;"><u><span style="font-family:microsoft yahei;">采用进口全棉水洗面料，高档定制，不输专柜品质</span><font face="微软雅黑">；</font></u></span></strong></p>
						<p style="margin-top:1.12em;margin-bottom:1.12em;color:#000000;text-align:center;"><u><strong><span style="font-family:microsoft yahei;"><font size="3">正因面料优选，所以怎么放都有型，不会皱。</font></span></strong></u></p>
						<p style="margin-top:1.12em;margin-bottom:1.12em;color:#000000;text-align:center;"><u><strong><font size="3"><span style="font-family:microsoft yahei;">衣服版型宽松且不肥大，可以驾驭住大部分身材。</span></font></strong></u></p>
						<p style="margin-top:1.12em;margin-bottom:1.12em;color:#000000;text-align:center;"><u><strong><font size="3"><span style="font-family:microsoft yahei;">中长款也一直是比较流行的外套款式。</span></font></strong></u></p>
						<p style="margin-top:1.12em;margin-bottom:1.12em;color:#000000;text-align:center;"><u><strong><font size="3"><span style="font-family:microsoft yahei;">怎么搭配，相信们比我更在行。</span></font></strong></u></p>
					</div>
					<p><img align="absmiddle" size="750x750" src="//img14.360buyimg.com/imgzone/jfs/t1/9019/20/11400/107649/5c2c5c74Ee7417837/e571d5d3998b5b0e.jpg!q70.dpg.webp" style="max-width:750.0px;" loaded="9"><img align="absmiddle" size="750x750" src="//img12.360buyimg.com/imgzone/jfs/t1/23413/28/3870/84791/5c2c5c74E0951d1fa/0d7e10984f06cf56.jpg!q70.dpg.webp" style="max-width:750.0px;" loaded="8"><img align="absmiddle" size="800x1200" src="//img13.360buyimg.com/imgzone/jfs/t1/10881/16/7595/148777/5c2c6731E10d548d0/7477428e5ae2a454.jpg!q70.dpg.webp" style="max-width:750.0px;" loaded="7"><img align="absmiddle" size="640x426" src="//img10.360buyimg.com/imgzone/jfs/t1/15023/10/3904/35592/5c2c5c76Ed3118ad6/aac806b90f8f1f57.jpg!q70.dpg.webp" style="max-width:750.0px;" loaded="6"><img align="absmiddle" size="640x426" src="//img14.360buyimg.com/imgzone/jfs/t1/16445/35/3813/27174/5c2c5c76E2d8dddfe/cb4ef800e4e812be.jpg!q70.dpg.webp" style="max-width:750.0px;" loaded="5"><img align="absmiddle" size="750x750" src="//img10.360buyimg.com/imgzone/jfs/t1/7067/4/11514/88495/5c2c5c74Eb236732e/241063dd8cd4ed64.jpg!q70.dpg.webp" style="max-width:750.0px;" loaded="4"><img align="absmiddle" size="640x426" src="//img12.360buyimg.com/imgzone/jfs/t1/17541/26/3833/32748/5c2c5c76E1f92ae80/653d4384e38bf733.jpg!q70.dpg.webp" style="max-width:750.0px;" loaded="3"><img align="absmiddle" size="640x426" src="//img12.360buyimg.com/imgzone/jfs/t1/16372/36/3852/21552/5c2c5c76E2c08d9a7/210a5fd8d252090c.jpg!q70.dpg.webp" style="max-width:750.0px;" loaded="2"><img align="absmiddle" size="640x426" src="//img10.360buyimg.com/imgzone/jfs/t1/8244/22/11441/21462/5c2c5c76Ecac060cd/8cf14f2d4f6d9bc6.jpg!q70.dpg.webp" style="max-width:750.0px;" loaded="1"></p>
					<br></div>
			</swiper-slide>
			<swiper-slide class="parameter slide_item">
				<div class="parameter_title">
					<h3>商品参数</h3>
				</div>
				<ul class="parameter_list">
					<li>
						<span class="span1">商品编号</span>
						<span class="span2">1545454512</span>
					</li>
					<li><span class="span1">主体</span></li>
					<li>
						<span class="span1">品牌</span>
						<span class="span2">夏尔维纳CHANVENUEL</span>
					</li>
				</ul>
			</swiper-slide>
			<swiper-slide class="service slide_item">
				<div class="parameter_title">
					<h3>权利声明</h3>
				</div>
				<div class="service_info">
					<p>京东商城上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是京东商城重要的经营资源，未经许可，禁止非法转载使用。</p>
					<p><strong>注:</strong>本站商品信息均来自于厂商，其真实性、准确性和合法性由信息拥有者（厂商）负责。本站不提供任何保证，并不承担任何法律责任。</p>
				</div>
				<div class="parameter_title">
					<h3>价格说明</h3>
				</div>
				<div class="service_info">
					<p><strong>1.京东价：</strong>京东价为商品的销售价，是您最终决定是否购买商品的依据。</p>
					<p><strong>2.划线价：</strong>商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在京东平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>
					<p><strong>3.折扣：</strong>如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。</p>
					<p><strong>4.异常问题：</strong>商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。</p>

				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				index: 0,
				swiperOption: {
					autoHeight: true,
					initialSlide: 0,
					speed: 300,
					// delay:1000
					grabCursor: true,

				},
				productList: []
			}
		},
		methods: {
			switchSwiper(e) {
				let li = e.target;
				let index = li.getAttribute('data-index');
				this.index = index;
				this.swiper.slideTo(index, 500, false)
			}
		},
		components: {

		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		created() {},
		mounted() {
			///this.play();
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.service_info {
		font-size: 18px;
		p {
			text-align: left;
			line-height: 30px;
		}
	}
	
	.service {
		padding: 0 15px;
	}
	
	.parameter_list {
		width: 100%;
		border: 1px solid #dadada;
		border-bottom: none;
		li {
			width: 100%;
			min-height: 60px;
			display: flex;
			justify-content: flex-start;
			border-bottom: 1px solid #dadada;
			span {
				display: flex;
				min-height: 60px;
				align-items: center;
				padding-left: 15px;
				text-align: left;
				font-size: 20px;
				color: #666;
			}
			.span1 {
				width: 150px;
			}
			.span2 {
				flex: 1;
				border-left: 1px solid #dadada;
			}
		}
	}
	
	.parameter {
		padding: 0 15px;
	}
	
	.parameter_title {
		width: 100%;
		height: 50px;
		position: relative;
		margin-top: 20px;
		&:before {
			content: "";
			width: 100%;
			height: 1px;
			display: block;
			position: absolute;
			left: 0;
			top: 50%;
			background-color: #ddd;
			z-index: 1;
		}
		h3 {
			font-size: 20px;
			font-weight: 400;
			color: #666;
			position: absolute;
			left: 50%;
			top: 0;
			transform: translateX(-50%);
			width: 200px;
			height: 50px;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 3;
		}
	}
	
	.slide_item {
		padding-bottom: 200px;
		min-height: 800px;
	}
	
	.detail_pc {
		width: 100%;
		.detail_txet {
			padding: 0 20px;
			transform: scale(0.9);
		}
	}
	
	.info_tabs {
		width: 100%;
		height: 70px;
		display: flex;
		border-bottom: 1px solid #ddd;
		.on {
			color: $color_primary;
		}
		li {
			flex: 1;
			border-right: 1px solid #ddd;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #333;
			font-size: 20px;
			&:last-child {
				border: none;
			}
		}
	}
	
	.main {
		background-color: #fff;
	}
</style>