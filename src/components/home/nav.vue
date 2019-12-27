<template>
	<div>
		<div class="navTop">
			<a href="#" v-for="(item,index) in navtop" :key="index">
				<img :src="require('../../assets/images/'+item.src)"/>
				<span>{{item.title}}</span>
			</a>
		</div>
		<div class="navTop">
			<a href="#" v-for="(item,index) in navbot" :key="index">
				<img :src="require('../../assets/images/'+item.src)"/>
				<span>{{item.title}}</span>
			</a>
		</div>
		
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
			navtop:[
			{src:'nav0.png',title:"东京超市"},
			{src:'nav1.png',title:"全球购"},
			{src:'nav2.png',title:"服装城"},
			{src:'nav3.png',title:"东京生鲜"},
			{src:'nav4.png',title:"东京到家"}
			],
			navbot:[
			{src:'nav5.png',title:"充值中心"},
			{src:'nav6.png',title:"惠赚钱"},
			{src:'nav7.png',title:"领劵"},
			{src:'nav8.png',title:"物流查询"},
			{src:'nav9.png',title:"我的关注"}
			
			]
			
		}
		},
		
	}
</script>

<style scoped="scoped">
	
	.navTop{
		margin-top: 15px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-around;
	}
	.navTop a{
		display: block;
		
		height:70px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.navTop a img{
		display: block;
		width: 40px;
		height: 40px;
		margin: 0 auto;
	}
	
	
	
</style>