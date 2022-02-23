import Vue from 'vue';
import Vuex from 'vuex';
import shops from './modules/shops';
import brands from './nonNamespacedModules/brands';
import conflict from './nonNamespacedModules/conflict';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    shops,
    brands,
    conflict,
  },
});
