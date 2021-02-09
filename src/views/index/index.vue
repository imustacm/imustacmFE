<template>
  <div style="background-color: #f6f8f9">
    <div class="carouselIndex">
      <el-carousel id="carousel">
        <el-carousel-item v-for="item in images" :key="item">
          <el-image
            :src="item"
            fit="fill"
            class="carouselImages"
            style="height: 100%; width: 100%"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="imustojIndex">
      <h2 style="text-align: center; margin: 45px 0px 40px">IMUSTOJ信息板</h2>
      <el-row
        :gutter="20"
        style="padding: 20px 20px 10px; background-color: #ffffff"
      >
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="12"
          :xl="12"
          style="padding: 10px 10px"
        >
          <h3 style="text-align: center">昨日解决排行榜</h3>
          <el-table
            v-loading="listLoading"
            :data="list1"
            :element-loading-text="elementLoadingText"
          >
            <el-table-column
              align="center"
              show-overflow-tooltip
              prop="rank"
              label="排名"
              width="120px"
            >
              <template #default="scope">
                <el-image
                  v-if="scope.$index == 0"
                  fit="fill"
                  :src="no1"
                  style="width: 20px; height: 20px; margin-top: 3px"
                ></el-image>
                <el-image
                  v-if="scope.$index == 1"
                  fit="fill"
                  :src="no2"
                  style="width: 20px; height: 20px; margin-top: 3px"
                ></el-image>
                <el-image
                  v-if="scope.$index == 2"
                  fit="fill"
                  :src="no3"
                  style="width: 20px; height: 20px; margin-top: 3px"
                ></el-image>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              show-overflow-tooltip
              prop="user"
              label="用户"
            >
              <template #default="{ row }">
                <a @click="">{{ row.user_name }} ({{ row.name }})</a>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              show-overflow-tooltip
              label="解决数"
              prop="ac"
              width="120px"
            >
              <template #default="{ row }">
                <a @click="">{{ row.ac }}</a>
              </template>
            </el-table-column>
          </el-table>
          <div style="text-align: center; margin-top: 20px">
            <el-button type="primary" style="padding: 10px 30px" plain>
              解题排名
            </el-button>
          </div>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="12"
          :xl="12"
          style="padding: 10px 10px"
        >
          <h3 style="text-align: center">今日打卡速度榜</h3>
          <el-table
            v-loading="listLoading"
            :data="list2"
            :element-loading-text="elementLoadingText"
          >
            <el-table-column
              align="center"
              show-overflow-tooltip
              prop="rank"
              label="排名"
              width="120px"
            >
              <template #default="scope">
                <el-image
                  v-if="scope.$index == 0"
                  fit="fill"
                  :src="no1"
                  style="width: 20px; height: 20px; margin-top: 3px"
                ></el-image>
                <el-image
                  v-if="scope.$index == 1"
                  fit="fill"
                  :src="no2"
                  style="width: 20px; height: 20px; margin-top: 3px"
                ></el-image>
                <el-image
                  v-if="scope.$index == 2"
                  fit="fill"
                  :src="no3"
                  style="width: 20px; height: 20px; margin-top: 3px"
                ></el-image>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              show-overflow-tooltip
              prop="user"
              label="用户"
            >
              <template #default="{ row }">
                <a @click="">{{ row.user_name }} ({{ row.name }})</a>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              show-overflow-tooltip
              label="打卡时间"
              prop="card_time"
              width="120px"
            ></el-table-column>
          </el-table>
          <div style="text-align: center; margin-top: 20px">
            <el-button type="primary" style="padding: 10px 30px" plain>
              打卡排名
            </el-button>
          </div>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
          style="padding: 10px 10px 0px 10px"
        >
          <h3 style="text-align: center">近7日题目热度Top10</h3>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="12"
          :xl="12"
          style="padding: 0px 10px 10px 10px"
        >
          <el-table
            v-loading="listLoading"
            :data="list3"
            :element-loading-text="elementLoadingText"
          >
            <el-table-column
              align="center"
              show-overflow-tooltip
              prop="rank"
              label="Top"
              width="100px"
            >
              <template #default="scope">
                <span style="display: inline-block; margin: 3px 0px">
                  {{ scope.$index + 1 }}
                </span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              show-overflow-tooltip
              prop="problem"
              label="热度题目"
            >
              <template #default="{ row }">
                <a @click="">{{ row.problem_id }}. {{ row.title }}</a>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              show-overflow-tooltip
              label="热度"
              prop="hot"
              width="100px"
            >
              <template #default="{ row }">
                <a @click="">{{ row.hot }}</a>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="12"
          :xl="12"
          style="padding: 0px 10px 10px 10px"
        >
          <el-table
            v-loading="listLoading"
            :data="list4"
            :element-loading-text="elementLoadingText"
          >
            <el-table-column
              align="center"
              show-overflow-tooltip
              prop="rank"
              label="Top"
              width="100px"
            >
              <template #default="scope">
                <span style="display: inline-block; margin: 3px 0px">
                  {{ scope.$index + 6 }}
                </span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              show-overflow-tooltip
              prop="problem"
              label="热度题目"
            >
              <template #default="{ row }">
                <a @click="">{{ row.problem_id }}. {{ row.title }}</a>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              show-overflow-tooltip
              label="热度"
              prop="hot"
              width="100px"
            >
              <template #default="{ row }">
                <a @click="">{{ row.hot }}</a>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
          style="padding: 0px 10px 10px"
        >
          <div style="text-align: center; margin-top: 10px">
            <el-button type="primary" style="padding: 10px 30px" plain>
              题目列表
            </el-button>
          </div>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
          style="padding: 30px 10px 0px 10px"
        >
          <h3 style="text-align: center">近30日提交 / 解决统计</h3>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
          style="padding: 0px 10px 10px 10px"
        >
          <vab-chart
            :autoresize="true"
            :options="option"
            style="width: 100%; height: 280px"
          />
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
          style="padding: 0px 10px 30px"
        >
          <div style="text-align: center; margin-top: 10px">
            <el-button type="primary" style="padding: 10px 30px" plain>
              评判状态
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="aboutIndex">
      <h2 style="text-align: center; margin: 45px 0px 40px">关于我们</h2>
      <el-row :gutter="20" style="background-color: #ffffff">
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <div
            style="
              background: url(https://www.imustacm.cn/imustacm/2015BY.JPG)
                no-repeat center center;
              background-size: cover;
              filter: grayscale(30%);
              opacity: 0.7;
            "
            id="aboutImg"
          ></div>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="12"
          :xl="12"
          style="display: block"
          id="aboutTxt"
        >
          <p
            style="
              margin: 50px 50px 0px;
              font-size: 15px;
              line-height: 27px;
              text-indent: 2em;
            "
          >
            内蒙古科技大学ACM程序设计协会成立于2009年9月6日，是基于国际大学生ACM程序设计竞赛而成立的实践类学习型的学生社团。协会指导老师是兰孝文老师、丁雨老师、郝斌老师和胡伟健老师，ACM竞赛集训队现有成员20余人。
          </p>
          <p
            style="
              margin: 10px 50px;
              font-size: 15px;
              line-height: 27px;
              text-indent: 2em;
            "
          >
            协会在积极组织集训队的同时，也调动更广大同学学习计算机知识的积极性、主动性，全面提高同学们算法与程序设计能力，突出编程能力和思维的训练，营造浓厚的学习氛围，增强同学们的总体素质和竞争力。ACM程序设计协会将依靠师生共同的力量，热诚为学生的全面成长服务，以培养会员的编程创新能力为核心，兼顾低年级大学生计算机基础知识学习组织与帮扶的目标，创造性地开展工作。
            内蒙古科技大学ACM程序设计协会热忱欢迎对编程有兴趣或想学好编程的同学的加入！
          </p>
          <p
            style="
              margin: 10px 50px;
              font-size: 15px;
              line-height: 27px;
              text-indent: 2em;
            "
          >
            内蒙古科技大学ACM程序设计协会热忱欢迎对编程有兴趣或想学好编程的同学的加入！
          </p>
          <div style="text-align: center; margin: 20px 50px 50px">
            <el-button
              type="primary"
              style="padding: 10px 30px"
              plain
              @click=""
            >
              了解更多
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="raceIndex">
      <h2 style="text-align: center; margin: 45px 0px 40px">主要参加赛事</h2>
      <el-row
        :gutter="20"
        style="padding: 10px 20px; background-color: #ffffff"
      >
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="6"
          :xl="6"
          style="padding: 10px 10px"
        >
          <div style="text-align: center; padding: 0px 30px">
            <el-image
              src="https://www.imustacm.cn/imustacm/icpc.png"
              style="width: 150px; height: 150px"
              fit="fill"
            ></el-image>
            <h3>ICPC</h3>
            <p style="text-align: left; line-height: 20px">
              ICPC：国际大学生程序设计竞赛，由国际计算机协会（ACM）主办，目前已经发展成为全球最具影响力的大学生程序设计竞赛。
            </p>
          </div>
          <div style="text-align: center; margin: 20px 0px">
            <el-button type="primary" style="padding: 10px 30px" plain>
              查看详情
            </el-button>
          </div>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="6"
          :xl="6"
          style="padding: 10px 10px"
        >
          <div style="text-align: center; padding: 0px 30px">
            <el-image
              src="https://www.imustacm.cn/imustacm/ccpc.png"
              style="width: 150px; height: 150px"
              fit="fill"
            ></el-image>
            <h3>CCPC</h3>
            <p style="text-align: left; line-height: 20px">
              CCPC：中国大学生程序设计竞赛，由中国大学生程序设计竞赛协会主办，是采用ACM赛制的面向世界大学生的国际性年度赛事。
            </p>
          </div>
          <div style="text-align: center; margin: 20px 0px">
            <el-button type="primary" style="padding: 10px 30px" plain>
              查看详情
            </el-button>
          </div>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="6"
          :xl="6"
          style="padding: 10px 10px"
        >
          <div style="text-align: center; padding: 0px 30px">
            <el-image
              src="https://www.imustacm.cn/imustacm/cccc.png"
              style="width: 150px; height: 150px"
              fit="fill"
            ></el-image>
            <h3>CCCC</h3>
            <p style="text-align: left; line-height: 20px">
              CCCC：中国高校计算机大赛，分为团体程序设计天梯赛、大数据挑战赛、移动应用创新赛、网络技术挑战赛、人工智能创意赛等赛事。
            </p>
          </div>
          <div style="text-align: center; margin: 20px 0px">
            <el-button type="primary" style="padding: 10px 30px" plain>
              查看详情
            </el-button>
          </div>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="6"
          :xl="6"
          style="padding: 10px 10px"
        >
          <div style="text-align: center; padding: 0px 30px">
            <el-image
              src="https://www.imustacm.cn/imustacm/lq.png"
              style="width: 150px; height: 150px"
              fit="fill"
            ></el-image>
            <h3>“蓝桥杯”大赛</h3>
            <p style="text-align: left; line-height: 20px">
              “蓝桥杯”大赛：由工信部人才交流中心、教育部就业指导中心联合举办，旨在促进软件信息领域专业人才培养，提升毕业生就业竞争力。
            </p>
          </div>
          <div style="text-align: center; margin: 20px 0px">
            <el-button type="primary" style="padding: 10px 30px" plain>
              查看详情
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="container-fluid">
      <h2 style="text-align: center; margin: 45px 0px 40px">荣誉时刻</h2>
      <el-row class="row no-gutter pics" style="background-color: #ffffff">
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="work">
          <div class="work-box">
            <img src="https://www.imustacm.cn/imustacm/2020ICPCW.jpg" alt="" />
            <div class="overlay">
              <div class="overlay-caption">
                <p>
                  <span style="font-size: 16px">2020年ICPC中国（西部）赛</span>
                </p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="work">
          <div class="work-box">
            <img src="https://www.imustacm.cn/imustacm/IMCPC2020.jpeg" alt="" />
            <div class="overlay">
              <div class="overlay-caption">
                <p>
                  <span style="font-size: 16px">2020年CCPC内蒙古自治区赛</span>
                </p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="work">
          <div class="work-box">
            <img src="https://www.imustacm.cn/imustacm/2019NE.jpeg" alt="" />
            <div class="overlay">
              <div class="overlay-caption">
                <p>
                  <span style="font-size: 16px">2019年CCPC东北地区赛</span>
                </p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="work">
          <div class="work-box">
            <img src="https://www.imustacm.cn/imustacm/2019NMG.jpeg" alt="" />
            <div class="overlay">
              <div class="overlay-caption">
                <p>
                  <span style="font-size: 16px">2019年CCPC内蒙古自治区赛</span>
                </p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="work">
          <div class="work-box">
            <img src="https://www.imustacm.cn/imustacm/2019TTS.JPG" alt="" />
            <div class="overlay">
              <div class="overlay-caption">
                <p>
                  <span style="font-size: 16px">2019年团体程序设计天梯赛</span>
                </p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="work">
          <div class="work-box">
            <img src="https://www.imustacm.cn/imustacm/2019LQB.JPG" alt="" />
            <div class="overlay">
              <div class="overlay-caption">
                <p>
                  <span style="font-size: 16px">
                    2019年“蓝桥杯”内蒙古自治区赛
                  </span>
                </p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="work">
          <div class="work-box">
            <img src="https://www.imustacm.cn/imustacm/2018NMG.jpg" alt="" />
            <div class="overlay">
              <div class="overlay-caption">
                <p>
                  <span style="font-size: 16px">2018年CCPC内蒙古自治区赛</span>
                </p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="work">
          <div class="work-box">
            <img src="https://www.imustacm.cn/imustacm/2018NE.jpg" alt="" />
            <div class="overlay">
              <div class="overlay-caption">
                <p>
                  <span style="font-size: 16px">2019年CCPC东北地区赛</span>
                </p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div style="text-align: center; margin: 20px 0px 40px">
            <el-button type="primary" style="padding: 10px 30px" plain>
              查看更多荣誉时刻
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- <div style="height: 20px"></div> -->
  </div>
</template>

<script>
  import VabChart from '@/plugins/echarts'
  import no1 from '@/assets/images/no1.png'
  import no2 from '@/assets/images/no2.png'
  import no3 from '@/assets/images/no3.png'

  export default {
    name: 'Index',
    components: {
      VabChart,
    },
    data() {
      return {
        scrollerHeight: '200px',
        listLoading: true,
        elementLoadingText: '正在加载',
        option: {
          xAxis: {
            type: 'category',
            data: [
              '27日',
              '28日',
              '29日',
              '30日',
              '31日',
              '1日',
              '2日',
              '3日',
              '4日',
              '5日',
              '6日',
              '7日',
              '8日',
              '9日',
              '10日',
              '11日',
              '12日',
              '13日',
              '14日',
              '15日',
              '16日',
              '17日',
              '18日',
              '19日',
              '20日',
              '21日',
              '22日',
              '23日',
              '24日',
              '25日',
            ],
          },
          yAxis: {
            type: 'value',
          },
          legend: {
            data: ['提交', '解决'],
          },
          tooltip: {
            trigger: 'axis',
          },
          grid: {
            top: '13%',
            left: '1%',
            right: '1%',
            bottom: '1%',
            containLabel: true,
          },
          series: [
            {
              name: '提交',
              data: [
                120,
                232,
                501,
                678,
                398,
                220,
                288,
                232,
                501,
                678,
                398,
                220,
                288,
                232,
                501,
                678,
                398,
                220,
                288,
                232,
                501,
                678,
                398,
                220,
                288,
                232,
                501,
                678,
                398,
                220,
              ],
              type: 'line',
              smooth: true,
            },
            {
              name: '解决',
              data: [
                820,
                932,
                901,
                934,
                1290,
                1330,
                1320,
                1232,
                1501,
                1678,
                1398,
                1220,
                1288,
                1232,
                1501,
                1678,
                1398,
                1220,
                1288,
                1232,
                1501,
                1678,
                1398,
                1220,
                1288,
                1232,
                1501,
                1678,
                1398,
                1220,
              ],
              type: 'line',
              smooth: true,
            },
          ],
        },
        no1: no1,
        no2: no2,
        no3: no3,
        images: [
          'https://www.imustacm.cn/imustacm/20200526.jpg',
          'https://www.imustacm.cn/imustacm/20201103.jpg',
          'https://www.imustacm.cn/imustacm/20201022.jpg',
          'https://www.imustacm.cn/imustacm/20190416.jpg',
          'https://www.imustacm.cn/imustacm/20180106.jpg',
        ],
        list1: [
          {
            user_id: 1,
            user_name: '1767111117',
            name: '王剑波',
            ac: 12,
          },
          {
            user_id: 2,
            user_name: '1767159112',
            name: '刘洋',
            ac: 11,
          },
          {
            user_id: 3,
            user_name: '1667159222',
            name: '姜威',
            ac: 3,
          },
        ],
        list2: [
          {
            user_id: 2,
            user_name: '1767159112',
            name: '刘洋',
            card_time: '09:12:23',
          },
          {
            user_id: 3,
            user_name: '1667159222',
            name: '姜威',

            card_time: '09:25:36',
          },
          {
            user_id: 1,
            user_name: '1767111117',
            name: '王剑波',
            card_time: '09:47:55',
          },
        ],
        list3: [
          {
            problem_id: 1,
            title: '整数求和',
            hot: 568,
          },
          {
            problem_id: 126,
            title: '单词统计',
            hot: 115,
          },
          {
            problem_id: 153,
            title: '庆国庆唱红歌',
            hot: 102,
          },
          {
            problem_id: 107,
            title: '整数数列求和（7）',
            hot: 99,
          },
          {
            problem_id: 96,
            title: 'a^b',
            hot: 82,
          },
        ],
        list4: [
          {
            problem_id: 140,
            title: '1、2、3、4、5...',
            hot: 65,
          },
          {
            problem_id: 2,
            title: '字母排序',
            hot: 48,
          },
          {
            problem_id: 124,
            title: '简易版最长序列',
            hot: 20,
          },
          {
            problem_id: 63,
            title: '数字的统计',
            hot: 15,
          },
          {
            problem_id: 251,
            title: '天降RP',
            hot: 6,
          },
        ],
      }
    },
    created() {},
    mounted() {
      let _this = this
      setTimeout(function () {
        _this.changeWidth()
      }, 1)
      setTimeout(() => {
        this.listLoading = false
      }, 1)
    },
    methods: {
      changeWidth() {
        let carouselItem = document.getElementById('carousel')
        carouselItem.style.height = document.body.clientWidth / 3.6 + 'px'
        let aboutImg = document.getElementById('aboutImg')
        let aboutTxt = document.getElementById('aboutTxt')
        aboutImg.style.height = aboutTxt.offsetHeight + 'px'

        let workBox = document.getElementsByClassName('work-box')
        for (var i = 0; i < workBox.length; i++) {
          workBox[i].style.height = document.body.clientWidth / 6.5 + 'px'
        }
      },
    },
  }
</script>
<style>
  .el-carousel__container {
    width: 100%;
    height: 100% !important;
  }
  .work {
    -moz-box-shadow: 0 0 0 1px #fff;
    -webkit-box-shadow: 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px #fff;
    overflow: hidden;
    position: relative;
    background: #666666;
  }
  .work img {
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }
  .work .overlay {
    background: rgba(56, 56, 56, 0.58);
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    -moz-transition: opacity, 0.3s;
    -o-transition: opacity, 0.3s;
    -webkit-transition: opacity, 0.3s;
    transition: opacity, 0.3s;
  }
  .work .overlay-caption {
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .work h5,
  .work p,
  .work img {
    -moz-transition: all, 0.5s;
    -o-transition: all, 0.5s;
    -webkit-transition: all, 0.5s;
    transition: all, 0.5s;
  }
  .work h5,
  .work p {
    color: #fff;
    margin: 0;
    opacity: 0;
  }
  .work span {
    font-size: 45px;
  }
  .work h5 {
    margin-bottom: 5px;
    -moz-transform: translate3d(0, -200%, 0);
    -ms-transform: translate3d(0, -200%, 0);
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
  .work p {
    -moz-transform: translate3d(0, 200%, 0);
    -ms-transform: translate3d(0, 200%, 0);
    -webkit-transform: translate3d(0, 200%, 0);
    transform: translate3d(0, 200%, 0);
  }
  .work-box:hover img {
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  .work-box:hover .overlay {
    opacity: 1;
  }
  .work-box:hover .overlay h5,
  .work-box:hover .overlay p {
    opacity: 1;
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .services-content h5 {
    margin: 20px;
  }
  .video-section {
    padding: 88px 0 20px;
  }
  address {
    line-height: 1.42857143;
    color: #b5b5b5 !important;
  }
</style>
