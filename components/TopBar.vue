<template>
  <div class="flex flex-wrap justify-center w-full">
    <h1 class="w-full mb-10 text-6xl text-center font-display text-green-dark">
      Jade Axam
    </h1>
    <nav class="flex items-center w-1/2 mb-6 uppercase textl-xl text-green">
      <p
        :class="{ 'border-green': getCurrentFilter === 'All' }"
        @click="updateFilter('All')"
        class="flex-1 hidden py-2 text-center border-b-2 border-transparent sm:block"
      >
        All
      </p>
      <p
        @click="updateFilter('Illustration')"
        :class="{ 'border-green': getCurrentFilter === 'Illustration' }"
        class="flex-1 hidden py-2 text-center border-b-2 border-transparent sm:block"
      >
        Illustrations
      </p>
      <p
        @click="updateFilter('Print')"
        :class="{ 'border-green': getCurrentFilter === 'Print' }"
        class="flex-1 hidden py-2 text-center border-b-2 border-transparent sm:block"
      >
        Prints
      </p>
      <p class="flex-1 py-2 text-center border-b-2 border-transparent">About me</p>
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
