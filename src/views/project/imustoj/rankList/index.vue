<template>
  <div class="rankList" style="margin: 20px 20px 0px 20px">
    <el-row style="width: 100%; height: 32px">
      <vab-query-form>
        <el-form
          ref="form"
          :model="queryForm"
          :inline="true"
          @submit.native.prevent
          style="float: right; margin-right: -8px"
        >
          <el-form-item>
            <el-input v-model="queryForm.username" placeholder="用户名" />
          </el-form-item>
          <el-form-item>
            <el-button
              icon="el-icon-search"
              type="primary"
              native-type="submit"
              @click="handleQuery"
            >
              查询
            </el-button>
          </el-form-item>
        </el-form>
      </vab-query-form>
    </el-row>

    <el-table
      v-loading="listLoading"
      :data="list"
      :element-loading-text="elementLoadingText"
      @selection-change="setSelectRows"
    >
      <el-table-column
        align="center"
        show-overflow-tooltip
        prop="rank"
        label="排名"
        width="70px"
      >
        <template #default="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
        align="left"
        prop="username"
        label="用户名"
        header-align="center"
        width="240px"
      >
        <template slot-scope="scope">
          <a>
            <el-row style="margin-top: 6px; display: block">
              <el-col :span="6" style="text-align: right">
                <el-avatar
                  class="user-avatar"
                  :src="scope.row.avatar"
                ></el-avatar>
              </el-col>
              <el-col :span="18" style="text-align: left">
                <span style="margin: 8px 0px 0px 10px; display: block">
                  {{ scope.row.username }}
                </span>
              </el-col>
            </el-row>
          </a>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="姓名"
        prop="name"
        width="160px"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="个性签名"
        prop="signature"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="正确"
        prop="accepted"
        width="70px"
      >
        <template #default="{ row }">
          <a>{{ row.accepted }}</a>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="提交"
        prop="submit"
        width="70px"
      >
        <template #default="{ row }">
          <a>{{ row.submit }}</a>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="正确率"
        prop="acceptedPercent"
        width="80px"
      >
        <template #default="{ row }">{{ row.acceptedPercent }}%</template>
      </el-table-column>
    </el-table>
    <el-pagination
      :background="background"
      :current-page="queryForm.pageNo"
      :page-size="queryForm.pageSize"
      :total="total"
      @current-change="handleCurrentChange"
    ></el-pagination>
    <br />
  </div>
</template>

<script>
  import { getList, doDelete } from '@/api/table'
  export default {
    name: 'rankList',
    components: {},
    data() {
      return {
        list: [
          {
            user_id: 1,
            username: '17671591121767',
            avatar: 'https://imustacm.cn/front/images/head/194.gif',
            name: '刘洋刘洋刘洋刘洋刘洋',
            signature:
              '刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋刘洋',
            accepted: 468,
            submit: 1951,
            acceptedPercent: 23.99,
          },
          {
            user_id: 2,
            username: '1667159222',
            avatar: 'https://imustacm.cn/front/images/head/179.gif',
            name: '姜威',
            signature: 'is后刹车洛杉矶擦拭你',
            accepted: 383,
            submit: 1267,
            acceptedPercent: 30.23,
          },
          {
            user_id: 3,
            username: 'admin',
            avatar: 'https://imustacm.cn/front/images/head/182.jpg',
            name: '王剑波',
            signature: '哈哈哈哈哈',
            accepted: 314,
            submit: 907,
            acceptedPercent: 34.62,
          },
        ],
        listLoading: true,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 3,
        background: true,
        selectRows: '',
        elementLoadingText: '正在加载',
        queryForm: {
          pageNo: 1,
          pageSize: 50,
          username: '',
        },
      }
    },
    computed: {
      height() {
        return this.$baseTableHeight()
      },
    },
    created() {},
    beforeDestroy() {},
    mounted() {
      setTimeout(() => {
        this.listLoading = false
      }, 1)
    },
    methods: {
      setSelectRows(val) {
        this.selectRows = val
      },
      handleAdd() {
        //this.$refs['edit'].showEdit()
      },
      handleEdit(row) {
        //this.$refs['edit'].showEdit(row)
      },
      handleDelete(row) {
        if (row.id) {
          this.$baseConfirm('你确定要删除当前项吗', null, async () => {
            const { msg } = await doDelete({ ids: row.id })
            this.$baseMessage(msg, 'success')
            this.fetchData()
          })
        } else {
          if (this.selectRows.length > 0) {
            const ids = this.selectRows.map((item) => item.id).join()
            this.$baseConfirm('你确定要删除选中项吗', null, async () => {
              const { msg } = await doDelete({ ids: ids })
              this.$baseMessage(msg, 'success')
              this.fetchData()
            })
          } else {
            this.$baseMessage('未选中任何行', 'error')
            return false
          }
        }
      },
      handleCurrentChange(val) {
        this.queryForm.pageNo = val
        this.fetchData()
      },
      handleQuery() {
        this.queryForm.pageNo = 1
        this.fetchData()
      },
      async fetchData() {
        this.listLoading = true
        const { data, totalCount } = await getList(this.queryForm)
        this.list = data
        this.total = totalCount
        setTimeout(() => {
          this.listLoading = false
        }, 1)
      },
    },
  }
</script>
