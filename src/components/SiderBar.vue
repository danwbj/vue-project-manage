<template>
    <!-- <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed"> -->
      <Menu ref="menu" :active-name="active_name" :open-names='open_name' theme="dark" width="auto" @on-select="goPage" :class="menuitemClasses" accordion>
         <Submenu name="project">
            <template slot="title">
              <Icon type="md-code-working" />
                项目
            </template>
            <MenuItem name="project-analyze">分析页</MenuItem>
            <MenuItem name="project-workbench">工作台</MenuItem>
            <MenuItem name="project-my">我的项目</MenuItem>
            <MenuItem name="project-overview">任务一览</MenuItem>
            <MenuItem name="project-all">所有项目</MenuItem>
            <MenuItem name="project-type">项目类型</MenuItem>
        </Submenu>
        <Submenu name="team">
            <template slot="title">
                <Icon type="md-people" />
                团队
            </template>
            <MenuItem name="team-list">团队列表</MenuItem>
        </Submenu>
        <Submenu name="job">
            <template slot="title">
                <Icon type="md-ribbon" />
                职位
            </template>
            <MenuItem name="job-list">职位列表</MenuItem>
        </Submenu>
        <Submenu name="position">
            <template slot="title">
                <Icon type="ios-color-wand" />
                职称
            </template>
            <MenuItem name="position-rank">等级列表</MenuItem>
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
      active_name: '',
      open_name: []
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
      return ['menu-icon', this.isCollapsed ? 'rotate-icon' : '']
    },

    menuitemClasses() {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
    }
  },
  mounted() {
    let path = this.$route.path
    this.active_name = path.split('/')[1]
    this.open_name.push(path.split('/')[1].split('-')[0])
    this.$nextTick(() => {
      this.$refs.menu.updateOpened(this.open_name)
    })
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse()
    },
    goPage(name) {
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
