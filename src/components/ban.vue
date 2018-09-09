<template>
	<div>
		<div class="box" @touchstart="clearInv" @touchend="runInv">
			<div class="lunbo" >
				<transition name="slide-trans">
				<img v-if="isShow" :src='require("../assets/images/"+slides[nowIndex])'/>	<!--新的向左进来-->
				</transition>
				<transition name="slide-trans-old">
				<img v-if="!isShow" :src='require("../assets/images/"+slides[nowIndex])'/>	<!--旧的向左出去-->
				</transition>
				
			</div>
			
			<ul class="slide-page">
				<li v-for="(item,index) in slides" :key="index" :class="{on:index===nowIndex}"></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isShow:true,
				nowIndex:0,
				timer:null,
				slides:["l1.jpg","l2.jpg","l3.jpg","l4.jpg","l5.jpg","l6.jpg","l7.jpg","l8.jpg"],
			}
		},
		computed:{
			nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      }
      else {
        return this.nowIndex + 1
      }
    }
   
		},
		methods:{
		   goto (index) {/*10毫秒后才改nowIndex的值 让旧的nowIndex向左出去*/
      this.isShow = false;//先让旧的显示，10毫秒后让旧的消失，新的出来
      setTimeout(() => {
        this.isShow = true;/*isShow为ture时，旧的被移除渲染，只有消失的动画，*/
        this.nowIndex = index;/*旧的已经不能渲染，nowIndex改不了旧的，只能改新的，就有两张图片了，新的图片渲染进来*/
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      },2000)
    },
    clearInv () {
      clearInterval(this.invId)
    }
		},
		mounted(){
			this.runInv();
		}	
	}
</script>

<style>
	.box{
		max-width:640px;
		min-width: 300px;
		overflow: hidden;
		position: relative;
		max-height: 350px;
		min-height: 150px;
		
		border: 1px solid red;
		
	}
	.box .lunbo{
		
		width:100%;
		height:100%;
	}
	/*新的只有进来的动画，旧的只有出去的动画*/
	.slide-trans-enter-active {
      transition: all .5s;
     }
     .slide-trans-enter {   /*新的开始的位置*/
       transform: translateX(640px);
      }
     .slide-trans-old-leave-active { /*旧的结束位置*/
       transition: all .5s;
       transform: translateX(-640px);
        }
	
	
	
	.box .lunbo img{
		position: absolute;
		top: 0;
		left: 0;
		width:100%;
		height:100%;
	}
	.box ul.slide-page{
		position: absolute;
		bottom: 5%;
		left: 50%;
		transform: translateX(-50%);
		
	}
	.box ul.slide-page li{
		float: left;
		width:10px;
		height:10px;
		border: 1px solid white;
		background:rgba(255,255,255,0.2);
		border-radius: 50%;
		margin-right: 7px;
	}
	.box ul.slide-page li.on{
		background: black;
	}
	
	
	
</style>