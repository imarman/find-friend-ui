<template>
  <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
    @click-right="onClickRight">

    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>

  <div id="content">
    <template v-if="active === 'index'">
      <index></index>
    </template>
    <template v-if="active === 'teams'">
      <teams></teams>
    </template>
    <template v-if="active === 'user'">
      <user></user>
    </template>
  </div>

  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="teams">队伍</van-tabbar-item>
    <van-tabbar-item icon="setting-o" name="user">个人</van-tabbar-item>
  </van-tabbar>

</template>

<script setup lang="ts">
import { Toast } from 'vant';
import Index from '../pages/index.vue';
import teams from '../pages/teams.vue';
import user from '../pages/user.vue'

const active = ref<string>("index")
const onChange = (index: number) => Toast(`选择 ${index}`);

const onClickLeft = () => {
  console.log("左");
}

const onClickRight = () => {
  console.log("右");
}

</script>
