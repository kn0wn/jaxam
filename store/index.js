export const state = () => ({
  items: [],
  filter: 'All',
  selected: null
})

export const mutations = {
  ADD_ITEM: (state, item) => {
    const foundItem = state.items.findIndex(({ id }) => id === item.id)
    if (foundItem === -1) {
      state.items.push(item)
    }
  },
  UPDATE_FILTER: (state, filter) => (state.filter = filter),
  SELECT_ITEM: (state, item) => (state.selected = state.selected === item ? null : item)
}

export const getters = {
  getItems: ({ items }) => items,
  getFilteredItems: ({ items, filter }) => items.filter(({ type }) => (filter === 'All' ? true : filter === type)),
  getCurrentFilter: ({ filter }) => filter,
  getSelectedItemId: ({ selected }) => selected,
  getSelectedItem: ({ selected, items }) => items.find(({ id }) => id === selected)
}

export const actions = {}
