<template>
  <header class="app-header">
    <div class="logo-wrap flex fvc" @click="handleClick">
      <svg-icon icon="logo" />
      <span>业务中台</span>
    </div>
    <div class="menu">
      <span>
        <el-icon class="svg-icon" :size="20">
          <i-ep-setting />
        </el-icon>
      </span>
      <span>
        <el-icon class="svg-icon" :size="20">
          <i-ep-bell />
        </el-icon>
      </span>
      <span>
        <el-icon class="svg-icon" :size="20">
          <i-ep-avatar />
        </el-icon>
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
const router = useRouter()
const handleClick = () => {
  router.push('/demo')
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
}
.logo-wrap {
  cursor: pointer;
  span {
    margin-left: 4px;
  }
}
.menu {
  cursor: pointer;
  height: 50px;
  display: flex;
  align-items: center;
  span {
    height: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #e4ebf0;
    }
  }
}
</style>
