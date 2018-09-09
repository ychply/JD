<template>
	<header :class="{header:isTrue,heaback:scroll}">
		<div class="headBox">
			<a href="javascript:;" class="icon-logo">
			
			</a>
			<div class="search">
				<img @click="search()" class="icon-search" src="../assets/images/search-logo.jpg"/>
				<input type="text"  placeholder="请输入搜索商品..."/>
			</div>
			<router-link to="/login" class="login_btn">登录</router-link>
			
		</div>
		
	</header>
</template>

<script>
	export default{
		data(){return{
			isTrue:true,
			scroll:false,
			
		}},
		methods:{
			search(){
				this.$http({
					method:"get",
					url:"/api/login",
					data:{}
				}).then(function(res){
					console.log(res);
				}).catch(function(err){
					console.log(err);
				})
			},
			
			 menu(){
			 	console.log(666);
            let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
            if(scrolled>180){
            	this.scroll=true;
            }else{
            	this.scroll=false;
            }
     }
			 
		},
		mounted(){
			 window.addEventListener('scroll', this.menu);
		}
	}
</script>

<style scoped="scoped">
	.header{
		overflow:hidden;
		position:fixed;
	    width: 100%;
		height:60px;
		padding: 5px 0;
		top:0;
		left: 0;
		
		z-index: 2;
		
	}
	.heaback{
		background:rgba(201,21,35,0.85);
	}
	.headBox{
		width:640px;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		
		
	}
	.headBox .icon-logo{
		display:block;
		width:58px;
		height:46px;
	    margin-top: 7px;
		background: url(../assets/images/sprites.png) no-repeat;
		background-size: 200px 200px;
		background-position: 0 -103px;
		
	}
	.headBox .search{
		width:60%;
		height:44px;
		border-radius:400px;
		background:#EDF2F7;
		overflow: hidden;
        margin: 0 auto;
        margin-top: 3px;
        display: flex;
	}
	.search .icon-search{
		cursor: pointer;
		margin-top: 5px;
		margin-left:3px;
		width:40px;
       height:40px;
       display: inline-block;
	
	}
	.search input{
		margin-top: 3px;
		display: inline-block;
		flex: 1;
		height: 40px;
		background: #EDF2F7;
	
	}
	.headBox .login_btn{
		display: block;
		margin-right: 6px;
        width: 50px;
        height: 36px;
       cursor: pointer;
       margin-top: 10px;
       color: white;
       font-family: "微软雅黑";
       
	}
</style>