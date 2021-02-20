<template>
  <div class="groupUsers" style="margin: 20px">
    <el-row style="width: 100%; height: 32px">
      <vab-query-form>
        <el-col :span="16">
          <h3 style="margin-top: 10px; margin-bottom: 22px">
            计算机科学与技术2020-1班
          </h3>
        </el-col>
        <el-col :span="8">
          <el-button type="primary" style="float: right">
            <vab-icon :icon="['fas', 'plus-circle']"></vab-icon>
            申请加入
          </el-button>
        </el-col>
      </vab-query-form>
    </el-row>
    <el-table
      v-loading="listLoading"
      :data="list"
      :element-loading-text="elementLoadingText"
      @selection-change="setSelectRows"
    >
      <el-table-column align="center" prop="id" label="序号" width="80px">
        <template #default="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="groupRole"
        label="角色"
        width="160px"
      ></el-table-column>
      <el-table-column
        align="center"
        label="用户名"
        prop="userName"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <a style="cursor: pointer" @click="">
            {{ scope.row.userName }}
          </a>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="姓名"
        prop="name"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        align="center"
        label="加入时间"
        prop="joinTime"
        width="170px"
      ></el-table-column>
    </el-table>
    <el-pagination
      :background="background"
      :current-page="queryForm.pageNo"
      :page-size="queryForm.pageSize"
      :total="total"
      @current-change="handleCurrentChange"
    ></el-pagination>
    <br />
    <code-source ref="codeSource"></code-source>
    <code-compare ref="codeCompare"></code-compare>
  </div>
</template>

<script>
  import { getList, doDelete } from '@/api/table'

  export default {
    name: 'groupUsers',
    components: {},
    data() {
      return {
        list: [
          {
            user_id: 1,
            groupRole: '创建者 / 组长',
            userName: '1767111117',
            name: '王剑波',
            joinTime: '2021-02-04 15:00:00',
          },
          {
            user_id: 2,
            groupRole: '小组成员',
            userName: 'imustacm',
            name: '姜威',
            joinTime: '2021-02-04 15:00:00',
          },
          {
            user_id: 3,
            groupRole: '小组成员',
            userName: 'jillo',
            name: '不告诉你',
            joinTime: '2021-02-04 15:00:00',
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
          problem_id: '',
          options1: [
            {
              value: '1',
              label: 'Accepted',
            },
            {
              value: '2',
              label: 'Wrong Answer',
            },
            {
              value: '3',
              label: 'Time Limit Exceeded',
            },
            {
              value: '4',
              label: 'Memory Limit Exceeded',
            },
            {
              value: '5',
              label: 'Output Limit Exceeded',
            },
            {
              value: '6',
              label: 'Runtime Error',
            },
            {
              value: '7',
              label: 'Compile Error',
            },
          ],
          options2: [
            {
              value: 'c',
              label: 'C',
            },
            {
              value: 'cpp',
              label: 'C++',
            },
            {
              value: 'java',
              label: 'Java',
            },
            {
              value: 'python',
              label: 'Python3',
            },
          ],
          result: '',
          language: '',
        },
      }
    },
    computed: {
      height() {
        return this.$baseTableHeight()
      },
    },
    created() {
      //this.fetchData()
    },
    beforeDestroy() {},
    mounted() {
      setTimeout(() => {
        this.listLoading = false
      }, 1)
    },
    methods: {
      handleDetail(row) {
        this.$refs['codeSource'].showModule(row)
      },
      // handleDetail(row) {
      //   // this.$router.push({
      //   //   path: '/imustoj/codesource',
      //   //   params: { appTemplateId: row.id, isAdd: false },
      //   // })
      // },
      handleSim(row) {
        // this.$router.push({
        //   path: '/imustoj/sim',
        //   params: { appTemplateId: row.id, isAdd: false },
        // })
        this.$refs['codeCompare'].showModule(row)
      },
      handleAppTemplateDetail(row) {
        this.$router.push({
          path: '/imustoj/problem/' + row.id,
        })
      },
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
