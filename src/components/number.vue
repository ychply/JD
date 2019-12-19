<template>
	<div class="num_wrap">
		<span class="minus item" :class="{disabled:disabledMinus}"  @click="onMinus"></span>
		<div class="input_wrap">
			<input type="tel" class="num" v-model="number">
		</div> 
		<span class="plus item" :class="{disabled:disabledAdd}" @click="onAdd"></span>
	</div>
</template>
<script>
	export default{
		props:{
			maxNumber:{
				type:Number,
				default:999
			},
			minNumber:{
				type:Number,
				default:0
			},
			number:{
				type:Number,
				required:true
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			onMinus(){
				if (this.number <= this.minNumber && this.number >= 0) {
		          this.$toast(`最少需购买${this.number}件商品`);
		          return;
		        }
		        this.$emit('on-minus');
			},
			onAdd(){
				 if (this.number >= this.maxNumber) {
		          this.$toast('达到最大购买数量');
		          return;
		        }
		        this.$emit('on-add');
			}
			
		},
		mounted(){
			
		},
		computed:{
			disabledMinus(){
				return this.number <= this.minNumber;
			},
			disabledAdd(){
				return this.number >= this.maxNumber;
			}
		}
//		watch(){
//			login(val) {
//		     console.log(val)
//		    }
//		}
	}
</script>

<style lang="scss" scoped="scoped">
	.num_wrap{
		width:148px;
		height: 54px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.plus:after{
			position: absolute;
			content: "";
			display: block;
			width:3px;
			height: 20px;
			background-color: #333;
			top:50%;
			left:50%;
			transform: translate(-50%,-50%);
			border-radius: 2px;
		}
		.item:before{
			position: absolute;
			content: "";
			display: block;
			width:20px;
			height: 3px;
			background-color: #333;
			top:50%;
			left:50%;
			transform: translate(-50%,-50%);
			border-radius: 2px;
		}
		.item{
			display: block;
			width:40px;
			height: 100%;
			background-color:#f7f7f7;
			position: relative;
		}
		.disabled{
			background-color: #fff;
			&:before{
				background-color: hsla(0,0%,80%,.3);
			}
		}
		.input_wrap{
			width:60px;
			height: 100%;
			background-color:red;
			input{
				display: block;
				width:100%;
				height: 100%;
				background-color:#f7f7f7;
				text-align: center;
				border:none;
				outline: none;
				font-size:24px;
			}
		}
	}
</style>