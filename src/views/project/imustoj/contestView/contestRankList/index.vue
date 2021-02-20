<template>
  <div class="contestRankList">
    <el-row style="width: 100%; height: 32px">
      <vab-query-form>
        <el-col :span="14" style="margin-top: 6px">
          <span
            style="
              display: inline-block;
              width: 20px;
              height: 20px;
              background-color: #b6dfb0;
              vertical-align: middle;
              border-radius: 2px;
            "
          ></span>
          正确解答
          <span
            style="
              display: inline-block;
              width: 20px;
              height: 20px;
              margin-left: 10px;
              background-color: #ddecf6;
              vertical-align: middle;
              border-radius: 2px;
            "
          ></span>
          最快解答
          <span
            style="
              display: inline-block;
              width: 20px;
              height: 20px;
              margin-left: 10px;
              background-color: #efdfde;
              vertical-align: middle;
              border-radius: 2px;
            "
          ></span>
          尝试解答
          <el-tag type="success" effect="plain" style="margin-left: 15px">
            尚未封榜
          </el-tag>
          <el-tag type="info" effect="plain" style="margin-left: -1px">
            2021-01-01 00:00:00
          </el-tag>
        </el-col>
        <el-col :span="10">
          <el-form
            ref="form"
            :model="queryForm"
            :inline="true"
            @submit.native.prevent
            style="float: right; margin-right: -8px"
          >
            <el-form-item label="自动刷新设置：" prop="freshTime">
              <el-select v-model="queryForm.freshTime" style="width: 100px">
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
                icon="el-icon-document-checked"
                type="primary"
                @click="saveFreshTime"
              >
                保 存
              </el-button>
            </el-form-item>
          </el-form>
          <span
            display="inline-block"
            style="float: right; color: red; margin: 8px 15px 0px 0px"
          >
            {{ jumpTime }}{{ unit }}
          </span>
        </el-col>
      </vab-query-form>
    </el-row>

    <el-table
      v-loading="listLoading"
      ref="multipleTable"
      :data="showList"
      :cell-style="cellStyle"
    >
      <el-table-column
        align="center"
        show-overflow-tooltip
        prop="rank"
        label="排名"
        width="60px"
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
        width="200px"
      >
        <template slot-scope="scope">
          <a>
            <el-row style="margin-top: 6px; display: block">
              <el-col :span="5" style="text-align: right">
                <el-avatar
                  class="user-avatar"
                  :src="scope.row.avatar"
                ></el-avatar>
              </el-col>
              <el-col :span="19" style="text-align: left">
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
        label="姓名"
        prop="name"
        width="90px"
      ></el-table-column>
      <el-table-column
        :label="item.propName"
        :prop="item.prop"
        v-for="item in tableColumnList"
        :key="item.prop"
        :render-header="renderHeader"
        align="center"
        min-width="59px"
      >
        <template slot-scope="scope">
          <span
            v-if="
              scope.row[scope.column.property] != '' &&
              scope.row[scope.column.property] != null
            "
          >
            {{ scope.row[scope.column.property] }}
            <br />
          </span>
          <span
            v-if="
              scope.row[scope.column.property + 'Wrong'] != '' &&
              scope.row[scope.column.property + 'Wrong'] != null
            "
          >
            (-{{ scope.row[scope.column.property + 'Wrong'] }})
          </span>
        </template>
      </el-table-column>
    </el-table>
    <br />
  </div>
</template>

<script>
  import { getList, doDelete } from '@/api/table'
  import { getFreshTime, setFreshTime } from '@/utils/freshTime'

  export default {
    name: 'ContestRankList',
    components: {},
    data() {
      return {
        unit: '',
        jumpTime: '',
        rot: this.$route.path.split('/')[2],
        id: this.$route.params.id,
        listLoading: false,
        showList: [],
        // 这里为了简便我就没有调用后台接口获取数据，直接写的假数据  你要用的话可以调用后台接口获取tableColumnList，注意数据格式
        tableColumnList: [
          { prop: 'totalProblem', propName: '解决' },
          { prop: 'totalTime', propName: '用时' },
          { prop: 'a', propName: 'A' },
          { prop: 'b', propName: 'B' },
          { prop: 'c', propName: 'C' },
          { prop: 'd', propName: 'D' },
          { prop: 'e', propName: 'E' },
          { prop: 'f', propName: 'F' },
          { prop: 'g', propName: 'G' },
          { prop: 'h', propName: 'H' },
          { prop: 'i', propName: 'I' },
          { prop: 'j', propName: 'J' },
          { prop: 'k', propName: 'K' },
          { prop: 'l', propName: 'L' },
        ],
        // 这里为了简便我就没有调用后台接口获取数据，直接写的假数据
        dataList: [
          {
            user_id: 1,
            username: '1767159112176715',
            avatar: 'https://imustacm.cn/front/images/head/194.gif',
            name: '刘洋',
            totalProblem: 5,
            totalTime: '69',
            a: '3',
            aWrong: '1',
            aFast: true,
            b: '',
            bWrong: '',
            bFast: false,
            c: '',
            cWrong: '8',
            cFast: false,
            d: '42',
            dWrong: '',
            dFast: false,
            e: '24',
            eWrong: '2',
            eFast: false,
            f: '69',
            fWrong: '',
            fFast: false,
            h: '112',
            hWrong: '1',
            hFast: true,
          },
          {
            user_id: 2,
            username: '1667159222',
            avatar: 'https://imustacm.cn/front/images/head/179.gif',
            name: '姜威',
            totalProblem: 4,
            totalTime: '112',
            a: '6',
            aWrong: '1',
            aFast: false,
            b: '',
            bWrong: '',
            bFast: false,
            c: '',
            cWrong: '2',
            cFast: false,
            e: '11',
            eWrong: '5',
            eFast: true,
            f: '44',
            fWrong: '',
            fFast: true,
            j: '61',
            jWrong: '',
            jFast: true,
          },
          {
            user_id: 3,
            username: 'admin',
            avatar: 'https://imustacm.cn/front/images/head/182.jpg',
            name: '王剑波王剑波王剑波王',
            totalProblem: 4,
            totalTime: '154',
            a: '',
            aWrong: '1',
            aFast: false,
            b: '20192',
            bWrong: '12',
            bFast: true,
            c: '',
            cWrong: '',
            cFast: false,
            d: '40',
            dWrong: '',
            dFast: true,
            e: '',
            eWrong: '2',
            eFast: false,
            f: '211',
            fWrong: '7',
            fFast: false,
            h: '183',
            hWrong: '7',
            hFast: false,
          },
        ],
        listLoading: true,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 3,
        background: true,
        selectRows: '',
        elementLoadingText: '正在加载',
        queryForm: {
          freshTime: 0,
          options: [
            {
              value: 0,
              label: '关闭',
            },
            {
              value: 15,
              label: '15秒',
            },
            {
              value: 30,
              label: '30秒',
            },
            {
              value: 60,
              label: '60秒',
            },
            {
              value: 120,
              label: '120秒',
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
      this.queryFn()
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    mounted() {
      let _this = this
      setTimeout(function () {
        var freshTime = getFreshTime()
        if (freshTime == null || freshTime == '' || freshTime == undefined) {
          setFreshTime(0)
        }
        _this.queryForm.freshTime = parseInt(freshTime)
        _this.listLoading = false
      }, 1)
      this.timeChange()
    },
    methods: {
      renderHeader(h, { column, $index }) {
        if (
          column.property != 'totalProblem' &&
          column.property != 'totalScore' &&
          column.property != 'totalTime'
        ) {
          return h('div', {}, [
            h(
              'a',
              {
                on: {
                  click: () => {
                    this.handleJump(column.label)
                  },
                },
              },
              [h('span', column.label)]
            ),
          ])
        } else {
          return h('div', {}, [h('span', {}, [h('span', column.label)])])
        }
      },
      handleJump(property) {
        this.$router.push({
          path:
            '/imustoj/' +
            this.rot +
            '/info/problem/' +
            this.id +
            '/' +
            property,
        })
      },
      cellStyle(row, column, rowIndex, columnIndex) {
        if (
          row.row[row.column.property] != '' &&
          row.row[row.column.property] != null &&
          row.row[row.column.property + 'Fast'] == false
        ) {
          return 'background: #B6DFB0'
        } else if (
          row.row[row.column.property] != '' &&
          row.row[row.column.property] != null &&
          row.row[row.column.property + 'Fast'] == true
        ) {
          return 'background: #DDECF6'
        } else if (
          (row.row[row.column.property] == '' ||
            row.row[row.column.property] == null) &&
          row.row[row.column.property + 'Wrong'] != '' &&
          row.row[row.column.property + 'Wrong'] != null
        ) {
          return 'background: #EFDFDE'
        }
      },
      queryFn() {
        // 调用后台接口获取tableColumnList和dataList的方法写在这里
        // getData().then(response =>{
        //   this.tableColumnList = response.data.tableColumnList
        //   this.dataList = response.data.dataList
        // })
        this.showList = this.dataList
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
      saveFreshTime() {
        if (
          this.queryForm.freshTime == 0 ||
          this.queryForm.freshTime == 15 ||
          this.queryForm.freshTime == 30 ||
          this.queryForm.freshTime == 60 ||
          this.queryForm.freshTime == 120
        ) {
          setFreshTime(this.queryForm.freshTime)
          clearInterval(this.timer)
          this.timeChange()
          this.$baseMessage('保存成功', 'success')
        } else {
          this.$baseMessage('保存失败：设置了不合法的刷新时间', 'error')
        }
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
      timeChange() {
        if (parseInt(getFreshTime()) != 0) {
          this.jumpTime = parseInt(getFreshTime())
          this.unit = ''
          this.timer = setInterval(() => {
            if (this.jumpTime) {
              this.jumpTime--
            } else {
              this.$baseEventBus.$emit('reload-routerview')
              clearInterval(this.timer)
            }
          }, 1000)
        } else {
          this.jumpTime = ''
          this.unit = ''
        }
      },
    },
  }
</script>
