<template>
  <div id="app">
    <button type="button" @click="handleButtonClick">Set shops</button>
    <p>{{ items }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { SHOPS_MODULE } from './store/namespaces';

export default {
  name: 'App',
  computed: {
    ...mapState(SHOPS_MODULE, ['items']),
    /* or */
    ...mapState(SHOPS_MODULE, { shops: 'items' }),
    /* also works, but not recommended */
    ...mapState(SHOPS_MODULE, {
      alsoShops: (state) => state.items,
    }),
  },
  methods: {
    ...mapMutations(SHOPS_MODULE, ['setItems']),
    /* or */
    ...mapMutations(SHOPS_MODULE, { setShops: 'setItems' }),

    handleButtonClick () {
      this.setItems([1, 2, 3]);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin-top: 60px;
}
</style>
