import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store=new Vuex.Store({
	state:{
		isShow:true,
	},
	 mutations:{
	   //mutations中每一个方法第一个参数只能必须是state
	    modifyCount:(state,arg)=>{
	      //通过state这个形参来操作真实的state当中的数据
	      console.log('mutation add success');
            state.isShow=arg;
	    }
	  }
	
	
	
	
	
})
