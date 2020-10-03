import { computed, ref } from 'vue'

export * from './local'

export const filter = ref('All')

export const currentFilter = computed({
  get() {
    return filter.value
  },
  set(value: any) {
    filter.value = value
  }
})
