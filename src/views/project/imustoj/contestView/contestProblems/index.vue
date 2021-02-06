<template>
  <div class="contestProblems" style="margin: 20px">
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
            v-if="row.status == true"
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
          <a style="cursor: pointer" @click="handleToProblem(scope.row)">
            {{ scope.row.title }}
          </a>
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
              <a @click="handleStatus()">{{ row.acceptedNumber }}</a>
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
              <a @click="handleStatus()">{{ row.submitNumber }}</a>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'ContestProblems',
    components: {},
    data() {
      return {
        rot: this.$route.path.split('/')[2],
        list: [
          {
            status: true,
            id: 'A',
            title: 'Hello, World !',
            acceptedNumber: 42,
            submitNumber: 88,
            acceptedPercent: '49.22',
          },
          {
            status: false,
            id: 'B',
            title: '整数求和',
            acceptedNumber: 67,
            submitNumber: 180,
            acceptedPercent: '37.11',
          },
          {
            status: false,
            id: 'C',
            title: '陶陶摘苹果',
            acceptedNumber: 9,
            submitNumber: 10,
            acceptedPercent: '91.78',
          },
          {
            status: true,
            id: 'D',
            title: '这是一个 /* 悲伤的 */ 笑话',
            acceptedNumber: 5,
            submitNumber: 90,
            acceptedPercent: '4.91',
          },
          {
            status: false,
            id: 'E',
            title: '东方月初喜欢斐波那契',
            acceptedNumber: 29,
            submitNumber: 167,
            acceptedPercent: '17.37',
          },
        ],
        listLoading: true,
        background: true,
        elementLoadingText: '正在加载',
      }
    },
    created() {},
    mounted() {
      setTimeout(() => {
        this.listLoading = false
      }, 1)
    },
    methods: {
      handleToProblem(row) {
        this.$router.push({
          path: '/imustoj/' + this.rot + '/info/problem/1490/' + row.id,
        })
      },
      handleStatus() {
        this.$router.push({
          path: '/imustoj/' + this.rot + '/info/status/1490',
        })
      },
    },
  }
</script>
