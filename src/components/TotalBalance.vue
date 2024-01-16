<template>
  <div class="total-balance">Balance: {{ balance }}</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "TotalBalance",
  props: {
    balance: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.total-balance {
  font-size: 22px;
  margin-bottom: 15px;
  text-transform: uppercase;
}
</style>
