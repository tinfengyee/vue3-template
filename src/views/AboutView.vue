<script lang="ts" setup>
import mitt from '@/utils/mitt'
const sendMitt = () => {
  mitt.emit('foo', 'hello')
}
</script>
<template>
  <div class="about">
    <h1 @click="sendMitt">This is an about page</h1>
    <el-button type="default">dd</el-button>
    <el-button>e</el-button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
