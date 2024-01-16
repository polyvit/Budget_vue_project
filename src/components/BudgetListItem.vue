<template>
  <div class="list-item" v-for="(item, prop) in list" :key="prop">
    <span class="budget-comment">{{ item.comment }}</span>
    <div>
      <span class="budget-value">{{ item.value }}</span>
      <ElButton type="danger" size="mini" @click="dialogVisible = true">Delete</ElButton>
    </div>
    <ElDialog v-model="dialogVisible" :before-close="handleClose">
      <span>Are you sure that you want to delete it?</span>
      <template #footer>
        <span class="dialog-footer">
          <ElButton @click="dialogVisible = false">Cancel</ElButton>
          <ElButton type="primary" @click="deleteItem(item.id)"> Confirm </ElButton>
        </span>
      </template>
    </ElDialog>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "BudgetListItem",
  data: () => ({
    dialogVisible: false,
  }),
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    deleteItem(id) {
      this.dialogVisible = false;
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
