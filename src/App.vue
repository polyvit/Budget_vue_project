<template>
  <h1>Budget project</h1>
  <Form @submitForm="onSubmitForm" />
  <TotalBalance :balance="totalBalance" />
  <BudgetList :list="list" @deleteItem="onDeleteItem" />
</template>

<script>
/* eslint-disable */
import BudgetList from "./components/BudgetList.vue";
import TotalBalance from "./components/TotalBalance.vue";
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form,
  },
  data: () => ({
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
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => acc + item.value, 0);
    },
  },
  methods: {
    onDeleteItem(id) {
      delete this.list[id];
    },
    onSubmitForm(data) {
      const newData = { ...data, id: Math.random() + 1 };
      this.list[newData.id] = newData;
    },
  },
};
</script>

<style lang="scss">
#app {
  max-width: 600px;
  margin: 60px auto 0;
  text-align: center;
}
</style>
