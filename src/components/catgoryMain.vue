<template>
	<div class="category_content">
		<div class="category_left">
		<catgory-left-view @parent-show="dataLeft"></catgory-left-view>	
	   </div>    
	    <div class="category_right">
	    	<catgory-right-view :parentData="product"></catgory-right-view>
	    </div>		
	</div>
</template>

<script>	
	import catgoryLeftView from '../components/catgoryLeft.vue'
	import catgoryRightView from '../components/catgoryRight.vue'
	export default{
		data(){return{
			    product:[]		
		}},
		components:{
			catgoryLeftView,
			catgoryRightView
		},
		methods:{
			dataLeft(arg){
				this.product=arg;
			}	
		},
		mounted(){
			
		}	
	}
</script>

<style scoped="scoped">
	.category_content{
		width: 100%;
		display: flex;
		flex-direction: row;
		height: 87vh;
	}
	.category_left{
		flex: 1;
		height: 100%;
		overflow: hidden;
	}
	.category_right{
		flex: 4;
		height: 100%;
		border-left: 1px solid #ddd;	
	}
</style>