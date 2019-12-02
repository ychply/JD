<template>
	<div class="pro_footer">
		<div class="fot_left">
			<a href="#">
				<em class="icon1 cat_icon"></em>
				<span>商家</span>
			</a>
			<a href="#">
				<em class="icon2 cat_icon"></em>
				<span>关注</span>
			</a>
			<router-link to="/cart" tag="a">
				<em class="icon3 cat_icon"></em>
				<span>购物车</span>
			</router-link>
		</div>
		<div class="fot_right">
			<a href="javascript:;" @click="addCart">加入购物车</a>
			<a href="javascript:;" @click="buyPop">立即购买</a>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			addCart(){
				this.$emit('showCartPop','true');
			},
			//加入购物车以原生方式做的弹窗，立即购买是以mt-popup方式做的弹窗，以后可以优化成都用mt-popupt方式，暂时分开
			buyPop(){
				this.$emit('showBuyPop',0);
			}
		},
		components: {

		},
		mounted() {
			///this.play();
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.pro_footer {
		box-shadow: 0 -2px 10px #ccc;
		width: 100%;
		height: 8vh;
		position: fixed;
		left: 0;
		bottom: 0;
		background: #FFFFFF;
		z-index: 2;
		display: flex;
		flex-direction: row;
	}
	
	.pro_footer .fot_left {
		flex: 1;
		display: flex;
		height: 100%;
		flex-direction: row;
		.cat_icon {
			display: block;
			width: 50px;
			height: 40px;
			margin: 6px auto 0;
		}
		.icon1 {
			background: url("../../assets/images/cart_sprits_all.png") no-repeat;
			background-position: -45px 0;
            background-size:200px 200px;
		}
		.icon2 {
			background: url("../../assets/images/cart_sprits_all.png") no-repeat;
			background-position: -97px 0;
			background-size:200px 200px;
		}
		.icon3 {
			background: url("../../assets/images/cart_sprits_all.png") no-repeat;
			background-position: 0px -42px;
			background-size:200px 200px;
		}
	}
	
	.pro_footer a {
		flex: 1;
		display: block;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
        padding: 8px 0;
	}
	
	.pro_footer a span {
		text-align: center;
	}
	
	.pro_footer .fot_right {
		flex: 1;
		height: 100%;
		display: flex;
		flex-direction: row;
	}
	
	.pro_footer .fot_right a {
		flex: 1;
		height: 100%;
		display: block;
		color:#fff;
		font-size: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		letter-spacing: 2px;
	}
	
	.pro_footer .fot_right a:nth-child(1) {
		background: #FFB03F;
	}
	
	.pro_footer .fot_right a:nth-child(2) {
		background: #F23030;
	}
	/*底部*/
</style>