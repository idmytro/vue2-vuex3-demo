<template>
  <div id="app">
    <button type="button" @click="handleButtonClick">Set shops</button>
    <p>{{ items }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState('shops', ['items']),
    /* or */
    ...mapState('shops', { shops: 'items' }),
    /* also works, but not recommended */
    ...mapState('shops', {
      alsoShops: (state) => state.items,
    }),
  },
  methods: {
    ...mapMutations('shops', ['setItems']),
    /* or */
    ...mapMutations('shops', { setShops: 'setItems' }),

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
