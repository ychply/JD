<template>
	<div class="m_login">
		<header class="top_bar">
	        <a onclick="window.history.go(-1)" class="icon_back"></a>
	       <h2>京东登录</h2>
	    </header>
	    <div class="main">
	        <div class="form_input">
		        <input ref="user_name" class="user_name" type="text" placeholder="用户名/邮箱/已验证手机" v-model="userName" /><i class="icon iconcuo f26 fwb c999" @click="reset_input"></i>
		        <div class="underline"></div>
	        </div>
	        <div class="form_input">
		        <input ref="user_pwd" class="user_pwd" type="password" placeholder="请输入密码" v-model="userPwd" /><i class="icon iconcuo f26 fwb c999"></i><i class="icon iconyanjing_bi f26 fwb c999 mgl20"></i>
		        <span class="pwd">忘记密码</span>
		        <div class="underline"></div>
	        </div>
	        <a href="javascript:;" class="login" @click="login">登 录</a>
	        <router-link :to="{name:'reg'}" class="reg">去 注 册</router-link>
	    </div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
			userName:"",
			userPwd:"",
			isShowData:false
		}
		},
		methods:{
			childHandle(){
				this.$emit('parent-show',this.isShowData)
			},
			login(){
				let _this = this;
				if(this.userName === ""){
					_this.$refs.user_name.focus();
					return false;
				} 
				if(this.userPwd === ""){
					_this.$refs.user_pwd.focus();
					return false;
				}
				 _this.$http.get("/api/login",{
						params:{'userName' : _this.userName,'userPwd' : _this.userPwd}
					}
			).then(function(res){
				console.log(res);
					if(res.data.code === 1){
						console.log("登录成功");
					//	_this.$router.push('/home');
					_this.$router.go(-1);
					}
				}).catch(function(err){
					console.log(err);
				})
			},
			reset_input(e){
				
			}
			
		},
	      created(){
	      this.$store.commit('modifyCount',false)
			
		}
	}
	
</script>

<style scoped="scoped">
.m_login{
	background: #fff;
	width: 100%;
	height: 100%;
}

.top_bar {
    width: 100%;
    height:70px;
    background-size: 1px 44px;
    position: fixed;
    z-index: 2;
    background: #fff;
}
.top_bar h2{
	width:100%;
	height:100%;;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size:28px;
	letter-spacing:1px;;
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
    top:8px;
}
.main{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top:100px;
	background-color:#fff;
}
.form_input{
	display: flex;
	justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
	width:90%;
	margin:0 auto;
	height:80px;
	position:relative;
	margin-top:40px;
	}
.form_input .iconcuo{
	visibility: hidden;
}
.form_input input{
	font-size:24px;
	color:#333;
}	
.form_input .pwd{
	font-size:24px;
	color:#333;
	position: relative;
	margin-left:30px;
	padding-left:20px;
}	
.form_input .pwd::before{
	content:"";
	position: absolute;
	width:2px;
	height:30px;
	background-color:#999;
	top:2px;
	left:0px;
}	
.form_input input:focus ~ .iconcuo {
	visibility:visible;
}
.user_name{
	width:90%;
	height:40px;
	line-height:40px;
	}
.user_pwd{
	width:60%;
	height:40px;
	line-height:40px;
	}
.login{
	margin-top:80px;
	width:90%;
	height:70px;
	font-size:26px;
	display:flex;
	justify-content: center;
	align-items: center;
	border-radius: 300px;
	letter-spacing:5px;
	background-color:#F23030;
	color:#fff;
}
.reg{
	margin-top:40px;
	width:90%;
	height:70px;
	border:1px solid #ea8e86;
	color:#ea8e86;
	font-size:26px;
	background-color: #fff;
	display:flex;
	justify-content: center;
	align-items: center;
	border-radius: 300px;
	letter-spacing:5px;
}

.underline{width: 100%;height: 2px;position: absolute;bottom: 0;left: 0; z-index: 2;}
.underline:before {content: '';display:block;width:100%;height: 2px;background: #1A73E8;position: absolute;bottom: 0px;left: 0;transform: scaleX(0);transform-origin: center;transition: all 200ms cubic-bezier(0.6, 0.05, 0.01, 0.99);z-index: -1;}
.underline:after {display:block;content: '';width:100%; height: 2px;background: #dbdbdb;position: absolute;bottom: 0px;left: 0;z-index: -2;}
.form_input input:focus ~ .underline:before {transform: scaleX(1);transform-origin: center;transition: all 300ms cubic-bezier(0.6, 0.05, 0.01, 0.99);}
</style>