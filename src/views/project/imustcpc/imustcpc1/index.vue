<template>
  <div class="imustcpc1" style="margin: 20px">
    <div :style="divStyle">
      <div class="divImgCpc">
        <h1
          style="
            color: #ffffff;
            text-align: center;
            position: relative;
            top: 50%;
            transform: translateY(-105%);
            display: inline-block;
          "
        >
          内蒙古科技大学第一届ACM大学生程序设计竞赛
        </h1>
      </div>
    </div>
    <h2 style="margin-top: 30px; text-align: center">精彩瞬间</h2>
    <el-carousel
      :interval="4000"
      type="card"
      :height="dataHeight"
      style="margin-top: 20px"
    >
      <el-carousel-item v-for="item in images" :key="item">
        <el-image :src="item" fit="fill" style="height: 390px"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Imustcpc1',
    components: {},
    props: {
      dataHeight: {
        type: String,
        default: '420px',
      },
    },
    data() {
      return {
        divStyle: {
          width: '100%',
          height: '80px',
          backgroundImage: 'url(' + require('./images/cpc1Back.jpg') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        },
        images: [
          'https://www.imustacm.cn/imustacm/jingcai/3.JPG',
          'https://www.imustacm.cn/imustacm/jingcai/9.JPG',
          'https://www.imustacm.cn/imustacm/jingcai/22.jpg',
          'https://www.imustacm.cn/imustacm/jingcai/27.JPG',
        ],
      }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>
<style lang="scss" scoped>
  .el-carousel__container {
    height: 390px !important;
  }
  .divImgCpc {
    width: 100%;
    height: 80px;
    background-color: rgba(0, 0, 0, 0.25);
    text-align: center;
  }
  @media \0screen\ {
    .divImgCpc {
      background-color: #000000;
      filter: Alpha(opacity=25);
      position: static;
      *zoom: 1;
    }
  }
</style>
