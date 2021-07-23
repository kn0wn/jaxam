<template>
  <div class="py-6">
    <h4 class="font-display text-3xl">More of me</h4>
    <ul>
      <a
        v-for="link in links"
        :key="link.text"
        :href="link.location"
        target="_blank"
        class="
          py-4
          text-2xl
          border-b
          font-display
          flex
          items-center
          justify-between
          group
        "
      >
        <p class="group-hover:translate-x-4 transition">{{ link.text }}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--ph"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
        >
          <path
            d="M204 64v104a12 12 0 0 1-24 0V92.97L72.485 200.486a12 12 0 0 1-16.97-16.97L163.029 76H88a12 12 0 0 1 0-24h104a12 12 0 0 1 12 12z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        text: 'Instagram',
        location: '//instagram.com/jxm._.design',
      },
      {
        text: 'Etsy',
        location: 'http://madebyjadex.etsy.com/',
      },
      {
        text: 'Spoonflower',
        location:
          'https://www.spoonflower.com/profiles/jxm___design?sub_action=designs',
      },
    ],
  }),
}
</script>

<style></style>
