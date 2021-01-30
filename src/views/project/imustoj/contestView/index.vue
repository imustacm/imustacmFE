<template>
  <div class="contestView">
    <el-row style="margin: 20px 20px -6px 20px">
      <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
        <h3 style="margin-top: -5px">
          {{ id }}.《C语言程序设计》- 数据&网络2019级 - 实验7（字符串与结构体）
        </h3>
        <p style="margin-top: -5px">
          <el-tag type="success" effect="dark">进行中</el-tag>
          <el-tag type="danger" effect="plain">私有</el-tag>
          <el-tag type="info" effect="plain">
            2021-01-23 09:08:07 ~ 2021-02-01 00:00:00
          </el-tag>
          <el-tag type="warning" effect="plain">ICPC</el-tag>
        </p>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <div style="margin-top: 5px">
          <el-button
            type="primary"
            :plain="plain1"
            class="btn"
            style="float: right"
            @click="handleData()"
          >
            统计
          </el-button>
          <el-button
            type="primary"
            :plain="plain2"
            class="btn"
            style="float: right; margin-right: 10px"
            @click="handleRankList()"
          >
            榜单
          </el-button>
          <el-button
            type="primary"
            :plain="plain3"
            class="btn"
            style="float: right"
            @click="handleStatus()"
          >
            状态
          </el-button>
          <el-button
            type="primary"
            :plain="plain4"
            class="btn"
            style="float: right"
            @click="handleProblems()"
          >
            题目
          </el-button>
          <el-button
            type="primary"
            :plain="plain5"
            class="btn"
            style="float: right"
            @click="handleIndex()"
          >
            首页
          </el-button>
        </div>
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
        rot: this.$route.path.split('/')[2],
        id: this.$route.params.id,
        plain1: true,
        plain2: true,
        plain3: true,
        plain4: true,
        plain5: true,
      }
    },
    created() {
      if (this.$route.path.split('/')[4] == 'index') {
        this.plain5 = false
      } else if (this.$route.path.split('/')[4] == 'problems') {
        this.plain4 = false
      } else if (this.$route.path.split('/')[4] == 'status') {
        this.plain3 = false
      } else if (this.$route.path.split('/')[4] == 'rankList') {
        this.plain2 = false
      } else if (this.$route.path.split('/')[4] == 'data') {
        this.plain1 = false
      }
    },
    mounted() {},
    methods: {
      handleIndex() {
        this.$router.push({
          path: '/imustoj/' + this.rot + '/info/index/' + this.id,
        })
      },
      handleProblems() {
        this.$router.push({
          path: '/imustoj/' + this.rot + '/info/problems/' + this.id,
        })
      },
      handleStatus() {
        this.$router.push({
          path: '/imustoj/' + this.rot + '/info/status/' + this.id,
        })
      },
      handleRankList() {
        this.$router.push({
          path: '/imustoj/' + this.rot + '/info/rankList/' + this.id,
        })
      },
      handleData() {
        this.$router.push({
          path: '/imustoj/' + this.rot + '/info/data/' + this.id,
        })
      },
    },
  }
</script>
