<template>
  <van-nav-bar title="Find Amigos" left-text="返回" right-text="按钮" left-arrow @click-left="onBack"
    @click-right="search">

    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>

  <div id="content">
    <router-view></router-view>
  </div>

  <van-tabbar route>
    <van-tabbar-item to="/home" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/teams" icon="friends-o" name="teams">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="setting-o" name="user">个人</van-tabbar-item>
  </van-tabbar>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const onBack = () => {
  router.back()
  console.log("左");
}

const search = () => {
  router.push("/search")
  console.log("搜索页");
}

</script>
