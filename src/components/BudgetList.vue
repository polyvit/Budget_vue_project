<template>
  <div class="burger-list-wrap">
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <div class="list-item" v-for="(item, prop) in list" :key="prop">
          <span class="budget-comment">{{ item.comment }}</span>
          <div>
            <span class="budget-value">{{ item.value }}</span>
            <ElButton type="danger" size="mini" @click="deleteItem(item.id)">Delete</ElButton>
          </div>
        </div>
      </template>
      <ElAlert v-else type="info" title="This list is empty" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "BudgetList",
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
