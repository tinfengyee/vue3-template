<script setup lang="ts">
import { onMounted, onBeforeMount } from 'vue'
import MockView from '@/views/demo/MockView.vue'

import mitt from '@/utils/mitt'
onMounted(() => {
  mitt.on('foo', (ev) => {
    console.log(ev)
  })
})
onBeforeMount(() => {
  mitt.off('foo')
})
</script>

<template>
  <main>
    <div>Home</div>
    <MockView />
  </main>
</template>
