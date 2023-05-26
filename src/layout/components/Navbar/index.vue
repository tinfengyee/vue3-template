<template>
  <div>
    <router-link style="margin-right: 10px" v-for="route in routes" :to="route.path" :key="route.path"> {{ route.name }}</router-link>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const routes = router.getRoutes()
</script>

<style></style>
