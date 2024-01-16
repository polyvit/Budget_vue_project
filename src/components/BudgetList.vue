<template>
  <div class="burger-list-wrap">
    <ElCard :header="header">
      <div class="filters">
        <ElButton plain @click="filterList('ALL')" @keydown="filterList('ALL')">All</ElButton>
        <ElButton plain @click="filterList('INCOME')" @keydown="filterList('INCOME')"
          >Incomes</ElButton
        >
        <ElButton plain @click="filterList('OUTCOME')" @keydown="filterList('OUTCOME')"
          >Outcomes</ElButton
        >
      </div>
      <template v-if="!isEmpty">
        <BudgetListItem :list="filteredList" @deleteItem="deleteItem" />
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
    filteredList: {},
  }),
  created() {
    this.filterList("ALL");
  },
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
    // filteredList: {
    //   get() {
    //     return this.list;
    //   },
    //   set(data) {
    //     this.filteredList = data;
    //   },
    // },
  },
  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
    filterList(type) {
      const listArr = Object.values(this.list);
      if (type === "ALL") {
        this.filteredList = this.list;
      } else {
        const arrayEl = listArr.filter((item) => item.type === type);
        this.filteredList = {};
        arrayEl.forEach((item) => (this.filteredList[item.id] = item));
      }
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
.filters {
  margin-bottom: 15px;
}
</style>
