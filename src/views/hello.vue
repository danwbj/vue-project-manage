<template>
  <div class="hello">
   {{hello}}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Hello',
  data () {
    return {
    }
  },
  components: {
  },
  // 实例创建完成请求接口数据
  created: function () {
    // this.getuserlist({})
    // this.getInfoConfig()
  },
  mounted: function () {
    this.sayhello({text: '你好'})
  },
  methods: {
    // changemsg: function (text) {
    //   this.$store.dispatch('changemsg', text)
    // },
    ...mapActions([
      //   'changemsg', // 将 `this.changemsg()` 映射为 `this.$store.dispatch('changemsg')`
      // `mapActions` 也支持载荷：
      'sayhello' // 将 `this.changemsg(amount)` 映射为 `this.$store.dispatch('changemsg', text)`
    ])
  },
  computed: {
    // 绑定当前页面需要的state中的数据
    ...mapState({
      hello: state => state.hello
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
