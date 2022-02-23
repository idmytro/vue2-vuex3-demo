<template>
  <div id="app">
    <button type="button" @click="handleButtonClick">Set shops</button>
    <p>{{ items }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

const SET_BRANDS = 'setBrands';

export default {
  name: 'App',
  computed: {
    /* namespaced modules */
    ...mapState('shops', ['items']),
    /* or */
    ...mapState('shops', { shops: 'items' }),
    /* also works, but not recommended */
    ...mapState('shops', {
      notOkShops: (state) => state.items,
    }),

    /* non-namespaced modules */
    ...mapGetters(['brands']),
    /* or */
    ...mapGetters({ okBrands: 'brands' }),
    /* works, but not Ok */
    ...mapState({
      notOkBrands: (state) => state.brands.brands,
    }),

    /* debug store */
    STORE () {
      return this.$store.state;
    },
  },
  methods: {
    ...mapMutations('shops', ['setItems']),
    /* or */
    ...mapMutations('shops', { setShops: 'setItems' }),

    ...mapMutations(['setBrands']),
    /* or */
    ...mapMutations({ alsoSetBrands: 'setBrands' }),

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
