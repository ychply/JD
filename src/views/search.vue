<template>
	<div class="m_catgory">
	    <searchHead head="search"></searchHead>   
	</div>
</template>
<script>
	import searchHead from '../components/searchHead.vue'
	export default{
		data(){return{
			
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

<style scoped="scoped">
	.m_catgory{
		background: #F3F4F6;
		max-width:750px;
		margin:0 auto;
	}
	
/*中间内容*/




</style>