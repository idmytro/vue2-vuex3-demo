const state = () => ({
  items: [],
});

const mutations = {
  setItems (state, items) {
    state.items = items;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
