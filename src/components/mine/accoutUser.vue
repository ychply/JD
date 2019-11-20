<template>
	<div class="user_item">
		<div class="imgs"><img src="../../assets/images/mine/head.png" alt="" /></div>
		<div class="user_detail"> 
			<span class="user_name">莫上尘</span>
			<span class="user_pin">用户名: yang15766633241</span>
		</div>		
		<div class="account_tip">当前登录</div>
			<div class="points"></div>
			<div class="ring"></div>
			<div class="circle"></div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {},
		components: {

		},
		mounted() {
			///this.play();
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.user_item{
		width:100%;
		border:1px solid #e93b3d;
		border-radius: 16px;
		height: 150px;
		background-color:#fff9f9;
		display: flex;
		justify-content: flex-start;
		padding:30px;
		position: relative;
		overflow: hidden;
		margin-bottom:24px;
		&:last-child{
			margin-bottom: 0;
		}
		.points{
			position: absolute;
			right:74px;
			bottom:20px;
			width:48px;
			height: 42px;
			background:url("../../assets/images/mine/points.png") no-repeat;
			background-size: 100% 100%;
		}
		.ring{
			width:28px;
			height: 28px;
			border: 4px solid #ffa9a9;
			border-radius: 50%;
			position: absolute;
			bottom:14px;
			right:28px;
			opacity: 0.3;
		}
		.circle{
			width:100px;
			height: 100px;
			border-radius: 50%;
			background-color:#ffa9a9;
			opacity: 0.3;
			position: absolute;
			bottom:-49px;
			right:-49px;
		}
		.account_tip{
	    	height: 42px;
	    	line-height: 42px;
	    	padding:0 20px;
	    	background-color:#ffe4e4;
	    	color:#e2231a;
	    	border-radius: 0 16px 0 16px;
	    	position: absolute;
	    	top:1px;
	    	right:1px;
	    }
		.imgs{
			width:80px;
			height: 80px;
			border-radius: 50%;
			overflow: hidden;
			display:flex;
			justify-content:center;
			align-items:center;
			margin-right:15px;
			img{
				max-width: 100%;
				max-height: 100%;
			}
		}
		.user_detail{
			display: flex;
			flex-direction:column;
			text-align: left;
			.user_name{
				font-size: 22px;
				color:#222;		
				margin-top:5px;		
			}
			.user_pin{
				font-size: 20px;
				color:#999;
				margin-top:10px;
			}
		}
		}
</style>