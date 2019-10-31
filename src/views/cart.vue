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
			<span class="span2">京东自营</span>
			<span class="span3">
				<i class="icon icontishi"></i><i class="btn_inline">凑单免运费</i><i class="btn_inline">优惠券</i>
			</span>
		</div>
		<ul class="cart_list">
			<li>
				<i class="icon icontishi"></i>
				<div class="imgs">
					<img src="" alt="" />
				</div>
				<div class="content">
					
				</div>
			</li>
		</ul>
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
.cart_list{
	width:100%;
	li{
		width:100%;
		height: 270px;
		display: flex;
		justify-content: flex-start;
		background-color: #fff;
		.content{
			flex: 1;
			
		}
		.span1{
			width:100px;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.imgs{
			width:200px;
			height: 200px;
			display: flex;
			justify-content: center;
			align-items: center;
			img{
				max-width: 100%;
			}
		}
	}
}
.head_wrap{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width:100%;
	height: 80px;
	.span1{
		display: flex;
		width:80px;
		height: 100%;
		justify-content: center;
		align-items: center;
		i{
			font-size:44px;
			color:#aaa;
		}
	}
	.span2{
		width:200px;
		font-size: 32px;
		color:#333;
		font-weight: bold;
		text-align: left;
		padding-left:10px;
		line-height: 1em;
		letter-spacing: 2px;
	}
	.span3{
		flex: 1;
		text-align: right;
		.icon{
			font-size: 26px;
			margin-right:8px;
			color:#ccc;
		}
		.btn_inline{
			font-size: 18px;
			color:#f2270c;
			&:last-child{
				margin:0 15px 0 20px;
				position: relative;
				&:before{
					content: "";
					display: block;
					width:2px;
					height: 18px;
					background-color:#ccc;
					position: absolute;
					left:-10px;
					top:4px;
				}
			}
		}
	}
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