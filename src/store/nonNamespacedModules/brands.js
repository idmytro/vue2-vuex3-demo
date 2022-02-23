const state = () => ({
  brands: [],
});

const getters = {
  brands: (state) => state.brands,

  /* namespace-prefix example */
  brands_brands: (state) => state.brands,
};

const mutations = {
  setBrands (state, brands) { state.brands = brands; },

  /* namespace-prefix example */
  brands_setBrands (state, brands) { state.brands = brands; },
};

export default {
  state,
  getters,
  mutations,
};
