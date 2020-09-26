<template>
  <div class="container mx-auto">
    <div v-if="loaded" class="masonry">
      <div v-for="(image, imageId) in items" :key="`image-${imageId}`" class="masonry-item">
        <img :src="image.file.url" alt="" />
        <div class="overlay">
          <p class="text-3xl text-white">{{ image.title }}</p>
        </div>
      </div>
    </div>
    <div class="" v-else>Loading</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'

export default defineComponent({
  setup() {
    const items = ref([])
    const loaded = computed(() => items.value.length > 0)

    onMounted(() => {
      const client = window.contentful.createClient({
        space: 'wwsy076arlez',
        accessToken: 'JCi6UjEfl8JoNUqRZI-IkyfC71CQdJu6ailCLOa4nQE'
      })

      client
        .getAssets()
        .then((response) => {
          response.items.map(({ fields }) => fields).forEach((element) => items.value.push(element))

          // setTimeout(() => {
          //   macy({
          //     container: '#display',
          //     columns: 3,
          //     breakAt: {
          //       940: 2,
          //       520: 1
          //     },
          //     cancelLegacy: true,
          //     waitForImages: true
          //   })
          // }, 200)
        })
        .catch((err) => console.error(err))
    })

    return {
      items,
      loaded
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
  @apply absolute bg-green top-0 left-0 w-full h-full bg-opacity-0 hover:bg-opacity-25;
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
