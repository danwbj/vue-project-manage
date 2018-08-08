import MutationType from './mutations-type'
// import * as _ from 'lodash'

// for testing
// if (navigator.userAgent.indexOf('PhantomJS') > -1) {
//   window.localStorage.clear()
// }

export const mutations = {
  // hello
  [MutationType.SAY_HELLO](state, payload) {
    state.hello = payload
  },
  [MutationType.SET_MENU_SLIDE](state, status) {
    state.isCollapsed = status
  }
}
