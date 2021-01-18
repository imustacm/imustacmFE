<template>
  <el-dialog
    :modal-append-to-body="false"
    :title="title"
    :visible.sync="dialogFormVisible"
    :closeOnClickModal="closeClickModal"
    :closeOnPressEscape="closePressEscape"
    :showClose="showclose"
    width="500px"
    @close="close"
  >
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="用户名 / 学号" prop="username">
        <el-input
          v-model.trim="form.username"
          autocomplete="off"
          ref="username"
          maxlength="20"
          style="width: 265px"
          clearable
        ></el-input>
        <el-tooltip class="item" effect="dark" placement="top">
          <div slot="content" style="text-align: center">
            6~20位数字、大写字母、小写字母的组合
            <br />
            在校生请使用学号作为用户名进行注册
          </div>
          <vab-icon
            :icon="['fas', 'question-circle']"
            style="margin-left: 18px"
          ></vab-icon>
        </el-tooltip>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model.trim="form.password"
          autocomplete="off"
          maxlength="20"
          style="width: 265px"
          clearable
          show-password
        ></el-input>
        <el-tooltip class="item" effect="dark" placement="top">
          <div slot="content" style="text-align: center">
            6~20位数字、大写字母、小写字母、英文符号的组合
            <br />
            请至少包含以上4项中的3项
          </div>
          <vab-icon
            :icon="['fas', 'question-circle']"
            style="margin-left: 18px"
          ></vab-icon>
        </el-tooltip>
      </el-form-item>
      <el-form-item label="重复密码" prop="repassword">
        <el-input
          v-model.trim="form.repassword"
          autocomplete="off"
          maxlength="20"
          style="width: 265px"
          clearable
          show-password
        ></el-input>
        <el-tooltip class="item" effect="dark" placement="top">
          <div slot="content" style="text-align: center">
            请再次输入密码，确保两次密码输入相同
          </div>
          <vab-icon
            :icon="['fas', 'question-circle']"
            style="margin-left: 18px"
          ></vab-icon>
        </el-tooltip>
      </el-form-item>
      <el-form-item label="真实姓名" prop="name">
        <el-input
          v-model.trim="form.name"
          autocomplete="off"
          ref="name"
          maxlength="20"
          style="width: 265px"
          clearable
        ></el-input>
        <el-tooltip class="item" effect="dark" placement="top">
          <div slot="content" style="text-align: center">
            请填写您的真实姓名
          </div>
          <vab-icon
            :icon="['fas', 'question-circle']"
            style="margin-left: 18px"
          ></vab-icon>
        </el-tooltip>
      </el-form-item>
      <el-form-item label="验证密钥" prop="captchaKey" style="display: none">
        <el-input
          v-model.trim="form.captchaKey"
          autocomplete="off"
          ref="captchaKey"
          maxlength="20"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="captchaValue">
        <el-input
          v-model.trim="form.captchaValue"
          autocomplete="off"
          ref="captchaValue"
          maxlength="4"
          clearable
          style="width: 142px"
        ></el-input>
        <el-tooltip
          content="点击刷新验证码"
          class="item"
          effect="dark"
          placement="top"
        >
          <el-image
            style="
              width: 142px;
              height: 30px;
              overflow: visible;
              float: right;
              border-style: dotted;
              border-width: 1px;
              border-color: gray;
              cursor: pointer;
            "
            :src="url"
            fit="fill"
            @click="getCaptcha"
          >
            <div slot="placeholder" class="image-slot">
              加载中
              <span class="dot">...</span>
            </div>
          </el-image>
        </el-tooltip>
      </el-form-item>
    </el-form>
    <el-row style="text-align: center; margin-top: 30px">
      <el-link
        type="primary"
        :underline="false"
        style="margin-right: 20px"
        @click="toForget"
      >
        找回密码
      </el-link>
      |
      <el-link
        type="primary"
        :underline="false"
        style="margin-left: 20px"
        @click="toLogin"
      >
        用户登录
      </el-link>
    </el-row>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="handleLogin" :loading="loading">
        注 册
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
  import { getCaptcha } from '@/api/login'
  import { getLoginInfo, login, logout } from '@/api/user'
  import { getAccessToken } from '@/utils/accessToken'
  import refresh from '@/views/refresh'
  import index from '@/views/index/index'
  import Event from '@/assets/js/inter.js'

  export default {
    name: 'RegisterBox',
    data() {
      return {
        url: '',
        loading: false,
        form: {
          username: '',
          password: '',
          repassword: '',
          name: '',
          captchaKey: '',
          captchaValue: '',
        },
        rules: {
          username: [
            { required: true, trigger: 'blur', message: '请输入用户名 / 学号' },
          ],
          password: [
            { required: true, trigger: 'blur', message: '请输入密码' },
          ],
          repassword: [
            { required: true, trigger: 'blur', message: '请输入重复密码' },
          ],
          name: [
            { required: true, trigger: 'blur', message: '请输入真实姓名' },
          ],
          captchaValue: [
            { required: true, trigger: 'blur', message: '请输入验证码' },
          ],
        },
        title: '',
        dialogFormVisible: false,
        closeClickModal: true,
        closePressEscape: true,
        showclose: true,
      }
    },
    watch: {
      $route: {
        handler(route) {
          this.redirect = (route.query && route.query.redirect) || '/'
        },
        immediate: true,
      },
    },
    created() {
      this.getCaptcha()
    },
    methods: {
      toForget() {
        Event.$emit('toForget')
        this.close()
      },
      toLogin() {
        Event.$emit('toLogin')
        this.close()
      },
      showBox() {
        this.title = '注册账号'
        this.dialogFormVisible = true
        this.closeClickModal = false
        this.closePressEscape = false
        this.showclose = false
        // let _this = this
        // setTimeout(function () {
        //   _this.$refs['username'].focus()
        // }, 1)
      },
      close() {
        this.$refs['form'].resetFields()
        this.form = this.$options.data().form
        this.dialogFormVisible = false
      },
      async getCaptcha() {
        const { data } = await getCaptcha()
        this.form.captchaKey = data.key
        this.url = 'data:image/gif;base64,' + data.value
      },
      async handleLogin() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.loading = true
            this.$store
              .dispatch('user/login', this.form)
              .then(() => {
                // const routerPath =
                //   this.redirect === '/404' || this.redirect === '/401'
                //     ? '/'
                //     : this.redirect
                // this.$router.push(routerPath).catch(() => {})
                // this.loading = false
                // this.getCaptcha()
                location.reload()
              })
              .catch(() => {
                this.loading = false
                this.getCaptcha()
              })
          } else {
            return false
          }
        })
      },
    },
  }
</script>
<style>
  .white-space {
    white-space: pre;
  }
  input {
    width: 200px;
  }
</style>
