<template>
  <div v-if="checkChild(item)">
    <el-menu-item :index="item.name" @click="handleClick(item)">
      <span> <span v-if="isEmpty(item.path)" class="mgr_2">•</span> {{ item.name }}</span>
    </el-menu-item>
  </div>
  <div v-else>
    <el-sub-menu :index="item.name">
      <template #title>
        <div>{{ item.name }}</div>
      </template>
      <sidebar-item v-for="child in item.children" :key="child.name" :item="child" />
    </el-sub-menu>
  </div>
</template>

<script setup lang="ts">
import { isEmpty, isUnDef } from '@/utils'
import mitt from '@/utils/mitt'

defineProps({
  item: {
    type: Object,
    default() {
      return {}
    }
  }
})

const handleClick = (item) => {
  mitt.emit('item-click', item)
}

const checkChild = (item) => {
  return isUnDef(item.children)
}
</script>
