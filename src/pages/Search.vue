<template>
  <form action="/">
    <van-search v-model="searchText" show-action placeholder="请输入搜索标签" @search="onSearch" @cancel="onCancel" />
  </form>

  <van-divider content-position="left">已选标签</van-divider>

  <div v-if="activeIds.length === 0">
    <van-empty image="search" image-size="40" />
  </div>

  <van-space wrap>
    <van-tag v-for="tagId in activeIds" :key="tagId" closeable size="medium" type="primary" @close="doClose(tagId)">
      {{tagId}}
    </van-tag>
  </van-space>


  <van-divider content-position="left">选择标签</van-divider>
  <van-tree-select v-model:active-id="activeIds" v-model:main-active-index="activeIndex" :items="tagList"
    @click-item="chooseItem" />

</template>

<script setup lang="ts">
import { Toast, TreeSelectChild } from 'vant';
import { Ref } from 'vue';
import { TreeTag } from '../models/tag';

const initData = [
  {
    text: '性别',
    children: [
      { text: '男', id: '男' },
      { text: '女', id: '女' },
      { text: '女', id: '女22222222' },
      { text: '女', id: '女3333333' },
      { text: '女', id: '女4444444' },
      { text: '女', id: '女5555555' },
    ],
  },
  {
    text: '江苏',
    children: [
      { text: '南京', id: '南京' },
      { text: '无锡', id: '无锡' },
    ],
  },
]


const searchText = ref('');
// 搜索按钮
const onSearch = (val: string) => {
  tagList.value = initData.map(parentTag => {
    const tempChildren = [...parentTag.children]
    const temParentTag = {...parentTag}
    temParentTag.children = tempChildren.filter(tag => tag.id.includes(val))
    return temParentTag
  })
};
// 取消搜索
const onCancel = () => {
  searchText.value = ''
  tagList.value = initData
};

// 标签
// 删除标签时，需要联动取消下面 tree-select 的选项
const doClose = (tagId: string) => {
  activeIds.value = activeIds.value.filter(item => item !== tagId)
}

// 分类选择
const activeIds = ref([]);
const activeIndex = ref(0);
const tagList: Ref<Array<TreeTag>> = ref<Array<TreeTag>>(initData);
const chooseItem = (item: TreeSelectChild) => {
  console.log(item);
}


</script>