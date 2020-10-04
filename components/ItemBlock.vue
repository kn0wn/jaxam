<template>
  <div class="masonry-item">
    <img :src="item.image" alt="" />
    <div class="overlay">
      <p class="text-3xl text-white">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
