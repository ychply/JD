<template>
	<div class="m_catgory">
	    <searchHead head="search"></searchHead>
	    <div class="search_hot">
	    	<h2>热门搜索</h2>
	    	<ul>
	    		<li :class="{active : index < 3}" v-for="(item,index) of hotList" :key="index">{{item}}</li>
	    	</ul>
	    	
	    </div>
	</div>
</template>
<script>
	import searchHead from '../components/searchHead.vue'
	export default{
		data(){return{
			hotList:['功夫茶杯','遛狗绳','珊瑚绒床垫','篮球','进口牛奶','登山帽','不锈钢汤锅','铝合金门窗','欧式吊灯','充电宝','高清线hdmi','多肉植物种子']		
		}
		},
		methods:{
				_back() {
				this.$router.go(-1)
			},
		},
		components:{
			searchHead
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.m_catgory{
		background: #F3F4F6;
		max-width:750px;
		margin:0 auto;
	}
	.search_hot{
		width:100%;
		padding:15px;
		background-color:#fff;
		h2{
			font-size:22px;
			color:#000;
			text-align: left;
			font-weight: 400;
		}
		ul{
			width:100%;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			padding:20px 0;
			.active{
				color:#e93b3d;
			}
			li{
				padding:5px 20px;
				background-color: #f0f2f5;
				text-align: center;
				margin: 0 15px 15px 0;
				color:#686868;
				border-radius: 6px;
				font-size: 18px;
			}
		}
	}
	
/*中间内容*/




</style>