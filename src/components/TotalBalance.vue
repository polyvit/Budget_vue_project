<template>
  <div class="total-balance" :class="activeClass">Balance: {{ balance }}</div>
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
  computed: {
    activeClass() {
      return {
        red: this.balance < 0,
        green: this.balance > 0,
      };
    },
  },
};
</script>

<style scoped>
.total-balance {
  font-size: 22px;
  margin-bottom: 15px;
  margin-top: 15px;
  text-transform: uppercase;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>
