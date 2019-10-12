 <template>
	<header class="top_bar">
		<span @click="_back" class="icon_bg"><i class="icon iconarrow-l fwb"></i></span>
		<router-link to="/search" v-if="head=='top'" class="search"><i class="icon iconsousuo1 fwb"></i> <span>请输入搜索内容...</span></router-link>
		<form v-else class="search" action="#"><i class="icon iconsousuo1 fwb"></i>
			<input ref="myInput" type="text" placeholder="请输入搜索内容..." />		
		</form>
		<span class="icon_bg"><i class="icon icongengduo "></i></span>
	</header>
</template>
<script>
	export default{
		data(){
			return{		
				
			}
		},
		props:["head"],
		computed:{
		
		},
		methods:{
		   _back() {
				this.$router.go(-1)
			},
		   
		},
		mounted(){
			this.$refs.myInput.focus();
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.top_bar {
		width: 100%;
		height: 6vh;
		transition: all 0.2s linear;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
		border-bottom: 1px solid #e5e5e5;
		background-color:#fff;
		.icon_bg {
			width: 45px;
			height: 45px;
			display: flex;
			justify-content: center;
			align-items: center;
			i {
				font: {
					size: 24px;
				}
				color:$color_333;
			}
			.iconarrow-l {
				position: relative;
				left: -1px;
			}
		}
		.search{
			width:80%;
			background-color:#f7f7f7;
			height: 50px;
			border-radius: 80px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding:0 25px;
			i{
				font-size:24px;
				color:#666;
				position: relative;
				top:0px;
				margin-right:18px;
				font-weight: bold;
			}
			span{
				font-size: 20px;
				color:#666;
			}
			input{
				flex: 1;
				padding-right:10px;
				outline: none;
				border:none;
				height: 100%;
				background-color:rgba(0,0,0,0);
				padding-top:3px;
			}
		}
	}
</style>