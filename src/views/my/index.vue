<script setup lang="ts">
import { ref } from 'vue';
const value1 = ref('');
</script>

<template>
  <div>个人中心</div>
  <el-date-picker
    v-model="value1"
    type="date"
    format="YYYY/MM/DD"
    value-format="YYYY-MM-DD"
    placeholder="Pick a day"
  />
</template>

<style scoped></style>
