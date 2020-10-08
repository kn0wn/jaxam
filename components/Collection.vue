<template>
  <Flipper :flip-key="getSelectedItemId">
    <section class="masonry">
      <Flipped v-for="item in getFilteredItems" :key="item.id" :flip-id="item.id" translate scale>
        <ItemBlock v-show="item.id !== getSelectedItemId" @click.native="userSelected(item.id)" :item="item" />
      </Flipped>
    </section>

    <div
      v-if="getSelectedItemId !== null"
      @click="userSelected(getSelectedItemId)"
      class="fixed top-0 left-0 flex items-center w-screen h-screen bg-opacity-25 cursor-pointer bg-green"
    >
      <div class="flex flex-wrap-reverse items-center justify-center p-2 md:p-24 md:flex-no-wrap">
        <Flipped :flip-id="getSelectedItemId" @on-complete="displayDetails = true">
          <ItemDetails @click.native="userSelected(getSelectedItemId)" :item="getSelectedItem" />
        </Flipped>
        <transition name="fade">
          <div v-if="displayDetails" :key="displayDetails" class="p-4 bg-white shadow sm:p-8">
            <h2 class="text-2xl sm:text-4xl">{{ getSelectedItem.title }}</h2>
            <p v-html="getDescription" class="hidden sm:block" />
          </div>
        </transition>
      </div>
    </div>
  </Flipper>
</template>

<script>
import { createClient } from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { mapGetters, mapMutations } from 'vuex'
import { Flipper, Flipped } from 'vue-flip-toolkit'

export default {
  components: {
    Flipper,
    Flipped
  },
  data: () => ({
    displayDetails: false
  }),
  computed: {
    getDescription() {
      if (!this.getSelectedItem) return

      return documentToHtmlString(this.getSelectedItem.description)
    },
    ...mapGetters({
      getItems: 'getItems',
      getFilteredItems: 'getFilteredItems',
      getSelectedItemId: 'getSelectedItemId',
      getSelectedItem: 'getSelectedItem'
    })
  },
  methods: {
    userSelected(item) {
      this.selectItem(item)
      if (!this.getSelectedItemId) this.displayDetails = false
    },
    ...mapMutations({ addItem: 'ADD_ITEM', selectItem: 'SELECT_ITEM' })
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
.fade-enter-active,
.fade-leave-active {
  transition: all 300ms ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

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
