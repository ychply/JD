<template>
    <div>
    <section class="product_box">
    <div class="product_top">
      <img src="../assets/images/jd_skill.png" class="miaosha_icon"/>
      <strong>六点场</strong>
      <span class="time">00:22:43</span>
    </div>
     <div class="product_main">
       <div class="product_main_item" v-for="(item,index) in listTop" :key="index">
       	<router-link :to="'/detail/'+item.product_id">
       	<img class="pro_icon" v-lazy="item.product_img_url"/>
       	</router-link>
       	<p class="price">￥{{item.product_price}}</p>
       	<p class="uprice">￥{{item.product_uprice}}</p>
       </div>
     
     </div>    
    </section>
    
    <!--商品区-->
    <section class="m_product">
    	<h2>为你推荐</h2>
    	<div class="product">
    		<div class="product_item" v-for="(item,index) in productList" :key="index">
    			<router-link :to="'/detail/'+item.product_id">
    			<img v-lazy="item.product_img_url"/>
    			<p class="pro_name">{{item.product_name}}</p>
    			<p class="pro_name">￥{{item.product_price}}</p>
    			</router-link>
    		</div>
    		
    		
    	</div>
    	
    	
    </section>
    
    
    </div>
</template>

<script>
	export default{
		data(){
			return{
				listTop:[],
				productList:[]
			}
		},
		methods:{
			showList(){
				let _this=this;
				this.$http({
					method:"get",
					url:"/api/list",
					data:{}
				}).then((res)=>{
					_this.listTop.push(res.data[0]);
					_this.listTop.push(res.data[1]);
					_this.listTop.push(res.data[2]);
					_this.listTop.push(res.data[3]);
					_this.productList=res.data;
					console.log(res.data[0]);
					
					
				}).catch((err)=>{
					console.log(err);
				})
			}
		},
		mounted(){
			this.showList();
		}
		
	}
</script>

<style scoped="scoped">
	.product_box{
		width:640px;
		margin-top: 20px;
	}
	.product_top{
		
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		width: 100%;
		height: 36px;
		padding-bottom: 3px;
		border-bottom: 2px solid #999;
	}
	.product_top img.miaosha_icon{
		display: block;
		width: 80px;
		height: 35px;
		margin-right: 8px;
	}
	
	.product_top .time{
		margin-left: 8px;
		display: block;
		height: 20px;
		font-size: 12px;
		color: #999;
		margin-bottom: 3px;
		align-self: flex-end;
	}
	.product_main{
		background: white;
		margin-top: 6px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
      .product_main .product_main_item{
		flex: 1;
		padding-top: 6px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.product_main .product_main_item .pro_icon{
		display: block;
		margin: 0 auto;
		width: 120px;
		height: 100px;
	}
	.product_main .product_main_item .price{
		color: red;
	}
	.product_main .product_main_item .uprice{
		color: #666;
		text-decoration: line-through;
	}
	
	/*商品*/
	.m_product h2{
		height: 32px;
		text-align: left;
		font-size:22px;
		line-height: 32px;
		text-align: left;
		padding-left: 25px;
		margin-top: 3px;
	}
	.m_product .product{
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.m_product .product .product_item{
		width: 320px;
		margin-top: 8px;
		display: flex;
		flex-direction: column;
		align-items:flex-start;
		
		
	}
	.m_product .product .product_item .pro_name{
		text-align: left;
		width:300px;
		margin:0 auto;
	}
	.m_product .product .product_item img{
		margin:0 auto;
		display: block;
		width: 300px;
		height:300px ;
	}
	
	
</style>