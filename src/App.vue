<template>
  <div id="app">
    <button type="button" @click="handleButtonClick">Set shops</button>
    <p>{{ items }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'App',
  computed: {
    /* NAMESPACED MODULES */
    ...mapState('shops', ['items']),
    /* or */
    ...mapState('shops', { shops: 'items' }),
    /* also works, but not recommended */
    ...mapState('shops', {
      notOkShops: (state) => state.items,
    }),

    /* NON-NAMESPACED MODULES */
    /* works, but not Ok */
    ...mapState({
      notOkBrands: (state) => state.brands.brands,
    }),
    /* ok */
    ...mapGetters(['brands']),
    /* also ok */
    ...mapGetters({ okBrands: 'brands' }),
    /* prefix-namespace is the best way */
    ...mapGetters({ bestBrands: 'brands_brands' }),

    /* DEBUG STORE */
    STORE () { return this.$store.state; },
  },
  methods: {
    /* NAMESPACED MODULES */
    ...mapMutations('shops', ['setItems']),
    /* or */
    ...mapMutations('shops', { setShops: 'setItems' }),

    /* NON-NAMESPACED MODULES */
    ...mapMutations(['setBrands']),
    /* or */
    ...mapMutations({ alsoSetBrands: 'setBrands' }),
    /* best */
    ...mapMutations({ bestWayToSetBrands: 'brands_setBrands' }),

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
