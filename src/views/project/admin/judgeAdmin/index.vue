<template>
  <div class="judgeAdmin" style="margin: 20px">
    <el-row style="width: 100%; height: 32px">
      <vab-query-form>
        <el-form
          ref="judgeForm"
          :model="judgeForm"
          :rules="rules"
          :inline="true"
          labelPosition="left"
          label-width="130px"
          @submit.native.prevent
        >
          <el-form-item label="用户提交间隔" prop="space">
            <el-input
              v-model.trim="judgeForm.space"
              autocomplete="off"
              style="width: 120px"
            >
              <template slot="append">秒</template>
            </el-input>
          </el-form-item>
          <el-form-item
            label="判题机标准版本"
            prop="judgeVersion"
            style="margin-left: 10px"
          >
            <el-input
              v-model.trim="judgeForm.judgeVersion"
              autocomplete="off"
              style="width: 120px"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="判题机回调接口"
            prop="judgeUrl"
            style="margin-left: 10px"
          >
            <el-input
              v-model.trim="judgeForm.judgeUrl"
              autocomplete="off"
              style="width: 390px"
            ></el-input>
          </el-form-item>
          <el-form-item style="float: right; margin-right: 0px">
            <el-button
              icon="el-icon-document-checked"
              type="primary"
              @click="save"
            >
              保存
            </el-button>
          </el-form-item>
          <el-form-item style="float: right; margin-right: 14px">
            <el-button icon="el-icon-refresh" @click="empty">清空</el-button>
          </el-form-item>
        </el-form>
      </vab-query-form>
    </el-row>
    <hr style="margin-top: 15px" />
    <el-row style="width: 100%; height: 32px; margin-top: 15px">
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
                v-model="queryForm.serviceName"
                placeholder="判题机版本"
              />
            </el-form-item>
            <el-form-item>
              <el-select
                v-model="queryForm.visible"
                placeholder="启用状态"
                style="width: 150px"
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
        prop="id"
        label="编号"
        width="95"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        prop="host"
        label="判题机地址"
      ></el-table-column>
      <el-table-column
        align="center"
        show-overflow-tooltip
        label="判题机版本"
        prop="judge_version"
      ></el-table-column>
      <el-table-column
        show-overflow-tooltip
        label="启用状态"
        align="center"
        prop="visible"
      >
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
      :current-page="queryForm.pageIndex"
      :page-size="queryForm.pageSize"
      :total="total"
      @current-change="handleCurrentChange"
    ></el-pagination>
    <table-edit ref="edit"></table-edit>
  </div>
</template>

<script>
  import { getList, doDelete } from '@/api/interface'
  import TableEdit from './components/TableEdit'
  import Event from '@/assets/js/inter.js'

  export default {
    name: 'judgeAdmin',
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
        list: [
          {
            id: 1,
            token: 'IMUSTACM_TOKEN',
            host: 'https://imustacm.cn:12358/',
            judge_version: 1,
            visible: true,
          },
        ],
        listLoading: true,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 1,
        background: true,
        selectRows: '',
        elementLoadingText: '正在加载',
        queryForm: {
          pageIndex: 1,
          pageSize: 50,
          serviceName: '',
          interfaceUrl: '',
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
        judgeForm: {
          space: '5',
          judgeVersion: '1',
          judgeUrl: 'https://imustacm.cn/api/problem/problem/getSubmissionInfo',
        },
        rules: {
          space: [
            { required: true, trigger: 'blur', message: '请输入用户提交间隔' },
          ],
          judgeVersion: [
            {
              required: true,
              trigger: 'blur',
              message: '请输入判题机标准版本',
            },
          ],
          judgeUrl: [
            {
              required: true,
              trigger: 'blur',
              message: '请输入判题机回调接口',
            },
          ],
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
      setTimeout(() => {
        this.listLoading = false
      }, 1)
    },
    beforeDestroy() {},
    mounted() {
      Event.$on('fetch-data', () => {
        this.fetchData()
      })
    },
    methods: {
      empty() {
        this.$baseConfirm(
          '您确定要执行该操作?',
          '提示',
          () => {
            this.judgeForm.space = ''
            this.judgeForm.judgeVersion = ''
            this.judgeForm.judgeUrl = ''
          },
          () => {}
        )
      },
      save() {
        this.$refs['judgeForm'].validate(async (valid) => {
          if (valid) {
            const { msg } = await doEdit(this.judgeForm)
            this.$baseMessage(msg, 'success')
          } else {
            return false
          }
        })
      },
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
        this.queryForm.pageIndex = val
        this.fetchData()
      },
      handleQuery() {
        this.queryForm.pageIndex = 1
        this.fetchData()
      },
      async fetchData() {
        this.listLoading = true
        const { data } = await getList(this.queryForm)
        this.list = data.records
        this.total = data.total
        setTimeout(() => {
          this.listLoading = false
        }, 1)
      },
    },
  }
</script>
