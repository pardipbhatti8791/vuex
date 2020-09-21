import EventService from '@/services/EventService'

export const namespaced = true

export const state = {
  events: []
}

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = [...state.events, ...events]
  }
}

export const actions = {
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  },
  getEvents({ commit, dispatch }) {
    EventService.getEvents()
      .then(response => {
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem to fetch events' + JSON.stringify(error)
        }
        dispatch('notifications/add', notification, { root: true })
      })
  }
}

export const getters = {
  // catLength: state => state.categories.length,
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
  // doneTodos: state => state.todos.filter(todo => todo.done),
  // activeTodos: (state, getters) => {
  //   return state.todos.length - getters.doneTodos.length
  // },
}
