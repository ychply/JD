<template>
	<div>
		<!--商品区-->
		<section class="idx_main">
			<img class="title" src="../assets/images/recommend.png" alt="" />
			<ul class="product_list">
				<router-link v-for="(item,index) in productList" :key="index" tag="li" :to="'/detail/'+item.product_id">
					<div class="imgs"><img v-lazy="item.product_img_url" /></div>
					<h2>{{item.product_name}}</h2>
					<p class="pro_name"><span>￥{{item.product_price}}</span>
						<i href="javascript:;">看相似</i>
					</p>
				</router-link>
			</ul>
		</section>
	    <ul class="common_links">
	    	<li><span>{{userInfo.name}}</span></li>
	    	<li><span @click="loginOut">退出</span></li>
	    	<li><span>客户服务</span></li>
	    	<li><span>返回顶部</span></li>
	    </ul>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	import Storage from "@/utils/storage";
	export default {
		data() {
			return {
				listTop: [],
				productList: []
			}
		},
		methods: {
			showList() {
				let _this = this;
				this.$http({
					method: "get",
					url: "list",
					data: {}
				}).then((res) => {
					_this.listTop = res.data.slice(20,24);
					_this.productList = res.data.slice(30,50);

				}).catch((err) => {
					console.log(err);
				})
			},
			loginOut(){
                this.$store.dispatch('setToken', 0);
                this.$store.dispatch('setUserInfo', "")
                Storage.cle();
                this.$router.push('/home');
                this.$router.afterEach((to,from,next)=>{
			　　　　window,scrollTo(0,0);	
			　　})
			}
		},
		mounted() {
			this.showList();
		},
		computed:{
			...mapGetters(["token","userInfo"])
		}

	}
</script>

<style lang="scss" scoped="scoped">
.common_links{
	border-top: 1px solid #e5e5e5;
	border-bottom: 1px solid #e5e5e5;
	width:100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 110px;
	background-color:#fff;
	margin-top:20px;
	li{
		height: 100%;
		width:25%;
		display: flex;
		align-items: center;
		padding:0 20px;
		font-size:22px;
		color:#666;
		position: relative;
		&:after{
			content: "";
			display: block;
			width:1px;
			height: 30px;
			position: absolute;
			top:50%;
			transform: translateY(-50%);
			right:0px;
			background-color:#d7d7d7;
			z-index: 3;
		}
		&:last-child:after{
			display: none;
		}
		span{
			width: 100%;
			overflow: hidden;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		    font-size:22px;
		    color:#666;
		}
	}
}

	/*商品*/
	
	.idx_main {
		width: 100%;
		padding: 0 10px;
		margin-top: 20px;
		.product_list {
			width: 100%;
			margin-top: 10px;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			li {
				width: 310px;
				height: 420px;
				background-color: $color_fff;
				padding:20px;
				border-right:1px solid #f7f7f7;
				border-bottom:1px solid #f7f7f7;
				&:nth-child(2n){
				border-right:none;
			}
				.imgs {
					display: block;
					width: 100%;
					height: 280px;
					overflow: hidden;
					img {
						display: block;
						width: 100%;
					}
				}
				h2 {
					width: 100%;
					color: $color_text;
					font-size: 20px;
					font-weight: 500;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					padding: 4px 0;
				}
				p {
					height: 40px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 15px;
					margin-top: 5px;
					span {
						font-size: 20px;
						color: $color_primary;
					}
					i {
						min-width: 90px;
						height: 32px;
						color: $color_666;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 16px;
						position: relative;
						&:after {
							position: absolute;
							content: "";
							width: 200%;
							height: 200%;
							top: 0;
							left: 0;
							border: 1px solid #bfbfbf;
							border-radius: 4px;
							transform: scale(0.5);
							transform-origin: top left;
						}
					}
				}
			}
			li:nth-child(2n) {
				margin-right: 0;
			}
		}
	}
</style>