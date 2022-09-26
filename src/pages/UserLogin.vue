<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-model="userAccount" name="userAccount" label="账号" placeholder="账号"
        :rules="[{ required: true, message: '请填写账号' }]" />
      <van-field v-model="userPassword" type="password" name="密码" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>
<script setup lang="ts">

  import { Toast } from 'vant';
import { useRouter } from 'vue-router';
import { Resp } from '../models/resp';
import axios from '../plugins/request'


  const router = useRouter()
const userAccount = ref('');
const userPassword = ref('');

const onSubmit = async () => {
  const resp: Resp<any>= await axios.post("/user/login", {
    userAccount: userAccount.value,
    userPassword: userPassword.value
  })

  if (resp.code === 0 && resp.data) {
    Toast.success("登陆成功")
    router.replace("/");
  } else {
    Toast.fail(resp.description ? resp.description : resp.message)
  }
};
</script>
<style lang="">
  
</style>