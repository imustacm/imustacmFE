<template>
  <div class="gooder" style="margin: 20px">
    <el-row style="width: 100%; height: 32px">
      <vab-query-form>
        <el-col :span="8">
          <el-button icon="el-icon-plus" type="primary" @click="">
            登记优秀会员信息
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
              <el-input v-model="groupForm.name" placeholder="优秀会员姓名" />
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
    <div
      style="
        width: calc(100% - 40px);
        position: absolute;
        top: 50%;
        transform: translateY(-60%);
        text-align: center;
      "
    >
      <el-image :src="nothingUrl" style="width: 25%"></el-image>
      <h3>这 里 暂 时 还 没 有 内 容</h3>
    </div>
  </div>
</template>

<script>
  import nothing from '@/assets/images/nothing.png'

  export default {
    name: 'Gooder',
    components: {},
    data() {
      return {
        nothingUrl: nothing,
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
