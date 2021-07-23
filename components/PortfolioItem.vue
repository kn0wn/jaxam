<template>
  <div class="group">
    <figure @click="open = true">
      <img
        v-if="getFirstImage"
        class="object-cover h-72 w-full"
        :src="getFirstImage"
        alt=""
      />
      <div v-else class="h-72 w-full bg-green"></div>
    </figure>
    <div class="group-hover:translate-x-6 transition">
      <h4 class="font-display text-xl">{{ type }}</h4>
      <h4 class="font-display text-3xl">{{ name }}</h4>
    </div>

    <div
      v-if="open"
      class="h-screen w-screen bg-pink bg-opacity-60 z-30 fixed top-0 left-0"
    >
      <div class="flex items-center justify-center h-full w-full">
        <div class="container text-center">
          <carousel-3d
            :width="'500'"
            :controls-visible="true"
            :controls-prev-html="'&#10092;'"
            :controls-next-html="'&#10093;'"
            :controls-width="30"
            :controls-height="60"
            :clickable="false"
          >
            <slide
              v-for="(item, i) in items"
              :key="`${i + 1}-${name}`"
              :index="i"
            >
              <img :src="item.url" :alt="`Variant ${i + 1} of ${name}`" />
            </slide>
          </carousel-3d>
          <h4 class="font-display text-xl">{{ type }}</h4>
          <h4 class="font-display text-3xl mb-2">{{ name }}</h4>
          <button class="rounded py-2 px-4 bg-green" @click="close()">
            Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  components: {
    Carousel3d,
    Slide,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    open: false,
  }),
  computed: {
    getFirstImage() {
      if (this.items.length === 0) return null

      return this.items[0].url
    },
  },
  methods: {
    close() {
      if (this.open) this.open = false
    },
  },
}
</script>

<style></style>
