<template>
  <div class="">
    <img :src="item.image" class="shadow item-details" alt="" />
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

<style lang="postcss">
.item-details {
  @apply ml-6;
  max-height: 80vh;
  max-width: 40vw;
}
</style>
