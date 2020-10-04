export const state = () => ({
  items: [],
  filter: 'All'
})

export const mutations = {
  ADD_ITEM: (state, item) => state.items.push(item),
  UPDATE_FILTER: (state, filter) => (state.filter = filter)
}

export const getters = {
  getItems: ({ items }) => items,
  getFilteredItems: ({ items, filter }) => items.filter(({ type }) => (filter === 'All' ? true : filter === type)),
  getCurrentFilter: ({ filter }) => filter
}

export const actions = {}
