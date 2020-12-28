import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const getUserInfo = ()=> {
	const info = uni.getStorageSync('userInfo')
	return (info != '' && info != null) ? JSON.parse(info) : {}
}

const store = new Vuex.Store({
	state:{
		isLogin: uni.getStorageSync('isLogin') || false,
		userInfo: getUserInfo()
	},
	mutations:{
		SET_IS_LOGIN(state,value){
			state.isLogin = value
		},
		SET_USER_INFO(state,value){
			state.userInfo = value
		}
	}
})

export default store