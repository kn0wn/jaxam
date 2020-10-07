<template>
  <Flipper :flip-key="focused">
    <section class="masonry">
      <Flipped v-for="item in getFilteredItems" :key="item.id" :flip-id="item.id" translate scale>
        <ItemBlock v-show="item.id !== focused" @click.native="setFocused(item.id)" :item="item" />
      </Flipped>
    </section>
    <Flipped :flip-id="focused" v-if="focused !== null">
      <ItemDetails @click.native="setFocused(focused)" :item="focused" />
    </Flipped>
    <div
      v-if="focused !== null"
      @click="setFocused(focused)"
      class="z-10 cursor-pointer h-screen w-screen top-0 left-0 fixed bg-green bg-opacity-25"
    />
  </Flipper>
</template>

<script>
import { createClient } from 'contentful'
import { mapGetters, mapMutations } from 'vuex'
import { Flipper, Flipped } from 'vue-flip-toolkit'

export default {
  components: {
    Flipper,
    Flipped
  },
  data: () => ({
    focused: null
  }),
  computed: {
    ...mapGetters({ getItems: 'getItems', getFilteredItems: 'getFilteredItems' })
  },
  methods: {
    setFocused(index) {
      console.log(index)
      if (index === this.focused) {
        this.focused = null
      } else {
        this.focused = index
      }
    },
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
  @apply relative cursor-pointer;
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
