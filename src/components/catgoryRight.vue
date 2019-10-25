<template>
	<div class="product_main">
		<div class="cat_right_top">
			<img src="../assets/images/banner_1.png" />
		</div>
		<h3 class="product_title">{{parentData[1]}}商品区</h3>
		<div class="cat_main" ref="cat">
			<div>
				<ul class="product_list">
					<router-link :to="'/detail/'+item.product_id" tag="li" v-for="(item,index) in product" :key="index">
						<img :src="item.product_img_url" alt="" />
						<p>{{item.product_name}}</p>
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	export default {
		data() {
			return {
				product: null,

			}
		},
		props: ['parentData'],
		watch: {
			parentData(val) {
				let _this = this;
				_this.$http.get('categorygoods', {
					params: {
						mId: val[0]
					}
				}).then((res) => {
					this.product = res.data;
				}).catch((err) => {
					console.log(err);
				})
			}
		},
		methods: {

		},
		mounted() {
			this.scroll = new BScroll(this.$refs.cat, {
				click: true,
			});
			this.$http.get('categorygoods', {
				params: {
					mId: 3
				}
			}).then((res) => {
				this.product = res.data;
			}).catch((err) => {
				console.log(err);
			})
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.product_main {
		width: 100%;
		height: 100%;
		background-color:#fff;
	}
	
	.cat_main {
		width: 100%;
		height: 78%;
		overflow: hidden;
		background-color: #fff;
	}
	
	.cat_right_top {
		width: 100%;
		height: 18%;
		padding-left:10px;
	}
	
	.cat_right_top img {
		width: 100%;
		height: 100%;
	}
	
	.product_title {
		padding-left: 10px;
		height: 6%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background-color: #fff;
		border-bottom: 1px solid #ddd;
	}
	
	.product_list {
		width: 100%;
		background-color: #fff;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		padding: 10px 10px 100px 10px;
		li {
			width: 156px;
			height: 180px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-right: 10px;
			margin-bottom: 15px;
			overflow:hidden; 
			&:nth-child(3n) {
				margin-right: 0;
			}
			img {
				width: 100%;
				height: 80%;
				display: block;
				overflow: hidden;
			}
			p {
				width: 100%;
				height: 20%;
				text-align: center;
				font-size: 20px;
				color: #333;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				padding-top: 3px;
			}
		}
	}
</style>