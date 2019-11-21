<template>
	<div class="m_mine">
		<headTitle message="编缉地址"></headTitle>
		<div class="address_new">
			<div class="item1">
				<label>
					<span class="tit">收货人</span>
					<input id="name" type="text" value="" placeholder="姓名" v-model="addressInfo.sname" />
				</label>
			</div>
			<div class="item1">
				<label>
					<span class="tit">联系方式</span>
					<input id="name" type="text" value="" placeholder="姓名" v-model="addressInfo.user_phone" />
				</label>
			</div>
			<div class="item1 item2" @click="areaOpt">
				<label>
					<span class="tit">所在地区</span>
					<input id="name" type="text" :value="addressVal" placeholder="选择所在地区" readonly="readonly" />
					<i class="icon iconarrow-r"></i>
				</label>
			</div>
			<div class="item1 item2">
				<label>
					<span class="tit">详细地址</span>
					<textarea placeholder="详细地址需填写楼栋楼层或房间号信息" id="adinfo" value="" v-model="addressInfo.addressinfo" rows="2"></textarea>
					<i class="icon iconcuo"></i>
				</label>
			</div>
			<div class="item1 item3">
				<label>
					<span class="tit">地址标签</span>
					<ul class="address_tags">
						<li :class="{'on':tagsIndex == index}" v-for="(item,index) in tagsList" :key="index" @click="tagsClick(index)">{{item}}</li>
					</ul>
				</label>
			</div>
			<mt-button class="address_btn" size="large" type="danger" @click="uadateAddress">确认</mt-button>
		</div>		
		<mt-popup v-model="areaPop" position="bottom">
			<areaOpt  :codes='address' @getAddress="getAddress"></areaOpt>
		</mt-popup>
	</div>
</template>
<script>
	import headTitle from "../components/head_title.vue"
	import areaOpt from "../components/areaOpt.vue"
	export default {
		data() {
			return {
				tagsList:['公司','家','学校'],
				tagsIndex:0,
				address: {
		          province: "",
		          city: "",
		          county: "",
		          changeActive: false
		    	},
		    	areaPop:false,
		    	id:0,
		    	addressInfo:{}
			}
		},
		methods: {
			tagsClick(idx){
				this.tagsIndex = idx;
			},
			areaOpt(){
				this.areaPop = true;
			},
			getAddress(data) {
				this.areaPop = false;
				console.log(this.areaPop)
				this.address = data;
		     },
		     uadateAddress(){
		     	
		     },
		     getAddressInfo(){
		     	let _this = this;
		     	_this.$http.get('getAddressInfo',{
		     		params:{"addressId" : _this.id}
		     	}).then((res)=>{
		     		_this.addressInfo = res.data[0];
		     		console.log(res.data[0])
		     	})
		     }
 
		},
		components: {
			headTitle,
			areaOpt
		},
		computed:{
			addressVal(){
				return this.address.province + this.address.city + this.address.county;
			}
		},
		created(){
			if(this.$route.query.id){
				this.id = this.$route.query.id;
				this.getAddressInfo();
			}
		},
		mounted(){

		}

	}
</script>

<style scoped="scoped" lang="scss">
	.mint-popup{
	  width: 100%;
	}
	.m_mine {
		width: 100%;
		background-color: #f7f7f7;
		padding-bottom: 200px;
		text-align: left;
		min-height: 100%;
		.address_new{
			background-color:#fff;
			padding-bottom: 100px;
			border-top:1px solid #F7F7F7;
			.address_btn{
				width:96%;
				margin:30px auto 0;
			}
		}
		.item1{
			width:100%;
			padding: 22px 18px 22px 135px;
			background-color: #fff;
			position: relative;
			.tit{
				position: absolute;
				top:20px;
				left:20px;
				color:#999;
				font-size: 22px;
			}
			input{
				font-size: 24px;
				width:100%;
			}
			textarea{
				font-size:26px;
				width:100%;
				height: 70px;
				margin-top:-3px;
			}
			&:after{
				content:"";
				display: block;
				width:100%;
				height: 2px;
				background-color:#cbcbcb;
				z-index: 1;
				position: absolute;
				bottom:0;
				left: 0;
				right:0;
				opacity: 0.6;
				transform: scaleY(0.8);
			}
		}
		.item2{
			padding-right:80px;
			i{
				position: absolute;
				top:26px;
				right:20px;
				font-size: 24px;
				font-weight: bold;
				color:#666;
			}
		}
		.item3{
			padding:16px 6px 16px 135px;
			.address_tags{
				width:100%;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				li{
					height: 45px;
					display: flex;
					justify-content: center;
					align-items: center;
					padding:0 15px;
					color:#999;
					font-size:24px;
					margin-right:18px;
					position: relative;
					&:after{
						content: "";
						position: absolute;
						z-index: 1;
						border:1px solid #ddd;
						top:0;
						left: 0;
						right: 0;
						bottom: 0;
						border-radius: 6px;
					}		
				}
				.on{
						color:#6a77b6;
						&:after{
							border-color:#6a77b6;
						}
					}
			}
		}
	}
</style>