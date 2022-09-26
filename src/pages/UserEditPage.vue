<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-model="editUser.currentValue" :name="editUser.editKey" :label="editUser.editLabel"
        :placeholder="`请输入${editUser.editLabel}`" :rules="[{ required: true, message: `请填写${editUser.editLabel}` }]" />
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
import { useRouter,useRoute } from 'vue-router';
import { Resp } from '../models/resp';
import axios from '../plugins/request'

const route = useRoute()
const router = useRouter()

const queryParams = route.query;
const editUser = reactive({
  id: queryParams.id,
  editKey: queryParams.editKey as string,
  editLabel: queryParams.editLabel as string,
  currentValue: queryParams.currentValue as string,
})

console.log("queryParams:", queryParams);

// 表单
const onSubmit = async (value: string) => {

  const resp: Resp<any> = await axios.put("/user/update", {
    id: editUser.id,
    [editUser.editKey]: editUser.currentValue
  });
  if (resp.code === 0 && resp.data > 0) {
    Toast.success('更新成功');
    router.back();
  }else {
    Toast.fail(resp.message)
  }
}

</script>
<style>

</style>