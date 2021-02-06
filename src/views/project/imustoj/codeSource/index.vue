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
    <div>
      <div class="boxInner" ref="boxInner">
        <div class="leftInner" id="leftInner"></div>
        <div class="resizeInner" title="收缩侧边栏">⋮</div>
        <div class="rightInner">
          <div class="judgeInfo">
            <el-tag effect="dark" size="medium" style="float: right">
              10123
            </el-tag>
            <el-button
              class="copyBtnInner"
              size="small"
              plain
              data-clipboard-action="copy"
              :data-clipboard-text="this.value"
              @click="copy"
            >
              复制源码
            </el-button>
            <br />
            <h3 style="text-align: left; margin-top: 25px">评判状态</h3>
            <el-table
              v-loading="listLoading"
              :data="list1"
              :element-loading-text="elementLoadingText"
              :show-header="false"
            >
              <el-table-column
                align="left"
                show-overflow-tooltip
                prop="key"
                label="项目名称"
                width="95px"
              ></el-table-column>
              <el-table-column
                align="right"
                show-overflow-tooltip
                prop="value"
                label="数据"
              >
                <template #default="{ row }">
                  <el-tag
                    v-if="row.eng == 'result'"
                    :type="row.value | buttonFilter"
                    effect="dark"
                  >
                    {{ row.value | resultFilter }}
                  </el-tag>
                  <a v-if="row.eng == 'problem'" @click="handleToProblem(4)">
                    {{ row.value }}
                  </a>
                  <a v-if="row.eng == 'user'" @click="">
                    {{ row.value }}
                  </a>
                  <span
                    v-if="
                      row.eng != 'result' &&
                      row.eng != 'problem' &&
                      row.eng != 'user'
                    "
                  >
                    {{ row.value }}
                  </span>
                </template>
              </el-table-column>
            </el-table>
            <br />
            <h3 style="text-align: left">测试点信息</h3>
            <el-table
              v-loading="listLoading"
              :data="list2"
              :element-loading-text="elementLoadingText"
              :show-header="false"
            >
              <el-table-column
                align="left"
                show-overflow-tooltip
                prop="id"
                label="编号"
                width="95px"
              >
                <template #default="scope">
                  测试点{{ scope.$index + 1 }}
                </template>
              </el-table-column>
              <el-table-column
                align="right"
                show-overflow-tooltip
                prop="result"
                label="结果"
              >
                <template #default="{ row }">
                  <el-tag :type="row.result | buttonFilter" effect="dark">
                    {{ row.result | resultFilter }}
                  </el-tag>
                  <br />
                  <span style="display: inline-block; margin-top: 5px">
                    {{ row.time }}ms / {{ row.memory }}KB
                  </span>
                </template>
              </el-table-column>
            </el-table>
            <br />
            <h3 style="text-align: left">编译信息</h3>
            <div>
              <pre class="sampleInner" id="inputCompile">{{ value }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">关 闭</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import Clipboard from 'clipboard'

  export default {
    name: 'CodeSource',
    components: {},
    filters: {
      buttonFilter(btn) {
        const buttonMap = {
          0: 'success',
          6: 'danger',
          1: 'warning',
          2: 'warning',
          3: 'warning',
          4: 'warning',
          5: 'warning',
        }
        return buttonMap[btn]
      },
      resultFilter(result) {
        const resultMap = {
          0: 'Accepted',
          6: 'Wrong Answer',
          1: 'warning',
          2: 'warning',
          3: 'warning',
          4: 'warning',
          5: 'warning',
        }
        return resultMap[result]
      },
    },
    data() {
      return {
        title: '',
        dialogFormVisible: false,
        codes: '',
        editor: null,
        list1: [
          {
            eng: 'user',
            key: '用户',
            value: '1367159201 (王健力)',
          },
          {
            eng: 'problem',
            key: '题目',
            value: '4. 整数求和',
          },
          {
            eng: 'result',
            key: '评判状态',
            value: 0,
          },
          {
            eng: 'memory',
            key: '内存',
            value: '1712KB',
          },
          {
            eng: 'time',
            key: '耗时',
            value: '1ms',
          },
          {
            eng: 'language',
            key: '语言',
            value: 'Python3',
          },
          {
            eng: 'length',
            key: '代码长度',
            value: '1045B',
          },
          {
            eng: 'submitTime',
            key: '提交时间',
            value: '2021-02-02 16:43:19',
          },
          {
            eng: 'judger',
            key: '判题机',
            value: '1',
          },
          {
            eng: 'judgeTime',
            key: '评判时间',
            value: '2021-02-02 16:43:20',
          },
        ],
        list2: [
          {
            result: 0,
            time: 3,
            memory: 1025,
          },
          {
            result: 6,
            time: 4,
            memory: 1982,
          },
          {
            result: 6,
            time: 0,
            memory: 344,
          },
          {
            result: 6,
            time: 3,
            memory: 1025,
          },
          {
            result: 0,
            time: 3,
            memory: 1025,
          },
          {
            result: 0,
            time: 3,
            memory: 1025,
          },
          {
            result: 6,
            time: 4,
            memory: 1982,
          },
          {
            result: 6,
            time: 0,
            memory: 344,
          },
          {
            result: 6,
            time: 3,
            memory: 1025,
          },
          {
            result: 0,
            time: 3,
            memory: 1025,
          },
        ],
        listLoading: true,
        elementLoadingText: '正在加载',
        value: [
          '(function (global, undefined) {',
          '	"use strict";',
          '	undefinedVariable = {};',
          '	undefinedVariable.prop = 5;',
          '',
          '	function initializeProperties(target, members) {',
          '		var keys = Object.keys(members);',
          '		var properties;',
          '		var i, len;',
          '		for (i = 0, len = keys.length; i < len; i++) {',
          '			var key = keys[i];',
          '			var enumerable = key.charCodeAt(0) !== /*_*/95;',
          '			var member = members[key];',
          "			if (member && typeof member === 'object') {",
          "				if (member.value !== undefined || typeof member.get === 'function' || typeof member.set === 'function') {",
          '					if (member.enumerable === undefined) {',
          '						member.enumerable = enumerable;',
          '					}',
          '					properties = properties || {};',
          '					properties[key] = member;',
          '					continue;',
          '				}',
          '			}',
          '			// These next lines will be deleted',
          '			if (!enumerable) {',
          '				properties = properties || {};',
          '				properties[key] = { value: member, enumerable: enumerable, configurable: true, writable: true }',
          '				continue;',
          '			}',
          '			target[key] = member;',
          '		}',
          '		if (properties) {',
          '			Object.defineProperties(target, properties);',
          '		}',
          '	}',
          '',
          '	(function (rootNamespace) {',
          '',
          '		// Create the rootNamespace in the global namespace',
          '		if (!global[rootNamespace]) {',
          '			global[rootNamespace] = Object.create(Object.prototype);',
          '		}',
          '',
          '		// Cache the rootNamespace we just created in a local variable',
          '		var _rootNamespace = global[rootNamespace];',
          '		if (!_rootNamespace.Namespace) {',
          '			_rootNamespace.Namespace = Object.create(Object.prototype);',
          '		}',
          '',
          '		function defineWithParent(parentNamespace, name, members) {',
          '			/// <summary locid="1">',
          '			/// Defines a new namespace with the specified name, under the specified parent namespace.',
          '			/// </summary>',
          '			/// <param name="parentNamespace" type="Object" locid="2">',
          '			/// The parent namespace which will contain the new namespace.',
          '			/// </param>',
          '			/// <param name="name" type="String" locid="3">',
          '			/// Name of the new namespace.',
          '			/// </param>',
          '			/// <param name="members" type="Object" locid="4">',
          '			/// Members in the new namespace.',
          '			/// </param>',
          '			/// <returns locid="5">',
          '			/// The newly defined namespace.',
          '			/// </returns>',
          '			var currentNamespace = parentNamespace,',
          '				namespaceFragments = name.split(".");',
          '',
          '			for (var i = 0, len = namespaceFragments.length; i < len; i++) {',
          '				var namespaceName = namespaceFragments[i];',
          '				if (!currentNamespace[namespaceName]) {',
          '					Object.defineProperty(currentNamespace, namespaceName,',
          '						{ value: {}, writable: false, enumerable: true, configurable: true }',
          '					);',
          '				}',
          '				currentNamespace = currentNamespace[namespaceName];',
          '			}',
          '',
          '			if (members) {',
          '				initializeProperties(currentNamespace, members);',
          '			}',
          '',
          '			return currentNamespace;',
          '		}',
          '',
          '		function define(name, members) {',
          '			/// <summary locid="6">',
          '			/// Defines a new namespace with the specified name.',
          '			/// </summary>',
          '			/// <param name="name" type="String" locid="7">',
          '			/// Name of the namespace.  This could be a dot-separated nested name.',
          '			/// </param>',
          '			/// <param name="members" type="Object" locid="4">',
          '			/// Members in the new namespace.',
          '			/// </param>',
          '			/// <returns locid="5">',
          '			/// The newly defined namespace.',
          '			/// </returns>',
          '			return defineWithParent(global, name, members);',
          '		}',
          '',
          '		// Establish members of the "WinJS.Namespace" namespace',
          '		Object.defineProperties(_rootNamespace.Namespace, {',
          '',
          '			defineWithParent: { value: defineWithParent, writable: true, enumerable: true },',
          '',
          '			define: { value: define, writable: true, enumerable: true }',
          '',
          '		});',
          '',
          '	})("WinJS");',
          '',
          '	(function (WinJS) {',
          '',
          '		function define(constructor, instanceMembers, staticMembers) {',
          '			/// <summary locid="8">',
          '			/// Defines a class using the given constructor and with the specified instance members.',
          '			/// </summary>',
          '			/// <param name="constructor" type="Function" locid="9">',
          '			/// A constructor function that will be used to instantiate this class.',
          '			/// </param>',
          '			/// <param name="instanceMembers" type="Object" locid="10">',
          '			/// The set of instance fields, properties and methods to be made available on the class.',
          '			/// </param>',
          '			/// <param name="staticMembers" type="Object" locid="11">',
          '			/// The set of static fields, properties and methods to be made available on the class.',
          '			/// </param>',
          '			/// <returns type="Function" locid="12">',
          '			/// The newly defined class.',
          '			/// </returns>',
          '			constructor = constructor || function () { };',
          '			if (instanceMembers) {',
          '				initializeProperties(constructor.prototype, instanceMembers);',
          '			}',
          '			if (staticMembers) {',
          '				initializeProperties(constructor, staticMembers);',
          '			}',
          '			return constructor;',
          '		}',
          '',
          '		function derive(baseClass, constructor, instanceMembers, staticMembers) {',
          '			/// <summary locid="13">',
          '			/// Uses prototypal inheritance to create a sub-class based on the supplied baseClass parameter.',
          '			/// </summary>',
          '			/// <param name="baseClass" type="Function" locid="14">',
          '			/// The class to inherit from.',
          '			/// </param>',
          '			/// <param name="constructor" type="Function" locid="9">',
          '			/// A constructor function that will be used to instantiate this class.',
          '			/// </param>',
          '			/// <param name="instanceMembers" type="Object" locid="10">',
          '			/// The set of instance fields, properties and methods to be made available on the class.',
          '			/// </param>',
          '			/// <param name="staticMembers" type="Object" locid="11">',
          '			/// The set of static fields, properties and methods to be made available on the class.',
          '			/// </param>',
          '			/// <returns type="Function" locid="12">',
          '			/// The newly defined class.',
          '			/// </returns>',
          '			if (baseClass) {',
          '				constructor = constructor || function () { };',
          '				var basePrototype = baseClass.prototype;',
          '				constructor.prototype = Object.create(basePrototype);',
          '				Object.defineProperty(constructor.prototype, "_super", { value: basePrototype });',
          '				Object.defineProperty(constructor.prototype, "constructor", { value: constructor });',
          '				if (instanceMembers) {',
          '					initializeProperties(constructor.prototype, instanceMembers);',
          '				}',
          '				if (staticMembers) {',
          '					initializeProperties(constructor, staticMembers);',
          '				}',
          '				return constructor;',
          '			} else {',
          '				return define(constructor, instanceMembers, staticMembers);',
          '			}',
          '		}',
          '',
          '		function mix(constructor) {',
          '			/// <summary locid="15">',
          '			/// Defines a class using the given constructor and the union of the set of instance members',
          '			/// specified by all the mixin objects.  The mixin parameter list can be of variable length.',
          '			/// </summary>',
          '			/// <param name="constructor" locid="9">',
          '			/// A constructor function that will be used to instantiate this class.',
          '			/// </param>',
          '			/// <returns locid="12">',
          '			/// The newly defined class.',
          '			/// </returns>',
          '			constructor = constructor || function () { };',
          '			var i, len;',
          '			for (i = 0, len = arguments.length; i < len; i++) {',
          '				initializeProperties(constructor.prototype, arguments[i]);',
          '			}',
          '			return constructor;',
          '		}',
          '',
          '		// Establish members of "WinJS.Class" namespace',
          '		WinJS.Namespace.define("WinJS.Class", {',
          '			define: define,',
          '			derive: derive,',
          '			mix: mix',
          '		});',
          '',
          '	})(WinJS);',
          '',
          '})(this);',
        ].join('\n'),
      }
    },
    created() {},
    mounted() {
      setTimeout(() => {
        this.listLoading = false
      }, 1)
    },
    methods: {
      handleToProblem(row) {
        this.close()
        this.$router.push({
          path: '/imustoj/problem/4',
        })
      },
      dragControllerDiv() {
        var resize = document.getElementsByClassName('resizeInner')
        var left = document.getElementsByClassName('leftInner')
        var mid = document.getElementsByClassName('rightInner')
        var box = document.getElementsByClassName('boxInner')
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
        this.editor = monaco.editor.create(
          document.getElementById('leftInner'),
          {
            value: this.value, //编辑器初始显示文字
            language: 'c', //语言支持自行查阅demo
            automaticLayout: true, //自动布局
            theme: 'vs-dark', //官方自带三种主题vs, hc-black, or vs-dark
            readOnly: true,
          }
        )
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
        var clipboard = new Clipboard('.copyBtnInner')
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
      showModule(row) {
        this.title = '评判详情'
        let _this = this
        setTimeout(function () {
          _this.dragControllerDiv()
          _this.iniEditor()
        }, 1)
        this.dialogFormVisible = true
      },
      close() {
        this.dialogFormVisible = false
        this.editor.dispose()
      },
    },
  }
</script>

<style lang="scss" scoped>
  .rightInner {
    width: 30.2%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    float: left;
    border-left: 1px dotted #aba1a1;
  }
  .resizeInner {
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
  .resizeInner:hover {
    color: #444444;
  }
  .leftInner {
    height: 100%;
    float: left;
    width: 69%;
    border-right: 1px dotted #aba1a1;
  }
  .boxInner {
    width: 100%;
    height: calc(
      100vh - #{$base-nav-bar-height} - #{$base-tabs-bar-height} - #{$base-padding} -
        #{$base-padding} - 180px
    );
    //margin: 10px 0px;
  }
  .judgeInfo {
    margin: 10px 15px 20px 20px;
  }
  .sampleInner {
    overflow: auto;
    border: 1px solid #dedede;
    background: #f8f8f8;
    padding: 6px 12px;
    color: #444;
    margin: 12px 0;
    // word-wrap: break-word;
    // word-break: break-all;
    //white-space: pre-line;
  }
</style>
