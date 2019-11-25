<template>
	<div class="m_mine">
		<headTitle message="编缉地址"></headTitle>
		<div class="address_new">
			<div class="item1">
				<label>
					<span class="tit">收货人</span>
					<input type="text" value="" placeholder="姓名" v-model="addressInfo.sname" />
				</label>
			</div>
			<div class="item1">
				<label>
					<span class="tit">联系方式</span>
					<input type="text" value="" placeholder="联系方式" v-model="addressInfo.user_phone" />
				</label>
			</div>
			<div class="item1 item2" @click="areaOpt">
				<label>
					<span class="tit">所在地区</span>
					<input type="text" :value="addressInfo.addressarea" placeholder="选择所在地区" readonly="readonly" />
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
			<div class="switch_box">
				<span>设置默认地址</span>
				<mt-switch v-model="isDefault"></mt-switch>
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
	import { mapGetters } from "vuex"
	import {Toast} from 'mint-ui'
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
		    	addressInfo:{
		    		sname:"",
		    		user_phone:"",
		    		addressarea:"",
		    		addressinfo:"",
		    		isdefault:0
		    	},
		    	isDefault:false
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
				this.addressInfo.addressarea = data.province + data.city + data.county;
		     },
		     uadateAddress(){
		     	let _this = this;
		     	if(_this.addressInfo.sname == ""){
		     		Toast("请输入姓名！")
		     		return false;
		     	}
		     	if(_this.addressInfo.user_phone == ""){
		     		Toast("请输入手机号！")
		     		return false;
		     	}
		     	if(!(/^1[34578]\d{9}$/.test(_this.addressInfo.user_phone))){
		     		Toast("电话号码格式错误！")
		     		return false;
		     	}
		     	if(_this.addressInfo.addressarea == ""){
		     		Toast("请选择所在地区！")
		     		return false;
		     	}
		     	if(_this.addressInfo.addressinfo == ""){
		     		Toast("请输入详细地址！")
		     		return false;
		     	}
		     	_this.$http.post('updateAddress',
		     	{'address_id':this.id,'user_id':_this.userInfo.id,'sname':_this.addressInfo.sname,'user_phone':_this.addressInfo.user_phone,'addressarea':_this.addressInfo.addressarea,'addressinfo':_this.addressInfo.addressinfo,'isdefault':_this.addressInfo.isdefault}
		     ).then((res)=>{
		     	console.log(res.data)
		     	if(res.data.status == 1){
		     		this.$router.push('/addressList') 
		     	}
		     })
		     },
		     getAddressInfo(){
		     	let _this = this;
		     	_this.$http.get('getAddressInfo',{
		     		params:{"addressId" : _this.id}
		     	}).then((res)=>{
		     		_this.addressInfo = res.data[0];
		     		_this.isDefault = res.data[0].isdefault == 1 ? true : false;
		     	})
		     }
		},
		components: {
			headTitle,
			areaOpt
		},
		computed:{
			//获取用户信息
			...mapGetters(["userInfo"])
		},
		created(){
			if(this.$route.query.id){
				this.id = this.$route.query.id;
				this.getAddressInfo();
			}
		},
		mounted(){

		},
		watch:{
			isDefault(){
				 if(this.isDefault){
				 	this.addressInfo.isdefault = 1;
				 }else{
				 	this.addressInfo.isdefault = 0;
				 }
				 
			}
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
				height: 70px;
				font-size: 28px;
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
		.switch_box{
			width:100%;
			display: flex;
			justify-content: space-between;
            align-items: center;
            padding:0 20px;
            height:72px;
            position:relative;  
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
            span{
            	color:#999;
            	font-size:22px;
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