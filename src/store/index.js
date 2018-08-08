import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import actions from './actions'
// import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    hello: 'hello',
    isCollapsed: false // 是否显示侧边的导航栏
  },
  actions,
  mutations,
  strict: true
  //   plugins
})
