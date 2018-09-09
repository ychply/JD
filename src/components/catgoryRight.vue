<template>
<div>
	<div class="cat_right_top">
		<img src="../assets/images/banner_1.png"/>
	</div>
	<div class="cat_product">
		<h3>{{parentData[1]}}商品区</h3>
		<div class="product">
			<div class="product_item" v-for="(item,index) in product" :key="index">
				<router-link :to="'/detail/'+item.product_id" class="category_detail_item_link">
				<img v-lazy="item.product_img_url" alt="" />
				
				<p>{{item.product_name}}</p>
				</router-link>
			</div>
		</div>
	</div>
	
</div>
</template>

<script>
	export default{
		data(){
			return{
				product:null
			}
			
		},
		props:['parentData'],
		watch:{
			parentData(val){
				let _this=this;
				_this.$http.get('/api/categorygoods',{
					params:{
					mId:val[0]
				}
					}).then((res)=>{
					//console.log(val[0]);
					console.log(res);
					this.product=res.data;
				}).catch((err)=>{
					console.log(err);
				})
			}
		},
		methods:{
			
		},
		mounted(){
			
		}
	}
</script>

<style scoped="scoped">
	.cat_right_top{
		width: 100%;
	}
	.cat_right_top img{
		width: 100%;
		height: 200px;
	}
	
	.cat_product h3{
		text-align: left;
		padding-left: 20px;
	}
	.product{
		padding-left: 5px;
		display: flex;
		width: 100%;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content:inherit;
	}
	.product .product_item{
		width:150px;
		margin-right: 5px;
		margin-top: 12px;
	}
	.category_detail_item_link{
		
		width:150px;
		display: flex;
		
		flex-direction: column;
		align-items: center;
		
	}
	.product .product_item .category_detail_item_link img{
		display: block;
		height: 150px;
		width:150px;
		margin:0 auto;
		
	}
	.product_item .category_detail_item_link p{
		width: 160px;
		height: 36px;
		line-height: 36px;
	    overflow: hidden;
	}
</style>