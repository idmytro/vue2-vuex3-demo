import Vue from 'vue';
import Vuex from 'vuex';
import shops from './modules/shops';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    shops,
  },
});
