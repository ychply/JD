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
				//console.log(arg);
			}
		}
	}
</script>

<style scoped="scoped">
	.category_content{
		padding-top: 60px;
		width: 640px;
		display: flex;
		flex-direction: row;
	    padding-bottom: 70px;
		
	}
	.category_left{
		flex: 1;
	}
	.category_right{
		flex: 3;
		border-left: 1px solid #ddd;
		
		
	}
</style>