<template>
  <div class="qiniuAdmin" style="margin: 20px">
    <el-form
      ref="qiniuForm"
      :model="qiniuForm"
      :rules="rules"
      labelPosition="right"
      label-width="100px"
      style="
        width: 80%;
        text-align: center;
        margin: 0px auto;
        padding: 20px 0px;
      "
    >
      <el-form-item label="Accesskey" prop="accesskey">
        <el-input
          v-model.trim="qiniuForm.accesskey"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Secretkey" prop="secretkey">
        <el-input
          v-model.trim="qiniuForm.secretkey"
          autocomplete="off"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="Bucket" prop="bucket">
        <el-input v-model.trim="qiniuForm.bucket" autocomplete="off"></el-input>
      </el-form-item>
      <el-button icon="el-icon-refresh" @click="empty">清 空</el-button>
      <el-button
        icon="el-icon-document-checked"
        type="primary"
        @click="save"
        style="margin: 15px 0px 0px 30px"
      >
        保 存
      </el-button>
    </el-form>
  </div>
</template>

<script>
  import { getList } from '@/api/interface'

  export default {
    name: 'qiniuAdmin',
    components: {},
    data() {
      return {
        qiniuForm: {
          accesskey: 'RlyRt4hLSTfOckE7D95h4T_ruiJxQpKqAh46Uvyq',
          secretkey: '11111111111111111111111',
          bucket: 'imustacm',
        },
        rules: {
          accesskey: [
            { required: true, trigger: 'blur', message: '请输入Accesskey' },
          ],
          secretkey: [
            { required: true, trigger: 'blur', message: '请输入Secretkey' },
          ],
          bucket: [
            { required: true, trigger: 'blur', message: '请输入Bucket' },
          ],
        },
      }
    },
    computed: {},
    created() {},
    beforeDestroy() {},
    mounted() {},
    methods: {
      save() {
        this.$refs['qiniuForm'].validate(async (valid) => {
          if (valid) {
            const { msg } = await doEdit(this.qiniuForm)
            this.$baseMessage(msg, 'success')
          } else {
            return false
          }
        })
      },
      empty() {
        this.$baseConfirm(
          '您确定要执行该操作?',
          '提示',
          () => {
            this.qiniuForm.accesskey = ''
            this.qiniuForm.secretkey = ''
            this.qiniuForm.bucket = ''
          },
          () => {}
        )
      },
    },
  }
</script>
