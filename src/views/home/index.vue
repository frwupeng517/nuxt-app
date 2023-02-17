<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { getRoomList } from '@/api';

const open = () => {
  ElMessage({
    type: 'success',
    message: '操作成功！'
  });
};

const getList = async () => {
  const data = await getRoomList();
  console.log('data', data); // data {message: Array(125), status: 'success'}
};

getList();
</script>

<template>
  <div>首页</div>
  <div class="button-group">
    <el-button type="success" @click="open">按钮</el-button>
  </div>
</template>

<style scoped lang="scss">
.button-group {
  button {
    font-size: 26px !important;
    color: $red !important;
  }
}
</style>
