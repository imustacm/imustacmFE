<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogFormVisible"
    width="96%"
    top="40px"
    :fullscreen="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    @close="close"
  >
    <div class="dialogDiv" id="div1" style="display: none">
      <h2 style="text-align: center">
        内蒙古科技大学第二届ACM大学生程序设计竞赛 竞赛通知
      </h2>
    </div>
    <div
      class="dialogDiv"
      id="div2"
      style="display: none; overflow-y: scroll; padding-bottom: 20px"
    >
      <h2 style="text-align: center">
        内蒙古科技大学第二届ACM大学生程序设计竞赛 竞赛规则
      </h2>
      <p style="text-indent: 2em; margin-top: 20px">
        大赛采用ICPC赛制，要求在规定时间内完整地解决尽可能多的较为复杂的问题，参赛队员需撰写软件程序，调试并排错，这些问题通常可以应用到大学计算机学科所学的知识和分析方法来解决，在最短时间内解决最多问题的队伍为优胜者。
      </p>
      <p style="text-indent: 2em; margin-top: -10px">竞赛的具体规则如下：</p>
      <p style="text-indent: 2em; margin-top: -10px">
        1、竞赛试题：8～10道题，所有题目均为中文描述。试题由竞赛命题组进行命制，均为原创题目，难度层次分明。
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        2、竞赛时长：3.5小时，竞赛进行80%时间后封榜（即竞赛榜单页面停留在封榜时间点时的状态，不再实时更新。竞赛结束后，榜单将立即显示最终比赛排名）。参赛队必须准时进入统一竞赛场地，一旦迟到将视为自动放弃竞赛，取消其进场参赛的权利。若竞赛进行一段时间后出现不可预见的事件，竞赛主任可以因其调整比赛时间长度，一旦比赛时间长度发生改变，组织者将会及时以统一的方式告知所有参赛队员。
      </p>
      <p style="text-indent: 2em; margin-top: -10px">3、竞赛纪律：</p>
      <p style="text-indent: 2em; margin-top: -10px">
        (1)
        比赛采取全封闭形式，允许参赛队员携带参考书、手册、草稿纸等纸质参考资料，不准携带、使用任何数据存储介质和电子媒质资料，禁止触碰比赛所用计算机的USB接口；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (2) 参赛队内必须独立解决问题，不可以与本队以外的人员进行交流；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (3)
        不能携带、使用任何类型的通讯工具，包括无线电接收器、移动电话、智能手表、网络工具（如E-mail、QQ、微信）等，如已携带请在竞赛开始前放至比赛规定的统一存放地点；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (4) 比赛全程禁止佩戴耳机；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (5)
        禁止访问除imustacm.cn以外的任何网站，禁止打开比赛电脑上存储的任何电子资料；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (6)
        禁止擅自移动赛场中的设备，禁止未经授权修改比赛设备的系统软硬件，禁止提交恶意代码，不准干扰他人正常比赛。
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        如违反上述规定，当场取消本队比赛成绩，全队成员立即离开竞赛现场。
      </p>
      <p style="text-indent: 2em; margin-top: -10px">4、评判规则：</p>
      <p style="text-indent: 2em; margin-top: -10px">
        (1)
        试题的解答通过在线评判系统提交，提交系统进行裁判称为运行，每一次运行会被判为正确或者错误，判决结果会即时通知参赛选手。队伍每次首次正确解答某道题目，志愿者都会将代表该题的某种颜色的气球插入队伍面前的气球插座中，代表该题已被成功解答。
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (2)
        对于竞赛中的每道题目都有运行时间和运行内存的限制，一切编译错误、运行错误、时间超限、内存超限、答案错误等都将被视为解答错误。评委通过网络得到选手的程序后，用事先准备好的数据运行选手的程序，根据选手程序运行的结果返回给选手相应的信息（英文）：
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        ① Accepted（正确）：选手的程序在规定的时间和内存内得到了正确的结果；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        ② Runtime Error（运行错误）：选手的程序在运行过程中出现了异常终止；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        ③ Compile Error（编译错误）：选手的程序出现了语法问题，编译错误；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        ④ Wrong
        Answer（答案错误）：选手的程序在规定的时间和内存内得到了错误的结果；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        ⑤ Time Limit Exceed（时间超限）：选手的程序在规定的时间内没能正常结束；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        ⑥ Memory Limit
        Exceeded（内存超限）：选手的程序在运行过程中超出了内存的限制。
      </p>
      <p style="text-indent: 2em; margin-top: -10px">5、排名规则：</p>
      <p style="text-indent: 2em; margin-top: -10px">
        (1) 解题题目数量多的队伍名次靠前；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (2)
        如果多支队伍解题数量相同，则根据总用时进行排名，用时少的队伍排名靠前；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (3) 总用时为每道正确解答题目的用时总和；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (4)
        每道题目的用时由解答时间和惩罚时间构成，解答时间的计算方式为：从竞赛开始到该道题目的解答被判定为正确为止所用的时间；惩罚时间的计算方式是：正确解答前的每一次错误运行都将被加罚20分钟时间；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (5) 未被正确解答的题目不计惩罚时间。
      </p>
    </div>
    <div
      class="dialogDiv"
      id="div3"
      style="display: none; overflow-y: scroll; padding-bottom: 20px"
    >
      <h2 style="text-align: center">
        内蒙古科技大学第二届ACM大学生程序设计竞赛 竞赛环境
      </h2>
      <h3 style="text-align: center; margin-top: 30px">判 题 端 环 境</h3>
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
        <b>&nbsp;服务器和判题机</b>
      </p>
      <p style="text-indent: 2em; line-height: 25px">
        IMUSTCPC比赛所用服务器为部署在阿里云ECS下的Ubuntu
        14.04系统。判题机为IMUST
        Judger即时在线分布式判题机，系统对提交的代码进行自动评测，无需人工干预。
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
        <b>&nbsp;编译器和编译选项</b>
      </p>
      <p style="text-indent: 2em; line-height: 25px">
        IMUSTCPC比赛允许使用的编程语言为C、C++、Java。对应的编译器和编译选项如下：
      </p>
      <el-table
        :data="languageTable"
        v-loading="listLoading"
        :element-loading-text="elementLoadingText"
        style="width: 90%; margin: 0 auto"
        border
      >
        <af-table-column
          prop="language"
          align="center"
          label="语言"
          show-overflow-tooltip
        ></af-table-column>
        <af-table-column
          prop="version"
          align="center"
          label="编译器版本"
          show-overflow-tooltip
        ></af-table-column>
        <af-table-column
          prop="setting"
          align="center"
          label="编译选项"
          show-overflow-tooltip
        ></af-table-column>
      </el-table>
      <br />
      <br />
      <h3 style="text-align: center">用 户 端 环 境</h3>
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
        <b>&nbsp;操作系统和浏览器</b>
      </p>
      <p style="text-indent: 2em; line-height: 25px">
        所有队伍使用计算机的硬件配置相同，使用Windows
        7操作系统；浏览器使用Google Chrome 8。
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
        <b>&nbsp;IDE和编译器</b>
      </p>
      <p style="text-indent: 2em; line-height: 25px">
        用户端所使用的IDE为Codeblocks、Dev
        C++和Eclipse；编译器信息同判题端一致，详细的编译器信息请参见上述判题端环境的相关说明。
      </p>
      <br />
    </div>
    <div
      class="dialogDiv"
      id="div4"
      style="display: none; overflow-y: scroll; padding-bottom: 20px"
    >
      <h2 style="text-align: center">
        内蒙古科技大学第二届ACM大学生程序设计竞赛 奖项设置
      </h2>
      <p style="text-indent: 2em; margin-top: 20px">
        竞赛奖励面根据参赛队伍数确定，其中：
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (1)
        特等奖：1个，获特等奖的队伍必须正确解答该次竞赛的全部题目并且比赛排名第一；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (2) 一等奖：按照正式参加比赛队伍数的8%设置，四舍五入取整；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (3) 二等奖：按照正式参加比赛队伍数的16%设置，四舍五入取整；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (4) 三等奖：按照正式参加比赛队伍数的25%设置，四舍五入取整；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (5) 优胜奖：按照正式参加比赛队伍数的35%设置，四舍五入取整；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (6) 成功参赛奖：不限数额，未获上述奖项且解题数大于等于1的队伍；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (7) 最佳女队奖：1个，全队成员均为女生，参赛女生队数大于1队时设置；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (8)
        最佳非专业队奖：1个，全队成员均为非计算机系专业学生，参赛非专业队数大于1队时设置；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (9) 最快解题奖：每题1个，未有正确解答的题目不设奖；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (9) 顽强拼搏奖：1个，竞赛结束前最后一个正确解答的队伍，重复解题不计；
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        (10) 优秀志愿者奖：2个，由竞赛组委会进行评定。
      </p>
      <p style="text-indent: 2em; margin-top: -10px">
        其中，第 (1) - (5)
        项奖在参赛正式队伍数达到15个（含15个）时才设置奖项。打星队伍只参与成功参赛奖评选。此外，竞赛组委会还将拟推荐优秀参赛选手参加内蒙古自治区大学生程序设计竞赛。
      </p>
    </div>
    <div class="dialogDiv" id="div5" style="display: none">
      <h2 style="text-align: center">
        内蒙古科技大学第二届ACM大学生程序设计竞赛 竞赛日程
      </h2>
    </div>
    <div class="dialogDiv" id="div6" style="display: none">
      <h2 style="text-align: center">
        内蒙古科技大学第二届ACM大学生程序设计竞赛 队伍名单
      </h2>
      <el-table
        :data="teamTable"
        v-loading="listLoading"
        :element-loading-text="elementLoadingText"
        style="width: 90%; margin: 0 auto"
        border
      >
        <el-table-column
          prop="id"
          align="center"
          label="序号"
          show-overflow-tooltip
          width="95px"
        ></el-table-column>
        <el-table-column
          prop="teamName"
          align="center"
          label="队伍名称"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="menber1"
          align="center"
          label="队员1"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="menber2"
          align="center"
          label="队员2"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="menber3"
          align="center"
          label="队员3"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="star"
          align="center"
          label="打星"
          show-overflow-tooltip
          width="95px"
        ></el-table-column>
      </el-table>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">关 闭</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import AfTableColumn from 'af-table-column'

  export default {
    name: 'Dialog',
    components: {
      AfTableColumn,
    },
    data() {
      return {
        title: '',
        dialogFormVisible: false,
        languageTable: [
          {
            language: 'C',
            version: 'GCC 5.4',
            setting:
              'GCC Main.c -o Main -fno-asm -O2 -Wall -lm --static -std=c99 -DONLINE_JUDGE',
          },
          {
            language: 'C++',
            version: 'G++ 5.4',
            setting:
              'G++ Main.cc -o Main -fno-asm -O2 -Wall -lm --static -DONLINE_JUDGE',
          },
          {
            language: 'Java',
            version: 'OpenJDK 1.8',
            setting: 'Javac -J-Xms32m -J-Xmx256m Main.java',
          },
        ],
        teamTable: [],
        istLoading: true,
        elementLoadingText: '正在加载',
      }
    },
    mounted() {
      setTimeout(() => {
        this.listLoading = false
      }, 1)
    },
    methods: {
      showModule(flag) {
        this.dialogFormVisible = true
        if (flag == 0) {
          this.title = '竞赛通知'
        } else if (flag == 1) {
          this.title = '竞赛规则'
        } else if (flag == 2) {
          this.title = '竞赛环境'
        } else if (flag == 3) {
          this.title = '奖项设置'
        } else if (flag == 4) {
          this.title = '竞赛日程'
        } else if (flag == 5) {
          this.title = '队伍名单'
        }
        setTimeout(function () {
          this.dialogFormVisible = true
          if (flag == 0) {
            document.getElementById('div1').style.display = 'block'
          } else if (flag == 1) {
            document.getElementById('div2').style.display = 'block'
          } else if (flag == 2) {
            document.getElementById('div3').style.display = 'block'
          } else if (flag == 3) {
            document.getElementById('div4').style.display = 'block'
          } else if (flag == 4) {
            document.getElementById('div5').style.display = 'block'
          } else if (flag == 5) {
            document.getElementById('div6').style.display = 'block'
          }
        }, 1)
      },
      close() {
        this.dialogFormVisible = false
        document.getElementById('div1').style.display = 'none'
        document.getElementById('div2').style.display = 'none'
        document.getElementById('div3').style.display = 'none'
        document.getElementById('div4').style.display = 'none'
        document.getElementById('div5').style.display = 'none'
        document.getElementById('div6').style.display = 'none'
      },
    },
  }
</script>

<style lang="scss" scoped>
  .dialogDiv {
    margin-top: 10px;
    width: 100%;
    height: calc(
      100vh - #{$base-nav-bar-height} - #{$base-tabs-bar-height} - #{$base-padding} -
        #{$base-padding} - 208px
    );
  }
  p {
    line-height: 25px;
  }
</style>
