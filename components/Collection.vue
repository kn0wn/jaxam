<template>
  <section class="masonry">
    <ItemBlock v-for="item in getFilteredItems" :item="item" :key="item.id" />
  </section>
</template>

<script>
import { createClient } from 'contentful'
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({ getItems: 'getItems', getFilteredItems: 'getFilteredItems' })
  },
  methods: {
    ...mapMutations({ addItem: 'ADD_ITEM' })
  },
  mounted() {
    const client = createClient({
      space: 'wwsy076arlez',
      accessToken: this.$config.contentfulToken
    })

    client
      .getEntries()
      .then((response) => {
        response.items
          .map(({ fields, sys }) => {
            const { image, ...rest } = fields
            return {
              id: sys.id,
              updatedAt: sys.updatedAt,
              image: image.fields.file.url,
              ...rest
            }
          })
          .forEach((element) => this.addItem(element))
      })
      .catch((err) => console.error(err))
  }
}
</script>

<style lang="postcss">
.masonry {
  columns: 400px;
  column-gap: 1rem;
}

.masonry-item {
  @apply relative;
}

.masonry-item img {
  width: 380px;
  margin: 0 1rem 1rem 0;
  width: 100%;
}
.overlay {
  @apply absolute bg-green top-0 left-0 w-full h-full bg-opacity-0 hover:bg-opacity-50;
  @apply transition-all ease-in-out duration-300;
  @apply flex items-center justify-center;
}
.overlay:hover p {
  @apply opacity-100;
}
.overlay p {
  @apply opacity-0;
}
</style>
