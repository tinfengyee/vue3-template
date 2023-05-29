<template>
  <div v-if="item">{{ item.name }}</div>
</template>

<script setup lang="ts">
// import { toRef } from 'vue'

// import { isDef } from '@/utils'

defineProps({
  item: {
    type: Object,
    default() {
      return {}
    }
  }
})

// const checkChild = (item) => {
//   return isDef(item)
// }

// const item = toRef(props, 'item')
</script>

<style></style>
