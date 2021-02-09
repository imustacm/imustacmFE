<template>
  <div class="faqs" style="margin: 10px 0px">
    <div style="padding: 10px 20px">
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
        <b>&nbsp;关于IMUSTOJ</b>
      </p>
      <p style="text-indent: 2em; line-height: 25px">
        IMUSTOJ是“Inner Mongolia University of Science and Technology Online
        Judge”的简称，即“内蒙古科技大学在线评判系统”。OJ是“Online
        Judge”的简称，它是一个在线判题系统。用户可以对于给定的题目要求，在线提交使用多种语言中的某一种（如C、C++、Java、Python3）编写的程序源代码，系统对用户提交的源代码进行编译和执行，并通过预先设计的测试数据来检验程序源代码的正确性。
        <br />
        <span style="margin-left: 2em">
          IMUSTOJ是IMUSTACM系统的一个模块，是IMUSTACM实验室开发团队自主研发的OJ系统。
        </span>
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
        IMUSTOJ系统对应的编译器和编译选项如下：
      </p>
      <el-table
        :fit="true"
        :data="languageTable"
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
        <b>&nbsp;评判结果说明</b>
      </p>
      <p style="text-indent: 2em; line-height: 25px">
        用户提交代码后，判题机将返回给用户评判结果。具体的评判结果说明如下：
      </p>
      <el-table
        :fit="true"
        :data="resultTable"
        style="width: 90%; margin: 0 auto"
        border
      >
        <el-table-column
          prop="result"
          align="center"
          label="评判结果"
          width="260px"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="description"
          align="center"
          label="说明"
        ></el-table-column>
      </el-table>
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
        <b>&nbsp;程序的输入输出</b>
      </p>
      <p style="text-indent: 2em; line-height: 25px">
        你的程序应该从标准输入
        <code>stdin</code>
        （Standard Input）获取输入数据并将结果输出到标准输出
        <code>stdout</code>
        （Standard
        Output）。用户提交的程序不允许直接读写文件，如果这样做可能会被判为运行时错误
        （Runtime
        Error）。另外，任何超出题目要求的输出（即使只是打印了一行提示，如未按题目要求输出了“请输入一个数：”、“Please
        input a number :”等提示语）都会导致答案错误（Wrong
        Answer），因为OJ系统是基于输出内容的完全匹配来评判的。
        <br />
        <span style="margin-left: 2em">
          为了方便解释，下面给出“题目1005：输入入门（1）”的示例源码以供参考：
        </span>
      </p>
      <div style="width: 90%; margin: 0 auto"><p>C：</p></div>
      <div v-html="sampleC" class="sample"></div>
      <div style="width: 90%; margin: 0 auto"><p>C++：</p></div>
      <div v-html="sampleCpp" class="sample"></div>
      <div style="width: 90%; margin: 0 auto"><p>Java：</p></div>
      <div v-html="sampleJava" class="sample"></div>
      <div style="width: 90%; margin: 0 auto"><p>Python3：</p></div>
      <div v-html="samplePython3" class="sample"></div>
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
        <b>&nbsp;竞赛计分排名规则</b>
      </p>
      <p style="text-indent: 2em; line-height: 25px">
        IMUSTOJ系统支持SOLO、ICPC、OI、IOI四种竞赛赛制。具体计分排名规则如下：
      </p>
      <el-table
        :fit="true"
        :data="contestTable"
        style="width: 90%; margin: 0 auto"
        border
      >
        <el-table-column
          prop="type"
          align="center"
          width="100px"
          label="赛制"
        ></el-table-column>
        <el-table-column
          prop="role"
          align="center"
          label="计分排名规则"
        ></el-table-column>
      </el-table>
      <br />
    </div>
  </div>
</template>

<script>
  import AfTableColumn from 'af-table-column'

  export default {
    name: 'Faqs',
    components: {
      AfTableColumn,
    },
    data() {
      return {
        sampleC:
          '<pre>#include &lt;stdio.h&gt;\nint main()\n{\n    int a, b;\n    while(scanf("%d %d", &amp;a, &amp;b) != EOF)\n        printf("%d\\n", a + b);\n    return 0;\n}</pre>',
        sampleCpp:
          '<pre>#include &lt;iostream&gt;\nusing namespace std;\nint main()\n{\n    int a, b;\n    while(cin >> a >> b)\n        cout << a + b << endl;\n    return 0;\n}\n</pre>',
        sampleJava:
          '<pre>import java.util.*;\npublic class Main {  //Java语言的代码类名必须为Main\n    public static void main(String args[]) {\n        Scanner cin = new Scanner(System.in);\n        int a, b;\n        while(cin.hasNext()) {\n            a = cin.nextInt();\n            b = cin.nextInt();\n            System.out.println(a + b);\n        }\n    }\n}</pre>',
        samplePython3:
          '<pre>while True:\n    a, b = map(int, input().split())\n    print(a + b)</pre>',
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
          {
            language: 'Python3',
            version: 'Python 3.5',
            setting: 'Python -m py_compile Main.py',
          },
        ],
        contestTable: [
          {
            type: 'SOLO',
            role:
              '每道题目都有一个分数N。用户本道题的得分由基础得分、最速得分、额外得分和错误得分四部分构成。基础得分：正确解答题目获得50%N，未正确解答不得分。最速得分：最快答题题目获得10%N，非最快解答题目不得分。额外得分：本题分数N会随时间线性减少，每分钟减少2分，正确解答时本题的剩余分数为额外得分。错误得分：正确解答前的每次不正确的解答，获得负50分。其中，额外得分和错误得分之和最小为0。具体得分的计算公式为：Score = 50% × N + max(0, N - 2 × 正确解答所用分钟 - 50 × 错误解答次数) + (最快答题 ? 10% × N : 0)。榜单排名方式：按解题数从多到少排序，如果解题数相同，则按得分总和从高到低排序。',
          },
          {
            type: 'ICPC',
            role:
              '每道题目从竞赛开始到正确解答为止所用的时间，其间每次错误解答加罚20分钟，未正确解答的题目不记时，计算所有题目总用时进行排名。榜单排名方式：解题数从多到少排序，如果解题数相同，则按时间从少到多排序。',
          },
          {
            type: 'OI',
            role:
              '每道题目提交后系统不做反馈，比赛结束前选手无法得知自己的提交评判状态。对于每道题的多个测试点，根据通过的测试点的数量和每个测试点的分数获得本题的总分数。每道题不限制提交次数，仅以最后一次提交为准，比赛过程中不显示实时排名。榜单排名方式：比赛结束后按照总得分从多到少进行排名。',
          },
          {
            type: 'IOI',
            role:
              '每道题目提交后系统进行反馈，可以实时看到自己该题的得分情况。对于每道题的多个测试点，根据通过的测试点的数量和每个测试点的分数获得本题的总分数。每道题不限制提交次数，仅以最后一次提交为准，比赛过程中显示实时排名。榜单排名方式：按照总得分从多到少进行排名。',
          },
        ],
        resultTable: [
          {
            result: '等待（Pending）',
            description:
              '判题服务器繁忙，你提交的代码正在排队，不能及时反馈回结果，通常只需要等待一会儿即可。',
          },
          {
            result: '等待重判（Pending Rejudge）',
            description:
              '因为测试数据更新或其他原因，系统将重新评判你提交的代码。',
          },
          {
            result: '编译中（Compiling）',
            description: '你提交的代码正在被编译。',
          },
          {
            result: '运行并评判（Running & Judging）',
            description: '你提交的代码正在被运行和评判。',
          },
          {
            result: '正确（Accepted）',
            description: '你提交的代码满足题目要求，程序通过。',
          },
          {
            result: '答案错误（Wrong Answer）',
            description:
              '答案不对。可以检查数据范围、程序逻辑是否符合题目要求，也可能是你理解错了题意或者还有你没想到的地方。',
          },
          {
            result: '时间超限（Time Limit Exceeded）',
            description:
              '运行超出了时间限制，检查在某些情况下是否会产生死循环，或者对于题目应该有更快的解决方法。',
          },
          {
            result: '内存超限（Memory Limit Exceeded）',
            description:
              '运行超出了内存限制，数据可能需要压缩，或者检查是否有内存泄露。',
          },
          {
            result: '运行错误（Runtime Error）',
            description:
              '运行时错误，可能是非法的内存访问、数组越界、指针漂移、调用禁用的系统函数等。',
          },
          {
            result: '编译错误（Compile Error）',
            description:
              '你的程序语法都不符合要求，根本不能运行。请检查你的程序代码，并查看是否是提交时选错了语言。',
          },
        ],
      }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>

<style lang="scss" scoped>
  code {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    white-space: nowrap;
    background-color: #f9f2f4;
    border-radius: 4px;
  }
  .sample {
    width: 89%;
    margin: 0 auto;
    overflow: hidden;
    border: 1px solid #dedede;
    background: #f8f8f8;
    padding: 2px 12px;
    color: #444;
    //margin: 12px 0;
    word-wrap: break-word;
    word-break: break-all;
    white-space: pre-line;
  }
</style>
