<template>
    <!-- <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed"> -->
      <Menu active-name="1-2" theme="dark" width="auto" @on-select="goPage" :class="menuitemClasses" accordion>
         <Submenu name="1">
            <template slot="title">
                <Icon type="ios-paper" />
                项目
            </template>
            <MenuItem name="1-1">分析页</MenuItem>
            <MenuItem name="1-2">工作台</MenuItem>
            <MenuItem name="1-3">我的项目</MenuItem>
            <MenuItem name="1-4">任务一览</MenuItem>
            <MenuItem name="1-5">所有项目</MenuItem>
            <MenuItem name="1-6">项目类型</MenuItem>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-paper" />
                团队
            </template>
            <MenuItem name="2-1">团队列表</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-people" />
                职位
            </template>
            <MenuItem name="job">职位列表</MenuItem>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-stats" />
                职称
            </template>
            <MenuItem name="4-1">等级列表</MenuItem>
        </Submenu>
      </Menu>
  <!-- </Sider> -->
</template>




<script>
import { Layout, Header, Icon, Content, Sider, Menu, Submenu, MenuItem, MenuGroup } from 'iView'
import SiderBar from '@/components/SiderBar'
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      //   isCollapsed: false
    }
  },
  components: {
    Layout,
    Header,
    Icon,
    Content,
    Sider,
    Menu,
    MenuItem,
    SiderBar,
    Submenu,
    MenuGroup
  },
  computed: {
    ...mapState({
      isCollapsed: state => state.isCollapsed
    }),
    rotateIcon() {
      console.log('rotateIcon', this.isCollapsed)
      return ['menu-icon', this.isCollapsed ? 'rotate-icon' : '']
    },

    menuitemClasses() {
      console.log('menuitemClasses', this.isCollapsed)
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse()
    },
    goPage(name) {
      console.log(name)
      // 点击菜单进入对应路由
      let app = this
      this.$nextTick(() => {
        app.$router.push(name)
      })
    }
  }
}
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
