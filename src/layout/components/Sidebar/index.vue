<template>
  <aside class="app-aside">
    <el-menu default-active="2" class="workbench-menu" background-color="#f2f6fa" @open="handleOpen" @close="handleClose">
      <sidebar-item v-for="item in list" :key="item.name" :item="item" />
    </el-menu>
  </aside>
</template>

<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'

const list = [
  {
    name: '工作台'
  },
  {
    name: '我的文档集',
    children: [
      {
        name: '全部'
      },
      {
        name: '我收藏的'
      },
      {
        name: '我建立的'
      },
      {
        name: '我加入的'
      }
    ]
  }
]

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.app-aside {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.aside-item {
  display: flex;
  align-items: center;
}
</style>
