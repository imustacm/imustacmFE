<template>
  <div class="mailAdmin" style="margin: 20px">
    <el-form
      ref="mailForm"
      :model="mailForm"
      :rules="rules"
      labelPosition="right"
      label-width="120px"
      style="
        width: 80%;
        text-align: center;
        margin: 0px auto;
        padding: 20px 0px;
      "
    >
      <el-form-item label="服务器地址" prop="host">
        <el-input v-model.trim="mailForm.host" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input
          v-model.trim="mailForm.nickname"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model.trim="mailForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model.trim="mailForm.password"
          autocomplete="off"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="回调地址前缀" prop="weburl">
        <el-input v-model.trim="mailForm.weburl" autocomplete="off"></el-input>
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
    name: 'mailAdmin',
    components: {},
    data() {
      return {
        mailForm: {
          host: 'smtp.imustacm.cn',
          nickname: 'IMUSTACM',
          username: 'no-reply@imustacm.cn',
          password: '1111111111111',
          weburl: 'https://imustacm.cn/api/users/users/verifyEmail?id=',
        },
        rules: {
          host: [
            { required: true, trigger: 'blur', message: '请输入服务器地址' },
          ],
          nickname: [
            { required: true, trigger: 'blur', message: '请输入昵称' },
          ],
          username: [
            { required: true, trigger: 'blur', message: '请输入用户名' },
          ],
          password: [
            { required: true, trigger: 'blur', message: '请输入密码' },
          ],
          weburl: [
            { required: true, trigger: 'blur', message: '请输入回调地址前缀' },
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
        this.$refs['mailForm'].validate(async (valid) => {
          if (valid) {
            const { msg } = await doEdit(this.mailForm)
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
            this.mailForm.host = ''
            this.mailForm.nickname = ''
            this.mailForm.username = ''
            this.mailForm.password = ''
            this.mailForm.weburl = ''
          },
          () => {}
        )
      },
    },
  }
</script>
