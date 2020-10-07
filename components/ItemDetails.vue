<template>
  <div class="fixed left-0 top-0 z-20">
    <img :src="getItem.image" style="max-height: 100vh; max-width: 50vw" alt="" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    item: {
      type: String,
      required: true
    }
  },
  computed: {
    getItem() {
      return this.getItems.find(({ id }) => id === this.item)
    },
    ...mapGetters({ getItems: 'getItems' })
  }
}
</script>

<style></style>
