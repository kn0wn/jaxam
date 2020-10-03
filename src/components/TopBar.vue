<template>
  <div class="w-full flex justify-center flex-wrap">
    <h1 class="w-full text-6xl mb-10 font-display text-green-dark transform scale-150">Jade Axam</h1>
    <nav class="flex justify-between items-center w-1/2 text-xl uppercase text-green mb-6">
      <p
        :class="{ 'border-green': currentFilter === 'All' }"
        class="flex-1 py-2 border-b-2 border-transparent hidden sm:block"
        @click="selectFilter('All')"
      >
        All
      </p>
      <p
        @click="selectFilter('Illustration')"
        :class="{ 'border-green': currentFilter === 'Illustration' }"
        class="flex-1 py-2 border-b-2 border-transparent hidden sm:block"
      >
        Illustrations
      </p>
      <p
        @click="selectFilter('Print')"
        :class="{ 'border-green': currentFilter === 'Print' }"
        class="flex-1 py-2 border-b-2 border-transparent hidden sm:block"
      >
        Prints
      </p>
      <p class="flex-1 py-2 border-b-2 border-transparent" @click="go('/about')">About me</p>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { currentFilter } from '../store'

export default defineComponent({
  setup() {
    const router = useRouter()

    const go = (location: string) => router.push(location)
    const selectFilter = (filter: string | null) => {
      currentFilter.value = filter
      go('/')
    }

    return {
      go,
      selectFilter,
      currentFilter
    }
  }
})
</script>

<style></style>
