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
		<div class="cart_list">
			<cartitem v-for="(item,index) in cart" :key="index" :goods="item" ></cartitem>
		</div>
		<div class="fixBar">
			<div class="all_select">
				<i class="icon iconchoose"></i>
				<span>全选</span>
			</div>
		</div>
	</div>
</template>

<script>
	import headTitle from "../components/head_title.vue"
	import cartitem from "../components/cartItem.vue"
	export default {
		data() {
			return {
				cart:[]
			}
		},
		methods: {

		},
		created(){
					this.$http.get('cart', {
				params: {
					userId: 3
				}
			}).then((res) => {
				this.cart = res.data;
//				console.log(res.data)
			}).catch((err) => {
				console.log(err);
			})
		},
		mounted() {
	
		},
		computed: {

		},
		components: {
			headTitle,
			cartitem
		}
		//		watch(){
		//			login(val) {
		//		     console.log(val)
		//		    }
		//		}
	}
</script>

<style lang="scss" scoped="scoped">
.fixBar{
	width:100%;
	height: 90px;
	position: fixed;
	bottom:0;
	left:0;
	right:0;
	margin:0 auto;
	background: hsla(0,0%,100%,.95);
	padding-bottom: env(safe-area-inset-bottom);
	z-index: 120;
	display: flex;
	justify-content: space-between;
	align-items: center;
	&:before{
	    content: "";
	    position: absolute;
	    z-index: 1;
	    pointer-events: none;
	    background-color: #ddd;
	    height: 1px;
	    left: 0;
	    right: 0;
	    top: 0;
	}
	.all_select{
		display:flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		width:100px;
		i{
			font-size:38px;
			color:#ccc;
		}
		span{
			font-size:24px;
			color:#aaa;
		}
	}
}
.cart_list{
	width:100%;
	background-color:#f7f7f7;
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