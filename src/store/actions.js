import MutationType from './mutations-type'
// import { getuserlist, getInfoConfig } from '../api'

export default {
  sayhello({ commit }, params) {
    commit(MutationType.SAY_HELLO, params.text)
  },
  SET_MENU_SLIDE({ commit }, status) {
    commit(MutationType.SET_MENU_SLIDE, status)
  }
}
