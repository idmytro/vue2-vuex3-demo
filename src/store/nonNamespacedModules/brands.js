const state = () => ({
  brands: [],
});

const getters = {
  brands: (state) => state.brands,
  brands_brands: (state) => state.brands,
};

const mutations = {
  setBrands (state, brands) { state.brands = brands; },
  brands_setBrands (state, brands) { state.brands = brands; },
};

export default {
  state,
  getters,
  mutations,
};
