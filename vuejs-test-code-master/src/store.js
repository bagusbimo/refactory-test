import Vuex from "vuex";
import Vue from "vue";
// import { SET_DATA } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: null
  },

  getters: {
    getData: (state) => {
      return state.list;
    },
    getCountData: (state) => {
      if (state.list) {    
        return state.list.length;
      }
    }
  },

  mutations: {
    setList(state, val) {
      state.list = val
    },
  },

  actions: {
    setData(context, data) {
      context.commit('setList', data);
    },
  },
});
