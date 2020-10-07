<template>
  <div class="w-full flex flex-wrap justify-center">
    <h1 class="w-full text-center text-6xl mb-10 font-display text-green-dark">
      Jade Axam
    </h1>
    <nav class="flex items-center w-1/2 textl-xl uppercase text-green mb-6">
      <p
        :class="{ 'border-green': getCurrentFilter === 'All' }"
        @click="updateFilter('All')"
        class="flex-1 py-2 border-b-2 border-transparent hidden sm:block text-center"
      >
        All
      </p>
      <p
        @click="updateFilter('Illustration')"
        :class="{ 'border-green': getCurrentFilter === 'Illustration' }"
        class="flex-1 py-2 border-b-2 border-transparent hidden sm:block text-center"
      >
        Illustrations
      </p>
      <p
        @click="updateFilter('Print')"
        :class="{ 'border-green': getCurrentFilter === 'Print' }"
        class="flex-1 py-2 border-b-2 border-transparent hidden sm:block text-center"
      >
        Prints
      </p>
      <p class="flex-1 py-2 border-b-2 border-transparent">About me</p>
    </nav>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ getCurrentFilter: 'getCurrentFilter' })
  },
  methods: {
    ...mapMutations({ updateFilter: 'UPDATE_FILTER' })
  }
}
</script>

<style></style>
