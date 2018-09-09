<template>
	<div class="m_detail">
		<header class="top_bar">
	        <a onclick="window.history.go(-1)" class="icon_back"></a>
	       <h2>商品详情</h2>
	        <a href="#" class="icon_menu"></a>
	    </header>
	    <div class="product_main">
	        <div class="main_top">
	        <div class="lImg">
	        <!--<img :src="item.image_url" v-for="(item,index) in listImg" :key="index" />-->
	        <swipe style="text-align: center; width: 100%; background: #42b983;" >
  <swipe-item v-for="(item,index) in listImg" :key="index">
  <img style="width:100%; height:300px;" :src="item.image_url"  />
  </swipe-item>
  
</swipe>
	        </div>
	        <div class="proNa" v-for="(item,index) in listData" :key="index">
	        	<p>{{item.product_name}}</p>
	            <p class="price">
	            <span>￥{{item.product_price}}</span>
	            <a href="#">降价通知</a>
	            </p>
	        	<p class="pdetail">{{item.product_detail}}</p>
	        </div>
	        
	        
	        </div>
	        
	    </div>
	    
	    <footer v-if='isShow' class="pro_footer">
	    
	    <div class="fot_left">
	    <a href="#">
	    <em class="cat_pic_icon"></em>
	    <span>商家</span>
	    </a>
	    <a href="#">
	    <em class="cat_pic_icon1"></em>
	    <span>关注</span>
	    </a>
	    <a href="#">
	    <em class="cat_pic_icon2"></em>
	    <span>购物车</span>
	    </a>
	    </div>
	    
	    <div class="fot_right">
	    <a href="#">加入购物车</a>
	    <a href="#">立即购买</a>
	    </div>
	    </footer>
		
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				listImg:[],
				listData:[],
				isShow:false
			}
		},
		methods:{
			feactData(pid){
				var _this=this;
				_this.$http.get("/api/detail",{
					params:{
					pId:pid
				}
					}).then((res)=>{
						//console.log(res.data[0]);
						this.listImg=res.data[0];
						this.listData=res.data[1];
						console.log(res.data[0]);
						
					
				}).catch((err)=>{
					console.log(err);
				})
			},
			Show(){
				this.isShow=true;
			}
		},
		watch:{
			$route(to){
				var reg=/detail\/\d+/;
                if(reg.test(to.path)){
                    var categotyId=this.$route.params.uid || 0;
                    this.feactData(categotyId);
                }
			}
		},
		created(){
			console.log(666)
			//console.log(this.$route.params.uid);
			
			this.feactData(this.$route.params.uid);
			//console.log(this.listImg);
		},
		mounted(){
          this.Show();
		}
	}
</script>

<style scoped="scoped">

.m_detail{
	background: #F3F4F6;
}
.top_bar {
    width: 100%;
    height:60px;
    background: url("../assets/images/header-bg.png") repeat-x;
    background-size: 1px 44px;
    border-bottom: 1px solid #bfbfbf;
    position: fixed;
    z-index: 2;
    background: #ddd;
}
.top_bar h2{
	margin-top: 3px;
}

.top_bar .icon_back {
	 background: url("../assets/images/sprites.png") no-repeat;
    background-size: 360px 360px;
    height:45px;
    width:40px;
    background-position: -36px 0;
    display: block;
    margin: 10px 10px;
    position: absolute;
    left: 0;
    top: 0;
}
.top_bar .icon_menu {
	 background: url("../assets/images/sprites.png") no-repeat;
    background-size: 360px 360px;
    height:52px;
    width:60px;
    background-position: -106px 0;
    background-clip: content-box;
    background-origin: content-box;
    -moz-background-origin: content-box;
    -webkit-background-origin: content-box;
    display: block;
    padding: 10px 12px;
    position: absolute;
    right: 0;
    top: 0;
}

/*img*/
.product_main{
	width: 640px;
	padding-top:50px;
}
.product_main .main_top{
	width: 100%;
	height: 300px;
}
.product_main .main_top .lImg{
	width: 100%;
	
}
.product_main .main_top .lImg img{
	display: block;

	}
.product_main .main_top .proNa{
	margin-top: 6px;
	text-align: left;
	width: 100%;
	font-size: 26px;
}	
.product_main .main_top .proNa p.price{
    display: flex;
    flex-direction: row;
    height: 70px;
    justify-content: space-between;
}
.product_main .main_top .proNa p.pdetail{
	padding-top: 30px;
	padding-bottom: 100px;
}
.product_main .main_top .proNa p.price span{
	 display: block;
	 width: 100px;
	 padding-left: 20px;
	 height: 100%;
	 line-height:70px;
	 color: red;
	}
.product_main .main_top .proNa p.price a{
	display: block;
	margin-right: 20px;
	width:140px;
	font-family: "微软雅黑";
	color: #666666;
	padding: 0 10px;
	height: 100%;
	text-align: center;
	line-height: 70px;
	border: 1px solid #999999;
	border-radius: 6px;
}
.pro_footer{
	display: none;
	box-shadow: 0 -2px 10px #ccc;
	width: 100%;
	height: 90px;
	position: fixed;
    left: 0;
    bottom: 0;
    background: #FFFFFF;
    z-index: 2;
    display: flex;
     flex-direction: row;    
}
.pro_footer .fot_left{
	flex: 1;
	display: flex;
	height: 100%;
	flex-direction: row;
}

.pro_footer a{
	flex: 1;
	display: block;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}
.pro_footer a .cat_pic_icon{
	display: block;
    width:50px;
    height: 40px;
    background: url("../assets/images/cart_sprits_all.png") no-repeat top center;
    background-size: 200px 200px;
    margin: 6px auto 0;
    background-position: -45px 0;
}

.pro_footer a .cat_pic_icon1{
	display: block;
    width:50px;
    height: 40px;
    background: url("../assets/images/cart_sprits_all.png") no-repeat top center;
    background-size: 200px 200px;
    margin: 6px auto 0;
    background-position: -97px 0;
}
.pro_footer a .cat_pic_icon2{
	display: block;
    width:50px;
    height: 40px;
    background: url("../assets/images/cart_sprits_all.png") no-repeat top center;
    background-size: 200px 200px;
    margin: 6px auto 0;
    background-position: 0px -42px;
}
.pro_footer a span{
	text-align: center;
}

.pro_footer .fot_right{
	flex: 1;
	height: 100%;
	display: flex;
	flex-direction: row;
}
.pro_footer .fot_right a{
	flex: 1;
	height: 100%;
	display: block;
	line-height: 90px;
}
.pro_footer .fot_right a:nth-child(1){
	background: #FFB03F;
}
.pro_footer .fot_right a:nth-child(2){
	background: #F23030;
}
/*底部*/
</style>