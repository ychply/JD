<template>
	<div class="m_mine">
		<headTitle message="账号管理" :push="routerLink"></headTitle>
		<div class="account_head">
			<h2>管理我的账号</h2>
			<div class="account_list">
				<userItem></userItem>
			</div>
		</div>
		<router-link to="/addressList" class="cell_item mgt26"><span class="title">收货地址管理 </span><span class="val">管理我的地址 <i class="icon iconarrow-r"></i></span></router-link>
		<div class="cell_item line mgt26"><span class="title">实名认证  </span><span class="val">未实名认证  <i class="icon iconarrow-r"></i></span></div>
		<div class="cell_item line"><span class="title">修改手机号   </span><span class="val">15766633241<i class="icon iconarrow-r"></i></span></div>
		<div class="cell_item line"><span class="title">账号登录密码    </span><span class="val">定期修改更安全<i class="icon iconarrow-r"></i></span></div>
		<div class="cell_item line"><span class="title">京东支付密码  </span><span class="val"> 已设置 <i class="icon iconarrow-r"></i></span></div>
		<div class="cell_item line"><span class="title">关联邮箱 </span><span class="val">1556****@qq.com </span></div>
		<div class="cell_item"><span class="title">关联账号</span><span class="val"><i class="icon iconarrow-r"></i></span></div>
		<div class="cell_item line mgt26"><span class="title">联系客服 </span><span class="val">即时解答用户疑难 <i class="icon iconarrow-r"></i></span></div>
		<div class="cell_item"><span class="title">切换站点  </span><span class="val"> <i class="icon iconarrow-r"></i></span></div>
		<ul class="footerNav">
			<li><img src="//img13.360buyimg.com/jdphoto/jfs/t9715/362/323851365/1279/81de6d72/59cc5903N7d14ca0e.png" alt="">意见反馈</li>
			<li><img src="//img12.360buyimg.com/jdphoto/jfs/t9196/304/2362310772/2730/775aea35/59cc5931Nd495934f.png" alt="">京东客户端</li>
			<li><img src="//img10.360buyimg.com/jdphoto/jfs/t9052/339/2338090052/1443/912da0a4/59cc5951N10f8f9b3.png" alt="">退出登录</li>
		</ul>
		<div class="jd_logo"></div>
	</div>
</template>
<script>
	import headTitle from "../components/head_title.vue"
	import userItem from "../components/mine/accoutUser.vue"
	export default {
		data() {
			return {
				routerLink :'mine'
			}
		},
		methods: {

		},
		components: {
			headTitle,
			userItem
		}

	}
</script>

<style scoped="scoped" lang="scss">
	.jd_logo {
		width: 100%;
		height: 60px;
		background: url('../assets/images/mine/jd_footer.png') no-repeat center;
		background-size: 180px 36px;
		margin: 20px 0 50px;
	}
	
	.footerNav {
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: space-between;
		margin-top: 15px;
		li {
			display: flex;
			flex: 1;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 20px;
			img {
				display: block;
				max-width: 28px;
				margin-right: 6px;
			}
		}
	}
	
	.cell_item {
		width: 100%;
		height: 75px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: left;
		background-color: #fff;
		padding: 0 18px;
		position: relative;
		.title {
			font-size: 28px;
			color: #222;
			width: 50%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.val {
			font-size: 20px;
			color: #999;
			i {
				font-weight: bold;
			}
		}
	}
	
	.line {
		&:before {
			content: "";
			display: block;
			position: absolute;
			width: 97%;
			height: 2px;
			background-color: #e5e5e5;
			bottom: 0;
			right: 0;
			z-index: 1;
			transform: scaleY(0.5);
			opacity: 0.6;
		}
	}
	
	.account_head {
		width: 100%;
		background-color: #fff;
		padding: 0 3%;
		border-top: 1px solid #ddd;
		h2 {
			font-size: 26px;
			color: #222;
			text-align: left;
			height: 75px;
			line-height: 75px;
			font-weight: normal;
		}
		.account_list {
			width: 100%;
			margin: 0 auto 24px;
			padding-bottom: 24px;
		}
	}
	
	.m_mine {
		width: 100%;
		background-color: #f7f7f7;
		padding-bottom: 80px;
	}
</style>