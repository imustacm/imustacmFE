<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogFormVisible"
    width="800px"
    @close="close"
  >
    <div class="table-container">
      <vab-query-form>
        <el-form
          ref="form"
          :model="queryForm"
          :inline="true"
          :height="height"
          @submit.native.prevent
          style="float: right; margin-right: -8px; padding-right: 0px"
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

      <el-table
        v-loading="listLoading"
        :data="list"
        :element-loading-text="elementLoadingText"
        @selection-change="setSelectRows"
        :height="height"
      >
        <el-table-column
          align="center"
          show-overflow-tooltip
          type="selection"
        ></el-table-column>
        <el-table-column align="center" show-overflow-tooltip label="序号">
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
      </el-table>
      <table-edit ref="edit"></table-edit>
      <inter-table ref="inter"></inter-table>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import { getList, doDelete } from '@/api/table'
  import { doEdit } from '@/api/table'

  export default {
    name: 'TableEdit',
    data() {
      return {
        list: [],
        listLoading: true,
        background: true,
        selectRows: '',
        elementLoadingText: '正在加载',
        queryForm: {
          service_name: '',
          interface_url: '',
          description: '',
          pageNo: 1,
          pageSize: 999999,
        },
        title: '',
        height: '240px',
        dialogFormVisible: false,
      }
    },
    computed: {},
    created() {
      this.fetchData()
    },
    methods: {
      showEdit(row) {
        this.title = '允许接口配置'
        this.form = Object.assign({}, row)
        this.dialogFormVisible = true
      },
      close() {
        this.$refs['form'].resetFields()
        this.form = this.$options.data().form
        this.dialogFormVisible = false
        this.$emit('fetch-data')
      },
      save() {
        this.$refs['form'].validate(async (valid) => {
          if (valid) {
            const { msg } = await doEdit(this.form)
            this.$baseMessage(msg, 'success')
            this.$refs['form'].resetFields()
            this.dialogFormVisible = false
            this.$emit('fetch-data')
            this.form = this.$options.data().form
          } else {
            return false
          }
        })
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
