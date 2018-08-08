<template>
    <div>
        <Header :style="{padding: 0}" class="layout-header-bar">
         

            <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
              
            <div class="menu-right">
                         <AutoComplete
                            icon="ios-search"
                            placeholder="搜索项目"
                            style="width:300px;margin-right: 30px;">
                        </AutoComplete>
                        <Dropdown trigger="click" style="margin: 0 10px 0 0" placement="bottom-end"
                                  @on-click="accountControl">
                            <a href="javascript:void(0)">
                                <img style="width: 28px;height: 28px;margin-right: 10px;display: inline-block; vertical-align: middle;"
                                     class="avatar img-circle img-24"
                                     src="http://img.zcool.cn/community/013f3056e104a46ac72531cb9d88b3.png@900w_1l_2o_100sh.jpg">
                            </a>
                            <Dropdown-menu slot="list">
                                <Dropdown-item name="/account/info">账号设置</Dropdown-item>
                                <!--<Dropdown-item>偏好设置</Dropdown-item>-->
                                <Dropdown-item name="logout" divided>退出登录</Dropdown-item>
                            </Dropdown-menu>
                        </Dropdown>
                        <!-- <Button style="padding-bottom: 3px;" type="text" @click="showMyHandler"
                                :class="{'handler-active': my_handler_active}">
                            <Icon type="android-checkmark-circle" size="22"></Icon>
                        </Button>
                        <Poptip class="notice" placement="bottom-end" width="350">
                            <Button type="text">
                                <Badge :count="notify_no_read_count">
                                    <Icon type="android-notifications-none" size="22"></Icon>
                                </Badge>
                            </Button>
                            <div slot="content">
                                <Tabs>
                                    <TabPane :label="showNoticeText" name="notify">
                                        <div v-if="notify_no_read_list.length > 0">
                                            <div v-for="(item,index) in notify_no_read_list" class="vs-list-item">
                                                <div class="vs-list-item-meta">
                                                    <div class="vs-list-item-meta-avatar">
                                                        <img class="avatar img-circle hinted m-t-xs"
                                                             src="../assets/image/global/notice-icon/notice.png">

                                                    </div>
                                                    <div class="vs-list-item-meta-content">
                                                        <h4 class="vs-list-item-meta-title">
                                                            <div class="title"
                                                                 @click="$router.push('/personal/notice/list')">
                                                                {{ item.content }}
                                                                <div class="extra"></div>
                                                            </div>
                                                        </h4>
                                                        <div class="vs-list-item-meta-description">
                                                            <div>
                                                                <div class="description"></div>
                                                                <div class="datetime">{{ item.create_time }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a class="more muted" @click="clearNotice">清空通知 </a>
                                            <router-link to="/personal/notice/list" class="more muted"
                                                         v-if="notify_no_read_count > 0">查看更多
                                            </router-link>
                                        </div>
                                        <div v-else>
                                            <div class="notFound">
                                                <img src="../assets/image/global/notice-icon/no-notice.svg"
                                                     alt="not found">
                                                <div>你已查看所有通知</div>
                                            </div>
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </Poptip>
                        <Dropdown trigger="click" style="margin: 0 10px 0 0" placement="bottom-end"
                                  @on-click="accountControl">
                            <a href="javascript:void(0)">
                                <img style="width: 28px;height: 28px;margin-right: 10px;"
                                     class="avatar img-circle img-24"
                                     :src="user_info.avatar">
                            </a>
                            <Dropdown-menu slot="list">
                                <Dropdown-item name="/account/info">账号设置</Dropdown-item>
                                <Dropdown-item name="logout" divided>退出登录</Dropdown-item>
                            </Dropdown-menu>
                        </Dropdown> -->
                    </div>
                    
        </Header>
    </div>
</template>




<script>
import { Header, Icon, MenuItem, Button, AutoComplete } from 'iView'
// import SiderBar from '@/components/SiderBar'
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  components: {
    // Layout,
    Header,
    Icon,
    // Content
    // Sider,
    // Menu,
    MenuItem,
    Button,
    AutoComplete
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
    },
    accountControl() {}
  }
}
</script>

<style lang='less'>
.menu-right {
  float: right;
}
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
