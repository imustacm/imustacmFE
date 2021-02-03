<template>
  <div class="group">
    <el-row style="width: 100%; height: 32px">
      <vab-query-form>
        <el-col :span="8">
          <el-button icon="el-icon-plus" type="primary" @click="handleAdd">
            申请创建小组
          </el-button>
        </el-col>
        <el-col :span="16">
          <el-form
            ref="groupForm"
            :model="groupForm"
            :inline="true"
            @submit.native.prevent
            style="float: right; margin-right: -8px"
          >
            <el-form-item>
              <el-input v-model="groupForm.name" placeholder="小组名称" />
            </el-form-item>
            <el-form-item>
              <el-button
                icon="el-icon-search"
                type="primary"
                native-type="submit"
                @click="handleQuery"
              >
                查询
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </vab-query-form>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
        <el-card>
          <div slot="header">
            <a><b>计算机科学与技术2020-1班</b></a>
            <!-- <el-button
              type="primary"
              size="mini"
              plain
              style="float: right; margin-top: -5px"
            >
              <vab-icon :icon="['fas', 'plus-circle']"></vab-icon>
              申请加入
            </el-button> -->
            <el-button
              type="info"
              size="mini"
              plain
              style="float: right; margin-top: -5px"
              disabled
            >
              <vab-icon :icon="['fas', 'minus-circle']"></vab-icon>
              暂未加入
            </el-button>
          </div>
          <div>
            <el-table
              :fit="true"
              :data="table1"
              style="margin: 0 auto"
              :border="false"
              :show-header="false"
            >
              <el-table-column
                prop="tb1"
                align="left"
                label="项目"
              ></el-table-column>
              <el-table-column
                prop="tb2"
                align="right"
                label="数据"
              ></el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
        <el-card>
          <div slot="header">
            <a><b>ACM程序设计协会(2020级)</b></a>
            <el-button
              type="success"
              size="mini"
              plain
              style="float: right; margin-top: -5px"
              disabled
            >
              <vab-icon :icon="['fas', 'check-circle']"></vab-icon>
              小组成员
            </el-button>
          </div>
          <div>
            <el-table
              :fit="true"
              :data="table1"
              style="margin: 0 auto"
              :border="false"
              :show-header="false"
            >
              <el-table-column
                prop="tb1"
                align="left"
                label="项目"
              ></el-table-column>
              <el-table-column
                prop="tb2"
                align="right"
                label="数据"
              ></el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
        <el-card>
          <div slot="header">
            <a><b>网络空间安全2020-1班</b></a>
            <el-button
              type="info"
              size="mini"
              plain
              style="float: right; margin-top: -5px"
              disabled
            >
              <vab-icon :icon="['fas', 'minus-circle']"></vab-icon>
              暂未加入
            </el-button>
          </div>
          <div>
            <el-table
              :fit="true"
              :data="table1"
              style="margin: 0 auto"
              :border="false"
              :show-header="false"
            >
              <el-table-column
                prop="tb1"
                align="left"
                label="项目"
              ></el-table-column>
              <el-table-column
                prop="tb2"
                align="right"
                label="数据"
              ></el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
        <el-card>
          <div slot="header">
            <a><b>软件工程2019-2班</b></a>
            <el-button
              type="warning"
              size="mini"
              plain
              style="float: right; margin-top: -5px"
              disabled
            >
              <vab-icon :icon="['fas', 'exclamation-circle']"></vab-icon>
              等待验证
            </el-button>
          </div>
          <div>
            <el-table
              :fit="true"
              :data="table1"
              style="margin: 0 auto"
              :border="false"
              :show-header="false"
            >
              <el-table-column
                prop="tb1"
                align="left"
                label="项目"
              ></el-table-column>
              <el-table-column
                prop="tb2"
                align="right"
                label="数据"
              ></el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Group',
    components: {},
    data() {
      return {
        table1: [
          {
            tb1: '创建者 / 组长',
            tb2: 'imustacm (imustacm)',
          },
          {
            tb1: '创建时间',
            tb2: '2021-01-25 17:16:29',
          },
          {
            tb1: '正式成员数',
            tb2: '41人',
          },
          {
            tb1: '成员平均解题数',
            tb2: '88道',
          },
        ],
        groupForm: {
          name: '',
        },
      }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>
<style lang="scss" scoped>
  .group {
    margin: 20px 20px 0px 20px;
    ::v-deep {
      .el-card__body {
        > div {
          //min-height: 220px;
          padding: 10px 10px 20px 10px;

          > ul {
            > li {
              line-height: 30px;
            }
          }

          > img {
            display: block;
            margin: 40px auto;
            border: 1px solid #dedede;
          }

          > td {
            border-bottom: none !important;
          }

          > .el-table::before {
            height: 0px;
          }
        }
      }
    }
  }
</style>
