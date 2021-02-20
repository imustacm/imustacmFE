<template>
  <div class="solutionList" style="margin: 20px">
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
              v-model="queryForm.username"
              placeholder="用户名"
              style="width: 130px"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="queryForm.problem_id"
              placeholder="题目编号"
              style="width: 130px"
            />
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="queryForm.result"
              placeholder="评判结果"
              style="width: 190px"
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
              v-model="queryForm.language"
              placeholder="语言"
              style="width: 95px"
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
    >
      <el-table-column
        align="center"
        prop="id"
        label="运行编号"
        width="95px"
      ></el-table-column>
      <el-table-column align="center" prop="username" label="用户名">
        <template slot-scope="scope">
          <a style="cursor: pointer" @click="">
            {{ scope.row.username }}
          </a>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="题目编号"
        prop="problem_id"
        width="95px"
      >
        <template slot-scope="scope">
          <a
            style="cursor: pointer"
            @click="handleAppTemplateDetail(scope.row)"
          >
            {{ scope.row.problem_id }}
          </a>
        </template>
      </el-table-column>
      <el-table-column align="center" label="评判结果 / 抄袭检测" prop="result">
        <template #default="{ row }">
          <a style="cursor: pointer; color: #FFFFF" @click="handleDetail(row)">
            <el-tag :type="row.result | buttonFilter" effect="dark">
              {{ row.result | resultFilter }}
            </el-tag>
          </a>
          <a
            style="cursor: pointer; color: #FFFFF; margin-left: 6px"
            @click="handleSim(row)"
            v-if="row.simPercent > 0"
          >
            <el-tag type="danger" effect="dark">{{ row.simPercent }}%</el-tag>
          </a>
        </template>
      </el-table-column>
      <el-table-column align="center" label="内存" prop="memory" width="80px">
        <template #default="{ row }">{{ row.memory }}KB</template>
      </el-table-column>
      <el-table-column align="center" label="用时" prop="time" width="80px">
        <template #default="{ row }">{{ row.time }}ms</template>
      </el-table-column>
      <el-table-column align="center" label="语言" prop="language" width="80px">
        <template #default="{ row }">
          {{ row.language | languageFilter }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="代码长度"
        prop="code_length"
        width="95px"
      >
        <template #default="{ row }">{{ row.code_length }}B</template>
      </el-table-column>
      <el-table-column
        align="center"
        label="提交时间"
        prop="submit_time"
        width="170px"
      ></el-table-column>
      <!-- <el-table-column
        align="center"
        show-overflow-tooltip
        label="判题机"
        prop="judger"
      ></el-table-column> -->
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
  import CodeSource from '@/views/project/imustoj/codeSource/index'
  import CodeCompare from '@/views/project/imustoj/codeCompare/index'

  export default {
    name: 'solutionList',
    components: {
      CodeSource,
      CodeCompare,
    },
    filters: {
      buttonFilter(btn) {
        const buttonMap = {
          0: 'success',
          6: 'danger',
          1: 'warning',
          2: 'warning',
          3: 'warning',
          4: 'warning',
          5: 'warning',
        }
        return buttonMap[btn]
      },
      resultFilter(result) {
        const resultMap = {
          0: 'Accepted',
          6: 'Wrong Answer',
          1: 'warning',
          2: 'warning',
          3: 'warning',
          4: 'warning',
          5: 'warning',
        }
        return resultMap[result]
      },
      languageFilter(language) {
        const languageMap = {
          c: 'C',
          cpp: 'C++',
          java: 'Java',
          py3: 'Python3',
        }
        return languageMap[language]
      },
    },
    data() {
      return {
        list: [
          {
            id: 3,
            user_id: 1,
            username: '1767111117',
            problem_id: 2,
            contest_id: 0,
            result: 0,
            simPercent: 100,
            simSolution: 2,
            memory: 2,
            time: 12,
            language: 'cpp',
            code_length: 322,
            submit_time: '2021-01-26 11:52:21',
            judger: 1,
          },
          {
            id: 2,
            user_id: 2,
            username: 'imustacm',
            problem_id: 2,
            contest_id: 0,
            result: 0,
            simPercent: 0,
            simSolution: 0,
            memory: 2,
            time: 12,
            language: 'cpp',
            code_length: 322,
            submit_time: '2021-01-25 23:17:08',
            judger: 1,
          },
          {
            id: 1,
            user_id: 1,
            username: 'imustacm',
            problem_id: 1,
            contest_id: 0,
            result: 6,
            simPercent: 0,
            simSolution: 0,
            memory: 1,
            time: 1,
            language: 'cpp',
            code_length: 87,
            submit_time: '2021-01-25 19:26:44',
            judger: 1,
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
