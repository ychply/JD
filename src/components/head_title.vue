<template>
	<div class="cmm_header">
		<span @click="_back" class="span"><i class="icon iconarrow-l fwb"></i></span>
		<span class="cmm_title">{{message}}</span>
		<span class="span"><i class="icon icongengduo "></i></span>
	</div>
</template>
<script>
	export default{
		data(){
			return{
			}
		},
		props:['message'],
		methods:{
			_back() {
					this.$router.go(-1)
				}
		},
		mounted(){
			
		},
		computed:{

		}
//		watch(){
//			login(val) {
//		     console.log(val)
//		    }
//		}
	}
</script>

<style lang="scss" scoped="scoped">
	.cmm_header {
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:0 15px;
		background-color:#fff;
		position: relative;
		&:after{
			content: "";
			display: block;
			width:100%;
			height: 1px;
			background-color:#f8f8f8;
			position: absolute;
			bottom:0;
			left: 0;
			transform: scaleY(0.5);
		}
		.cmm_title{
			font-size:26px;
			color:$color_333;
		}
		.span{
			width: 45px;
			height: 45px;
			display: flex;
			justify-content: center;
			align-items: center;
			i{
				font-size: 30px;
			color: $color_333;
			}
			
		}
	}
</style>