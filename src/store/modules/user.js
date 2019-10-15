import Storage from "@/utils/storage";
//import userApi from "@/api/userApi";

const user = {
  state: {
    token: Storage.get("token") || 0,
    userInfo: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      Storage.set("token", token);
      state.token = token;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("SET_TOKEN", token);
    },
    setUserInfo({ commit }, userInfo) {
      commit("SET_USER_INFO", userInfo);
    }
  }
};
export default user;