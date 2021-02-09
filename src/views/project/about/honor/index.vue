<template>
  <div class="honor" style="margin: 10px">
    <el-tabs :tab-position="tabPosition" style="padding: 10px">
      <!-- <el-tab-pane label="2021年">2021年</el-tab-pane> -->
      <el-tab-pane label="2020年">
        <!-- 2020年中国大学生计算机设计大赛 -->
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
          <b>&nbsp;中国大学生计算机设计大赛</b>
        </p>
        <p style="text-indent: 2em">
          2020年9月5日，第十三届中国大学生计算机设计大赛比赛结果公布，内蒙古科技大学ACM程序设计协会代表队获得一等奖1项。这也是在本项赛事当中，我校获得的历史最好成绩。
        </p>
        <p style="text-align: center">
          <b>
            第十三届中国大学生计算机设计大赛
            内蒙古科技大学ACM程序设计协会获奖情况
          </b>
        </p>
        <el-table
          :fit="true"
          :data="jsjsjds2020"
          style="width: 90%; margin: 0 auto"
          :span-method="spanMethod1"
          border
        >
          <af-table-column
            prop="id"
            align="center"
            label="作品编号"
            show-overflow-tooltip
          ></af-table-column>
          <!-- <af-table-column
            prop="school"
            align="center"
            label="参赛学校"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="price"
            align="center"
            label="奖项"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="works"
            align="center"
            label="作品名称"
            show-overflow-tooltip
          ></af-table-column>
          <el-table-column
            prop="user"
            align="center"
            label="作者"
            show-overflow-tooltip
          >
            <el-table-column
              prop="name"
              align="center"
              label="姓名"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="student"
              align="center"
              label="学号"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="clazz"
              align="center"
              label="班级"
              show-overflow-tooltip
            ></el-table-column>
          </el-table-column>
          <af-table-column
            prop="teacher"
            align="center"
            label="指导教师"
            show-overflow-tooltip
          ></af-table-column>
        </el-table>
        <p style="text-align: center">
          <img
            src="//www.imustacm.cn/imustacm/2020JSJSJDS.png"
            style="height: 460px; text-align: center"
          />
        </p>
        <p style="text-align: center">
          第十三届中国大学生计算机设计大赛
          内蒙古科技大学ACM程序设计协会获奖作品作者及指导教师合影
        </p>
        <br />
        <!-- 2020年中国 · 东北地区大学生程序设计竞赛 -->
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
          <b>&nbsp;CCPC 中国 &middot; 东北地区大学生程序设计竞赛</b>
        </p>
        <p style="text-indent: 2em">
          2020年10月11日，内蒙古科技大学ACM程序设计协会集训队队员参加中国
          &middot; 东北地区第十四届大学生程序设计竞赛获得优胜奖3项。
        </p>
        <p style="text-align: center">
          <b>
            中国 &middot; 东北地区第十四届大学生程序设计竞赛
            内蒙古科技大学获奖情况
          </b>
        </p>
        <el-table
          :fit="true"
          :data="dbccpc2020"
          style="width: 90%; margin: 0 auto"
          :span-method="spanMethod1"
          border
        >
          <!-- <af-table-column
            prop="school"
            align="center"
            label="学校"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="team"
            align="center"
            label="队名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="rank"
            align="center"
            label="排名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="price"
            align="center"
            label="奖项"
            show-overflow-tooltip
          ></af-table-column>
          <el-table-column
            prop="user"
            align="center"
            label="队员"
            show-overflow-tooltip
          >
            <el-table-column
              prop="name"
              align="center"
              label="姓名"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="student"
              align="center"
              label="学号"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="clazz"
              align="center"
              label="班级"
              show-overflow-tooltip
            ></el-table-column>
          </el-table-column>
        </el-table>
        <br />
        <!-- 2020年“蓝桥杯”大赛内蒙古自治区赛 -->
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
          <b>
            &nbsp;
            &ldquo;蓝桥杯&rdquo;全国软件和信息技术专业人才大赛（内蒙古赛区）
          </b>
        </p>
        <p style="text-indent: 2em">
          2020年10月17日，内蒙古科技大学ACM程序设计协会集训队队员参加第十一届&ldquo;蓝桥杯&rdquo;全国软件和信息技术专业人才大赛内蒙古赛区比赛获得一等奖6项、二等奖8项、三等奖3项。
        </p>
        <p style="text-indent: 2em">
          同时，我校还荣获优胜学校奖和优秀组织单位奖。
        </p>
        <p style="text-align: center">
          <b>
            第十一届&ldquo;蓝桥杯&rdquo;全国软件和信息技术专业人才大赛
            内蒙古赛区比赛 内蒙古科技大学ACM程序设计协会获奖情况
          </b>
        </p>
        <el-table
          :fit="true"
          :data="lqbnmg2020"
          style="width: 90%; margin: 0 auto"
          border
        >
          <!-- <af-table-column
            prop="province"
            align="center"
            label="省份"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="school"
            align="center"
            label="学校"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="examid"
            align="center"
            label="准考证号"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="name"
            align="center"
            label="姓名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="student"
            align="center"
            label="学号"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="clazz"
            align="center"
            label="班级"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="subject"
            align="center"
            label="比赛科目"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="price"
            align="center"
            label="奖项"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="teacher"
            align="center"
            label="指导教师"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="enter"
            align="center"
            label="进入决赛"
            show-overflow-tooltip
          ></af-table-column>
        </el-table>
        <br />
        <!-- 2020年ACM-ICPC中国（西部）大学生程序设计竞赛 -->
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
          <b>&nbsp;ICPC 中国（西部）大学生程序设计竞赛</b>
        </p>
        <p style="text-indent: 2em">
          2020年10月31日，内蒙古科技大学ACM程序设计协会集训队队员参加2020年ACM -
          ICPC中国（西部）大学生程序设计竞赛获得银牌3项、铜牌3项。
        </p>
        <p style="text-align: center">
          <b>
            2020年ACM - ICPC中国（西部）大学生程序设计竞赛
            内蒙古科技大学ACM程序设计协会获奖情况
          </b>
        </p>
        <el-table
          :fit="true"
          :data="icpcxb2020"
          style="width: 90%; margin: 0 auto"
          :span-method="spanMethod2"
          border
        >
          <!-- <af-table-column
            prop="school"
            align="center"
            label="学校"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="team"
            align="center"
            label="中文队名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="teamEnglish"
            align="center"
            label="英文队名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="rank"
            align="center"
            label="排名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="price"
            align="center"
            label="奖项"
            show-overflow-tooltip
          ></af-table-column>
          <el-table-column
            prop="user"
            align="center"
            label="队员"
            show-overflow-tooltip
          >
            <el-table-column
              prop="name"
              align="center"
              label="姓名"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="student"
              align="center"
              label="学号"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="clazz"
              align="center"
              label="班级"
              show-overflow-tooltip
            ></el-table-column>
          </el-table-column>
        </el-table>
        <p style="text-align: center">
          <img
            src="//www.imustacm.cn/imustacm/2020ICPCW.jpg"
            style="height: 460px; text-align: center"
          />
        </p>
        <p style="text-align: center">
          2020年ACM - ICPC中国（西部）大学生程序设计竞赛
          内蒙古科技大学ACM程序设计协会参赛队员合影
        </p>
        <br />
        <!-- 2020年“蓝桥杯”大赛全国总决赛 -->
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
          <b>
            &nbsp;
            &ldquo;蓝桥杯&rdquo;全国软件和信息技术专业人才大赛（全国总决赛）
          </b>
        </p>
        <p style="text-indent: 2em">
          2020年11月14日，内蒙古科技大学ACM程序设计协会集训队队员参加第十一届&ldquo;蓝桥杯&rdquo;全国软件和信息技术专业人才大赛全国总决赛获得二等奖2项，三等奖2项，优秀奖1项。
        </p>
        <p style="text-indent: 2em">同时，我校还荣获优秀组织单位奖。</p>
        <p style="text-align: center">
          <b>
            第十一届&ldquo;蓝桥杯&rdquo;全国软件和信息技术专业人才大赛
            全国总决赛 内蒙古科技大学ACM程序设计协会获奖情况
          </b>
        </p>
        <el-table
          :fit="true"
          :data="lqbgs2020"
          style="width: 90%; margin: 0 auto"
          border
        >
          <!-- <af-table-column
            prop="province"
            align="center"
            label="省份"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="school"
            align="center"
            label="学校"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="examid"
            align="center"
            label="准考证号"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="name"
            align="center"
            label="姓名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="student"
            align="center"
            label="学号"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="clazz"
            align="center"
            label="班级"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="subject"
            align="center"
            label="比赛科目"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="price"
            align="center"
            label="奖项"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="teacher"
            align="center"
            label="指导教师"
            show-overflow-tooltip
          ></af-table-column>
        </el-table>
        <br />
        <!-- 2020年内蒙古自治区大学生程序设计竞赛 -->
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
          <b>&nbsp;CCPC 内蒙古自治区大学生程序设计竞赛</b>
        </p>
        <p style="text-indent: 2em">
          2020年11月22日，内蒙古科技大学ACM程序设计协会集训队队员参加内蒙古自治区第十五届大学生程序设计竞赛获得一等奖1项，二等奖3项，三等奖3项，最佳女队奖1项。
        </p>
        <p style="text-indent: 2em">同时，我校还荣获团体二等奖。</p>
        <p style="text-align: center">
          <b>内蒙古自治区第十五届大学生程序设计竞赛 内蒙古科技大学获奖情况</b>
        </p>
        <el-table
          :fit="true"
          :data="nmgccpc2020"
          style="width: 90%; margin: 0 auto"
          :span-method="spanMethod1"
          border
        >
          <!-- <af-table-column
            prop="school"
            align="center"
            label="学校"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="team"
            align="center"
            label="队名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="rank"
            align="center"
            label="排名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="price"
            align="center"
            label="奖项"
            show-overflow-tooltip
          ></af-table-column>
          <el-table-column
            prop="user"
            align="center"
            label="队员"
            show-overflow-tooltip
          >
            <el-table-column
              prop="name"
              align="center"
              label="姓名"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="student"
              align="center"
              label="学号"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="clazz"
              align="center"
              label="班级"
              show-overflow-tooltip
            ></el-table-column>
          </el-table-column>
          <af-table-column
            prop="teacher"
            align="center"
            label="教练"
            show-overflow-tooltip
          ></af-table-column>
        </el-table>
        <p style="text-align: center">
          <img
            src="//www.imustacm.cn/imustacm/IMCPC2020.jpeg"
            style="height: 465px; text-align: center"
          />
        </p>
        <p style="text-align: center">
          内蒙古自治区第十五届大学生程序设计竞赛 内蒙古科技大学参赛队员合影
        </p>
      </el-tab-pane>
      <el-tab-pane label="2019年">
        <!-- 2019年“蓝桥杯”大赛内蒙古自治区赛 -->
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
          <b>
            &nbsp;
            &ldquo;蓝桥杯&rdquo;全国软件和信息技术专业人才大赛（内蒙古赛区）
          </b>
        </p>
        <p style="text-indent: 2em">
          2019年3月24日，内蒙古科技大学ACM程序设计协会集训队队员参加第十届&ldquo;蓝桥杯&rdquo;全国软件和信息技术专业人才大赛内蒙古赛区比赛获得一等奖9项、二等奖12项、三等奖8项。
        </p>
        <p style="text-indent: 2em">
          同时，我校还荣获优胜学校奖和优秀组织单位奖。
        </p>
        <p style="text-align: center">
          <b>
            第十届&ldquo;蓝桥杯&rdquo;全国软件和信息技术专业人才大赛
            内蒙古赛区比赛 内蒙古科技大学ACM程序设计协会获奖情况
          </b>
        </p>
        <el-table
          :fit="true"
          :data="lqbnmg2019"
          style="width: 90%; margin: 0 auto"
          border
        >
          <!-- <af-table-column
            prop="province"
            align="center"
            label="省份"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="school"
            align="center"
            label="学校"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="examid"
            align="center"
            label="准考证号"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="name"
            align="center"
            label="姓名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="student"
            align="center"
            label="学号"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="clazz"
            align="center"
            label="班级"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="subject"
            align="center"
            label="比赛科目"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="price"
            align="center"
            label="奖项"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="teacher"
            align="center"
            label="指导教师"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="enter"
            align="center"
            label="进入决赛"
            show-overflow-tooltip
          ></af-table-column>
        </el-table>
        <p style="text-align: center">
          <img
            src="//www.imustacm.cn/imustacm/2019LQB.JPG"
            style="height: 460px; text-align: center"
          />
        </p>
        <p style="text-align: center">
          第十届&ldquo;蓝桥杯&rdquo;全国软件和信息技术专业人才大赛内蒙古赛区比赛参赛队员合影
        </p>
        <br />
        <!-- 2019年团体程序设计天梯赛 -->
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
          <b>&nbsp;CCCC 中国高校计算机大赛 - 团体程序设计天梯赛</b>
        </p>
        <p style="text-indent: 2em">
          2019年3月30日，内蒙古科技大学ACM程序设计协会集训队队员参加第四届中国高校计算机大赛
          -
          团体程序设计天梯赛获得高校奖珠峰争鼎组省级一等奖1项，团队奖珠峰争鼎组省级一等奖1项、华山论剑组省级三等奖1项。
        </p>
        <p style="text-align: center">
          <b>
            第四届中国高校计算机大赛 - 团体程序设计天梯赛 高校奖
            内蒙古科技大学获奖情况
          </b>
        </p>
        <el-table
          :fit="true"
          :data="tts2019gx"
          style="width: 90%; margin: 0 auto"
          border
        >
          <af-table-column
            prop="area"
            align="center"
            label="赛区"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="province"
            align="center"
            label="省份"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="school"
            align="center"
            label="学校"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="score"
            align="center"
            label="得分"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="totalRank"
            align="center"
            label="总榜排名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="clazzRank"
            align="center"
            label="级别排名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="clazzes"
            align="center"
            label="级别"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="price1"
            align="center"
            label="国奖"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="price2"
            align="center"
            label="省奖"
            show-overflow-tooltip
          ></af-table-column>
        </el-table>
        <p style="text-align: center">
          <b>
            第四届中国高校计算机大赛 - 团体程序设计天梯赛 团队奖
            内蒙古科技大学获奖情况
          </b>
        </p>
        <el-table
          :fit="true"
          :data="tts2019td"
          style="width: 90%; margin: 0 auto"
          :span-method="spanMethod3"
          border
        >
          <el-table-column
            prop="team"
            align="center"
            label="队名"
          ></el-table-column>
          <af-table-column
            prop="score"
            align="center"
            label="得分"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="totalRank"
            align="center"
            label="总榜排名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="clazzRank"
            align="center"
            label="级别排名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="clazzes"
            align="center"
            label="级别"
            show-overflow-tooltip
          ></af-table-column>
          <!-- <af-table-column
            prop="price1"
            align="center"
            label="国奖"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="price2"
            align="center"
            label="省奖"
            show-overflow-tooltip
          ></af-table-column>
          <el-table-column
            prop="user"
            align="center"
            label="队员"
            show-overflow-tooltip
          >
            <el-table-column
              prop="name"
              align="center"
              label="姓名"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="student"
              align="center"
              label="学号"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="clazz"
              align="center"
              label="班级"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="myscore"
              align="center"
              label="得分"
              show-overflow-tooltip
            ></el-table-column>
          </el-table-column>
          <af-table-column
            prop="teacher"
            align="center"
            label="教练"
          ></af-table-column>
        </el-table>
        <p style="text-align: center">
          <img
            src="//www.imustacm.cn/imustacm/2019TTS.JPG"
            style="height: 460px; text-align: center"
          />
        </p>
        <p style="text-align: center">
          第四届中国高校计算机大赛 - 团体程序设计天梯赛参赛队员合影
        </p>
        <br />
        <!-- 2019年内蒙古自治区大学生程序设计竞赛 -->
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
          <b>&nbsp;CCPC 内蒙古自治区大学生程序设计竞赛</b>
        </p>
        <p style="text-indent: 2em">
          2019年5月12日，内蒙古科技大学ACM程序设计协会集训队队员参加内蒙古自治区第十四届大学生程序设计竞赛获得一等奖3项，二等奖2项，三等奖2项。
        </p>
        <p style="text-indent: 2em">同时，我校还荣获团体二等奖。</p>
        <p style="text-align: center">
          <b>内蒙古自治区第十四届大学生程序设计竞赛 内蒙古科技大学获奖情况</b>
        </p>
        <el-table
          :fit="true"
          :data="nmgccpc2019"
          style="width: 90%; margin: 0 auto"
          :span-method="spanMethod2"
          border
        >
          <!-- <af-table-column
            prop="school"
            align="center"
            label="学校"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="team"
            align="center"
            label="中文队名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="teamEnglish"
            align="center"
            label="英文队名"
            show-overflow-tooltip
          ></af-table-column>
          <el-table-column
            prop="rank"
            align="center"
            label="排名"
            show-overflow-tooltip
          ></el-table-column>
          <af-table-column
            prop="price"
            align="center"
            label="奖项"
            show-overflow-tooltip
          ></af-table-column>
          <el-table-column
            prop="user"
            align="center"
            label="队员"
            show-overflow-tooltip
          >
            <el-table-column
              prop="name"
              align="center"
              label="姓名"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="student"
              align="center"
              label="学号"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="clazz"
              align="center"
              label="班级"
              show-overflow-tooltip
            ></el-table-column>
          </el-table-column>
          <af-table-column
            prop="teacher"
            align="center"
            label="教练"
            show-overflow-tooltip
          ></af-table-column>
        </el-table>
        <p style="text-align: center">
          <img
            src="//www.imustacm.cn/imustacm/2019NMG.jpeg"
            style="height: 460px; text-align: center"
          />
        </p>
        <p style="text-align: center">
          内蒙古自治区第十四届大学生程序设计竞赛参赛队员及指导教师合影
        </p>
        <br />
        <!-- 2020年中国 · 东北地区大学生程序设计竞赛 -->
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
          <b>&nbsp;CCPC 中国 &middot; 东北地区大学生程序设计竞赛</b>
        </p>
        <p style="text-indent: 2em">
          2019年5月22日，内蒙古科技大学ACM程序设计协会集训队队员参加中国
          &middot; 东北地区第十三届大学生程序设计竞赛获得三等奖2项，优胜奖1项。
        </p>
        <p style="text-align: center">
          <b>
            中国 &middot; 东北地区第十三届大学生程序设计竞赛
            内蒙古科技大学获奖情况
          </b>
        </p>
        <el-table
          :fit="true"
          :data="dbccpc2019"
          style="width: 90%; margin: 0 auto"
          :span-method="spanMethod1"
          border
        >
          <!-- <af-table-column
            prop="school"
            align="center"
            label="学校"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="team"
            align="center"
            label="中文队名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="teamEnglish"
            align="center"
            label="英文队名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="price"
            align="center"
            label="奖项"
            show-overflow-tooltip
          ></af-table-column>
          <el-table-column
            prop="user"
            align="center"
            label="队员"
            show-overflow-tooltip
          >
            <el-table-column
              prop="name"
              align="center"
              label="姓名"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="student"
              align="center"
              label="学号"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="clazz"
              align="center"
              label="班级"
              show-overflow-tooltip
            ></el-table-column>
          </el-table-column>
          <af-table-column
            prop="teacher"
            align="center"
            label="教练"
            show-overflow-tooltip
          ></af-table-column>
        </el-table>
        <p style="text-align: center">
          <img
            src="//www.imustacm.cn/imustacm/2019NE.jpeg"
            style="height: 460px; text-align: center"
          />
        </p>
        <p style="text-align: center">
          中国 &middot; 东北地区第十三届大学生程序设计竞赛参赛队员合影
        </p>
        <br />
        <!-- 2020年“蓝桥杯”大赛全国总决赛 -->
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
          &nbsp;&nbsp;
          <b>
            &nbsp;
            &ldquo;蓝桥杯&rdquo;全国软件和信息技术专业人才大赛（全国总决赛）
          </b>
        </p>
        <p style="text-indent: 2em">
          2019年5月25日，内蒙古科技大学ACM程序设计协会集训队队员参加第十届&ldquo;蓝桥杯&rdquo;全国软件和信息技术专业人才大赛全国总决赛获得二等奖1项，三等奖4项，优秀奖3项。
        </p>
        <p style="text-indent: 2em">同时，我校还荣获优秀组织单位奖。</p>
        <p style="text-align: center">
          <b>
            第十届&ldquo;蓝桥杯&rdquo;全国软件和信息技术专业人才大赛 全国总决赛
            内蒙古科技大学ACM程序设计协会获奖情况
          </b>
        </p>
        <el-table
          :fit="true"
          :data="lqbgs2019"
          style="width: 90%; margin: 0 auto"
          border
        >
          <!-- <af-table-column
            prop="province"
            align="center"
            label="省份"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="school"
            align="center"
            label="学校"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="examid"
            align="center"
            label="准考证号"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="name"
            align="center"
            label="姓名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="student"
            align="center"
            label="学号"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="clazz"
            align="center"
            label="班级"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="subject"
            align="center"
            label="比赛科目"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="price"
            align="center"
            label="奖项"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="teacher"
            align="center"
            label="指导教师"
            show-overflow-tooltip
          ></af-table-column>
        </el-table>
        <br />
        <!-- 2019年中国高校计算机大赛 - 微信小程序开发赛 -->
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
          <b>&nbsp;CCCC 中国高校计算机大赛 - 微信小程序开发赛</b>
        </p>
        <p style="text-indent: 2em">
          2019年6月1日，第二届中国高校计算机大赛 -
          微信小程序开发赛比赛结果公布，内蒙古科技大学ACM程序设计协会代表队获得华北赛区二等奖1项。
        </p>
        <p style="text-align: center">
          <b>
            第二届中国高校计算机大赛 - 微信小程序开发赛
            内蒙古科技大学ACM程序设计协会获奖情况
          </b>
        </p>
        <el-table
          :fit="true"
          :data="wxxcx2019"
          style="width: 90%; margin: 0 auto"
          :span-method="spanMethod1"
          border
        >
          <af-table-column
            prop="area"
            align="center"
            label="大区"
            show-overflow-tooltip
          ></af-table-column>
          <!-- <af-table-column
            prop="school"
            align="center"
            label="参赛学校"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="price"
            align="center"
            label="奖项"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="works"
            align="center"
            label="参赛作品名称"
            show-overflow-tooltip
          ></af-table-column>
          <el-table-column
            prop="user"
            align="center"
            label="作者"
            show-overflow-tooltip
          >
            <el-table-column
              prop="name"
              align="center"
              label="姓名"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="student"
              align="center"
              label="学号"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="clazz"
              align="center"
              label="班级"
              show-overflow-tooltip
            ></el-table-column>
          </el-table-column>
          <af-table-column
            prop="teacher"
            align="center"
            label="指导教师"
            show-overflow-tooltip
          ></af-table-column>
        </el-table>
        <br />
        <!-- 2019年中国大学生程序设计竞赛秦皇岛站 -->
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
          <b>&nbsp;CCPC 中国大学生程序设计竞赛（秦皇岛站）</b>
        </p>
        <p style="text-indent: 2em">
          2019年9月22日，内蒙古科技大学ACM程序设计协会集训队队员参加2019年第五届中国大学生程序设计竞赛（秦皇岛站）现场赛获得优胜奖1项。
        </p>
        <p style="text-align: center">
          <b>
            2019年第五届中国大学生程序设计竞赛（秦皇岛站）现场赛
            内蒙古科技大学获奖情况
          </b>
        </p>
        <el-table
          :fit="true"
          :data="ccpcqhd2019"
          style="width: 90%; margin: 0 auto"
          :span-method="spanMethod1"
          border
        >
          <!-- <af-table-column
            prop="school"
            align="center"
            label="学校"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="team"
            align="center"
            label="队名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="rank"
            align="center"
            label="排名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="price"
            align="center"
            label="奖项"
            show-overflow-tooltip
          ></af-table-column>
          <el-table-column
            prop="user"
            align="center"
            label="队员"
            show-overflow-tooltip
          >
            <el-table-column
              prop="name"
              align="center"
              label="姓名"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="student"
              align="center"
              label="学号"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="clazz"
              align="center"
              label="班级"
              show-overflow-tooltip
            ></el-table-column>
          </el-table-column>
          <af-table-column
            prop="teacher"
            align="center"
            label="教练"
            show-overflow-tooltip
          ></af-table-column>
        </el-table>
        <br />
        <!-- 2019年华北五省计算机应用大赛（内蒙古赛区） -->
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
          <b>
            &nbsp;华北五省（市、自治区）及港澳台大学生计算机应用大赛（内蒙古赛区）
          </b>
        </p>
        <p style="text-indent: 2em">
          2019年10月19日，内蒙古科技大学ACM程序设计协会集训队队员参加2019年华北五省（市、自治区）及港澳台大学生计算机应用大赛内蒙古赛区比赛获得一等奖1项，三等奖1项。
        </p>
        <p style="text-align: center">
          <b>
            2019年华北五省（市、自治区）及港澳台大学生计算机应用大赛
            内蒙古赛区比赛 内蒙古科技大学ACM程序设计协会获奖情况
          </b>
        </p>
        <el-table
          :fit="true"
          :data="hbwsnmg2019"
          style="width: 90%; margin: 0 auto"
          :span-method="spanMethod4"
          border
        >
          <af-table-column
            prop="province"
            align="center"
            label="省份"
            show-overflow-tooltip
          ></af-table-column>
          <!-- <af-table-column
            prop="school"
            align="center"
            label="参赛学校"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="price"
            align="center"
            label="奖项"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="works"
            align="center"
            label="作品名称"
            show-overflow-tooltip
          ></af-table-column>
          <el-table-column
            prop="user"
            align="center"
            label="作者"
            show-overflow-tooltip
          >
            <el-table-column
              prop="name"
              align="center"
              label="姓名"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="student"
              align="center"
              label="学号"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="clazz"
              align="center"
              label="班级"
              show-overflow-tooltip
            ></el-table-column>
          </el-table-column>
          <af-table-column
            prop="teacher"
            align="center"
            label="指导教师"
            show-overflow-tooltip
          ></af-table-column>
        </el-table>
        <br />
        <!-- 2019年ICPC国际大学生程序设计竞赛亚洲区域赛（银川站） -->
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
          <b>&nbsp;ICPC 国际大学生程序设计竞赛亚洲区域赛（银川站）</b>
        </p>
        <p style="text-indent: 2em">
          2019年10月20日，内蒙古科技大学ACM程序设计协会集训队队员参加2019年第44届ICPC国际大学生程序设计竞赛亚洲区域赛（银川站）现场赛获得优胜奖2项。
        </p>
        <p style="text-align: center">
          <b>
            2019年第44届ICPC国际大学生程序设计竞赛亚洲区域赛（银川站）现场赛
            内蒙古科技大学获奖情况
          </b>
        </p>
        <el-table
          :fit="true"
          :data="icpcyc2019"
          style="width: 90%; margin: 0 auto"
          :span-method="spanMethod5"
          border
        >
          <!-- <af-table-column
            prop="school"
            align="center"
            label="学校"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="team"
            align="center"
            label="队名"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="price"
            align="center"
            label="奖项"
            show-overflow-tooltip
          ></af-table-column>
          <el-table-column
            prop="user"
            align="center"
            label="队员"
            show-overflow-tooltip
          >
            <el-table-column
              prop="name"
              align="center"
              label="姓名"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="student"
              align="center"
              label="学号"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="clazz"
              align="center"
              label="班级"
              show-overflow-tooltip
            ></el-table-column>
          </el-table-column>
          <af-table-column
            prop="teacher"
            align="center"
            label="教练"
            show-overflow-tooltip
          ></af-table-column>
        </el-table>
        <br />
        <!-- 2019年华北五省计算机应用大赛（内蒙古赛区） -->
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
          <b>
            &nbsp;华北五省（市、自治区）及港澳台大学生计算机应用大赛（总决赛）
          </b>
        </p>
        <p style="text-indent: 2em">
          2019年11月16日，内蒙古科技大学ACM程序设计协会集训队队员参加2019年华北五省（市、自治区）及港澳台大学生计算机应用大赛总决赛获得一等奖1项。
        </p>
        <p style="text-align: center">
          <b>
            2019年华北五省（市、自治区）及港澳台大学生计算机应用大赛 总决赛
            内蒙古科技大学ACM程序设计协会获奖情况
          </b>
        </p>
        <el-table
          :fit="true"
          :data="hbwszjs2019"
          style="width: 90%; margin: 0 auto"
          :span-method="spanMethod4"
          border
        >
          <af-table-column
            prop="province"
            align="center"
            label="省份"
            show-overflow-tooltip
          ></af-table-column>
          <!-- <af-table-column
            prop="school"
            align="center"
            label="参赛学校"
            show-overflow-tooltip
          ></af-table-column> -->
          <af-table-column
            prop="price"
            align="center"
            label="奖项"
            show-overflow-tooltip
          ></af-table-column>
          <af-table-column
            prop="works"
            align="center"
            label="作品名称"
            show-overflow-tooltip
          ></af-table-column>
          <el-table-column
            prop="user"
            align="center"
            label="作者"
            show-overflow-tooltip
          >
            <el-table-column
              prop="name"
              align="center"
              label="姓名"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="student"
              align="center"
              label="学号"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="clazz"
              align="center"
              label="班级"
              show-overflow-tooltip
            ></el-table-column>
          </el-table-column>
          <af-table-column
            prop="teacher"
            align="center"
            label="指导教师"
            show-overflow-tooltip
          ></af-table-column>
        </el-table>
        <br />
      </el-tab-pane>
      <!-- <el-tab-pane label="2018年">2018年</el-tab-pane>
      <el-tab-pane label="2017年">2021年</el-tab-pane>
      <el-tab-pane label="2016年">2020年</el-tab-pane>
      <el-tab-pane label="2015年">2019年</el-tab-pane>
      <el-tab-pane label="2014年">2018年</el-tab-pane>
      <el-tab-pane label="2013年">2021年</el-tab-pane>
      <el-tab-pane label="2012年">2020年</el-tab-pane>
      <el-tab-pane label="2011年">2019年</el-tab-pane>
      <el-tab-pane label="2010年">2018年</el-tab-pane>
      <el-tab-pane label="2009年">2021年</el-tab-pane>
      <el-tab-pane label="2008年">2020年</el-tab-pane>
      <el-tab-pane label="2007年">2019年</el-tab-pane>
      <el-tab-pane label="2006年">2018年</el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
  import AfTableColumn from 'af-table-column'

  export default {
    name: 'Honor',
    components: {
      AfTableColumn,
    },
    data() {
      return {
        tabPosition: 'left',
        /*
          2020年计算机设计大赛
        */
        jsjsjds2020: [
          {
            id: '84381',
            school: '内蒙古科技大学',
            price: '一等奖',
            works: '基于LLVM的新的可视化编程教学平台',
            name: '贾利凯',
            student: '1767159237',
            clazz: '软件17-2班',
            teacher: '刘新 兰孝文',
          },
          {
            name: '刘洋',
            student: '1767111112',
            clazz: '计科17-1班',
          },
          {
            name: '宋凯',
            student: '1767159114',
            clazz: '软件17-1班',
          },
        ],
        /*
          2020年东北地区大学生程序设计竞赛
        */
        dbccpc2020: [
          {
            school: '内蒙古科技大学',
            team: 'BycbKYS',
            rank: '171 / 248',
            price: '优胜奖',
            name: '刘洋',
            student: '1767111112',
            clazz: '计科17-1班',
          },
          {
            name: '曹以诚',
            student: '1867159134',
            clazz: '软件18-1班',
          },
          {
            name: '周琪雨',
            student: '1967111101',
            clazz: '计科19-1班',
          },
          {
            school: '内蒙古科技大学',
            team: '众志成城',
            rank: '197 / 248',
            price: '优胜奖',
            name: '肖元彪',
            student: '1967159137',
            clazz: '软件19-1班',
          },
          {
            name: '李朋洋',
            student: '1967159201',
            clazz: '软件19-2班',
          },
          {
            name: '董亚宁',
            student: '1967159135',
            clazz: '软件19-1班',
          },
          {
            school: '内蒙古科技大学',
            team: '教练我想打Final',
            rank: '199 / 248',
            price: '优胜奖',
            name: '何连鑫',
            student: '1867159206',
            clazz: '软件18-2班',
          },
          {
            name: '陈昱桥',
            student: '1867111239',
            clazz: '计科18-2班',
          },
          {
            name: '高航',
            student: '1867111202',
            clazz: '计科18-2班',
          },
        ],
        /*
          2020年“蓝桥杯”内蒙古自治区赛
        */
        lqbnmg2020: [
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081544',
            name: '肖元彪',
            student: '1967159137',
            clazz: '软件19-1班',
            subject: 'C/C++程序设计大学B组',
            price: '一等奖',
            teacher: '兰孝文',
            enter: '是',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081556',
            name: '许嘉宇',
            student: '1664134103',
            clazz: '计科17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '一等奖',
            teacher: '胡伟健',
            enter: '是',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081546',
            name: '董亚宁',
            student: '1967159135',
            clazz: '软件19-1班',
            subject: 'C/C++程序设计大学B组',
            price: '一等奖',
            teacher: '胡伟健',
            enter: '是',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081563',
            name: '李朋洋',
            student: '1967159201',
            clazz: '软件19-2班',
            subject: 'C/C++程序设计大学B组',
            price: '一等奖',
            teacher: '兰孝文',
            enter: '是',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081559',
            name: '陈昱桥',
            student: '1867111239',
            clazz: '计科18-2班',
            subject: 'C/C++程序设计大学B组',
            price: '一等奖',
            teacher: '丁雨',
            enter: '是',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081537',
            name: '何连鑫',
            student: '1867159206',
            clazz: '软件18-2班',
            subject: 'C/C++程序设计大学B组',
            price: '一等奖',
            teacher: '兰孝文',
            enter: '是',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081529',
            name: '闫爽',
            student: '1967159213',
            clazz: '软件19-2班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '丁雨',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081535',
            name: '周琪雨',
            student: '1967111101',
            clazz: '计科19-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '兰孝文',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081565',
            name: '刘静静',
            student: '1967219138',
            clazz: '数据19-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '丁雨',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081554',
            name: '李小露',
            student: '1967159204',
            clazz: '软件19-2班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '兰孝文',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081568',
            name: '高航',
            student: '1867111202',
            clazz: '计科18-2班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '丁雨',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081548',
            name: '李钦',
            student: '1967159111',
            clazz: '软件19-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '胡伟健',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081558',
            name: '廖鑫烨',
            student: '1967159139',
            clazz: '软件19-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '丁雨',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081527',
            name: '湛清华',
            student: '1967159104',
            clazz: '软件19-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '胡伟健',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081560',
            name: '夏俊禹',
            student: '1767111105',
            clazz: '计科17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '丁雨',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081525',
            name: '何扬飞',
            student: '1967159136',
            clazz: '软件19-1班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '胡伟健',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11081564',
            name: '郭峰',
            student: '1967159202',
            clazz: '软件19-2班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '兰孝文',
            enter: '',
          },
        ],
        /*
          2020年ACM-ICPC中国（西部）大学生程序设计竞赛
        */
        icpcxb2020: [
          {
            school: '内蒙古科技大学',
            team: '内蒙古科技大学_梅丽队',
            teamEnglish: 'imust_meiliteam',
            rank: '49 / 408',
            price: '银牌',
            name: '刘林',
            student: '1967159231',
            clazz: '软件19-2班',
          },
          {
            name: '刘杲',
            student: '1967159229',
            clazz: '软件19-2班',
          },
          {
            name: '刘晓严',
            student: '1967159234',
            clazz: '软件19-2班',
          },
          {
            school: '内蒙古科技大学',
            team: '内蒙古科技大学_糖豆人',
            teamEnglish: 'Full Guys',
            rank: '59 / 408',
            price: '银牌',
            name: '周琪雨',
            student: '1967111101',
            clazz: '计科19-1班',
          },
          {
            name: '曹以诚',
            student: '1867159134',
            clazz: '软件18-1班',
          },
          {
            name: '高航',
            student: '1867111202',
            clazz: '计科18-2班',
          },
          {
            school: '内蒙古科技大学',
            team: '内蒙古科技大学_广义相对论',
            teamEnglish: 'The Unbeatable',
            rank: '70 / 408',
            price: '银牌',
            name: '肖元彪',
            student: '1967159137',
            clazz: '软件19-1班',
          },
          {
            name: '董亚宁',
            student: '1967159135',
            clazz: '软件19-1班',
          },
          {
            name: '李朋洋',
            student: '1967159201',
            clazz: '软件19-2班',
          },
          {
            school: '内蒙古科技大学',
            team: '内蒙古科技大学_你好吗',
            teamEnglish: 'Are you OK',
            rank: '165 / 408',
            price: '铜牌',
            name: '李小露',
            student: '1967159204',
            clazz: '软件19-2班',
          },
          {
            name: '闫爽',
            student: '1967159213',
            clazz: '软件19-2班',
          },
          {
            name: '庞蔚',
            student: '1961107128',
            clazz: '软件19-2班',
          },
          {
            school: '内蒙古科技大学',
            team: '内蒙古科技大学_全场最佳',
            teamEnglish: 'Best Overall',
            rank: '196 / 408',
            price: '铜牌',
            name: '郭峰',
            student: '1967159202',
            clazz: '软件19-2班',
          },
          {
            name: '廖鑫烨',
            student: '1967159139',
            clazz: '软件19-1班',
          },
          {
            name: '王仕宽',
            student: '1967159133',
            clazz: '软件19-1班',
          },
          {
            school: '内蒙古科技大学',
            team: '内蒙古科技大学_三只程序猿',
            teamEnglish: 'Three procedural apes',
            rank: '209 / 408',
            price: '铜牌',
            name: '李钦',
            student: '1967159111',
            clazz: '软件19-1班',
          },
          {
            name: '马从文',
            student: '1967159109',
            clazz: '软件19-1班',
          },
          {
            name: '湛清华',
            student: '1967159104',
            clazz: '软件19-1班',
          },
        ],
        /*
          2020年“蓝桥杯”全国总决赛
        */
        lqbgs2020: [
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11198726',
            name: '肖元彪',
            student: '1967159137',
            clazz: '软件19-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '兰孝文',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11198728',
            name: '董亚宁',
            student: '1967159135',
            clazz: '软件19-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '胡伟健',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11198729',
            name: '李朋洋',
            student: '1967159201',
            clazz: '软件19-2班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '兰孝文',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11198727',
            name: '陈昱桥',
            student: '1867111239',
            clazz: '计科18-2班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '丁雨',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '11198723',
            name: '许嘉宇',
            student: '1664134103',
            clazz: '计科17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '优秀奖',
            teacher: '胡伟健',
          },
        ],
        /*
          2020年内蒙古自治区大学生程序设计竞赛
        */
        nmgccpc2020: [
          {
            school: '内蒙古科技大学',
            team: 'Fall Guys',
            rank: '2 / 177',
            price: '一等奖',
            name: '周琪雨',
            student: '1967111101',
            clazz: '计科19-1班',
            teacher: '兰孝文',
          },
          {
            name: '曹以诚',
            student: '1867159134',
            clazz: '软件18-1班',
          },
          {
            name: '刘洋',
            student: '1767111112',
            clazz: '计科17-1班',
          },
          {
            school: '内蒙古科技大学',
            team: 'new个对象给楼下',
            rank: '12 / 177',
            price: '二等奖',
            name: '肖元彪',
            student: '1967159137',
            clazz: '软件19-1班',
            teacher: '兰孝文',
          },
          {
            name: '董亚宁',
            student: '1967159135',
            clazz: '软件19-1班',
          },
          {
            name: '李朋洋',
            student: '1967159201',
            clazz: '软件19-2班',
          },
          {
            school: '内蒙古科技大学',
            team: 'miao_miao_miao',
            rank: '25 / 177',
            price: '二等奖',
            name: '李钦',
            student: '1967159111',
            clazz: '软件19-1班',
            teacher: '兰孝文',
          },
          {
            name: '马从文',
            student: '1967159109',
            clazz: '软件19-1班',
          },
          {
            name: '高航',
            student: '1867111202',
            clazz: '计科18-2班',
          },
          {
            school: '内蒙古科技大学',
            team: 'Nuyoah',
            rank: '26 / 177',
            price: '二等奖 & 最佳女队奖',
            name: '陈昱桥',
            student: '1867111239',
            clazz: '计科18-2班',
            teacher: '丁雨',
          },
          {
            name: '石艳霞',
            student: '1867159239',
            clazz: '软件18-2班',
          },
          {
            name: '李辰宇',
            student: '1867111238',
            clazz: '计科18-2班',
          },
          {
            school: '内蒙古科技大学',
            team: '别骂了别骂了',
            rank: '33 / 177',
            price: '三等奖',
            name: '郭峰',
            student: '1967159202',
            clazz: '软件19-2班',
            teacher: '兰孝文',
          },
          {
            name: '廖鑫烨',
            student: '1967159139',
            clazz: '软件19-1班',
          },
          {
            name: '庞蔚',
            student: '1961107128',
            clazz: '软件19-2班',
          },
          {
            school: '内蒙古科技大学',
            team: 'Are you OK',
            rank: '34 / 177',
            price: '三等奖',
            name: '李小露',
            student: '1967159204',
            clazz: '软件19-2班',
            teacher: '兰孝文',
          },
          {
            name: '湛清华',
            student: '1967159104',
            clazz: '软件19-1班',
          },
          {
            name: '闫爽',
            student: '1967159213',
            clazz: '软件19-2班',
          },
          {
            school: '内蒙古科技大学',
            team: 'SPLIT-NEW-WORLD',
            rank: '43 / 177',
            price: '三等奖',
            name: '刘林',
            student: '1967159231',
            clazz: '软件19-2班',
            teacher: '兰孝文',
          },
          {
            name: '刘晓严',
            student: '1967159234',
            clazz: '软件19-2班',
          },
          {
            name: '刘杲',
            student: '1967159229',
            clazz: '软件19-2班',
          },
        ],
        /*
          2019年“蓝桥杯”内蒙古自治区赛
        */
        lqbnmg2019: [
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368469',
            name: '卢志皓',
            student: '1667159130',
            clazz: '软件16-1班',
            subject: 'C/C++程序设计大学A组',
            price: '一等奖',
            teacher: '兰孝文',
            enter: '是',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368471',
            name: '姜威',
            student: '1667159222',
            clazz: '软件16-2班',
            subject: 'C/C++程序设计大学A组',
            price: '一等奖',
            teacher: '兰孝文',
            enter: '是',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368397',
            name: '陈诗萌',
            student: '1667159237',
            clazz: '软件16-2班',
            subject: 'C/C++程序设计大学B组',
            price: '一等奖',
            teacher: '丁雨',
            enter: '是',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368361',
            name: '张雷红',
            student: '1767111126',
            clazz: '计科17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '一等奖',
            teacher: '兰孝文',
            enter: '是',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368387',
            name: '陈昱桥',
            student: '1867111239',
            clazz: '计科18-2班',
            subject: 'C/C++程序设计大学B组',
            price: '一等奖',
            teacher: '兰孝文',
            enter: '是',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368349',
            name: '李浩',
            student: '1767159234',
            clazz: '软件17-2班',
            subject: 'C/C++程序设计大学B组',
            price: '一等奖',
            teacher: '丁雨',
            enter: '是',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368359',
            name: '聂俊',
            student: '1767111124',
            clazz: '计科17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '一等奖',
            teacher: '兰孝文',
            enter: '是',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368363',
            name: '刘鹏',
            student: '1667159125',
            clazz: '软件16-1班',
            subject: 'C/C++程序设计大学B组',
            price: '一等奖',
            teacher: '丁雨',
            enter: '是',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368367',
            name: '贾利凯',
            student: '1767159237',
            clazz: '软件17-2班',
            subject: 'C/C++程序设计大学B组',
            price: '一等奖',
            teacher: '兰孝文',
            enter: '是',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368467',
            name: '刘洋',
            student: '1767111112',
            clazz: '计科17-1班',
            subject: 'C/C++程序设计大学A组',
            price: '二等奖',
            teacher: '丁雨',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368395',
            name: '曹以诚',
            student: '1867159134',
            clazz: '软件18-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '丁雨',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368399',
            name: '宋凯',
            student: '1767159114',
            clazz: '软件17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '丁雨',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368411',
            name: '高航',
            student: '1867111202',
            clazz: '计科18-2班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '丁雨',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368351',
            name: '李小雨',
            student: '1667159221',
            clazz: '软件16-2班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '兰孝文',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368357',
            name: '龚倩',
            student: '1667159136',
            clazz: '软件16-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '丁雨',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368353',
            name: '王剑波',
            student: '1767111117',
            clazz: '计科17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '兰孝文',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368383',
            name: '刘莹',
            student: '1767111131',
            clazz: '计科17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '丁雨',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368403',
            name: '马亚文',
            student: '1867111103',
            clazz: '计科18-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '兰孝文',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368365',
            name: '胡克',
            student: '1767159139',
            clazz: '软件17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '丁雨',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368379',
            name: '石艳霞',
            student: '1867159239',
            clazz: '软件18-2班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '兰孝文',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368355',
            name: '方俊',
            student: '1767159109',
            clazz: '软件17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '兰孝文',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368385',
            name: '何连鑫',
            student: '1867159206',
            clazz: '软件18-2班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '丁雨',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368375',
            name: '刘继逍',
            student: '1767159135',
            clazz: '软件17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '兰孝文',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368393',
            name: '李森',
            student: '1867159127',
            clazz: '软件18-1班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '兰孝文',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368391',
            name: '韩鑫宏',
            student: '1767118203',
            clazz: '电信17-2班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '丁雨',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368373',
            name: '刘岳锋',
            student: '1767159106',
            clazz: '软件17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '丁雨',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368381',
            name: '王志强',
            student: '1666155214',
            clazz: '软件17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '兰孝文',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368389',
            name: '黄国庆',
            student: '1867111224',
            clazz: '计科18-2班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '兰孝文',
            enter: '',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10368455',
            name: '敖元津',
            student: '1767111128',
            clazz: '计科17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '丁雨',
            enter: '',
          },
        ],
        /*
          2019年团体程序设计天梯赛高校奖
        */
        tts2019gx: [
          {
            area: '华北区',
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            score: '1723',
            totalRank: '175',
            clazzRank: '41',
            clazzes: '珠峰争鼎',
            price1: '',
            price2: '一等奖',
          },
        ],
        /*
          2019年团体程序设计天梯赛团队奖
        */
        tts2019td: [
          {
            team: '事了拂衣去 深藏AC名',
            score: '989',
            totalRank: '354',
            clazzRank: '101',
            clazzes: '珠峰争鼎',
            price1: '成功参赛',
            price2: '一等奖',
            name: '姜威',
            student: '1667159222',
            clazz: '软件16-2班',
            myscore: '149',
            teacher: '丁雨 兰孝文',
          },
          {
            name: '卢志皓',
            student: '1667159130',
            clazz: '软件16-1班',
            myscore: '130',
          },
          {
            name: '陈诗萌',
            student: '1667159237',
            clazz: '软件16-2班',
            myscore: '130',
          },
          {
            name: '刘洋',
            student: '1767111112',
            clazz: '计科17-1班',
            myscore: '128',
          },
          {
            name: '李浩',
            student: '1767159234',
            clazz: '软件17-2班',
            myscore: '110',
          },
          {
            name: '张雷红',
            student: '1767111126',
            clazz: '计科17-1班',
            myscore: '97',
          },
          {
            name: '宋凯',
            student: '1767159114',
            clazz: '软件17-1班',
            myscore: '82',
          },
          {
            name: '王剑波',
            student: '1767111117',
            clazz: '计科17-1班',
            myscore: '71',
          },
          {
            name: '方俊',
            student: '1767159109',
            clazz: '软件17-1班',
            myscore: '47',
          },
          {
            name: '贾利凯',
            student: '1767159237',
            clazz: '软件17-2班',
            myscore: '45',
          },
          {
            team: '鸿鹄高飞 一举AK',
            score: '734',
            totalRank: '569',
            clazzRank: '436',
            clazzes: '华山论剑',
            price1: '成功参赛',
            price2: '三等奖',
            name: '曹以诚',
            student: '1867159134',
            clazz: '软件18-1班',
            myscore: '110',
            teacher: '丁雨 兰孝文',
          },
          {
            name: '聂俊',
            student: '1767111124',
            clazz: '计科17-1班',
            myscore: '83',
          },
          {
            name: '刘鹏',
            student: '1667159125',
            clazz: '软件16-1班',
            myscore: '81',
          },
          {
            name: '龚倩',
            student: '1667159136',
            clazz: '软件16-1班',
            myscore: '80',
          },
          {
            name: '许嘉宇',
            student: '1664134103',
            clazz: '计科17-1班',
            myscore: '79',
          },
          {
            name: '陈昱桥',
            student: '1867111239',
            clazz: '软件18-2班',
            myscore: '77',
          },
          {
            name: '刘岳锋',
            student: '1767159106',
            clazz: '软件17-1班',
            myscore: '74',
          },
          {
            name: '何连鑫',
            student: '1867159206',
            clazz: '软件18-2班',
            myscore: '60',
          },
          {
            name: '刘莹',
            student: '1767111131',
            clazz: '计科17-1班',
            myscore: '45',
          },
          {
            name: '高航',
            student: '1867111202',
            clazz: '计科18-2班',
            myscore: '45',
          },
        ],
        /*
          2019年内蒙古自治区大学生程序设计竞赛
        */
        nmgccpc2019: [
          {
            school: '内蒙古科技大学',
            team: '傻鱼、蠢鱼、笨鱼',
            teamEnglish: 'Stupid Fish x 3',
            rank: '1 / 120',
            price: '一等奖',
            name: '姜威',
            student: '1667159222',
            clazz: '软件16-2班',
            teacher: '丁雨',
          },
          {
            name: '龚倩',
            student: '1667159136',
            clazz: '软件16-1班',
          },
          {
            name: '陈诗萌',
            student: '1667159237',
            clazz: '软件16-2班',
          },
          {
            school: '内蒙古科技大学',
            team: '@科大第三交通委',
            teamEnglish: '@HKUST Third Traffic Commission',
            rank: '5 / 120',
            price: '一等奖',
            name: '卢志皓',
            student: '1667159130',
            clazz: '软件16-1班',
            teacher: '兰孝文',
          },
          {
            name: '王剑波',
            student: '1767111117',
            clazz: '计科17-1班',
          },
          {
            name: '李浩',
            student: '1767159234',
            clazz: '软件17-2班',
          },
          {
            school: '内蒙古科技大学',
            team: '教练我想打Final',
            teamEnglish: 'Couch，I want to fight WF',
            rank: '6 / 120',
            price: '一等奖',
            name: '刘洋',
            student: '1767159112',
            clazz: '软件17-1班',
            teacher: '兰孝文',
          },
          {
            name: '方俊',
            student: '1767159109',
            clazz: '软件17-1班',
          },
          {
            name: '贾利凯',
            student: '1767159237',
            clazz: '软件17-2班',
          },
          {
            school: '内蒙古科技大学',
            team: '纵使CE 依然嚣张',
            teamEnglish: 'Even if CE is still arrogant',
            rank: '19 / 120',
            price: '二等奖',
            name: '曹以诚',
            student: '1867159134',
            clazz: '软件18-1班',
            teacher: '兰孝文',
          },
          {
            name: '陈昱桥',
            student: '1867111239',
            clazz: '计科18-2班',
          },
          {
            name: '马亚文',
            student: '1867111103',
            clazz: '计科18-1班',
          },
          {
            school: '内蒙古科技大学',
            team: '船夫陆战队',
            teamEnglish: 'Boatman Marine Corps',
            rank: '24 / 120',
            price: '二等奖',
            name: '胡克',
            student: '1767159139',
            clazz: '软件17-1班',
            teacher: '丁雨',
          },
          {
            name: '宋凯',
            student: '1767159114',
            clazz: '软件17-1班',
          },
          {
            name: '韩鑫宏',
            student: '1767118203',
            clazz: '电信17-2班',
          },
          {
            school: '内蒙古科技大学',
            team: '汉芯打磨团队',
            teamEnglish: 'Hanxin Polishing Team',
            rank: '42 / 120',
            price: '三等奖',
            name: '刘鹏',
            student: '1667159125',
            clazz: '软件16-1班',
            teacher: '兰孝文',
          },
          {
            name: '张雷红',
            student: '1767111126',
            clazz: '计科17-1班',
          },
          {
            name: '聂俊',
            student: '1767111124',
            clazz: '计科17-1班',
          },
          {
            school: '内蒙古科技大学',
            team: '代码敲不队',
            teamEnglish: 'The codes of team are always false',
            rank: '60 / 120',
            price: '三等奖',
            name: '刘继逍',
            student: '1767159135',
            clazz: '软件17-1班',
            teacher: '丁雨',
          },
          {
            name: '黄国庆',
            student: '1867111224',
            clazz: '计科18-2班',
          },
          {
            name: '高航',
            student: '1867111202',
            clazz: '计科18-2班',
          },
        ],
        /*
          2019年东北地区大学生程序设计竞赛
        */
        dbccpc2019: [
          {
            school: '内蒙古科技大学',
            team: '傻鱼、蠢鱼、笨鱼',
            teamEnglish: 'Stupid Fish x 3',
            price: '三等奖',
            name: '姜威',
            student: '1667159222',
            clazz: '软件16-2班',
            teacher: '兰孝文',
          },
          {
            name: '陈诗萌',
            student: '1667159237',
            clazz: '软件16-2班',
          },
          {
            name: '刘鹏',
            student: '1667159125',
            clazz: '软件16-1班',
          },
          {
            school: '内蒙古科技大学',
            team: '你读题像縩續涃',
            teamEnglish: 'You read the title like Cai Xukun',
            price: '三等奖',
            name: '卢志皓',
            student: '1667159130',
            clazz: '软件16-1班',
            teacher: '兰孝文',
          },
          {
            name: '李浩',
            student: '1767159234',
            clazz: '软件17-2班',
          },
          {
            name: '王剑波',
            student: '1767111117',
            clazz: '计科17-1班',
          },
          {
            school: '内蒙古科技大学',
            team: '教练我想打Final',
            teamEnglish: 'Couch，I want to fight WF',
            price: '优胜奖',
            name: '刘洋',
            student: '1767159112',
            clazz: '软件17-1班',
            teacher: '兰孝文',
          },
          {
            name: '方俊',
            student: '1767159109',
            clazz: '软件17-1班',
          },
          {
            name: '贾利凯',
            student: '1767159237',
            clazz: '软件17-2班',
          },
        ],
        /*
          2019年“蓝桥杯”全国总决赛
        */
        lqbgs2019: [
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10446014',
            name: '张雷红',
            student: '1767111126',
            clazz: '计科17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '二等奖',
            teacher: '兰孝文',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10447017',
            name: '卢志皓',
            student: '1667159130',
            clazz: '软件16-1班',
            subject: 'C/C++程序设计大学A组',
            price: '三等奖',
            teacher: '兰孝文',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10446010',
            name: '李浩',
            student: '1767159234',
            clazz: '软件17-2班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '丁雨',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10446012',
            name: '聂俊',
            student: '1767111124',
            clazz: '计科17-1班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '兰孝文',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10446022',
            name: '陈诗萌',
            student: '1667159237',
            clazz: '软件16-2班',
            subject: 'C/C++程序设计大学B组',
            price: '三等奖',
            teacher: '丁雨',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10446020',
            name: '陈昱桥',
            student: '1867111239',
            clazz: '计科18-2班',
            subject: 'C/C++程序设计大学B组',
            price: '优秀奖',
            teacher: '兰孝文',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10446016',
            name: '刘鹏',
            student: '1667159125',
            clazz: '软件16-1班',
            subject: 'C/C++程序设计大学B组',
            price: '优秀奖',
            teacher: '丁雨',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            examid: '10446018',
            name: '贾利凯',
            student: '1767159237',
            clazz: '软件17-2班',
            subject: 'C/C++程序设计大学B组',
            price: '优秀奖',
            teacher: '兰孝文',
          },
        ],
        /*
          2019年中国大学生计算机大赛 - 微信小程序开发赛
        */
        wxxcx2019: [
          {
            area: '华北赛区',
            school: '内蒙古科技大学',
            price: '二等奖',
            works: '智冠',
            name: '贾利凯',
            student: '1767159237',
            clazz: '软件17-2班',
            teacher: '丁雨',
          },
          {
            name: '刘洋',
            student: '1767111112',
            clazz: '计科17-1班',
          },
          {
            name: '宋凯',
            student: '1767159114',
            clazz: '软件17-1班',
          },
        ],
        /*
          2019年中国大学生程序设计竞赛（秦皇岛站）
        */
        ccpcqhd2019: [
          {
            school: '内蒙古科技大学',
            team: 'IMUST - 不想TLE',
            rank: '待更新',
            price: '优胜奖',
            name: '李浩',
            student: '1767159234',
            clazz: '软件17-2班',
            teacher: '兰孝文',
          },
          {
            name: '王剑波',
            student: '1767111117',
            clazz: '计科17-1班',
          },
          {
            name: '曹以诚',
            student: '1867159134',
            clazz: '软件18-1班',
          },
        ],
        /*
          2019年华北五省计算机应用大赛（内蒙古赛区）
        */
        hbwsnmg2019: [
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            price: '一等奖',
            works: '基于OpenCV的智力开发平台',
            name: '贾利凯',
            student: '1767159237',
            clazz: '软件17-2班',
            teacher: '丁雨 兰孝文',
          },
          {
            name: '刘洋',
            student: '1767111112',
            clazz: '计科17-1班',
          },
          {
            name: '宋凯',
            student: '1767159114',
            clazz: '软件17-1班',
          },
          {
            name: '方俊',
            student: '1767159109',
            clazz: '软件17-1班',
          },
          {
            name: '曹以诚',
            student: '1867159134',
            clazz: '软件18-1班',
          },
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            price: '三等奖',
            works: '微课堂',
            name: '张雷红',
            student: '1767111126',
            clazz: '计科17-1班',
            teacher: '兰孝文 丁雨',
          },
          {
            name: '聂俊',
            student: '1767111124',
            clazz: '计科17-1班',
          },
          {
            name: '王剑波',
            student: '1767111117',
            clazz: '计科17-1班',
          },
          {
            name: '高航',
            student: '1867111202',
            clazz: '计科18-2班',
          },
          {
            name: '周高源',
            student: '1767111103',
            clazz: '计科17-1班',
          },
        ],
        /*
          2019年ICPC国际大学生程序设计竞赛亚洲区域赛（银川站）
        */
        icpcyc2019: [
          {
            school: '内蒙古科技大学',
            team: 'WA Automaton',
            price: '优胜奖',
            name: '姜威',
            student: '1667159222',
            clazz: '软件16-2班',
            teacher: '兰孝文',
          },
          {
            name: '贾利凯',
            student: '1767159237',
            clazz: '软件17-2班',
          },
          {
            name: '刘洋',
            student: '1767111112',
            clazz: '计科17-1班',
          },
          {
            school: '内蒙古科技大学',
            team: 'A_cup_of_latte_please',
            price: '优胜奖',
            name: '李浩',
            student: '1767159234',
            clazz: '软件17-2班',
            teacher: '兰孝文',
          },
          {
            name: '王剑波',
            student: '1767111117',
            clazz: '计科17-1班',
          },
          {
            name: '曹以诚',
            student: '1867159134',
            clazz: '软件18-1班',
          },
        ],
        /*
          2019年华北五省计算机应用大赛（总决赛）
        */
        hbwszjs2019: [
          {
            province: '内蒙古自治区',
            school: '内蒙古科技大学',
            price: '一等奖',
            works: '基于OpenCV的智力开发平台',
            name: '贾利凯',
            student: '1767159237',
            clazz: '软件17-2班',
            teacher: '丁雨 兰孝文',
          },
          {
            name: '刘洋',
            student: '1767111112',
            clazz: '计科17-1班',
          },
          {
            name: '宋凯',
            student: '1767159114',
            clazz: '软件17-1班',
          },
          {
            name: '方俊',
            student: '1767159109',
            clazz: '软件17-1班',
          },
          {
            name: '曹以诚',
            student: '1867159134',
            clazz: '软件18-1班',
          },
        ],
      }
    },
    created() {},
    mounted() {},
    methods: {
      spanMethod1({ row, column, rowIndex, columnIndex }) {
        if (columnIndex < 3 || columnIndex > 5) {
          if (rowIndex % 3 == 0) {
            return [3, 1]
          } else {
            return [0, 0]
          }
        }
      },
      spanMethod2({ row, column, rowIndex, columnIndex }) {
        if (columnIndex < 4 || columnIndex > 6) {
          if (rowIndex % 3 == 0) {
            return [3, 1]
          } else {
            return [0, 0]
          }
        }
      },
      spanMethod3({ row, column, rowIndex, columnIndex }) {
        if (columnIndex < 6 || columnIndex > 9) {
          if (rowIndex % 10 == 0) {
            return [10, 1]
          } else {
            return [0, 0]
          }
        }
      },
      spanMethod4({ row, column, rowIndex, columnIndex }) {
        if (columnIndex < 3 || columnIndex > 5) {
          if (rowIndex % 5 == 0) {
            return [5, 1]
          } else {
            return [0, 0]
          }
        }
      },
      spanMethod5({ row, column, rowIndex, columnIndex }) {
        if (columnIndex < 2 || columnIndex > 4) {
          if (rowIndex % 3 == 0) {
            return [3, 1]
          } else {
            return [0, 0]
          }
        }
      },
    },
  }
</script>
