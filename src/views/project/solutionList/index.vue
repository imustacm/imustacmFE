<template>
  <div class="table-container" style="margin: 0px">
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
              v-model="queryForm.service_name"
              placeholder="用户名"
              style="width: 130px"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="queryForm.interface_url"
              placeholder="题目编号"
              style="width: 130px"
            />
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="queryForm.visible"
              placeholder="评判结果"
              style="width: 110px"
              clearable
            >
              <el-option
                v-for="item in queryForm.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="queryForm.visible"
              placeholder="语言"
              style="width: 110px"
              clearable
            >
              <el-option
                v-for="item in queryForm.options"
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
    >
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="运行编号"
        width="95"
      >
        <template #default="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        prop="service_name"
        label="用户名"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="题目编号"
        prop="interface_url"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="评判结果 / 抄袭检测"
        prop="description"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="内存"
        prop="description"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="耗时"
        prop="description"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="语言"
        prop="description"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="语言"
        prop="description"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="代码长度"
        prop="description"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="提交时间"
        prop="description"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="判题机"
        prop="description"
      ></el-table-column>
    </el-table>
    <el-pagination
      :background="background"
      :current-page="queryForm.pageNo"
      :page-size="queryForm.pageSize"
      :total="total"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
  import { getList, doDelete } from '@/api/table'
  export default {
    name: 'ComprehensiveTable',
    components: {},
    filters: {
      visibleFilter(visible) {
        const visibleMap = {
          true: '启用',
          false: '关闭',
        }
        return visibleMap[visible]
      },
      statusFilter(status) {
        const statusMap = {
          true: 'success',
          false: 'danger',
        }
        return statusMap[status]
      },
    },
    data() {
      return {
        list: [],
        listLoading: true,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 0,
        background: true,
        selectRows: '',
        elementLoadingText: '正在加载',
        queryForm: {
          pageNo: 1,
          pageSize: 50,
          service_name: '',
          interface_url: '',
          description: '',
          options: [
            {
              value: 'true',
              label: '启用',
            },
            {
              value: 'false',
              label: '关闭',
            },
          ],
          visible: '',
        },
      }
    },
    computed: {
      height() {
        return this.$baseTableHeight()
      },
    },
    created() {
      this.fetchData()
    },
    beforeDestroy() {},
    mounted() {},
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
