<template>
	<div>
		<div class="catLeft">
			
			<div class="catItem" v-for="(item,index) in list" :key="index" @click="handleData(item.category_id,item.category_name)">
				<p>{{item.category_name}}</p>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				leftData:[],
				
			}
		},
		computed:{
			list(){
				return this.leftData.slice(0,18);
			}
		},
		methods:{
		    dataList(){
		    	let _this=this;
		    	_this.$http.get('/api/category').then((res)=>{
		    		_this.leftData=res.data;
		    		//console.log(res.data);
		    		
		    	}).catch((err)=>{
		    		console.log(err);
		    	})
		    },
		    handleData(cat_id,cat_name){
		    	this.catId=cat_id;
		    	this.catName=cat_name;
		    	this.$emit('parent-show',[cat_id,cat_name]);
		   
		   }
		},
		mounted(){
			this.dataList();
			
		}
	}
</script>

<style scoped="scoped">
	.catLeft{
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.catLeft .catItem{
		width:100%;
		height: 50px;
		
	}
	.catLeft .catItem p{
		height:50px;
		line-height:50px;
		text-align: left;
		padding-left: 20px;
		border-bottom: 1px solid #ddd;
	}
	
	
</style>