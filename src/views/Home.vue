<template>
  <div id="home">
  	  <div class="m_layout">
  	        <!-- 头部区 -->
           <HomeHeaderView></HomeHeaderView>
            <!-- 轮播图-->
            <HomeBannerView :slides="slides"></HomeBannerView>
            <!--导航-->
            <HomeNavView></HomeNavView>
            <!--商品区-->
            <HomeMainView></HomeMainView>
  	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeaderView from "../components/HomeHeader.vue"
import HomeBannerView from "../components/HomeBanner.vue"
import HomeNavView from "../components/HomeNav.vue"
import HomeMainView from "../components/HomeMain.vue"
export default {
  data(){return{
  	 slides: [
        {
          src: require('../assets/images/l1.jpg'),
          title: 'xxx1',
        },
        {
          src: require('../assets/images/l2.jpg'),
          title: 'xxx2',
        },
        {
          src: require('../assets/images/l3.jpg'),
          title: 'xxx3',
        },
        {
          src: require('../assets/images/l4.jpg'),
          title: 'xxx4',
        },
        {
          src: require('../assets/images/l5.jpg'),
          title: 'xxx5',
        },
        {
          src: require('../assets/images/l6.jpg'),
          title: 'xxx6',
        },
         {
          src: require('../assets/images/l7.jpg'),
          title: 'xxx7',
        },
         {
          src: require('../assets/images/l8.jpg'),
          title: 'xxx8',
        }
      ]
  }},
  components: {
    HomeHeaderView,
    HomeBannerView,
    HomeNavView,
    HomeMainView,
  },
  	created(){
			 this.$store.commit('modifyCount',true);
		}
}
</script>
<style scoped="scoped">
	.m_layout{
		width: 640px;
		margin: 0 auto;
		position: relative;
		height: 1000px;
		background: #F3F5F7;
		
	}
	
	
</style>
