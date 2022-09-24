<template>

  <van-cell title="头像" is-link to="/user/edit" :value="user.avatarUrl">
    <img style="height: 40px" :src="user.avatarUrl" alt="头像">
  </van-cell>
  <van-cell title="昵称" :value="user.username" @click="toEdit('username', '昵称', user.username)" />
  <van-cell title="账号" :value="user.userAccount" />
  <van-cell title="性别" :value="user.gender" @click="toEdit('gender', ' 性别', user.gender)"/>
  <van-cell title="电话" :value="user.phone" @click="toEdit('phone', '电话', user.phone)"/>
  <van-cell title="邮箱" :value="user.email" @click="toEdit('email', '邮箱', user.email)"/>
  <van-cell title="星球编号" :value="user.planetCode" />
  <van-cell title="注册时间" :value="user.createTime.toLocaleDateString()" />

</template>
  
<script setup lang="ts">
import { useRouter, Router } from 'vue-router';
import { UserType } from '../models/user';


const user: UserType = {
  id: 1,
  username: 'Arman',
  userAccount: 'arman',
  avatarUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
  gender: '男',
  phone: '123123123',
  email: 'life@outlook.vom',
  // userStatus: number,
  // userRole: number,
  planetCode: '123',
  createTime: new Date
  // tags: string[]
}

const router: Router = useRouter()
const toEdit = (editKey: string, editLabel: string, currentValue: string | number | undefined) => {
  router.push({
    path: 'user/edit',
    query: {
      editKey,
      editLabel,
      currentValue,
    }
  })
}

</script>