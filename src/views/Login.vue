<template>
	<div class="m_login">
		<header class="top_bar">
			<router-link :to="{name:'home'}" class="icon_back"></router-link>
			<h2>京东登录</h2>
		</header>
		<div class="main">
			<div class="form_input">
				<input ref="user_name" class="user_name" type="text" placeholder="用户名/邮箱/已验证手机" v-model="userName" /><i class="icon iconcuo f26 fwb c999" @click="reset_input"></i>
				<div class="underline"></div>
			</div>
			<div class="form_input">
				<input ref="user_pwd" class="user_pwd" :type="pwdType" placeholder="请输入密码" v-model="userPwd" /><i class="icon iconcuo f26 fwb c999"></i>
				<i :class="[pwdType == 'password' ? 'iconyanjing_bi':'iconai-eye','icon','f26','fwb','c999','mgl20']" @click="show_pwd"></i>
				<span class="pwd">忘记密码</span>
				<div class="underline"></div>
			</div>
			<a href="javascript:;" class="login" @click="login">登 录</a>
			<router-link :to="{name:'reg'}" class="reg">去 注 册</router-link>
		</div>
	</div>
</template>
<script>
//	import userApi from "@/api/userApi";
//	import { mapGetters } from "vuex";
	import Storage from "@/utils/storage";

	export default {
		data() {
			return {
				userName: "",
				userPwd: "",
				isShowData: false,
				pwdType: 'password'
			}
		},
//		computed: {
//			...mapGetters(["token"])
//		},
		methods: {
			childHandle() {
				//				this.$emit('parent-show', this.isShowData)
			},
			login() {
				let _this = this;
				if(_this.userName === "") {
					_this.$toast('请输入用户名');
					_this.$refs.user_name.focus();
					return false;
				}
				if(_this.userPwd === "") {
					_this.$toast('请输入密码');
					_this.$refs.user_pwd.focus();
					return false;
				}
				_this.$http.get("login", {
					params: {
						'userName': _this.userName,
						'userPwd': _this.userPwd
					}
				}).then(function(res) {
					if(res.data.status === 0) {
						_this.$toast(res.data.msg);
						Storage.set("userInfo", res.data.userInfo);
                        var userInfo = JSON.parse(res.data.userInfo);
                        _this.$store.dispatch('setToken', userInfo.id);
                        _this.$store.dispatch('setUserInfo', userInfo)
//                       this.$router.push({ path: this.redirect || "/" });
						let redirect = _this.$route.query.redirect;
						setTimeout(() => {
							if(redirect) {
								_this.$router.push(redirect);
							} else {
								_this.$router.push('/home');
							}
						}, 1000)
					} else {
						_this.$toast(res.data.msg);
					}
				}).catch(function(err) {
					console.log(err);
				})
			},
			reset_input(e) {

			},
			show_pwd() {
				if(this.pwdType == 'password') {
					this.pwdType = 'text';
					this.$refs.user_pwd.focus();
				} else {
					this.pwdType = 'password';
					this.$refs.user_pwd.focus();
				}
			}

		},
		created() {

		}
	}
</script>

<style scoped="scoped">
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
		;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28px;
		letter-spacing: 1px;
		;
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
	
	.form_input .pwd {
		font-size: 24px;
		color: #333;
		position: relative;
		margin-left: 30px;
		padding-left: 20px;
	}
	
	.form_input .pwd::before {
		content: "";
		position: absolute;
		width: 2px;
		height: 30px;
		background-color: #999;
		top: 2px;
		left: 0px;
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