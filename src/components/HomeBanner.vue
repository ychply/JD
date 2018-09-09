<template>
	<div class="banner">
		<swipe
  v-model="index"
  style="text-align: center; height: 180px;  background: #42b983;"
>
  <swipe-item v-for="(item,index) in slides" :key="index"><img style="width: 100%; height: 100%;" :src="require('../assets/images/'+item)"  /></swipe-item>
  
</swipe>
	</div>
</template>
<script>
		export default {
			data(){
				return{
				index: 0,
				slides:["l1.jpg","l2.jpg","l3.jpg","l4.jpg","l5.jpg","l6.jpg","l7.jpg","l8.jpg"],
				timer:null
					}
			},
			methods:{
				play(){
					this.timer=setInterval(()=>{
						this.index++;
						if(this.index>7){
							this.index=0;
						}
					},1000)
					
				},
				clearPlay(){
					clearInterval(this.timer);
				}
			},
			mounted(){
				///this.play();
			}
		}
</script>
<style>
	/*轮播图*/

</style>