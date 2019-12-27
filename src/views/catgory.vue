<template>
	<div class="m_catgory">
		<!--<header class="top_bar">
	        <a @click="_back" class="icon_back"></a>
	        <form action="" class="goods_search">
	            <input type="search" class="goods_search_content" placeholder="请输入搜索内容...">
	        </form>
	        <a href="#" class="icon_menu"></a>
	    </header>-->
	    <searchHead head="top"></searchHead>
	    <catgoryMainView></catgoryMainView>
	</div>
</template>
<script>
	import searchHead from '../components/searchHead.vue'
	import catgoryMainView from '../components/catgoryMain.vue'
	export default{
		data(){return{
			
		}
		},
		methods:{
				_back() {
				this.$router.go(-1)
			},
		},
		components:{
			catgoryMainView,
			searchHead
		}
	}
</script>

<style scoped="scoped">
	.m_catgory{
		background: #F3F4F6;
		width:100%;
		margin:0 auto;
		position: fixed;
		top:0;
		left: 0;
	}
	
/*中间内容*/




</style>