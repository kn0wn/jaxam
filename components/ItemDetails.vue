<template>
  <img :src="item.image" class="shadow sm:mr-6 item-details" alt="" />
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
  max-width: 90vw;

  @screen sm {
    max-width: 35vw;
  }
}
</style>
