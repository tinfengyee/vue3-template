<template>
  <aside class="app-aside">
    <el-menu :default-active="acitvedMenu" class="workbench-menu" background-color="#f2f6fa">
      <sidebar-item v-for="item in list" :key="item.name" :item="item" @item-click="handleClick(item)" />
    </el-menu>
  </aside>
</template>

<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
import mitt from '@/utils/mitt'

const router = useRouter()

const list = [
  {
    name: '工作台',
    path: '/workbench',
    type: 'route'
  },
  {
    path: '/document-set',
    name: '我的文档集',
    type: 'menu',
    children: [
      {
        path: '/document-set',
        name: '全部',
        param: 'all'
      },
      {
        path: '/document-set',
        name: '我收藏的',
        param: 'collection'
      },
      {
        path: '/document-set',
        name: '我建立的',
        param: 'created'
      },
      {
        path: '/document-set',
        name: '我加入的',
        param: 'join'
      }
    ]
  }
]

const acitvedMenu = ref('我收藏的')

onMounted(() => {
  mitt.on('item-click', handleClick)
})

onBeforeMount(() => {
  mitt.off('item-click', handleClick)
})

const handleClick = (item) => {
  acitvedMenu.value = item.name
  router.push({
    path: item.path
  })
}

// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }

// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
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

.workbench-menu {
  :deep(.el-menu-item.is-active) {
    background-color: #e4ebf0;
  }
}
</style>
