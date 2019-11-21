<template>
	<div class="address_item">
		<h2>{{address.sname}} <span>{{address.user_phone}}</span></h2>
		<p><span v-if="address.isdefault == 1">默认</span>{{address.addressarea}}{{address.addressinfo}}</p>
		<router-link  :to="{name:'addressEdit', query: {id:address.address_id}}" class="edit">编缉</router-link>
	</div>
</template>
<script>
	export default {
		props:{
			address:{
				type:Object,
				default :() => {}
			}
		},
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
	.address_item{
		width:100%;
		padding-left:30px;
		padding:20px 90px 20px 50px;
		position: relative;
		background-color: #fff;
		border-bottom: 1px solid #F7F7F7;
		min-height: 150px;
		h2{
			font-size:28px;
			color:#222;
			margin-bottom:10px;
			span{
				margin-left:6px;
			}
		}
		p{
			font-size:22px;
			color:#666;
			line-height: 1.6em;
			span{
				border:1px solid #e4393c;
				color:#e4393c;
				font-size:18px;
				padding:0 10px;
				margin-right:20px;
			}
		}
		.edit{
			width:100px;
			height: 60px;
			display: flex;
			justify-content: center;
			align-items: center;
			color:#e93b3d;
			position: absolute;
			top:40px;
			right:0;
			font-size: 24px;
			padding-left:6px;
		}
	}
	
	
</style>