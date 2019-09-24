<template>
	<div class="m_catgory">
		<header class="top_bar">
	        <a onclick="window.history.go(-1)" class="icon_back"></a>
	        <form action="" class="goods_search">
	            <input type="search" class="goods_search_content" placeholder="请输入搜索内容...">
	        </form>
	        <a href="#" class="icon_menu"></a>
	    </header>
	    <catgoryMainView></catgoryMainView>
	</div>
</template>
<script>
	import catgoryMainView from '../components/catgoryMain.vue'
	export default{
		data(){return{
			
		}
		},
		components:{
			catgoryMainView
		}
	}
</script>

<style scoped="scoped">
	.m_catgory{
		background: #F3F4F6;
	}
	.top_bar {
    width: 100%;
    height:60px;
    background: url("../assets/images/header-bg.png") repeat-x;
    background-size: 1px 44px;
    border-bottom: 1px solid #bfbfbf;
    position: fixed;
    z-index: 2;
    background: #ddd;
}

.top_bar .icon_back {
	 background: url("../assets/images/sprites.png") no-repeat;
    background-size: 360px 360px;
    height:45px;
    width:40px;
    background-position: -36px 0;
    display: block;
    margin: 10px 10px;
    position: absolute;
    left: 0;
    top: 0;
}

.top_bar .cartname {
    text-align: center;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: normal;
    line-height: 45px;
}

.top_bar .goods_search {
    width: 100%;
    height:52px;
    padding-left:65px;
    padding-right:60px;
}

.top_bar .goods_search .goods_search_content {
    width: 100%;
    height:52px;
    line-height: 52px;
    border-radius: 6px;
    border: 1px solid #bfbfbf;
    padding-left: 18px;
    margin-top:3px;
}

.top_bar .icon_menu {
	 background: url("../assets/images/sprites.png") no-repeat;
    background-size: 360px 360px;
    height:52px;
    width:60px;
    background-position: -106px 0;
    background-clip: content-box;
    background-origin: content-box;
    -moz-background-origin: content-box;
    -webkit-background-origin: content-box;
    display: block;
    padding: 10px 12px;
    position: absolute;
    right: 0;
    top: 0;
}
/*中间内容*/




</style>