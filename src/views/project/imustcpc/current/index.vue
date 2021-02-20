<template>
  <div class="current" style="margin: 20px">
    <div :style="divStyle">
      <div class="divImg">
        <el-image
          :src="cpcUrl"
          style="
            margin-top: 50px;
            height: 215px;
            width: 85%;
            opacity: 1 !important;
          "
          fit="fill"
        ></el-image>
        <br />
        <el-button
          type="warning"
          size="medium"
          style="font-size: 15px; padding: 14px 50px; margin-top: 30px"
          round
          @click="all()"
        >
          报名暂未开始
        </el-button>
      </div>
    </div>
    <el-row>
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="24"
        :xl="24"
        style="margin-top: 20px; background-color: #f5f8f9"
      >
        <div
          class="applyTime btb"
          style="margin: 20px; background-color: #ffffff"
        >
          <div class="wrap">
            <h2>赛 事 流 程</h2>
            <div class="comProgress">
              <div class="progressBg clearfix">
                <div class="proBox">
                  <div class="pic">
                    <p><img :src="b1Url" alt="大赛启动" /></p>
                    <p>大赛启动</p>
                  </div>
                  <p class="date">时间未定</p>
                </div>
                <div class="proBox">
                  <div class="pic">
                    <p>
                      <img :src="b2Url" alt="线上报名" />
                    </p>
                    <p>线上报名</p>
                  </div>
                  <p class="date">时间未定</p>
                </div>
                <div class="proBox">
                  <div class="pic">
                    <p>
                      <img :src="b3Url" alt="报名信息审核" />
                    </p>
                    <p>报名信息审核</p>
                  </div>
                  <p class="date">时间未定</p>
                </div>
                <div class="proBox">
                  <div class="pic">
                    <p>
                      <img :src="b5Url" alt="线上热身赛" />
                    </p>
                    <p>线上热身赛</p>
                  </div>
                  <p class="date">时间未定</p>
                </div>
                <div class="proBox">
                  <div class="pic">
                    <p><img :src="cUrl" alt="开幕仪式" /></p>
                    <p>开幕仪式</p>
                  </div>
                  <p class="date">时间未定</p>
                </div>
                <div class="proBox">
                  <div class="pic">
                    <p><img :src="b4Url" alt="现场正式赛" /></p>
                    <p>现场正式赛</p>
                  </div>
                  <p class="date">时间未定</p>
                </div>
                <div class="proBox">
                  <div class="pic">
                    <p><img :src="b6Url" alt="颁奖典礼" /></p>
                    <p>颁奖典礼</p>
                  </div>
                  <p class="date">时间未定</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="16"
        :xl="16"
        style="margin-top: 20px"
      >
        <el-row>
          <el-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="12"
            :xl="12"
            :style="e1"
            class="aboutImg"
          >
            <div class="innerImg" @click="all()">
              <h2
                style="
                  margin: 0 auto;
                  position: relative;
                  top: 50%;
                  transform: translateY(-50%);
                  color: #ffffff;
                "
              >
                竞 赛 通 知
              </h2>
            </div>
          </el-col>
          <el-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="12"
            :xl="12"
            :style="e2"
            class="aboutImg"
          >
            <div class="innerImg" @click="dialogOpen(1)">
              <h2
                style="
                  margin: 0 auto;
                  position: relative;
                  top: 50%;
                  transform: translateY(-50%);
                  color: #ffffff;
                "
              >
                竞 赛 规 则
              </h2>
            </div>
          </el-col>
          <el-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="12"
            :xl="12"
            :style="e3"
            class="aboutImg"
          >
            <div class="innerImg" @click="dialogOpen(2)">
              <h2
                style="
                  margin: 0 auto;
                  position: relative;
                  top: 50%;
                  transform: translateY(-50%);
                  color: #ffffff;
                "
              >
                竞 赛 环 境
              </h2>
            </div>
          </el-col>
          <el-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="12"
            :xl="12"
            :style="e4"
            class="aboutImg"
          >
            <div class="innerImg" @click="dialogOpen(3)">
              <h2
                style="
                  margin: 0 auto;
                  position: relative;
                  top: 50%;
                  transform: translateY(-50%);
                  color: #ffffff;
                "
              >
                奖 项 设 置
              </h2>
            </div>
          </el-col>
          <el-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="12"
            :xl="12"
            :style="e5"
            class="aboutImg"
          >
            <div class="innerImg" @click="all()">
              <h2
                style="
                  margin: 0 auto;
                  position: relative;
                  top: 50%;
                  transform: translateY(-50%);
                  color: #ffffff;
                "
              >
                竞 赛 日 程
              </h2>
            </div>
          </el-col>
          <el-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="12"
            :xl="12"
            :style="e6"
            class="aboutImg"
          >
            <div class="innerImg" @click="dialogOpen(5)">
              <h2
                style="
                  margin: 0 auto;
                  position: relative;
                  top: 50%;
                  transform: translateY(-50%);
                  color: #ffffff;
                "
              >
                队 伍 名 单
              </h2>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="8"
        :xl="8"
        style="background-color: #f5f8f9; margin: 20px 0px"
        id="aboutCpc"
      >
        <div
          style="margin: 20px; padding: 10px 15px; background-color: #ffffff"
        >
          <h2 style="text-align: center">赛 事 简 介</h2>
          <p style="text-indent: 2em; line-height: 25px">
            为深入学习贯彻习近平新时代中国特色社会主义思想以及习总书记在全国教育大会上的重要讲话精神，培养当代大学生的创新思维和利用计算机分析问题、解决实际问题的能力，增强大学生的综合素质，提高广大学生学习程序设计的兴趣和能力，推动大学计算机课程教学改革，丰富学生课余生活，给广大同学提供展示才能的舞台，我校决定每年按期举办内蒙古科技大学ACM大学生程序设计竞赛。
          </p>
          <p style="text-indent: 2em; line-height: 25px; margin-top: -11px">
            大赛采用ICPC赛制，三人组队使用一台计算机在规定的时间内编程解决10个左右较为复杂的题目，最快解答最多题目且错误数最少的队伍为获胜者。此项赛事不仅能培养参赛选手的创造力、团队合作精神以及在软件开发过程中的创新意识，同时也能提升选手们在压力下进行程序开发的能力。
          </p>
        </div>
      </el-col>
    </el-row>
    <dialog-edit ref="dialog"></dialog-edit>
  </div>
</template>

<script>
  import cpc2 from '@/assets/images/cpc2.png'
  import b1 from '@/assets/images/icon-b1.png'
  import b2 from '@/assets/images/icon-b2.png'
  import b3 from '@/assets/images/icon-b3.png'
  import b4 from '@/assets/images/icon-b4.png'
  import b5 from '@/assets/images/icon-b5.png'
  import b6 from '@/assets/images/icon-b6.png'
  import c from '@/assets/images/icon-c.png'
  import DialogEdit from './components/Dialog'

  export default {
    name: 'Current',
    components: {
      DialogEdit,
    },
    data() {
      return {
        cpcUrl: cpc2,
        b1Url: b1,
        b2Url: b2,
        b3Url: b3,
        b4Url: b4,
        b5Url: b5,
        b6Url: b6,
        cUrl: c,
        divStyle: {
          width: '100%',
          height: '400px',
          backgroundImage: 'url(' + require('./images/cpcBack.jpg') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        },
        e1: {
          backgroundImage: 'url(' + require('./images/1.jpg') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        },
        e2: {
          backgroundImage: 'url(' + require('./images/2.jpg') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        },
        e3: {
          backgroundImage: 'url(' + require('./images/3.jpg') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        },
        e4: {
          backgroundImage: 'url(' + require('./images/4.jpg') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        },
        e5: {
          backgroundImage: 'url(' + require('./images/5.jpg') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        },
        e6: {
          backgroundImage: 'url(' + require('./images/6.jpg') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        },
      }
    },
    created() {},
    mounted() {
      let _this = this
      setTimeout(function () {
        _this.changeWidth()
      }, 1)
    },
    methods: {
      changeWidth() {
        let aboutCpc = document.getElementById('aboutCpc')
        let aboutImg = document.getElementsByClassName('aboutImg')
        let innerImg = document.getElementsByClassName('innerImg')
        for (var i = 0; i < aboutImg.length; i++) {
          if (document.body.scrollWidth <= 1186) {
            aboutImg[i].style.height = '120px'
          } else {
            aboutImg[i].style.height = aboutCpc.offsetHeight / 3 - 3 + 'px'
          }
        }
        for (var i = 0; i < innerImg.length; i++) {
          if (document.body.scrollWidth <= 1186) {
            innerImg[i].style.height = '120px'
          } else {
            innerImg[i].style.height = aboutCpc.offsetHeight / 3 - 3 + 'px'
          }
        }
      },
      all() {
        this.$baseAlert('本届大赛暂未启动，敬请期待！', '提示', () => {
          /* 可以写回调; */
        })
      },
      dialogOpen(flag) {
        this.$refs['dialog'].showModule(flag)
      },
    },
  }
</script>
<style lang="scss" scoped>
  .divImg {
    width: 100%;
    height: 400px;
    background-color: rgba(255, 255, 255, 0.35);
    text-align: center;
  }
  @media \0screen\ {
    .divImg {
      background-color: #000000;
      filter: Alpha(opacity=35);
      position: static;
      *zoom: 1;
    }
  }

  .innerImg {
    width: calc(100%);
    margin-left: 0px !important;
    margin-top: 0px !important;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: center;
    margin: 2px;
    cursor: pointer;
  }
  .aboutImg {
    margin: 2px;
    width: calc(50% - 8px);
  }
  @media \0screen\ {
    .innerImg {
      background-color: #000000;
      filter: Alpha(opacity=30);
      position: static;
      *zoom: 1;
    }
  }
  /*
  ********************
   */
  .btb {
    text-align: center;
  }
  .applyTime {
    padding: 20px 0;
  }
  .applyTime .time {
    margin-top: 40px;
  }
  .comProgress {
    margin-top: 30px;
  }
  .comProgress .progressBg {
    margin: 0 auto;
    text-align: center;
  }
  .comProgress .progressBg .proBox {
    width: 150px;
    text-align: center;
    display: inline-block;
  }
  .comProgress .progressBg .proBox .pic {
    border-bottom: 1px solid #3671c7;
    height: 160px;
    vertical-align: middle;
    position: relative;
    padding-bottom: 30px;
  }
  .comProgress .progressBg .proBox .pic p {
    color: #419ce6;
    font-size: 20px;
  }
  .comProgress .progressBg .proBox .pic p:first-child {
    height: 100px;
    line-height: 60px;
  }
  .comProgress .progressBg .proBox .pic p img {
    vertical-align: middle;
    display: inline-block;
  }
  .comProgress .progressBg .proBox .date {
    /*color:#999;*/
    font-size: 18px;
    padding-top: 20px;
  }
  .comProgress .progressBg .proBox .pic:after {
    position: absolute;
    bottom: -12px;
    left: 50%;
    margin-left: -12px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 100%;
    border: 3px solid #fda74a;
    content: '';
    display: inline-block;
  }
  h2 {
    text-align: center;
  }
</style>
