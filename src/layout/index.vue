<template>
  <div class="app-wrapper">
    <header>
      <Navbar />
    </header>
    <main>
      <AppMain />
    </main>
    <footer>footer</footer>
  </div>
</template>
<script setup lang="ts">
import { AppMain, Navbar } from './components'
</script>
