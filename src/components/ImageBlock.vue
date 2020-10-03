<template>
  <div class="masonry-item">
    <!-- {{ item }} -->
    <img :src="item.image" alt="" />
    <div class="overlay">
      <p class="text-3xl text-white">{{ item.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      item: props.item
    }
  }
})
</script>

<style>
</style>