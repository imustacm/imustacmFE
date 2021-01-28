<template>
  <div class="contestList" style="margin: 20px 20px 0px 20px">
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
            <el-input
              v-model="queryForm.contest_id"
              :placeholder="placeholder1"
              style="width: 130px"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="queryForm.contest_name"
              :placeholder="placeholder2"
              style="width: 160px"
            />
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="queryForm.type"
              :placeholder="placeholder3"
              style="width: 100px"
              clearable
            >
              <el-option
                v-for="item in queryForm.options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="queryForm.permission"
              :placeholder="placeholder4"
              style="width: 100px"
              clearable
            >
              <el-option
                v-for="item in queryForm.options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="queryForm.status"
              :placeholder="placeholder5"
              style="width: 100px"
              clearable
            >
              <el-option
                v-for="item in queryForm.options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
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
      :show-header="false"
    >
      <el-table-column
        align="center"
        show-overflow-tooltip
        prop="id"
        label="竞赛编号"
        width="70px"
      ></el-table-column>
      <el-table-column
        align="left"
        show-overflow-tooltip
        prop="title"
        label="竞赛信息"
        header-align="center"
      >
        <template slot-scope="scope">
          <p style="line-height: 12px">
            <a style="cursor: pointer" @click="handleContestDetail(scope.row)">
              <span style="font-size: 16px">{{ scope.row.title }}</span>
            </a>
          </p>
          <p style="line-height: 5px">
            <el-tag
              :type="scope.row.permission_type | permissionTagFilter"
              effect="plain"
            >
              {{ scope.row.permission_type | permissionFilter }}
            </el-tag>
            <el-tag type="info" effect="plain">
              {{ scope.row.start_time }} ~ {{ scope.row.end_time }}
            </el-tag>
            <el-tag type="warning" effect="plain">
              {{ scope.row.contest_flag }}
            </el-tag>
          </p>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="竞赛状态"
        prop="problem_id"
        width="130px"
      >
        <template slot-scope="scope">
          <el-tag
            effect="dark"
            :type="scope.row.status | statusTagFilter"
            size="medium"
          >
            {{ scope.row.status | statusFilter }}
          </el-tag>
        </template>
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
    name: 'ContestList',
    components: {},
    filters: {
      permissionTagFilter(btn) {
        const buttonMap = {
          0: 'success',
          1: 'danger',
          2: 'danger',
        }
        return buttonMap[btn]
      },
      permissionFilter(result) {
        const resultMap = {
          0: '公开',
          1: '私有',
          2: '私有',
        }
        return resultMap[result]
      },
      statusTagFilter(btn) {
        const buttonMap = {
          0: 'success',
          1: 'warning',
          2: 'danger',
        }
        return buttonMap[btn]
      },
      statusFilter(result) {
        const resultMap = {
          0: '进行中',
          1: '未开始',
          2: '已结束',
        }
        return resultMap[result]
      },
    },
    data() {
      return {
        placeholder1: '',
        placeholder2: '',
        placeholder3: '',
        placeholder4: '',
        placeholder5: '',
        list: [
          {
            id: 1490,
            title:
              '《C语言程序设计》- 数据&网络2019级 - 实验7（字符串与结构体）',
            contest_flag: 'SOLO',
            permission_type: 1,
            start_time: '2020-12-16 08:30:00',
            end_time: '2020-12-16 10:00:00',
            status: 0,
          },
          {
            id: 1213,
            title:
              '包头师范学院 & 内蒙古科技大学 - 2020年CCPC自治区赛训练赛 真题再现',
            contest_flag: 'ICPC',
            permission_type: 0,
            start_time: '2020-12-16 08:30:00',
            end_time: '2020-12-16 10:00:00',
            status: 0,
          },
          {
            id: 1029,
            title:
              '内蒙古科技大学 - 2018年第九届“蓝桥杯”大赛自治区赛队员选拔赛 真题再现',
            contest_flag: 'OI',
            permission_type: 0,
            start_time: '2020-12-16 08:30:00',
            end_time: '2020-12-16 10:00:00',
            status: 1,
          },
          {
            id: 1023,
            title:
              '内蒙古科技大学 - 2017年第六届团体程序设计天梯赛自治区赛队员选拔赛',
            contest_flag: 'IOI',
            permission_type: 1,
            start_time: '2020-12-16 08:30:00',
            end_time: '2020-12-16 10:00:00',
            status: 2,
          },
        ],
        listLoading: true,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 4,
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
      if (this.$route.path.split('/')[2] == 'practice') {
        this.placeholder1 = '练习编号'
        this.placeholder2 = '练习名称'
        this.placeholder3 = '练习类型'
        this.placeholder4 = '练习权限'
        this.placeholder5 = '练习状态'
      } else if (this.$route.path.split('/')[2] == 'contest') {
        this.placeholder1 = '竞赛编号'
        this.placeholder2 = '竞赛名称'
        this.placeholder3 = '竞赛类型'
        this.placeholder4 = '竞赛权限'
        this.placeholder5 = '竞赛状态'
      } else if (this.$route.path.split('/')[2] == 'experiment') {
        this.placeholder1 = '实验编号'
        this.placeholder2 = '实验名称'
        this.placeholder3 = '实验类型'
        this.placeholder4 = '实验权限'
        this.placeholder5 = '实验状态'
      }
    },
    beforeDestroy() {},
    mounted() {
      setTimeout(() => {
        this.listLoading = false
      }, 1)
    },
    methods: {
      handleSim(row) {
        this.$router.push({
          path: '/imustoj/sim',
          params: { appTemplateId: row.id, isAdd: false },
        })
      },
      handleContestDetail(row) {
        this.$router.push({
          path: '/imustoj/contest/index/' + row.id,
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
