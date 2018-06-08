import { initStore } from 'react-waterfall'

const store = {
  initialState: {},
  actions: {}
}

export const { Provider, Consumer, actions, getState, connect, subscribe } = initStore(store)
