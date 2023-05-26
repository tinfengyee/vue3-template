<template>
  <div class="app-wrapper">
    <header>
      <Navbar />
    </header>
    <main>
      <AppMain />
    </main>
    <SvgIcon icon="test-up" size="24" />
    <footer>footer</footer>
  </div>
</template>
<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon'
import { AppMain, Navbar } from './components'
</script>
