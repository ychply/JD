<template>
    <div class="baitiao_main">
        <div class="head">
        	<span>打白条购买</span>
        	<i class="icon iconcuo" @click="closeOpt"></i>
        </div>
        <div class="body" ref="baitiaoMain">
        	<div>
        		<dl>
        			<dt>分期服务<span class="tips">（使用前的分期情况）</span></dt>
        			<dd><p class="p_tlt">不分期</p><p class="detail">先用后付，无服务费</p></dd>
        			<dd><p class="p_tlt">3期 x 666.34元</p><p class="detail">无服务费</p></dd>
        			<dd><p class="p_tlt">6期 x 353.14元</p><p class="detail">含服务费，每期19.99元，费率1%</p></dd>
        			<dd><p class="p_tlt">12期 x 186.61元</p><p class="detail">含服务费，每期19.99元，费率1%</p></dd>
        			<dd><p class="p_tlt">24期 x 103.32元</p><p class="detail">含服务费，每期19.99元，费率1%</p></dd>
        			
        		</dl>
        	</div>
        </div>
        <div class="bottom" @click="closeOpt">  知道了	</div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
    
    }
  },
  watch:{

  },
  methods: {
   closeOpt(){
   		this.$emit('popChange');
   }
  },
  mounted(){
  	 this.scroll = new BScroll(this.$refs.baitiaoMain, {
				click: true
			});
  }
};
</script>
<style lang="scss" scoped="scoped">
.baitiao_main{
	width:100%;
	height:600px;
	background-color:#fff;
	position: relative;
	.head{
		position: absolute;
		top:0;
		left:0;
		width:100%;
		height: 70px;
		padding:0 15px;
		font-size:22px;
		color:#222;
		background-color:#f3f2f8;
		display: flex;
		justify-content: space-between;
		align-items: center;
		i{
			font-size:34px;
			color:#333;
		}
	}
	.body{
		position: absolute;
		top:70px;
		left: 0;
		width:100%;
		height: 560px;
		overflow: hidden;
		background-color: #fff;
		dl{
			width:90%;
			margin:0 auto;
			text-align: left;
			padding-bottom:40px;
			dt{
				width:100%;
				font-size:26px;
				color:#222;
				height: 60px;
				line-height: 60px;
				span{
					font-size:22px;
					color:#999;
				}
			}
			dd{
				width:100%;
				min-height: 70px;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				padding:5px 0 5px 30px;
				position: relative;
				&:before{
					content: "";
					width:5px;
					height: 5px;
					background-color: #999;
					display: block;
					position: absolute;
					top:18px;
					left:10px;
				}
				.p_tlt{
					font-size:20px;
					color:#222;
				}
				.detail{
					margin-top:4px;
					font-size:20px;
					color:#999;
				}
			}
		}
	}
	.bottom{
		width:100%;
		height: 92px;
		background-color:#e4393c;
		color:#fff;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28px;
		position: absolute;
		bottom:0;
		left: 0;
		
	}
}

</style>