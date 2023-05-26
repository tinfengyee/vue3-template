<template>
  <div>User: {{ user }}</div>
  <div>
    <el-button @click="getUserList">Mock User</el-button>
  </div>
</template>

<script setup lang="ts">
import { getList } from '@/api/sys/user'
import { ref } from 'vue'

const user = ref()

const getUserList = async () => {
  const res = await getList(1)
  user.value = res
}
</script>

<style scoped></style>
