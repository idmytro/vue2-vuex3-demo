const state = () => ({
  items: [],
});

const getters = {
  items: (state) => state.items,
};

const mutations = {
  setItems (state, items) {
    state.items = items;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
