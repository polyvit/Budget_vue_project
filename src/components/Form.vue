<template>
  <ElCard class="form">
    <ElForm :model="formData" :rules="rules" ref="addItemForm">
      <ElFormItem label="Type" prop="type">
        <ElSelect v-model="formData.type" placeholder="Choose type">
          <ElOption label="Income" value="INCOME" />
          <ElOption label="Outcome" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comment" prop="comment">
        <ElInput v-model="formData.comment" placeholder="Write comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
/* eslint-disable */
export default {
  name: "Form",
  data: () => ({
    formData: {
      value: 0,
      comment: "",
      type: "INCOME",
    },
    rules: {
      type: [{ required: true, message: "Please select type", trigger: "blur" }],
      comment: [{ required: true, message: "Please print comment", trigger: "blur" }],
      value: [
        { required: true, message: "Please print value", trigger: "blur" },
        { type: "number", message: "Value must be a number", trigger: "change" },
      ],
    },
  }),
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid, fields) => {
        if (valid) {
          this.$emit("submitForm", { ...this.formData });
          this.$refs.addItemForm.resetFields();
        } else {
          console.log("error submit!", fields);
        }
      });
    },
  },
};
</script>

<style scoped></style>
