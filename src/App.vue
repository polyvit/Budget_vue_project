<template>
  <h1>Budget project</h1>
  <Form @submitForm="onSubmitForm" />
  <TotalBalance :balance="totalBalance" />
  <BudgetList :list="budgetList" @deleteItem="onDeleteItem" />
</template>

<script>
/* eslint-disable */
import BudgetList from "./components/BudgetList.vue";
import TotalBalance from "./components/TotalBalance.vue";
import Form from "./components/Form.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form,
  },
  computed: {
    totalBalance() {
      return Object.values(this.budgetList).reduce((acc, item) => acc + item.value, 0);
    },
    ...mapGetters("list", ["budgetList"]),
  },
  methods: {
    ...mapActions("list", ["addItem", "deleteItem"]),
    onDeleteItem(id) {
      this.deleteItem(id);
    },
    onSubmitForm(data) {
      this.addItem(data);
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
