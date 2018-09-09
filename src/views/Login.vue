<template>
	<div class="m_login">
		<header class="top_bar">
	        <a onclick="window.history.go(-1)" class="icon_back"></a>
	       <h2>京东登录</h2>
	    </header>
	    <div class="main">
	        <div class="main_user">
	        <input type="text" placeholder="请输入用户名..."/>
	        </div>
	           <div class="main_user">
	        <input type="password" placeholder="请输入用户密码..."/>
	        </div>
	        
	        <div class="main_user maTop40">
	           <p>登录</p>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			
			isShowData:false
		}
		},
		methods:{
			childHandle(){
				this.$emit('parent-show',this.isShowData)
			}
		},
	      created(){
	      this.$store.commit('modifyCount',false)
			
		}
	}
	
</script>

<style scoped="scoped">
.m_login{
	background: #F3F5F7;
	width: 100%;
	height: 100%;
}

.top_bar {
    width: 100%;
    height:60px;
    background: url("../assets/images/header-bg.png") repeat-x;
    background-size: 1px 44px;
    border-bottom: 1px solid #bfbfbf;
    position: fixed;
    z-index: 2;
    background: #ddd;
}
.top_bar h2{
	margin-top: 3px;
}
.top_bar .icon_back {
	 background: url("../assets/images/sprites.png") no-repeat;
    background-size: 360px 360px;
    height:45px;
    width:40px;
    background-position: -36px 0;
    display: block;
    margin: 10px 10px;
    position: absolute;
    left: 0;
    top: 0;
}


.main{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top:100px;
}
.main .main_user{
		width: 90%;
	height: 60px;
	line-height: 60px;
	margin-bottom: 20px;
	
}
.main .main_user input{
	display: block;
	padding-left: 5%;
	width: 100%;
	height: 100%;
	background: white;
	border: 1px solid #999;
	border-radius: 5px;
}
.main .main_user p{
	width: 100%;
	font-size: 25px;
	height: 100%;
	border: 3px solid #FBBABA;
	color: #FBBABA;
	border-radius: 6px;
	font-weight: 600;
}
.maTop40{
	margin-top: 40px;
}
</style>