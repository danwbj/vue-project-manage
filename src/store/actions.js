import MutationType from './mutations-type'
// import { getuserlist, getInfoConfig } from '../api'

export default {
  sayhello ({ commit }, params) {
    commit(MutationType.SAY_HELLO, params.text)
  }
}
