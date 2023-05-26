<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
import mitt from '@/utils/mitt'
import { useRouter } from 'vue-router'
const router = useRouter()

const sendMitt = () => {
  mitt.emit('foo', 'hello')
}
</script>
<template>
  <div class="about">
    <h1 @click="sendMitt">This is an about page</h1>
    <el-button type="default" @click="router.back()">Go Back</el-button>
    <HelloWorld msg="hello view" />
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
