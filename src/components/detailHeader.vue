<template>
	<header class="top_bar" :class="topClass">
		<span @click="_back" class="icon_bg"><i class="icon iconarrow-l fwb"></i></span>
		<ul class="nav_list">
			<li><i class="icon icondingwei"></i> 商品</li>
			<li><i class="icon icondingwei"></i> 评价</li>
			<li><i class="icon icondingwei"></i> 详情</li>
			<li><i class="icon icondingwei"></i> 推荐</li>
		</ul>
		<span class="icon_bg"><i class="icon icongengduo "></i></span>
	</header>
</template>
<script>
	export default {
		data() {
			return {
				topClass: "top_bar_op0"
			}
		},
		methods: {
			_back() {
				this.$router.go(-1)
			},
			top_scroll() {
				let scrolled = this.$refs.main.scrollTop;
				if(scrolled == 0) {
					this.topClass = 'top_bar_op0';
				}
				if(scrolled > 8) {

					this.topClass = 'top_bar_op1';
				}
				if(scrolled > 16) {
					this.topClass = 'top_bar_op2';
				}
				if(scrolled > 34) {
					this.topClass = 'top_bar_op3';
				}
				if(scrolled > 32) {
					this.topClass = 'top_bar_op4';
				}
				if(scrolled > 40) {
					this.topClass = 'top_bar_op5';
				}
				if(scrolled > 48) {
					this.topClass = 'top_bar_op6';
				}
				if(scrolled > 56) {
					this.topClass = 'top_bar_op7';
				}
				if(scrolled > 64) {
					this.topClass = 'top_bar_op8';
				}
				if(scrolled > 72) {
					this.topClass = 'top_bar_op9';
				}
				if(scrolled > 80) {
					this.topClass = 'top_bar_op10';
				}
			}
		},
		mounted() {
			this.$refs.main.addEventListener('scroll', this.top_scroll);
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.top_bar {
		width: 100%;
		height: 70px;
		position: fixed;
		z-index: 2;
		/*background: $color_transparent;*/
		transition: all 0.2s linear;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
		border-bottom: 1px solid #e5e5e5;
		.icon_bg {
			width: 45px;
			height: 45px;
			background-color: $color_666;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			i {
				font: {
					size: 24px;
				}
				color:$color_fff;
			}
			.iconarrow-l {
				position: relative;
				left: -1px;
			}
		}
		.nav_list {
			width: 60%;
			height: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			li {
				flex: 1;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 20px;
				i {
					visibility: hidden;
					color: $color_primary;
					font-size: 20px;
				}
			}
		}
	}
	
	.top_bar_op0 {
		border-color: transparent;
		background: transparent;
		.nav_list {
			opacity: 0;
			display: none;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, 1);
		}
	}
	
	.top_bar_op1 {
		background: hsla(0, 0%, 100%, .1);
		border-color: hsla(0, 0%, 90%, .1);
		.nav_list {
			opacity: .1;
			display: block;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .9);
			i {
				color: rgba(255, 255, 255, 0.9);
			}
		}
	}
	
	.top_bar_op2 {
		background: hsla(0, 0%, 100%, .2);
		border-color: hsla(0, 0%, 90%, .2);
		.nav_list {
			opacity: .2;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .8);
			i {
				color: rgba(255, 255, 255, 0.8);
			}
		}
	}
	
	.top_bar_op3 {
		background: hsla(0, 0%, 100%, .3);
		border-color: hsla(0, 0%, 90%, .3);
		.nav_list {
			opacity: .3;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .7);
			i {
				color: rgba(255, 255, 255, 0.7);
			}
		}
	}
	
	.top_bar_op4 {
		background: hsla(0, 0%, 100%, .4);
		border-color: hsla(0, 0%, 90%, .4);
		.nav_list {
			opacity: .4;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .6);
			i {
				color: rgba(255, 255, 255, 0.6);
			}
		}
	}
	
	.top_bar_op5 {
		background: hsla(0, 0%, 100%, .5);
		border-color: hsla(0, 0%, 90%, .5);
		.nav_list {
			opacity: .5;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .5);
			i {
				color: rgba(255, 255, 255, 0.5);
			}
		}
	}
	
	.top_bar_op6 {
		background: hsla(0, 0%, 100%, .6);
		border-color: hsla(0, 0%, 90%, .6);
		.nav_list {
			opacity: .6;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .4);
			i {
				color: rgba(51, 51, 51, 0.6);
			}
		}
	}
	
	.top_bar_op7 {
		background: hsla(0, 0%, 100%, .7);
		border-color: hsla(0, 0%, 90%, .7);
		.nav_list {
			opacity: .7;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .3);
			i {
				color: rgba(51, 51, 51, 0.7);
			}
		}
	}
	
	.top_bar_op8 {
		background: hsla(0, 0%, 100%, .8);
		border-color: hsla(0, 0%, 90%, .8);
		.nav_list {
			opacity: .8;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .2);
			i {
				color: rgba(51, 51, 51, 0.8);
			}
		}
	}
	
	.top_bar_op9 {
		background: hsla(0, 0%, 100%, .9);
		border-color: hsla(0, 0%, 90%, .9);
		.nav_list {
			opacity: .9;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, .1);
			i {
				color: rgba(51, 51, 51, 0.9);
			}
		}
	}
	
	.top_bar_op10 {
		background: #fff;
		border-color: #e5e5e5;
		.nav_list {
			opacity: 1;
		}
		.icon_bg {
			background-color: rgba(102, 102, 102, 0);
			i {
				color: rgba(51, 51, 51, 1);
			}
		}
	}
</style>