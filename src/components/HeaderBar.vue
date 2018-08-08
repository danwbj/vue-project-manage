<template>
    <div>
        <Header :style="{padding: 0}" class="layout-header-bar">
            <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
            <div class="menu-right">
              
            </div>
        </Header>
    </div>
</template>




<script>
import { Header, Icon } from 'iView'
// import SiderBar from '@/components/SiderBar'
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      // isCollapsed: false
    }
  },
  components: {
    // Layout,
    Header,
    Icon
    // Content
    // Sider,
    // Menu,
    // MenuItem,
    // SiderBar
  },
  computed: {
    ...mapState({
      isCollapsed: state => state.isCollapsed
    }),
    rotateIcon() {
      return ['menu-icon', this.isCollapsed ? 'rotate-icon' : '']
    }
    // menuitemClasses() {
    //   return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
    // }
  },
  methods: {
    ...mapActions([
      //   'changemsg', // 将 `this.changemsg()` 映射为 `this.$store.dispatch('changemsg')`
      // `mapActions` 也支持载荷：
      'SET_MENU_SLIDE' // 将 `this.changemsg(amount)` 映射为 `this.$store.dispatch('changemsg', text)`
    ]),
    collapsedSider() {
      this.SET_MENU_SLIDE(!this.isCollapsed)
      // this.$refs.side1.toggleCollapse()
    }
  }
}
</script>

<style scoped>
/* .layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
} */
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
/* .layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
} */
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
/* .menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
} */
/* .menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
} */
/* .collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
} */
/* .collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
} */
</style>
