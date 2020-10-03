<template>
  <div class="container mx-auto">
    {{ currentFilter }}
    <div v-if="loaded" class="masonry">
      <ImageBlock :item="item" v-for="(item, imageId) in items" :key="`image-${imageId}`" />
    </div>
    <div class="" v-else>Loading</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'
import { currentFilter } from '../store'

export default defineComponent({
  setup() {
    const items = ref([])
    const loaded = computed(() => items.value.length > 0)
    const accessToken = process.env.CONTENT_API

    onMounted(() => {
      const client = window.contentful.createClient({
        space: 'wwsy076arlez',
        accessToken
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
            .forEach((element) => items.value.push(element))

          console.log(items)
        })
        .catch((err) => console.error(err))
    })

    const filteredItems = computed(() =>
      items.value.filter((item) => {
        if (currentFilter.value === 'All') return true

        return item.type === currentFilter.value
      })
    )

    return {
      items: filteredItems,
      loaded,
      currentFilter
    }
  }
})
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
