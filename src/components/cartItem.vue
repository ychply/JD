<template>
	<div class="cart_item">
		<div class="span1" :class="{'active':goods.select}" @click="onClickCheck">
			<i class="checkbox"></i>
		</div>
		<div class="imgs">
			<img :src="goods.product_img_url" alt="" />
		</div>
		<div class="content">
			<h2>{{goods.product_name}}</h2>
			<p class="sku_line"><span class="sku">墨菊深度补水修容BB霜（墨菊BB）40ml <i class="icon iconarrow-b"></i></span> <span class="sku">选服务 <i class="icon iconarrow-r"></i></span></p>
			<p class="discount_line"><span class="sku">满129减20<i class="icon iconarrow-b"></i></span></p>
			<div class="price_line">
				<span class="price">￥<i>{{price_p1}}</i>.{{price_p2}}</span>
				<!--<div class="num_wrap">
					<span class="minus item"></span>
					<div class="input_wrap">
						<input type="tel" class="num">
					</div> 
					<span class="plus item"></span>
				</div>-->
				<setnumber :number="goods.goods_num" :min-number="1" :max-number="999" @on-minus="onMinus"  @on-add="onAdd"></setnumber>
			</div>	
			<div class="m_action">
				<span>移入关注</span><span @click="delCart">删除</span>
			</div>
		</div>
	</div>
</template>
<script>
	import setnumber from "../components/number.vue"
	export default{
		props:{
			goods:{
				type:Object,
				default :() => {}
			},
			shopData: {
		        type: Array,
		        default: () => []
		      },
		},
		data(){
			return{
				 number: 1
			}
		},
		methods:{
			updataCart(num){
				this.$http.post('updataCartNum',{cartId:this.cart_id,cartNum:num}).then((res)=>{
	        	console.log(res.data.msg)
		        }).catch((err)=>{
		        	console.log(err)
		        })
			},
			onMinus () {
		        this.goods.goods_num--;
				this.updataCart(this.goods.goods_num);
		      },
		      onAdd () {
		        this.goods.goods_num++;
		        this.updataCart(this.goods.goods_num);
		      },
		      delCart(){
		      	this.$http.get('delCart',{
					params: {
						'cartId': this.cart_id
					}}).then((res)=>{
						this.$emit('getlist');
	        		console.log(res)
		        }).catch((err)=>{
		        	console.log(err)
		        })
		     },
		     onClickCheck(){
		     	this.goods.select = !this.goods.select;
//		     	this.$emit('checkChange',{checked:this.goods.select,id:this.goods.product_id})
		     }
		},
		mounted(){

		},
		computed:{
			price_p1: function(){
				let p = this.goods.product_uprice.toString().split('.');
				return p[0];
			},
			price_p2: function(){
				let price = this.goods.product_uprice.toFixed(2);
				let p = price.toString().split('.');
				return p[1]
			},
			cart_id: function(){
				return this.goods.cart_id;
			}
		},
		components: {
			setnumber
		}
//		watch(){
//			login(val) {
//		     console.log(val)
//		    }
//		}
	}
</script>

<style lang="scss" scoped="scoped">
.m_action{
	width:100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top:20px;
	span{
		font-size:20px;
		color:#999;
		display: block;
		height: 36px;
		line-height: 36px;
		letter-spacing:2px; 
		&:last-child{
			margin-left:20px;
			position: relative;
			&:before{
				content: "";
			    width:1px;
			    height: 18px;
			    background-color:#e5e5e5;
			    position: absolute;
			    top:6px;
			    left:-11px;
			}
		}
	}
}
.price_line{
	width:100%;
	height: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top:8px;
	.price{
		color:#f2270c;
		font-size:18px;
		i{
			font-size:32px;
		}
	}
}
.discount_line{
	margin-top:8px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	.sku{
		background-color:#fcedeb;
		color:#f2270c;
		padding:0 36px 0 10px;
		i{
			color:#f2270c;
		}
	}
}
.sku{
	background-color:#f7f7f7;
	color:#666;
	display: inline-block;
	height: 34px;
	line-height: 36px;
	min-width:100px;
	max-width:180px;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
	padding:0 25px 0 10px;
	font-size:20px;
	border-radius: 4px;
	position: relative;
	text-align: left;
	i{
		color:#666;
		font-weight: bold;
		font-size:16px;
		position: absolute;
		top:2px;
		right:5px;
		transform: scale(0.8);
	}
}
	.cart_item{
		width:100%;
		min-height: 270px;
		display: flex;
		justify-content: flex-start;
		background-color: #fff;
		margin-bottom:30px;
		padding:20px 0;
		.content{
			flex: 1;
			margin:0 15px;
			h2{
				font-size:26px;
				font-weight: normal;
				color:#333;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				line-height: 38px;
			}
			.sku_line{
				height: 40px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin:8px 5px 0 0;
			}
			
		}
		.span1{
			width:100px;
			display: flex;
			justify-content: center;
			align-items: center;
			padding-bottom: 40px;
			.checkbox{
				width:40px;
				height: 40px;
			}
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
		}
		/*&.active .checkbox:before{
			content: "\e626";
			color: #e4393c;
		}*/
		.imgs{
			width:200px;
			height: 200px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color:#fff;
			img{
				max-width: 100%;
			}
		}
	}
</style>