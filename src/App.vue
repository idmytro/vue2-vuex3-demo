<template>
  <div id="app">
    <button type="button" @click="setItems([1, 2, 3])">Set shops</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { SHOPS_MODULE } from './store/modules/shops';

export default {
  name: 'App',
  computed: {
    ...mapState(SHOPS_MODULE, ['items']),
    /* or */
    ...mapState(SHOPS_MODULE, { shops: 'items' }),
  },
  mutations: {
    ...mapMutations(SHOPS_MODULE, ['setItems']),
    /* or */
    ...mapMutations(SHOPS_MODULE, { setShops: 'setItems' }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
