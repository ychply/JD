<template>
	<header class="top_bar">
		<span @click="_back" class="icon_bg"><i class="icon iconarrow-l fwb"></i></span>
		<div v-if="head=='top'" class="search"><i class="icon iconsousuo1 fwb"></i> <span>请输入搜索内容...</span></div>
		<form v-else class="search" action="#"><i class="icon iconsousuo1 fwb"></i>
			<input type="text" placeholder="请输入搜索内容..." />
			
		</form>
		<span class="icon_bg"><i class="icon icongengduo "></i></span>
	</header>
</template>
<script>
	export default{
		data(){
			return{		
				
			}
		},
		props:["head"],
		computed:{
		
		},
		methods:{
		   _back() {
				this.$router.go(-1)
			},
		   
		},
		mounted(){
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.top_bar {
		width: 100%;
		height: 6vh;
		transition: all 0.2s linear;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
		border-bottom: 1px solid #e5e5e5;
		background-color:#fff;
		.icon_bg {
			width: 45px;
			height: 45px;
			display: flex;
			justify-content: center;
			align-items: center;
			i {
				font: {
					size: 24px;
				}
				color:$color_333;
			}
			.iconarrow-l {
				position: relative;
				left: -1px;
			}
		}
		.search{
			width:80%;
			background-color:#f7f7f7;
			height: 50px;
			border-radius: 80px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding:0 25px;
			i{
				font-size:24px;
				color:#666;
				position: relative;
				top:1px;
				margin-right:18px;
			}
			span{
				font-size: 20px;
				color:#666;
			}
			input{
				flex: 1;
				padding-right:10px;
				outline: none;
				border:none;
			}
		}
	}
</style>