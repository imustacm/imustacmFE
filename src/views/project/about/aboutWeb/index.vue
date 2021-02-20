<template>
  <div class="aboutWeb" style="margin: 20px">
    <p style="text-indent: 2em; margin-top: 30px">
      <svg
        t="1600184756598"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1176"
        width="12"
        height="12"
      >
        <path
          d="M62 512c0 248.528 201.472 450 450 450s450-201.472 450-450c0-248.528-201.472-450-450-450-248.528 0-450 201.472-450 450z"
          p-id="1177"
          fill="#d81e06"
        ></path>
      </svg>
      <b>&nbsp;关于IMUSTACM网站</b>
    </p>
    <p style="text-indent: 2em; line-height: 25px">
      IMUSTACM是内蒙古科技大学ACM程序设计协会官方网站，当前网站是IMUSTACM的第四代版本。
    </p>
    <p style="text-indent: 2em; line-height: 25px; margin-top: -10px">
      网站开发与部署主要使用的技术关键词请参考：Vue-Admin-Beautiful (Vue +
      ElementUI)、Spring Cloud、PostgreSQL、Docker、Git、Jwt、Redis、Nginx等。
    </p>
    <p style="text-indent: 2em; line-height: 25px; margin-top: -10px">
      感谢以下Github用户对网站设计与开发的大力支持，他们曾经都是IMUSTACM的骨干成员，再次衷心感谢：
    </p>
    <p style="text-align: center">
      <a href="https://github.com/anDongCoder" target="_blank">
        <el-avatar
          style="display: inline-block; vertical-align: middle"
          class="user-avatar"
          src="https://avatars.githubusercontent.com/u/26499065?s=96&v=4"
        ></el-avatar>
        <span style="margin: 0px 0px 0px 10px">Hunter_Li</span>
      </a>
      <a
        href="https://github.com/zhaoyaqiong"
        target="_blank"
        style="margin-left: 25px"
      >
        <el-avatar
          style="display: inline-block; vertical-align: middle"
          class="user-avatar"
          src="https://avatars.githubusercontent.com/u/30440181?s=96&v=4"
        ></el-avatar>
        <span style="margin: 0px 0px 0px 10px">Yaqiong</span>
      </a>
      <a
        href="https://github.com/ChocoliBao"
        target="_blank"
        style="margin-left: 25px"
      >
        <el-avatar
          style="display: inline-block; vertical-align: middle"
          class="user-avatar"
          src="https://avatars.githubusercontent.com/u/36360531?s=96&v=4"
        ></el-avatar>
        <span style="margin: 0px 0px 0px 10px">ChocoliBao</span>
      </a>
    </p>
    <p style="text-indent: 2em; line-height: 25px">
      如果您自愿付费赞助网站运营，防止极限条件下网站崩溃或者部分题目出现编译器非预期性超时，请使用微信扫描以下赞赏码，我们对您的支持表示由衷的感谢：
    </p>
    <p style="text-align: center">
      <el-image
        :src="zanshangUrl"
        style="width: 120px; height: 120px"
        fit="fill"
      ></el-image>
    </p>
    <br />
    <p style="text-indent: 2em">
      <svg
        t="1600184756598"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1176"
        width="12"
        height="12"
      >
        <path
          d="M62 512c0 248.528 201.472 450 450 450s450-201.472 450-450c0-248.528-201.472-450-450-450-248.528 0-450 201.472-450 450z"
          p-id="1177"
          fill="#d81e06"
        ></path>
      </svg>
      <b>&nbsp;IMUSTACM网站发展史</b>
    </p>
    <p style="text-indent: 2em; line-height: 25px">
      IMUSTACM网站上线于2016年09月15日，初期部署于学校内部服务器供校内用户访问使用。2017年06月12日，IMUSTACM正式部署于阿里云ECS服务器，至今IMUSTACM网站已历经三代前身版本（以下图片可点击查看大图）：
    </p>
    <p style="text-indent: 2em; line-height: 25px; margin-top: -10px">
      第一代版本（2016年09月-2017年09月）：
    </p>
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        :lg="8"
        :xl="8"
        style="text-align: center; margin: 5px 0px"
      >
        <el-image
          :preview-src-list="imageList"
          src="https://www.imustacm.cn/imustacm/imustacm1-1.jpeg"
          style="width: 90%; height: 200px"
          fit="cover"
        ></el-image>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        :lg="8"
        :xl="8"
        style="text-align: center; margin: 5px 0px"
      >
        <el-image
          :preview-src-list="imageList"
          src="https://www.imustacm.cn/imustacm/imustacm1-2.jpeg"
          style="width: 90%; height: 200px"
          fit="cover"
        ></el-image>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        :lg="8"
        :xl="8"
        style="text-align: center; margin: 5px 0px"
      >
        <el-image
          :preview-src-list="imageList"
          src="https://www.imustacm.cn/imustacm/imustacm1-3.jpeg"
          style="width: 90%; height: 200px"
          fit="cover"
        ></el-image>
      </el-col>
    </el-row>
    <p style="text-indent: 2em; line-height: 25px; margin-top: 10px">
      第二代版本（2017年09月-2018年09月）：
    </p>
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        :lg="8"
        :xl="8"
        style="text-align: center; margin: 5px 0px"
      >
        <el-image
          :preview-src-list="imageList"
          src="https://www.imustacm.cn/imustacm/imustacm2-1.jpeg"
          style="width: 90%; height: 200px"
          fit="cover"
        ></el-image>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        :lg="8"
        :xl="8"
        style="text-align: center; margin: 5px 0px"
      >
        <el-image
          :preview-src-list="imageList"
          src="https://www.imustacm.cn/imustacm/imustacm2-3.jpeg"
          style="width: 90%; height: 200px"
          fit="cover"
        ></el-image>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        :lg="8"
        :xl="8"
        style="text-align: center; margin: 5px 0px"
      >
        <el-image
          :preview-src-list="imageList"
          src="https://www.imustacm.cn/imustacm/imustacm2-2.jpeg"
          style="width: 90%; height: 200px"
          fit="cover"
        ></el-image>
      </el-col>
    </el-row>
    <p style="text-indent: 2em; line-height: 25px; margin-top: 10px">
      第三代版本（2018年09月-2021年04月）：
    </p>
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        :lg="8"
        :xl="8"
        style="text-align: center; margin: 5px 0px"
      >
        <el-image
          :preview-src-list="imageList"
          src="https://www.imustacm.cn/imustacm/imustacm3-1.png"
          style="width: 90%; height: 200px"
          fit="cover"
        ></el-image>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        :lg="8"
        :xl="8"
        style="text-align: center; margin: 5px 0px"
      >
        <el-image
          :preview-src-list="imageList"
          src="https://www.imustacm.cn/imustacm/imustacm3-2.png"
          style="width: 90%; height: 200px"
          fit="cover"
        ></el-image>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        :lg="8"
        :xl="8"
        style="text-align: center; margin: 5px 0px"
      >
        <el-image
          :preview-src-list="imageList"
          src="https://www.imustacm.cn/imustacm/imustacm3-3.png"
          style="width: 90%; height: 200px"
          fit="cover"
        ></el-image>
      </el-col>
    </el-row>
    <br />
  </div>
</template>

<script>
  import zanshang from '@/assets/images/zanshang.png'

  export default {
    name: 'AboutWeb',
    components: {},
    data() {
      return {
        zanshangUrl: zanshang,
        imageList: [
          'https://www.imustacm.cn/imustacm/imustacm1-1.jpeg',
          'https://www.imustacm.cn/imustacm/imustacm1-2.jpeg',
          'https://www.imustacm.cn/imustacm/imustacm1-3.jpeg',
          'https://www.imustacm.cn/imustacm/imustacm2-1.jpeg',
          'https://www.imustacm.cn/imustacm/imustacm2-3.jpeg',
          'https://www.imustacm.cn/imustacm/imustacm2-2.jpeg',
          'https://www.imustacm.cn/imustacm/imustacm3-1.png',
          'https://www.imustacm.cn/imustacm/imustacm3-2.png',
          'https://www.imustacm.cn/imustacm/imustacm3-3.png',
        ],
      }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>
