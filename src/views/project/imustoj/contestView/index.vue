<template>
  <div class="contestView">
    <el-row style="margin: 20px 20px 0px 20px">
      <el-col :xs="24" :sm="24" :md="24" :lg="13" :xl="13">
        <h3 style="margin-top: 8px">
          {{ id }}.《C语言程序设计》- 数据&网络2019级 - 实验7（字符串与结构体）
        </h3>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="11" :xl="11">
        <el-button type="primary" plain class="btn" style="float: right">
          数据统计
        </el-button>
        <el-button
          type="primary"
          plain
          class="btn"
          style="float: right; margin-right: 10px"
        >
          解题排名
        </el-button>
        <el-button type="primary" plain class="btn" style="float: right">
          评判状态
        </el-button>
        <el-button type="primary" plain class="btn" style="float: right">
          题目列表
        </el-button>
        <el-button type="primary" plain class="btn" style="float: right">
          竞赛首页
        </el-button>
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'ContestView',
    components: {},
    data() {
      return {
        id: this.$route.params.id,
      }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>
