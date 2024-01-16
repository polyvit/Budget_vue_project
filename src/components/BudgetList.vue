<template>
  <div class="burger-list-wrap">
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <BudgetListItem :list="list" @deleteItem="deleteItem" />
      </template>
      <ElAlert v-else type="info" title="This list is empty" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
/* eslint-disable */
import BudgetListItem from "./BudgetListItem.vue";

export default {
  name: "BudgetList",
  components: {
    BudgetListItem,
  },
  data: () => ({
    header: "List of my budget",
  }),
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
  },
};
</script>

<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.budget-value {
  font-weight: bold;
  margin-right: 15px;
}
</style>
