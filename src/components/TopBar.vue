<template>
  <div class="w-full flex justify-center flex-wrap">
    <h1 class="w-full text-6xl mb-2 font-display text-green-dark">Jade Axam</h1>
    <nav class="flex justify-between items-center w-1/2 text-2xl text-green mb-6">
      <p class="w-1/3">Illustrations</p>
      <p class="w-1/3">Prints</p>
      <p class="w-1/3">about</p>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    const go = (location: string) => router.push(location)

    return {
      go
    }
  }
})
</script>

<style></style>
