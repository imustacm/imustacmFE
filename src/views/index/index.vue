<template>
  <div style="margin: 1px">
    <!-- <div class="block">
      <el-carousel height="600px">
        <el-carousel-item v-for="item in images" :key="item">
          <el-image
            :src="item"
            fit="fill"
            style="height: 100%; width: 100%"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div></div> -->
    <h1 style="text-align: center">
      全新IMUSTACM开发版本 部署时间：{{ updateTime }}
    </h1>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    components: {},
    data() {
      return {
        updateTime: process.env.VUE_APP_UPDATE_TIME,
        nodeEnv: process.env.NODE_ENV,
        images: [
          'https://www.imustacm.cn/imustacm/20180106.jpg',
          'https://www.imustacm.cn/imustacm/20200526.jpg',
        ],
      }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>
