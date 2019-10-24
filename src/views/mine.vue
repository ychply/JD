<template>
	<div class="m_mine">
		<div class="cmm_header">
			<span @click="_back" class="span"><i class="icon iconarrow-l fwb"></i></span>
			<span class="cmm_title">我的京东</span>
			<span class="span"><i class="icon icongengduo "></i></span>
		</div>
		<div class="header_con">
			<div class="my_header shadow">
				<div class="user_info">
					<div class="avatar_wrap">
						<img src="../assets/images/mine/head.png" alt="" />
					</div>
					<div class="personal_wrap">
						<div class="name_wrap">
							<span class="my_header_name">莫上尘</span>
							<span class="my_header_name_edit"></span>
							<span class="vip v4"></span>
						</div>
						<div class="pin">用户名：yang15766633241</div>
						<div class="hor_tips">
							<div class="notice">京享值10177</div>
							<div class="notice arrow">小白信用80.5</div>
						</div>
					</div>
				</div>
				<div class="plus_black_wrap">
					<div class="inner">
						<div class="title">
							<span class="plus_title">每月5张运费券</span>
							<span class="plus_subtitle">立即查看 <i class="icon iconarrow-r"></i></span>
						</div>
						
					</div>
				</div>
			    <div class="account_wrap">
			    	<i class="icon iconshezhi"></i>账号管理
			    </div>
			</div>
		</div>
	    <ul class="my_cell my_info">
	    	<li v-for="(item,index) of xlist" :key='index'>
	    		<div class="imgs">
	    			<img :src="require('../assets/images/mine/' + item.img)" alt="" />
	    		</div>
	    		<span class="span">{{item.name}}</span>
	    	</li>
	    </ul>
	    <ul class="my_cell my_info">
	    	<li>
	    		<div class="imgs">
	    			<span class="c1">4 <i>张</i></span>
	    		</div>
	    		<span class="span">京东券</span>
	    	</li>
	    	<li>
	    		<div class="imgs">
	    			<span class="c1">120000.00 <i>元</i></span>
	    		</div>
	    		<span class="span">白条额度</span>
	    	</li>
	    	<li>
	    		<div class="imgs">
	    			<span class="c1">1,029<i>个</i></span>
	    		</div>
	    		<span class="span">京豆</span>
	    	</li>
	    	<li>
	    		<div class="imgs">
	    			<span class="c1">0 <i>元</i></span>
	    		</div>
	    		<span class="span">红包</span>
	    	</li>
	    	<li>
	    		<div class="imgs">
	    			<img class="img1" src="../assets/images/mine/icon5.png" alt="" />
	    		</div>
	    		<span class="span">我的资产</span>
	    	</li>
	    </ul>
	    <ul class="my_cell">
	    	<li>
	    		<div class="imgs">
	    			<span class="c2">7</span>
	    		</div>
	    		<span class="span">商品收藏</span>
	    	</li>
	    	<li>
	    		<div class="imgs">
	    			<span class="c2">28</span>
	    		</div>
	    		<span class="span">店铺收藏</span>
	    	</li>
	    	<li>
	    		<div class="imgs">
	    			<span class="c2">156</span>
	    		</div>
	    		<span class="span">我的足迹</span>
	    	</li>
	    </ul>
        <ul class="tools_container">
        	<li v-for="(item,index) of tools_list" :key="index">
        		<div class="imgs">
	    			<img :src="require('../assets/images/mine/' + item.img)" alt="" />
	    		</div>
	    		<span class="span">{{item.name}}</span>
        	</li>
        </ul>	
        <div class="service">
        	<span class="span1">客户服务</span>
        	<i class="icon iconarrow-r"></i>
        </div>	
	    <mineList></mineList>
	</div>
</template>
<script>
	import mineList from "../components/mine_push.vue"
	export default {
		data() {
			return {
				xlist:[
				{
					'name':'待付款',
					'img' :'icon1.png'
				},
				{
					'name':'待收货',
					'img' :'icon2.png'
				},
				{
					'name':'退换 / 售后',
					'img' :'icon3.png'
				},
				{
					'name':'全部订单',
					'img' :'icon4.png'
				}
				],
				tools_list:[
				{
					'name':'我的预约',
					'img' :'m_icon1.webp'
				},
				{
					'name':'京东火车票',
					'img' :'m_icon2.webp'
				},
				{
					'name':'应用推荐',
					'img' :'m_icon3.webp'
				},
				{
					'name':'京东通信营业厅',
					'img' :'m_icon4.webp'
				},
				{
					'name':'用户福利',
					'img' :'m_icon5.webp'
				},
				{
					'name':'京东机票',
					'img' :'m_icon6.webp'
				},
				{
					'name':'京东酒店',
					'img' :'m_icon7.webp'
				}
				]

			}
		},
		methods:{
			_back() {
				this.$router.go(-1)
			}
		},
		components:{
			mineList
		}
	
	}
</script>

<style scoped="scoped" lang="scss">
.service{
	display: flex;
	width:100%;
	height: 70px;
	justify-content: space-between;
	padding:0 20px;
	margin:30px auto;
	background-color:#fff;
	align-items:center;
	.span1{
		font-size:22px;
		color:#333;
	}
	i{
		font-size:22px;
		font-weight: bold;
		color:#666;
	}
}
.tools_container{
	width:100%;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	background-color: #fff;
	margin:26px auto;
	li{
		width:25%;
		height: 130px;
		display: flex;
		flex-direction: column;
		align-items: center;
		.imgs{
			width: 100%;
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top:10px;
			img{
				display: block;
				max-width:34px;
			}
		}
		.span{
			padding-bottom:8px;
			width: 100%;
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size:20px;
			color:#666;
		}
	}
	
}
.my_info{
	li{
		&:last-child{
			position: relative;
			&:before{
				content: "";
				width:16px;
				height: 100%;
				display: block;
				background: url("../assets/images/mine/m_arrow.png") no-repeat;
				position: absolute;
				left:-7px;
				top:0;
				background-size: 16px 100%;
			}
		}
	}
}
.my_cell{
	width:100%;
	height: 120px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: #fff;
	margin:26px auto;
	li{
		flex: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		.imgs{
			width: 100%;
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top:10px;
			.img1{
				margin-top:10px;
			}
			img{
				display: block;
				max-width:34px;
			}
			.c1{
				color:$color_primary;
				font-size:26px;
				letter-spacing: 1px;
				display: flex;
				justify-content: center;
				flex-wrap: nowrap;
				i{
					font-size: 20px;
				}
			}
			.c2{
				font-size:26px;
				font-weight: bold;
				color:#333;
			}
		}
		.span{
			padding-bottom:8px;
			width: 100%;
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size:20px;
			color:#666;
		}
	}
}
.header_con{
	width:100%;
	height: 230px;
	background-color: #f7f7f7;
	.my_header{
		width:100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	    border-radius: 0 0 300px 300px / 0 0 20px 20px;
	    background: -webkit-gradient(linear, left top, right top, from(#eb3c3c), to(#ff7459));
	    background: -webkit-linear-gradient(left, #eb3c3c, #ff7459); 
	    background: linear-gradient(90deg, #eb3c3c, #ff7459);
	    box-sizing: border-box;
	    min-height: 110px;
	    padding-top: 40px;
	    .account_wrap{
	    	position: absolute;
		    right: 30px;
		    top: 0;
		    height: 69px;
		    overflow: hidden;
		    display: flex;
		    justify-content: center;
		    align-items:center;
		    font-size:22px;
		    color:rgba(76, 0, 0, 0.7);
		    i{
		    	margin-right:10px;
		    	margin-top:5px;
		    }
	    }
	    .plus_black_wrap{
	    	width: 100%;
		    height: 70px;
		    box-sizing: border-box;
		    padding: 0 34px;
		    color: #FFE678;
		    font-size: 24px;
		    .inner{
		    	width: 100%;
			    height: 100%;
			    box-sizing: border-box;
			    padding: 8px 20px 20px;
			    background: url("../assets/images/mine/mine_bg.png") no-repeat left top;
			    background-size: 100% 120px;
			    display:flex;
			    justify-content:center;
			    .title{
			    	width:100%;
			    	display: flex;
			    	justify-content: flex-start;
			    	align-items: center;
			    	height: 40px;
			    	.plus_title{
			    		overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
			    		position: relative;
			    		flex: 1;
			    		width:100%;
			    		font-size: 20px;
			    		&:before{
			    			position: absolute;
						    content: '';
						    width: 114px;
						    height: 24px;
						    left: -8px;
						    top: 2px;
						    background: url('../assets/images/mine/vip.png') no-repeat center;
						    background-size: 83% 83%;
			    		}
			    		&:after{
							position: absolute;
						    content: '';
						    width: 1px;
						    height: 14px;
						    background: #FFE678;
						    left: 114px;
						    top: 6px;
			    		}
			    	}
			    	.plus_subtitle{
			    		position: relative;
					    -webkit-flex-shrink: 0;
					    flex-shrink: 0;
					    height: 36px;
					    font-size: 20px;
					    i{
					    	font-weight: bold;
					    	font-size:16px;
					    }
			    	}
			    }
		    }
	    }
	    .user_info{
	    	padding: 0 30px 20px;
	    	display: flex;
	    	justify-content: flex-start;
	    	.avatar_wrap{
	    		width:110px;
	    		height: 110px;
	    		border-radius: 50%;
	    		display:flex;
	    		justify-content:center;
	    		align-items:center;
	    		img{
	    			display: block;
	    			max-width: 100%;
	    		}
	    	}
	    	.personal_wrap{
	    		flex: 1;
	    		height: 100%;
	    		margin-left:30px;
	    		display: flex;
	    		flex-direction: column;
	    		.hor_tips{
	    			width:100%;
	    			display: flex;
	    			justify-content: flex-start;
	    			align-items: center;
	    			.notice{
	    				max-width: 300px;
					    height: 30px;
					    padding: 0 16px;
					    margin: 12px 16px 0 0;
					    border-radius: 20px;
					    font-size: 20px;
					    color: #fff;
					    background: #c8483f;
					    text-align: center;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
	    			}
	    			.arrow{
	    				position: relative;
    					padding-right: 28px !important;
    					&:after{
    						display: block;
						    content: "";
						    width: 10px;
						    height: 10px;
						    border-top: 1px solid rgba(255, 255, 255, 0.7);
						    border-left: 1px solid rgba(255, 255, 255, 0.7);
						    -webkit-transform-origin: 50%;
						    transform-origin: 50%;
						    -webkit-transform: rotate(135deg);
						    transform: rotate(135deg);
						    position: absolute;
						    right: 12px;
						    top: 8px;
    					}
	    			}
	    		}
	    		.pin{
	    			width:100%;
	    			height: 30px;
	    			font-size:20px;
	    			color:rgba(255, 255, 255, 0.7);
    			    overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    display: flex;
				    align-items: center;
				    justify-content: flex-start;
	    		}
	    		.name_wrap{
	    			width:100%;
	    			display: flex;
	    			justify-content: flex-start;
	    			align-items: center;
	    			.my_header_name{
	    				font-size:24px;
	    				color:#fff;
	    				padding-bottom:3px;
	    			}
	    			.my_header_name_edit{
	    				display: block;
	    				width:24px;
	    				height: 24px;
	    				background: url("../assets/images/mine/bianji.png") no-repeat;
	    				background-size: cover;
	    				margin-left:12px;
	    			}
	    			.vip{
	    				-webkit-flex-shrink: 0;
					    flex-shrink: 0;
					    position: relative;
					    margin: 0 10px 0 24px;
					    padding: 0 12px 0 20px;
					    height: 30px;
					    line-height: 30px;
					    vertical-align: middle;
					    border-radius: 0 24px 24px 0;
					    background-color: #c8483f;
					    font-size: 24px;
					    color: #fff;
					    &:before{
					    	position: absolute;
						    width: 40px;
						    height: 40px;
						    left: -20px;
						    top: 48%;
						    margin-top: -20px;
						    background: url("../assets/images/mine/vip_icon.png") no-repeat 0 0;
						    background-size: 200px 40px;
						    content: '';
					    }
	    			}
	    			.v1{
	    				&:before{
	    					background-position: 0 0;
	    				}
	    				&:after{
	    					   content: '注册';
	    					   font-size: 20px;
	    				}
	    			}
	    			.v2{
	    				&:before{
	    					background-position: -40px 0;
	    				}
	    				&:after{
	    					   content: '铜牌';
	    					   font-size: 20px;
	    				}
	    			}
	    			.v3{
	    				&:before{
	    					background-position: -80px 0;
	    				}
	    				&:after{
	    					   content: '银牌';
	    					   font-size: 20px;
	    				}
	    			}
	    			.v4{
	    				&:before{
	    					background-position: -120px 0;
	    				}
	    				&:after{
	    					   content: '金牌';
	    					   font-size: 20px;
	    				}
	    			}
	    		
	    		}
	    	}
	    }
	}
	.shadow{
		box-shadow: 0 2px 4px rgba(228, 57, 60, 0.4);
	}
}
	.m_mine {
		width: 100%;
		background-color: #f7f7f7;
		padding-bottom:100px;
	}
	
	.cmm_header {
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:0 15px;
		.cmm_title{
			font-size:26px;
			color:$color_333;
		}
		.span{
			width: 45px;
			height: 45px;
			display: flex;
			justify-content: center;
			align-items: center;
			i{
				font-size: 30px;
			color: $color_333;
			}
			
		}
	}
</style>