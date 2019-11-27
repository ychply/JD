<template>
	<div class="m_cart">
		<headTitle message="确认订单"></headTitle>
		
		

	</div>
</template>

<script>
	import headTitle from "../components/head_title.vue"
	import { mapGetters } from "vuex";
	export default {
		data() {
			return {

			}
		},
		methods: {
			
		},
		created(){

		},
		mounted() {
						
	
		},
		computed: {
			//获取用户信息
			...mapGetters(["userInfo"]),
			
		},
		components: {
			headTitle
		}
		//		watch(){
		//			login(val) {
		//		     console.log(val)
		//		    }
		//		}
	}
</script>

<style lang="scss" scoped="scoped">


</style>