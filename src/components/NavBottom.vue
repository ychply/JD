<template>
	<div  id="footer" ref="foot">
	  <ul class="footerflex">
	  	<router-link tag="li" to="/home" class="tabItem">
	  		<a href="javascript:;" class="tab-item-link">
	  			<img src="../assets/images/a-home.png" alt="" class="tab-item-icon" />
	  		</a>
	  	</router-link>
	  	<router-link tag="li" to="/catgory" class="tabItem">
	  		<a href="javascript:;" class="tab-item-link">
	  			<img src="../assets/images/n-catergry.png" alt="" class="tab-item-icon" />
	  		</a>
	  	</router-link>
	  	<router-link tag="li" to="/find" class="tabItem">
	  		<a href="javascript:;" class="tab-item-link">
	  			<img src="../assets/images/n-find.png" alt="" class="tab-item-icon" />
	  		</a>
	  	</router-link>
	  	<router-link tag="li" to="/cart" class="tabItem">
	  		<a href="javascript:;" class="tab-item-link">
	  			<img src="../assets/images/n-cart.png" alt="" class="tab-item-icon" />
	  		</a>
	  	</router-link>
	  	<router-link tag="li" to="/mine" class="tabItem">
	  		<a href="javascript:;" class="tab-item-link">
	  			<img src="../assets/images/n-me.png" alt="" class="tab-item-icon" />
	  		</a>
	  	</router-link>
	  </ul>
	
	</div>
</template>

<script>
	export default{
	        data(){return{
	        	
	        	
	        }
	       },
	       methods:{
	       	fixedTo(){

	       		// 检测浏览器的resize事件，当高度过小时就可以判定为出现这种情况，这时把定位改成ab或者直接隐藏掉之类的。
            var h = document.documentElement.clientHeight;
            
              window.onresize = ()=>{
             if (document.documentElement.clientHeight<h) {
	       		
             	console.log(123)
                //document.getElementsByTagName("nav")[0].style.display = "none";
                this.$refs.foot.style.display="none";
               }else{
                  this.$refs.foot.style.display="block";
                  console.log(456)
               }
            }
	       		
	       	}
	       },
	       mounted(){
	       	this.fixedTo();
	       }
		
		
	}
</script>

<style scoped="scoped">
#footer{
	height:70px;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	box-shadow: 0 -2px 10px #ccc;
	background-color: #fff;
}
#footer ul.footerflex{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	
}
#footer .tabItem {
    flex: 1;
    height:60px;
    text-align: center;
}
.tabItem .tab-item-link {
    display: inline-flex;
    width: 90px;
    height: 70px;
}
.tabItem .tab-item-link .tab-item-icon {
    display: inline-block;
    width:90px;
    height:70px;
}
</style>