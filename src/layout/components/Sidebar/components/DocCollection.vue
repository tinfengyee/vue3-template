<template>
  <div class="collection">
    <div>
      <el-icon class="svg-icon" color="pink" :size="20">
        <i-ep-circle-check-filled />
      </el-icon>
      <span>文档集</span>
    </div>
    <div>
      <div v-for="item in list" :key="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const list = ref(['全部', '我收藏的', '我建立的', '我加入的'])

// const mapList = () => {
//   const result = []
//   for (let index = 0; index < 6; index++) {
//     result.push({
//       plateNumber: '文档' + index
//     })
//   }
//   return result
// }

// list.value = mapList
</script>

<style lang="scss" scoped>
.collection {
  display: flex;
  flex-direction: column;
}
</style>
