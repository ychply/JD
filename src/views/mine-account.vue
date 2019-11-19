<template>
	<div class="m_mine">
		<headTitle message="账号管理"></headTitle>
		<div class="account_head">
			<h2>管理我的账号</h2>
			
		</div>
		
		
	</div>
</template>
<script>
	import headTitle from "../components/head_title.vue"
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			
		},
		components:{
			headTitle
		}
	
	}
</script>

<style scoped="scoped" lang="scss">
.account_head{
	width:100%;
	background-color:#fff;
	padding:0 15px;
	h2{
		font-size:24px;
		color:#222;
		text-align: left;
		
	}
}
.m_mine {
		width: 100%;
		background-color: #f7f7f7;
		padding-bottom:80px;
	}
</style>