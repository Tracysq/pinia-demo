<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { storeToRefs } from 'pinia'
import { useMeStore } from './stores/me'

const store = useMeStore()
const { name } = storeToRefs(store)
// const { name } = store
</script>

<template>
  <div>
    <h1>pinia demo</h1>
    <input v-model="name" @input="store.printName">
    <div>{{ name }}</div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
