<template>
  <div>
    <div class="box" ref="box">
      <div class="left">
        <div class="problemInfo">
          <span class="problemTitle">
            <b>{{ id }}. 整数求和</b>
          </span>
          <el-tag size="small" class="problemTag firstTag" type="danger">
            困难
          </el-tag>
          <el-tag size="small" effect="plain" class="problemTag">
            基本输入输出
          </el-tag>
          <el-tag size="small" effect="plain" class="problemTag">
            滑动窗口
          </el-tag>
          <br />
          <p class="problemSub">
            <span class="limit">时间限制：1000ms</span>
            <span class="limit">内存限制：65535KB</span>
            <span class="limit">提交：1233</span>
            <span class="limit">通过：929</span>
            <span class="limit" style="color: red">Special Judge</span>
          </p>
          <hr class="hrCenter" />
          <p class="problemDesc">
            <span class="infoTitle"><b>题目描述</b></span>
          </p>
          <p class="problemDescCon">
            <span class="">
              给定一个整数数组
              <code>nums</code>
              和一个整数目标值
              <code>target</code>
              ，
              请你在该数组中找出和为目标值的那两个整数，并返回它们的数组下标。
              <br />
              你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两次。
            </span>
          </p>
          <p class="problemInp">
            <span class="infoTitle"><b>输入</b></span>
          </p>
          <p class="problemInpCon">
            <span class="">
              输入有两行。第一行为一个整数数组
              <code>nums</code>
              ，第二行为一个整数目标值
              <code>target</code>
              。
            </span>
          </p>
          <p class="problemOup">
            <span class="infoTitle"><b>输出</b></span>
          </p>
          <p class="problemOupCon">
            <span class="">
              输出一行，为满足题目要求的两个整数。请按从小到大的顺序返回答案。用空格分隔开。
            </span>
          </p>
          <p class="problemSiI">
            <span class="infoTitle">
              <b class="limit">样例输入1</b>
              <el-button
                class="copyBtn"
                size="mini"
                plain
                style="padding: 3px 10px"
                data-clipboard-action="copy"
                data-clipboard-target="#input1"
                @click="copy"
              >
                复制
              </el-button>
            </span>
          </p>
          <p class="problemOupCon">
            <span class="">
              <pre class="sample" id="input1">
1 2 3 4 5 6
                11
              </pre>
            </span>
          </p>
          <p class="problemSiO">
            <span class="infoTitle">
              <b class="limit">样例输出1</b>
              <el-button
                class="copyBtn"
                size="mini"
                plain
                style="padding: 3px 10px"
                data-clipboard-action="copy"
                data-clipboard-target="#output1"
                @click="copy"
              >
                复制
              </el-button>
            </span>
          </p>
          <p class="problemOupCon">
            <span class="">
              <pre class="sample" id="output1">
5 6
              </pre>
            </span>
          </p>
          <p class="problemSiI">
            <span class="infoTitle">
              <b class="limit">样例输入2</b>
              <el-button
                class="copyBtn"
                size="mini"
                plain
                style="padding: 3px 10px"
                data-clipboard-action="copy"
                data-clipboard-target="#input2"
                @click="copy"
              >
                复制
              </el-button>
            </span>
          </p>
          <p class="problemOupCon">
            <span class="">
              <pre class="sample" id="input2">
-1 0 -8 10 2
                1
              </pre>
            </span>
          </p>
          <p class="problemSiO">
            <span class="infoTitle">
              <b class="limit">样例输出2</b>
              <el-button
                class="copyBtn"
                size="mini"
                plain
                style="padding: 3px 10px"
                data-clipboard-action="copy"
                data-clipboard-target="#output2"
                @click="copy"
              >
                复制
              </el-button>
            </span>
          </p>
          <p class="problemOupCon">
            <span class="">
              <pre class="sample" id="output2">
-1 2
              </pre>
            </span>
          </p>
          <p class="problemInp">
            <span class="infoTitle"><b>提示</b></span>
          </p>
          <p class="problemInpCon">
            <span class="">随便写，这题还过不了那你写个JB的代码。</span>
          </p>
        </div>
      </div>
      <div class="resize" title="收缩侧边栏">⋮</div>
      <div class="right" id="right"></div>
    </div>
    <div class="problemBottom">
      <el-row>
        <el-col :span="12">
          <el-button type="primary" plain class="btn">
            <vab-icon :icon="['fas', 'angle-left']"></vab-icon>
            上一题
          </el-button>
          <el-button type="primary" plain class="btn">
            下一题
            <vab-icon :icon="['fas', 'angle-right']"></vab-icon>
          </el-button>
          <!-- <el-button
            type="primary"
            plain
            class="btn"
            style="float: right; margin-right: 15px"
          >
            讨论 (25)
          </el-button>
          <el-button type="primary" plain class="btn" style="float: right">
            题解 (10)
          </el-button> -->
          <el-button
            type="primary"
            plain
            class="btn"
            style="float: right; margin-right: 20px"
          >
            数据统计
          </el-button>
          <el-button type="primary" plain class="btn" style="float: right">
            评判状态
          </el-button>
        </el-col>
        <el-col :span="12">
          <span class="btn">提交语言：</span>
          <el-select
            v-model="value"
            placeholder="请选择"
            class="btn"
            style="width: 100px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-button
            type="primary"
            class="btn"
            style="float: right; margin-left: 10px"
          >
            提交
          </el-button>

          <el-button type="danger" class="btn" style="float: right">
            编译错误
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import * as monaco from 'monaco-editor'
  import Clipboard from 'clipboard'

  export default {
    name: 'Problem',
    components: {},
    data() {
      return {
        codes: '',
        editor: null,
        id: this.$route.params.id,
        options: [
          {
            value: '1',
            label: 'C',
          },
          {
            value: '2',
            label: 'C++',
          },
          {
            value: '3',
            label: 'Java',
          },
          {
            value: '4',
            label: 'Python3',
          },
        ],
        value: '1',
      }
    },
    created() {},
    mounted() {
      let _this = this
      setTimeout(function () {
        _this.dragControllerDiv()
        _this.iniEditor()
      }, 100)
    },
    methods: {
      dragControllerDiv() {
        var resize = document.getElementsByClassName('resize')
        var left = document.getElementsByClassName('left')
        var mid = document.getElementsByClassName('right')
        var box = document.getElementsByClassName('box')
        for (let i = 0; i < resize.length; i++) {
          // 鼠标按下事件
          resize[i].onmousedown = function (e) {
            //颜色改变提醒
            resize[i].style.background = '#818181'
            var startX = e.clientX
            resize[i].left = resize[i].offsetLeft
            // 鼠标拖动事件
            document.onmousemove = function (e) {
              var endX = e.clientX
              var moveLen = resize[i].left + (endX - startX) // （endx-startx）=移动的距离。resize[i].left+移动的距离=左边区域最后的宽度
              var maxT = box[i].clientWidth - resize[i].offsetWidth // 容器宽度 - 左边区域的宽度 = 右边区域的宽度

              if (moveLen < 150) moveLen = 150 // 左边区域的最小宽度为32px
              if (moveLen > maxT - 150) moveLen = maxT - 150 //右边区域最小宽度为150px

              resize[i].style.left = moveLen // 设置左侧区域的宽度

              for (let j = 0; j < left.length; j++) {
                left[j].style.width = moveLen + 'px'
                mid[j].style.width = box[i].clientWidth - moveLen - 15 + 'px'
              }
            }
            // 鼠标松开事件
            document.onmouseup = function (evt) {
              //颜色恢复
              resize[i].style.background = '#d6d6d6'
              document.onmousemove = null
              document.onmouseup = null
              resize[i].releaseCapture && resize[i].releaseCapture() //当你不在需要继续获得鼠标消息就要应该调用ReleaseCapture()释放掉
            }
            resize[i].setCapture && resize[i].setCapture() //该函数在属于当前线程的指定窗口里设置鼠标捕获
            return false
          }
        }
      },
      iniEditor() {
        // 初始化编辑器，确保dom已经渲染
        this.editor = monaco.editor.create(document.getElementById('right'), {
          value: '', //编辑器初始显示文字
          language: 'c', //语言支持自行查阅demo
          automaticLayout: true, //自动布局
          theme: 'vs-dark', //官方自带三种主题vs, hc-black, or vs-dark
        })
      },
      getValue() {
        this.editor.getValue() //获取编辑器中的文本
      },
      changeModel() {
        var oldModel = this.editor.getModel() //获取旧模型
        var value = this.editor.getValue() //获取旧的文本
        //创建新模型，value为旧文本，id为modeId，即语言（language.id）
        //modesIds即为支持语言
        //var modesIds = monaco.languages.getLanguages().map(function(lang) { return lang.id; });
        var newModel = monaco.editor.createModel(value, id)
        //将旧模型销毁
        if (oldModel) {
          oldModel.dispose()
        }
        //设置新模型
        this.editor.setModel(newModel)
      },
      copy() {
        //if (!this.init) return
        var clipboard = new Clipboard('.copyBtn')
        clipboard.on('success', (e) => {
          this.$baseMessage('一键复制成功！', 'success')
          // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', (e) => {
          this.$baseMessage('浏览器不支持一键复制，请手动复制！', 'error')
          // 释放内存
          clipboard.destroy()
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .left {
    width: 49.2%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    float: left;
    border-right: 1px dotted #aba1a1;
  }
  .resize {
    cursor: col-resize;
    float: left;
    position: relative;
    top: 45%;
    background-color: #d6d6d6;
    border-radius: 5px;
    width: 0.6%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-size: cover;
    background-position: center;
    font-size: 0.32rem;
    color: white;
  }
  /*拖拽区鼠标悬停样式*/
  .resize:hover {
    color: #444444;
  }
  .right {
    height: 100%;
    float: left;
    width: 49.9%;
    border-left: 1px dotted #aba1a1;
  }
  .box {
    width: 100%;
    height: calc(
      100vh - #{$base-nav-bar-height} - #{$base-tabs-bar-height} - #{$base-padding} -
        #{$base-padding} - 162px
    );
    margin: 10px 0px;
  }
  .problemBottom {
    width: 100%;
    height: 52px;
    background-color: #f6f8f9;
  }
  .btn {
    margin-top: 10px;
  }
  .problemInfo {
    margin: 10px 15px 20px 20px;
  }
  .problemTitle {
    font-size: 16px;
  }
  .limit {
    margin-right: 20px;
  }
  .hrCenter {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  code {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    white-space: nowrap;
    background-color: #f9f2f4;
    border-radius: 4px;
  }
  .infoTitle {
    display: block;
    margin-top: 25px;
    margin-bottom: 15px;
  }
  .sample {
    overflow: hidden;
    border: 1px solid #dedede;
    background: #f8f8f8;
    padding: 6px 12px;
    color: #444;
    margin: 12px 0;
    word-wrap: break-word;
    word-break: break-all;
    white-space: pre-line;
  }
  .problemTag {
    margin: 0px 0px 0px 10px;
  }
  .firstTag {
    margin-left: 20px;
  }
</style>
