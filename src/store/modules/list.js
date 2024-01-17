/* eslint-disable */

const listStore = {
  namespaced: true,
  state() {
    return {
      list: {
        1: {
          type: "INCOME",
          value: 100,
          comment: "Comment",
          id: 1,
        },
        2: {
          type: "OUTCOME",
          value: -50,
          comment: "Comment 2",
          id: 2,
        },
      },
    };
  },
  getters: {
    budgetList: ({ list }) => list,
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.list[item.id] = item;
    },
    DEL_ITEM(state, id) {
      delete state.list[id];
    },
  },
  actions: {
    addItem({ commit }, data) {
      const newItem = { ...data, id: Math.random() + 1 };
      commit("ADD_ITEM", newItem);
    },
    deleteItem({ commit }, id) {
      commit("DEL_ITEM", id);
    },
  },
};

export default listStore;
