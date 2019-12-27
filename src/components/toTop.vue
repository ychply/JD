<template>
	<div class="toTop"  @click="backTop" v-show="btnFlag">
		<img class="img" src="../assets/images/to_top.png" alt="" />
	</div>
</template>
<script>
	export default{
		data(){
			return{
				btnFlag : false
			}
		},
		methods:{
			backTop () {
		      const that = this
		      let timer = setInterval(() => {
		        let ispeed = Math.floor(-that.scrollTop / 5)
		        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
		        if (that.scrollTop === 0) {
		          clearInterval(timer)
		        }
		      }, 16)
		      },
		      
		  // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
		  scrollToTop () {
		    const that = this
		    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		    that.scrollTop = scrollTop
		    if (that.scrollTop > 60) {
		      that.btnFlag = true
		    } else {
		      that.btnFlag = false
		    }
		  }
			
		},
		computed:{
	
		},	
		mounted () {
		  window.addEventListener('scroll', this.scrollToTop)
		},
		destroyed () {
		  window.removeEventListener('scroll', this.scrollToTop)
		}
	
	
		}
</script>

<style lang="scss" scoped="scoped">
.toTop{
	width:50px;
	height: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom:150px;
	right:20px;
	z-index: 10;
	img{
		max-width: 100%;
	}
}
</style>