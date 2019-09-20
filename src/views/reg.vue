<template>
	<div class="m_login">
		<header class="top_bar">
			<a onclick="window.history.go(-1)" class="icon_back"></a>
			<h2>京东注册</h2>
		</header>
		<div class="main">
			<div class="form_input">
				<input ref="user_name" class="user_name" type="text" placeholder="用户名/邮箱/已验证手机" v-model="userName" /><i class="icon iconcuo f26 fwb c999" @click="reset_input"></i>
				<div class="underline"></div>
			</div>
			<div class="form_input">
				<input ref="user_pwd" class="user_name" type="password" placeholder="请输入密码" v-model="userPwd" /><i class="icon iconcuo f26 fwb c999" @click="reset_input"></i>
				<div class="underline"></div>
			</div>
			<div class="form_input">
				<input ref="user_pwd1" class="user_name" type="password" placeholder="请确认密码" v-model="userPwd1" /><i class="icon iconcuo f26 fwb c999" @click="reset_input"></i>
				<div class="underline"></div>
			</div>
			<a href="javascript:;" class="login" @click="reg">注 册</a>
			<router-link :to="{path:'/login'}" class="reg">去 登 录</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				userName: "",
				userPwd: "",
				userPwd1: "",
				isShowData: false
			}
		},
		methods: {
			childHandle() {
				this.$emit('parent-show', this.isShowData)
			},
			reg() {
				let _this = this;
				if(_this.userName === "") {
					//					_this.$toast('请输入用户名');
					//this.$notify('提示文案');
					//this.$loading("加载提示文案");
					this.$toast({
						text: "成功文字",
						iconClass: "success"
					});
					_this.$refs.user_name.focus();
					return false;
				}
				if(_this.userPwd === "") {
					_this.$toast('请输入密码');
					_this.$refs.user_pwd.focus();
					return false;
				}
				if(_this.userPwd.length < 6 || _this.userPwd.length > 20) {
					_this.$toast('密码长度不能小于6位，大于20位');
					return false;
				}
				if(_this.userPwd1 === "") {
					_this.$toast('请确认密码');
					_this.$refs.user_pwd1.focus();
					return false;
				}

				if(_this.userPwd != this.userPwd1) {
					_this.$toast('两次密码不一致');
					_this.$refs.user_pwd1.focus();
					return false;
				}

				_this.$http.get("/api/reg", {
					params: {
						'userName': _this.userName,
						'userPwd': _this.userPwd,
						'userPwd1': _this.userPwd1
					}
				}).then(function(res) {
					//					if(res.data.code === 1){
					//						console.log("登录成功");
					//					//	_this.$router.push('/home');
					//					_this.$router.go(-1);
					//					}
					if(res.data.status == 0) {
						_this.$toast(res.data.msg);
						setTimeout(() => {
							_this.$router.push('/login');
						}, 1000)
					} else if(res.data.status == 5) {
						_this.$toast(res.data.msg);
					}
				}).catch(function(err) {
					console.log(err);
				})
			},
			reset_input() {
				console.log(123)
			}

		},
		created() {
			this.$store.commit('modifyCount', false)
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.m_login {
		background: #fff;
		width: 100%;
		height: 100%;
	}
	
	.top_bar {
		width: 100%;
		height: 70px;
		background-size: 1px 44px;
		position: fixed;
		z-index: 2;
		background: #fff;
	}
	
	.top_bar h2 {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28px;
		letter-spacing: 1px;
	}
	
	.top_bar .icon_back {
		background: url("../assets/images/sprites.png") no-repeat;
		background-size: 360px 360px;
		height: 45px;
		width: 40px;
		background-position: -36px 0;
		display: block;
		margin: 10px 10px;
		position: absolute;
		left: 0;
		top: 8px;
	}
	
	.main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 100px;
		background-color: #fff;
	}
	
	.form_input {
		display: flex;
		justify-content: flex-start;
		flex-wrap: nowrap;
		align-items: center;
		width: 90%;
		margin: 0 auto;
		height: 80px;
		position: relative;
		margin-top: 40px;
	}
	
	.form_input .iconcuo {
		visibility: hidden;
	}
	
	.form_input input {
		font-size: 24px;
		color: #333;
	}
	/*.form_input input:focus ~ .iconcuo {
	visibility:visible;
}*/
	
	.user_name {
		width: 90%;
		height: 40px;
		line-height: 40px;
	}
	
	.user_pwd {
		width: 60%;
		height: 40px;
		line-height: 40px;
	}
	
	.login {
		margin-top: 80px;
		width: 90%;
		height: 70px;
		font-size: 26px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 300px;
		letter-spacing: 5px;
		background-color: #F23030;
		color: #fff;
	}
	
	.reg {
		margin-top: 40px;
		width: 90%;
		height: 70px;
		border: 1px solid #ea8e86;
		color: #ea8e86;
		font-size: 26px;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 300px;
		letter-spacing: 5px;
	}
	
	.underline {
		width: 100%;
		height: 2px;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 2;
	}
	
	.underline:before {
		content: '';
		display: block;
		width: 100%;
		height: 2px;
		background: #1A73E8;
		position: absolute;
		bottom: 0px;
		left: 0;
		transform: scaleX(0);
		transform-origin: center;
		transition: all 200ms cubic-bezier(0.6, 0.05, 0.01, 0.99);
		z-index: -1;
	}
	
	.underline:after {
		display: block;
		content: '';
		width: 100%;
		height: 2px;
		background: #dbdbdb;
		position: absolute;
		bottom: 0px;
		left: 0;
		z-index: -2;
	}
	
	.form_input input:focus~.underline:before {
		transform: scaleX(1);
		transform-origin: center;
		transition: all 300ms cubic-bezier(0.6, 0.05, 0.01, 0.99);
	}
</style>