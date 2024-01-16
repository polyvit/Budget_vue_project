<template>
  <div class="list-item" v-for="(item, prop) in list" :key="prop">
    <el-icon v-if="item.type === 'INCOME'"><Top /></el-icon>
    <el-icon v-else><Bottom /></el-icon>
    <span class="budget-comment">{{ item.comment }}</span>
    <span
      class="budget-value"
      :class="`${item.value >= 0 ? 'budget-value-green' : 'budget-value-red'}`"
    >
      {{ item.value }}
    </span>
    <ElButton type="danger" @click="dialogVisible = true">Delete</ElButton>
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
  align-items: center;
  margin-bottom: 10px;
}
.budget-comment {
  margin-left: 15px;
}
.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 15px;
}
.budget-value-red {
  color: red;
}
.budget-value-green {
  color: green;
}
</style>
