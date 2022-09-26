<template>

  <template v-if="user">
    <van-cell title="头像" is-link to="/user/edit" :value="user.avatarUrl">
      <img style="height: 40px" :src="user.avatarUrl" alt="头像">
    </van-cell>
    <van-cell title="昵称" :value="user.username" @click="toEdit('username', '昵称', user.username)" />
    <van-cell title="账号" :value="user.userAccount" />
    <van-cell title="性别" :value="user.gender" @click="toEdit('gender', ' 性别', user.gender)" />
    <van-cell title="电话" :value="user.phone" @click="toEdit('phone', '电话', user.phone)" />
    <van-cell title="邮箱" :value="user.email" @click="toEdit('email', '邮箱', user.email)" />
    <van-cell title="星球编号" :value="user.planetCode" />
    <van-cell title="注册时间" :value="typeof user.createTime === 'string' ? user.createTime : user.createTime.toLocaleDateString()" />
  </template>
</template>
  
<script setup lang="ts">
import { useRouter, Router } from 'vue-router';
import { Toast } from 'vant';
import { queryCurUser } from '../api/userApi';

const router: Router = useRouter()


onMounted(async () => {
  // const resp: Resp<any> = await axios.get("/user/current")
  // if (resp.code === 0 && resp.data) {
  //   user.value = resp.data;
  //   Toast.success(resp.message)
  // } else if (resp.code === 40100) {
  //   Toast.fail(resp.message)
  //   router.push("/login")
  // } else {
  //   Toast.fail(resp.message)
  // }
  const resp = await queryCurUser();
  console.log("current user:", resp.data);
  
  if (resp.code === 0 && resp.data) {
    user.value = resp.data;
    Toast.success(resp.message)
  } else if (resp.code === 40100) {
    Toast.fail(resp.message)
    router.push("/login")
  } else {
    Toast.fail(resp.message)
  }
})

const user = ref();

const toEdit = (editKey: string, editLabel: string, currentValue: string | number | undefined) => {
  router.push({
    path: 'user/edit',
    query: {
      id: user.value.id,
      editKey,
      editLabel,
      currentValue,
    }
  })
}

</script>