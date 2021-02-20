<template>
  <div class="activity" style="margin: 20px">
    <el-row style="width: 100%; height: 32px">
      <vab-query-form>
        <el-col :span="24">
          <el-form
            ref="queryForm"
            :model="queryForm"
            :inline="true"
            @submit.native.prevent
            style="float: right; margin-right: -8px"
          >
            <el-form-item>
              <el-input v-model="queryForm.title" placeholder="社团活动名称" />
            </el-form-item>
            <el-form-item>
              <el-button
                icon="el-icon-search"
                type="primary"
                native-type="submit"
                @click=""
              >
                查询
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </vab-query-form>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col
        v-for="(item, index) in list"
        :key="index"
        :xs="24"
        :sm="12"
        :md="12"
        :lg="8"
        :xl="8"
      >
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <div class="goods-list-card-body">
            <div class="goods-list-tag-group">
              <el-tag v-if="item.isRecommend" hit type="success">推荐</el-tag>
              <el-tag v-if="item.status === 0" hit type="danger">缺货</el-tag>
            </div>
            <div class="goods-list-image-group">
              <img :src="item.image" fit="fill" class="goods-list-image" />
            </div>
            <div class="goods-list-title">{{ item.title }}</div>
            <div class="goods-list-description">{{ item.description }}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
      :background="background"
      :current-page="queryForm.pageIndex"
      :page-size="queryForm.pageSize"
      :total="total"
      @current-change="handleCurrentChange"
    ></el-pagination>
    <br />
  </div>
</template>

<script>
  import nothing from '@/assets/images/nothing.png'

  export default {
    name: 'Activity',
    components: {},
    data() {
      return {
        nothingUrl: nothing,
        queryForm: {
          pageNo: 1,
          pageSize: 20,
          title: '',
        },
        list: [
          {
            isRecommend: false,
            title: 'ACM程序设计协会举行圣诞欢乐赛',
            description: '2019-12-24',
            image: 'https://www.imustacm.cn/imustacm/2019H4.jpg',
          },
          {
            isRecommend: false,
            title: 'ACM程序设计协会集训队成员赴包师院参赛',
            description: '2019-11-25',
            image: 'https://www.imustacm.cn/imustacm/2019H1.jpg',
          },
        ],
        background: true,
        listLoading: true,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 2,
        elementLoadingText: '正在加载...',
      }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>
<style lang="scss" scoped>
  .activity {
    .goods-list-card-body {
      position: relative;
      text-align: left;
      cursor: pointer;

      .goods-list-tag-group {
        position: absolute;
        top: 10px;
        right: 5px;
        z-index: 9;
      }

      .goods-list-image-group {
        height: 350px;
        overflow: hidden;

        .goods-list-image {
          width: 100%;
          height: 350px;
          transition: all ease-in-out 0.3s;

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      .goods-list-title {
        margin: 15px 5px 10px;
        font-size: 16px;
        font-weight: bold;
      }

      .goods-list-description {
        margin: 10px 5px;
        font-size: 14px;
        color: #808695;
      }
    }
  }
</style>
