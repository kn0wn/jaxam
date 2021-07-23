<template>
  <div v-if="!$fetchState.pending" class="grid grid-cols-2 gap-12">
    <PortfolioItem
      v-for="item in items"
      :key="item.name"
      v-bind="item"
      class="odd:mt-16"
    />
  </div>
</template>

<script>
import Airtable from 'airtable'

export default {
  data: () => ({
    items: [],
    loaded: false,
  }),
  fetch() {
    const base = new Airtable({
      apiKey: 'key91PH3Qwu4G8BGS',
    }).base('appmR6asVhIQQJbHt')

    base('Main')
      .select({
        view: 'Grid view',
      })
      .firstPage((err, records) => {
        if (err) {
          console.error(err)
          return
        }
        records.forEach((record) => {
          this.items.push({
            name: record.fields.Name,
            type: record.fields.Type,
            items: record.fields.Attachments,
          })

          console.log('Retrieved', record)
        })

        this.loaded = true
      })
  },
}
</script>

<style></style>
