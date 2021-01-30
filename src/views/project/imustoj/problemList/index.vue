<template>
  <div class="problemList">
    <el-row :gutter="20" justify="center">
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="17"
        :xl="17"
        class="left-pattern"
        style="padding: 20px 30px 25px 30px"
      >
        <el-row style="width: 100%; height: 32px">
          <vab-query-form>
            <el-col :span="24">
              <el-form
                ref="form"
                :model="queryForm"
                :inline="true"
                @submit.native.prevent
                style="float: right; margin-right: -8px"
              >
                <el-form-item>
                  <el-input v-model="queryForm.id" placeholder="题目编号" />
                </el-form-item>
                <el-form-item>
                  <el-input v-model="queryForm.title" placeholder="题目名称" />
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
        >
          <el-table-column
            align="center"
            show-overflow-tooltip
            prop="problem_ac"
            width="40px"
            label=""
          >
            <template #default="{ row }">
              <vab-icon
                color="green"
                v-if="row.status == 'true'"
                :icon="['fas', 'check']"
              ></vab-icon>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="id"
            width="80px"
            label="题目编号"
          ></el-table-column>
          <el-table-column
            align="center"
            show-overflow-tooltip
            prop="title"
            label="题目名称"
          >
            <template slot-scope="scope">
              <a
                style="cursor: pointer"
                @click="handleAppTemplateDetail(scope.row)"
              >
                {{ scope.row.title }}
              </a>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            show-overflow-tooltip
            label="难度"
            width="80px"
            prop="difficulty"
          >
            <template #default="{ row }">
              <el-tag :type="row.difficulty | statusFilter">
                {{ row.difficulty | difficultyFilter }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            show-overflow-tooltip
            label="提交数据"
            prop="solutions"
            width="300px"
          >
            <template #default="{ row }">
              <el-row>
                <el-col :span="6">
                  <a>{{ row.acceptedNumber }}</a>
                </el-col>
                <el-col :span="12">
                  <el-progress
                    :text-inside="true"
                    :stroke-width="20"
                    :percentage="parseFloat(row.acceptedPercent)"
                    status="success"
                    :stroke-length="20"
                    :width="80"
                  ></el-progress>
                </el-col>
                <el-col :span="6">
                  <a>{{ row.submitNumber }}</a>
                </el-col>
              </el-row>
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
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" class="right-pattern">
        <div class="problemTabDiv">
          <span class="problemTabTitle">题目标签</span>
          <br />
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签哈哈哈
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签哦哦哦哦
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签伊尔呀呼嘿
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签并查集
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签哈哈哈
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签哦
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签伊尔呀呼嘿
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签哈哈哈
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签哦
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签伊尔呀呼嘿
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签哈哈哈
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签哦
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签伊尔呀呼嘿
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签哈哈哈
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签哦
          </el-tag>
          <el-tag size="medium" effect="plain" style="margin: 5px 3px">
            题目标签伊尔呀呼嘿
          </el-tag>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { getList } from '@/api/problem'
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import Layout from '@/layouts'
  import EmptyLayout from '@/layouts/EmptyLayout'
  import { publicPath, routerMode } from '@/config'

  export default {
    name: 'ProblemList',
    components: {},
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
          id: '',
          title: '',
        },
      }
    },
    filters: {
      statusFilter(difficulty) {
        const statusMap = {
          1: 'success',
          2: 'warning',
          3: 'danger',
        }
        return statusMap[difficulty]
      },
      difficultyFilter(difficulty) {
        const statusMap = {
          1: '简单',
          2: '中等',
          3: '困难',
        }
        return statusMap[difficulty]
      },
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
      handleAppTemplateDetail(row) {
        this.$router.push({
          path: '/imustoj/problem/' + row.id,
        })
      },
      setSelectRows(val) {
        this.selectRows = val
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

<style lang="scss" scoped>
  .app-main-container {
    .app-main-height {
      min-height: calc(
        100vh - #{$base-nav-bar-height} - #{$base-tabs-bar-height} - #{$base-padding} -
          #{$base-padding} - 90px
      );
    }
  }

  .problemList {
    background: #f5f7f8 !important;
  }

  .left-pattern {
    padding: 20px;
    background: #ffffff !important;
    margin-right: 15px;
    margin-bottom: 20px;
  }

  .right-pattern {
    padding: 20px;
    background: #ffffff !important;
    margin-left: 15px;
    margin-bottom: 20px;
  }

  .problemTabTitle {
    display: block;
    font-size: 1.5em;
    font-weight: 450;
    padding: 0px 0px 5px 0px;
  }

  .problemTabDiv {
    padding: 5px 8px;
  }
</style>
