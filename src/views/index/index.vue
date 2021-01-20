<template>
  <div style="margin: 10px">
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
    <h1>
      IMUSTACM测试20200120 测试用户账号：普通用户：string/string
      管理员：string1/string
    </h1>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    components: {},
    data() {
      return {
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
