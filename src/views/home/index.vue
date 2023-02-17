<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { getRoomList } from '@/api';
import IndexedDB from '@/utils/indexedDB';

// 数据库相关操作
const db = new IndexedDB('test');
db.openStore('elephant', 'id', ['nose', 'ear']);

// 新增数据
const addDB = (storeName: string) => {
  db.updateItem(storeName, {
    nose: '长长的鼻子',
    ear: '大大的耳朵'
  });
};

// 修改数据
const updateDB = (storeName: string, id: number) => {
  db.updateItem(storeName, {
    id,
    nose: '短短的鼻子',
    ear: '小小的耳朵'
  });
};

// 删除数据
const deleteDB = (storeName: string, key: number | string) => {
  db.deleteItem(storeName, key);
};

// 查询所有数据
const getObjectStore = (storeName: string) => {
  db.getList(storeName);
};

// 查询某一条数据
const getItem = (storeName: string, key: number | string) => {
  db.getItem(storeName, key);
};

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
    <el-button type="success" @click="addDB('elephant')">新增数据</el-button>
    <el-button type="success" @click="updateDB('elephant', 1)"
      >修改数据</el-button
    >
    <el-button type="success" @click="deleteDB('elephant', 1)">
      删除数据
    </el-button>
    <el-button type="success" @click="getObjectStore('elephant')">
      查询所有数据
    </el-button>
    <el-button type="success" @click="getItem('elephant', 1)">
      查询一条数据
    </el-button>
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
