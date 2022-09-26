<template>
  <van-card v-for="user in userList" :key="user.id" :desc="user.profile"
    :title="`${user.username} (${user.planetCode})`" :thumb="user.avatarUrl">
    <template #tags>
      <van-space style="margin-top: 4px" wrap>
        <van-tag v-for="tag in user.tags" :key="tag" plain type="primary">{{tag}}</van-tag>
      </van-space>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { UserType } from '../models/user';
import qs from 'qs';
import axios from '../plugins/request'

const route = useRoute();
const tags = route.query?.tags as string[] || [];

console.log("tags:", tags);


const userList = ref<UserType[]>([]);

onMounted(async () => {
  const resp = await axios.get('/user/getUsersByTags', {
    params: {
      tags: tags,
    },
    paramsSerializer: params => {
      return qs.stringify(params, { indices: false })
    },
  });

  const userListData = resp.data as UserType[];
  if (userListData) {
    userListData.forEach(user => {
      user.tags = user.tags ? typeof user.tags === 'string' ? JSON.parse(user.tags) : user.tags : []
    })
  }
  userList.value = userListData;
})

</script>
<style>

</style>