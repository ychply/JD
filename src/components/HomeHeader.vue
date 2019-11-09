<template>
	<header :class="{header:isTrue,heaback:scroll}">
		<div class="headBox">
			<a href="javascript:;" class="icon-logo"></a>
			<router-link class="search" to="/search">
				<img @click="search()" class="icon-search" src="../assets/images/search-logo.jpg"/>
				<!--<input type="text"  placeholder="请输入搜索商品..."/>-->
				<span>请输入搜索商品...</span>
			</router-link>
			<router-link :to="!this.$store.getters.isLogin?'/login':'/mine'"  class="login_btn" v-show="token == 0"><span>登录</span></router-link>
			<div class="login_btn" v-show="token != 0"><span>{{userInfo.name}}</span></div>
		</div>	
	</header>
</template>
<script>
	import { mapGetters } from "vuex";
	export default{
		data(){
			return{
			isTrue:true,
			scroll:false,
				}
			},
		methods:{
			search(){
			
			},
			
			menu(){
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
			 console.log(this.$store.getters.isLogin)
		},
		computed:{
//			 login(){
//              return this.$store.getters.isLogin;
//          }
			...mapGetters(["token","userInfo"])
		},
//		watch(){
//			login(val) {
//		     console.log(val)
//		    }
//		}
	}
</script>

<style scoped="scoped">
	.header{
		overflow:hidden;
		position:fixed;
	    width: 100%;
		height:80px;
		padding: 5px 16px;
		top:0;
		left: 0;
		z-index: 2;
		box-sizing: border-box;
	}
	.heaback{
		background:rgba(201,21,35,0.9);
	}
	.headBox{
		width:100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding:0 15px;
	}
	.headBox .icon-logo{
		display:block;
		width:58px;
		height:46px;
	    margin-top: 9px;
		background: url(../assets/images/sprites.png) no-repeat;
		background-size: 200px 200px;
		background-position: 0 -103px;
	}
	.headBox .search{
		width:60%;
		height:50px;
		border-radius:400px;
		background:#EDF2F7;
		overflow: hidden;
        display: flex;
        padding-left:4px;
        justify-content: space-between;
        align-items: center;
        padding-left:20px;
	}
	.search .icon-search{
		cursor: pointer;
		width:34px;
        height:32px;
        display: inline-block;
	}
	.search span{
		width:90%;
		color:#999;
		display:flex;
		align-items: center;
		padding-left:15px;
		font-size:22px;
	}
	.headBox .login_btn{
		display: block;
        width: 60px;
        height: 36px;
        cursor: pointer;
        color: white;
        font-family: "微软雅黑";
        font-size:24px;
        letter-spacing:2px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
	}
</style>