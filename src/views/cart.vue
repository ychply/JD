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
			<span class="span1" :class="{'active':isSelectAll}" @click="all_select"><i class="checkbox"></i></span>
			<span class="span2">京东自营</span>
			<span class="span3">
				<i class="icon icontishi"></i><i class="btn_inline">凑单免运费</i><i class="btn_inline">优惠券</i>
			</span>
		</div>
		<div class="cart_list">
			<cartitem v-for="(item,index) in cart" :key="index" :goods="item" @getlist="getList" ></cartitem>
		</div>
		<div class="fixBar">
			<div class="all_select" :class="{'active':isSelectAll}" @click="all_select">
				<i class="checkbox"></i>
				<span>全选</span>
			</div>
			<div class="total">
				<p class="t_main">总计:<span>￥{{getTotal.totalPrice}}</span></p>
				<p class="t_tip">已优惠¥50.00</p>
			</div>
			<div class="buy">去结算<span class="num">({{getTotal.totalNum}}件)</span></div>
		</div>
	</div>
</template>

<script>
	import headTitle from "../components/head_title.vue"
	import cartitem from "../components/cartItem.vue"
	import { mapGetters } from "vuex";
	export default {
		data() {
			return {
				cart:[]
			}
		},
		methods: {
			getList(){
				let _this = this;
				_this.$http.get('cart', {
					params: {
						userId: _this.userInfo.id
					}
				}).then((res) => {
					_this.cart = res.data;
					_this.cart.map(function(item){
						_this.$set(item,'select',true)			
					})
	//				console.log(res.data)
				}).catch((err) => {
					console.log(err);
				})
			},
			all_select(){
				let checked = this.isSelectAll;
				console.log(checked)
				this.cart.map(function(item){
					if(checked){
						item.select = false;
					}else{
						item.select = true;
					}
				})
			}
//			checkChange(product){
//				this.cart.map(function(item){
//					if(item.product_id == product.id){
//						console.log(item)
//					}
//				})
//				
//			}
		},
		created(){
			this.getList();
		},
		mounted() {
						
	
		},
		computed: {
			//获取用户信息
			...mapGetters(["userInfo"]),
			//检测是否全选
			isSelectAll(){
				 //如果productList中每一条数据的select都为true，返回true，否则返回false;
       			 return this.cart.every(function (val) { return val.select});
			},
			//获取总价和产品总件数
			getTotal:function(){
				//获取cart中select为true的数据。
				let _proList = this.cart.filter(function (val) { return val.select});
				let totalPrice = 0;
				let totalNum = 0;
				for(let i = 0,len = _proList.length;i<len;i++){
					 //总价累加
					totalPrice += _proList[i].goods_num * _proList[i].product_uprice;
					totalNum += _proList[i].goods_num;
				}
				return {totalNum:totalNum,totalPrice:totalPrice}
			}
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
	height: 86px;
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
	.total{
		flex: 1;
		padding-right:36px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-end;
		.t_main{
			width:100%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			font-size: 26px;
			color:#333;
			font-weight: bold;
			span{
				color:#f2270c;
			}
		}
		.t_tip{
			color:#999;
			letter-spacing: 1px;
		}
	}
	.buy{
		width:190px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color:#f2270c;
		background-image: linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c);
		background-image: -webkit-linear-gradient(315deg,#f2140c,#f2270c 70%,#f24d0c);
		color: #fff;
		border-radius: 4px;
		font-weight: 700;
		flex-shrink: 0;
		font-size: 28px;
		letter-spacing: 2px;
		span{
			font-size: 20px;
			font-weight: normal;
		}
	}
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
		.checkbox:before{
				font-family: "iconfont" !important;
				font-size: 16px;
				font-style: normal;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				content: "\e614";
				font-size: 40px;
				color: #999;
		}
		&.active .checkbox:before {
				content: "\e626";
				color: #e4393c;
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
	padding-bottom:40px;
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
		.checkbox:before{
				font-family: "iconfont" !important;
				font-size: 16px;
				font-style: normal;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				content: "\e614";
				font-size: 44px;
				color: #999;
		}
		&.active .checkbox:before {
				content: "\e626";
				color: #e4393c;
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