<template>
  <div class="job">
      <wrapper-content pageTitle="职位列表">
          <Table :columns="columns1" :data="data1"></Table>
          <Page :total="100" show-total class="table-page"/>
      </wrapper-content>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import WrapperContent from '@/components/wrapper-content.vue'
export default {
  name: 'Job',
  data() {
    return {
      columns1: [
        {
          title: '职位名称',
          key: 'name'
        },
        {
          title: '英文名称',
          key: 'e_name'
        },
        {
          title: '排序',
          key: 'order',
          sortable: true
        },
        {
          title: '操作',
          key: 'action',
          //   width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                },
                'View'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                },
                'Delete'
              )
            ])
          }
        }
      ],
      data1: [
        {
          name: '总经理',
          e_name: 'GM',
          order: 1
        },
        {
          name: '技术总监',
          e_name: 'CTO',
          order: 2
        },
        {
          name: '技术总监',
          e_name: 'CTO',
          order: 3
        },
        {
          name: '技术总监',
          e_name: 'CTO',
          order: 4
        },
        {
          name: '技术总监',
          e_name: 'CTO',
          order: 5
        },
        {
          name: '技术总监',
          e_name: 'CTO',
          order: 6
        },
        {
          name: '技术总监',
          e_name: 'CTO',
          order: 7
        },
        {
          name: '技术总监',
          e_name: 'CTO',
          order: 8
        }
      ]
    }
  },
  components: {
    WrapperContent
  },
  // 实例创建完成请求接口数据
  created: function() {},
  mounted: function() {
    this.sayhello({ text: '你好' })
  },
  methods: {
    ...mapActions([
      'sayhello' // 将 `this.changemsg(amount)` 映射为 `this.$store.dispatch('changemsg', text)`
    ]),
    show(index) {
      //   this.$Modal.info({
      //     title: 'User Info',
      //     content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${
      //       this.data6[index].address
      //     }`
      //   })
    },
    remove(index) {
      //   this.data6.splice(index, 1)
    }
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
