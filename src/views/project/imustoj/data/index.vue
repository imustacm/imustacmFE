<template>
  <div class="data">
    <el-row style="width: 100%; height: 32px">
      <vab-query-form>
        <el-col :span="12">
          <h3 style="margin-top: 10px; margin-bottom: 22px">4.整数求和</h3>
        </el-col>
        <el-col :span="12">
          <el-button
            type="primary"
            style="float: right"
            @click="handleProblem(4)"
          >
            <vab-icon :icon="['fas', 'angle-left']"></vab-icon>
            返回题目
          </el-button>
        </el-col>
      </vab-query-form>
    </el-row>

    <el-table
      :fit="true"
      :data="dataTable"
      style="width: 100%; margin: 0 auto"
      border
    >
      <el-table-column
        prop="language"
        align="center"
        label="提交语言"
        show-overflow-tooltip
      >
        <el-table-column
          prop="c"
          align="center"
          label="C"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <a style="cursor: pointer" @click="handleStatus(scope.row)">
              {{ scope.row.c }}
            </a>
          </template>
        </el-table-column>
        <el-table-column
          prop="cpp"
          align="center"
          label="C++"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <a style="cursor: pointer" @click="handleStatus(scope.row)">
              {{ scope.row.cpp }}
            </a>
          </template>
        </el-table-column>
        <el-table-column
          prop="java"
          align="center"
          label="Java"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <a style="cursor: pointer" @click="handleStatus(scope.row)">
              {{ scope.row.java }}
            </a>
          </template>
        </el-table-column>
        <el-table-column
          prop="python3"
          align="center"
          label="Python3"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <a style="cursor: pointer" @click="handleStatus(scope.row)">
              {{ scope.row.python3 }}
            </a>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="total"
        align="center"
        label="总提交数"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <a style="cursor: pointer" @click="handleStatus(scope.row)">
            {{ scope.row.total }}
          </a>
        </template>
      </el-table-column>
      <el-table-column prop="result" align="center" label="评判结果">
        <el-table-column prop="ac" align="center" label="AC">
          <template slot-scope="scope">
            <a style="cursor: pointer" @click="handleStatus(scope.row)">
              {{ scope.row.ac }}
            </a>
          </template>
        </el-table-column>
        <el-table-column prop="wa" align="center" label="WA">
          <template slot-scope="scope">
            <a style="cursor: pointer" @click="handleStatus(scope.row)">
              {{ scope.row.wa }}
            </a>
          </template>
        </el-table-column>
        <el-table-column prop="tle" align="center" label="TLE">
          <template slot-scope="scope">
            <a style="cursor: pointer" @click="handleStatus(scope.row)">
              {{ scope.row.tle }}
            </a>
          </template>
        </el-table-column>
        <el-table-column prop="mle" align="center" label="MLE">
          <template slot-scope="scope">
            <a style="cursor: pointer" @click="handleStatus(scope.row)">
              {{ scope.row.mle }}
            </a>
          </template>
        </el-table-column>
        <el-table-column prop="re" align="center" label="RE">
          <template slot-scope="scope">
            <a style="cursor: pointer" @click="handleStatus(scope.row)">
              {{ scope.row.re }}
            </a>
          </template>
        </el-table-column>
        <el-table-column prop="ce" align="center" label="CE">
          <template slot-scope="scope">
            <a style="cursor: pointer" @click="handleStatus(scope.row)">
              {{ scope.row.ce }}
            </a>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <br />
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card shadow="never">
          <div slot="header">
            <span>提交语言统计</span>
          </div>
          <vab-chart :autoresize="true" :options="option1" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card shadow="never">
          <div slot="header">
            <span>评判结果统计</span>
          </div>
          <vab-chart :autoresize="true" :options="option2" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VabChart from '@/plugins/echarts'

  export default {
    name: 'Data',
    components: {
      VabChart,
    },
    data() {
      return {
        dataTable: [
          {
            problem_id: 4,
            c: 580,
            cpp: 1048,
            java: 735,
            python3: 484,
            total: 2888,
            ac: 10,
            wa: 52,
            tle: 20,
            mle: 33,
            re: 39,
            ce: 33,
          },
        ],
        option1: {
          tooltip: {
            trigger: 'item',
          },
          series: [
            {
              name: '提交语言',
              type: 'pie',
              radius: '80%',
              data: [
                { value: 1048, name: 'C++' },
                { value: 735, name: 'Java' },
                { value: 580, name: 'C' },
                { value: 484, name: 'Python3' },
              ],
            },
          ],
        },
        option2: {
          tooltip: {
            trigger: 'item',
          },
          grid: {
            top: '4%',
            left: '2%',
            right: '4%',
            bottom: '0%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              data: ['AC', 'WA', 'TLE', 'MLE', 'RE', 'CE'],
              axisTick: {
                alignWithLabel: true,
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
            },
          ],
          series: [
            {
              name: '评判结果',
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 20, 33, 39, 33],
            },
          ],
        },
      }
    },
    created() {},
    mounted() {},
    methods: {
      handleProblem(id) {
        this.$router.push({
          path: '/imustoj/problem/' + id,
        })
      },
      handleStatus(row) {
        this.$router.push({
          path: '/imustoj/status/',
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .data {
    padding: 0 !important;
    margin: 20px !important;

    ::v-deep {
      .el-card__body {
        .echarts {
          width: 100%;
          height: 300px;
        }
      }
    }
  }
</style>
