<template>
  <div class="app-wrapper">
    <LayoutHeader />
    <section class="app-container">
      <LayoutSidebar />
      <LayoutMain />
    </section>
  </div>
</template>
<script setup lang="ts">
import { LayoutHeader, LayoutMain, LayoutSidebar } from './components'
</script>
