<template>
<van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="editUser.currentValue"
      :name="editUser.editKey"
      :label="editUser.editLabel"
      :placeholder="`请输入${editUser.editLabel}`"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()

const queryParams = route.query;
const editUser = reactive({
  editKey: queryParams.editKey as string,
  editLabel: queryParams.editLabel as string,
  currentValue: queryParams.currentValue as string,
})

console.log("queryParams:", queryParams);


// 表单
const onSubmit = (values:string) => {
  console.log(values);
  
}

</script>
<style>
  
</style>