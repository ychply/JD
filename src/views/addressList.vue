<template>
	<div class="m_mine">
		<headTitle message="收货地址"></headTitle>
		<div class="address_list">
			<addressItem></addressItem>
		</div>		
	</div>
</template>
<script>
	import headTitle from "../components/head_title.vue"
	import addressItem from "../components/mine/addressItem.vue"
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		components: {
			headTitle,
			addressItem
		}

	}
</script>

<style scoped="scoped" lang="scss">
	.m_mine {
		width: 100%;
		background-color: #f7f7f7;
		padding-bottom: 80px;
		text-align: left;
		.address_list{
			width:100%;
             background-color:#fff;
             border-top:1px solid #ccc;
		}
	}
</style>