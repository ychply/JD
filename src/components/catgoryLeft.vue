<template>
	<div class="main_box" ref="left">
		<div class="catLeft">		
			<div class="catList">
				<li ref="l_item" :class="activeClass == index ? 'active':''" v-for="(item,index) in list" :key="index" @click="handleData(item.category_id,item.category_name,index)">
					{{item.category_name}}
				</li>
			</div>		
		</div>		
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	export default{
		data(){
			return{
				tabList:[],	
				activeClass: 0
			}
		},
		computed:{
			list(){
				return this.tabList.slice(0,50);
			}
		},
		methods:{
		    dataList(){
		    	let _this=this;
		    	_this.$http.get('/api/category').then((res)=>{
		    		_this.tabList=res.data.reverse();	    		
		    	}).catch((err)=>{
		    		console.log(err);
		    	})
		    },
		    handleData(cat_id,cat_name,index){
		    	this.activeClass = index;	
		    	this.$emit('parent-show',[cat_id,cat_name]);
		    	this.scroll.scrollToElement(this.$refs.l_item[index], 300, 0, 0);//滚动到指定元素
		   },
		},
		mounted(){
			this.dataList();
			this.scroll = new BScroll(this.$refs.left, {
		    click: true,
		    startY: 0,
            scrollX: false,
            scrollY: true,
		 });
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.main_box{
		width:100%;
		height: 100%;
		overflow: hidden;
		background-color:#f7f7f7;
	}
	.catLeft{
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.catList{
		width:100%;
		padding-bottom: 20px;
		.active{
			background-color:#fff;
			color:$color_primary;
			position: relative;
			&:before{
				content: "";
				display: block;
				width:1px;
				height: 100%;
				background-color:#ccc;
				position: absolute;
				top:0;
				right:0;
				transform: scaleX(0.1);
			}
		}
		li{
			width:100%;
			height: 70px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding-left:15px;
			color:#333;
			font-size:20px;
		}
	}

</style>