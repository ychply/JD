<template>
	<div class="m_cart">
		<headTitle message="购物车"></headTitle>
		<div class="address_bar_wrap">
			<span class="address"><i class="icon icondingwei"></i>广州市黄埔区</span>
		    <span class="btn">编辑商品</span>
		</div>
		<div class="mod_blockTips">
			<span class="span1">购物车中有28件降价商品，点击查看商品</span>
			<i class="icon iconcuo"></i>
		</div>
		<div class="head_wrap">
			<span class="span1"><i class="icon iconchoose"></i></span>
			<span class="span2"></span>
		</div>
	</div>

</template>

<script>
	import headTitle from "../components/head_title.vue"
	export default {
		data() {
			return {}
		},
		methods: {

		},
		mounted() {

		},
		computed: {

		},
		components: {
			headTitle
		}
		//		watch(){
		//			login(val) {
		//		     console.log(val)
		//		    }
		//		}
	}
</script>

<style lang="scss" scoped="scoped">
.head_wrap{
	
}
.mod_blockTips{
	width:100%;
	background-color:#fdf0f0;
	color:#e93b3d; 
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 64px;
	padding:0 20px;
	.span1{
		font-size:24px;
	}	
	i{
		font-size:40px;
	}
}
.address_bar_wrap{
	width:100%;
	height: 90px;
	background-color:#fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:0 20px;
	.address{
		color:#999;
		font-size:24px;
		i{
			font-size:26px;
		}
	}
	.btn{
		font-size: 24px;
		color:#222;
	}
}
.m_cart{
	background-color:#fff;
}

</style>