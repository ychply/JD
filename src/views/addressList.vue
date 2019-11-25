<template>
	<div class="m_mine">
		<headTitle message="收货地址" :push="routerLink"></headTitle>
		<div class="address_list">
			<addressItem v-for="(item,index) in addressList" :key="index" :address="item"></addressItem>
		</div>	
		<router-link to="/addressEdit" class="add_address">新增收货地址</router-link>
	</div>
</template>
<script>
	import headTitle from "../components/head_title.vue"
	import addressItem from "../components/mine/addressItem.vue"
	import { mapGetters } from "vuex"
	export default {
		data() {
			return {
				addressList:null,
				routerLink :'account'
			}
		},
		methods: {
			getAddressList(){
				let _this = this;
				_this.$http.get('addressList',{
					params:{
						userId: _this.userInfo.id
					}
				}).then((res)=>{
					_this.addressList = res.data;
				})
			}
 
		},
		computed:{
						//获取用户信息
			...mapGetters(["userInfo"]),
		},
		components: {
			headTitle,
			addressItem
		},
		mounted(){
			this.getAddressList();
		}

	}
</script>

<style scoped="scoped" lang="scss">
	.m_mine {
		width: 100%;
		background-color: #f7f7f7;
		padding-bottom: 200px;
		text-align: left;
		min-height: 100%;
		.address_list{
			width:100%;
            border-top:1px solid #ccc;
		}
		.add_address{
			width:100%;
			height: 80px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #e4393c;
			color:#fff;
			font-size: 26px;
			position: fixed;
			bottom:0;
			left:0;
			right:0;
		}
	}
</style>