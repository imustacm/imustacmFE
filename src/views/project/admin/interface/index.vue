<template>
  <div class="table-container" style="margin: 20px">
    <el-row style="width: 100%; height: 32px">
      <vab-query-form>
        <el-col :span="8">
          <el-button icon="el-icon-plus" type="primary" @click="handleAdd">
            新增
          </el-button>
          <el-button icon="el-icon-delete" type="danger" @click="handleDelete">
            删除
          </el-button>
        </el-col>
        <el-col :span="16">
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
                placeholder="服务名称"
                style="width: 130px"
              />
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="queryForm.interface_url"
                placeholder="接口地址"
                style="width: 130px"
              />
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="queryForm.description"
                placeholder="中文描述"
                style="width: 130px"
              />
            </el-form-item>
            <el-form-item>
              <el-select
                v-model="queryForm.visible"
                placeholder="启用状态"
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
        </el-col>
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
        type="selection"
        width="55"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="序号"
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
        label="服务名称"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="接口地址"
        prop="interface_url"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="中文描述"
        prop="description"
      ></el-table-column>
      <el-table-column show-overflow-tooltip label="启用状态" align="center">
        <template #default="{ row }">
          <el-tag :type="row.visible | statusFilter">
            {{ row.visible | visibleFilter }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        label="操作"
        align="center"
        width="180px"
      >
        <template #default="{ row }">
          <el-button type="text" @click="handleEdit(row)">编辑</el-button>
          <el-button type="text" @click="handleDelete(row)">删除</el-button>
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
    <table-edit ref="edit"></table-edit>
  </div>
</template>

<script>
  import { getList, doDelete } from '@/api/table'
  import TableEdit from './components/TableEdit'
  export default {
    name: 'ComprehensiveTable',
    components: {
      TableEdit,
    },
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
        this.$refs['edit'].showEdit()
      },
      handleEdit(row) {
        this.$refs['edit'].showEdit(row)
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
