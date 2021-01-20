<template>
  <div>
    <div ref="beforeLogin" style="display: none">
      <el-row>
        <el-button size="small" type="primary" @click="login()" plain round>
          登 录
        </el-button>
        <el-button size="small" type="primary" @click="register()" plain round>
          注 册
        </el-button>
        <login-box ref="log"></login-box>
        <register-box ref="reg"></register-box>
        <forget-box ref="for"></forget-box>
      </el-row>
    </div>
    <div ref="afterLogin" style="display: none">
      <el-row style="min-width: 160px" type="flex" justify="end">
        <el-col :span="5" style="">
          <el-popover
            placement="bottom"
            title="通知消息"
            width="200"
            trigger="hover"
            content="暂无通知消息"
          >
            <el-button
              slot="reference"
              style="
                border: none;
                color: black;
                margin-top: 15.1px;
                text-align: center;
                padding: 2px;
              "
            >
              <el-badge :value="badgeValue" :max="99" class="item">
                <vab-icon
                  :icon="['fas', 'bell']"
                  style="color: #595959"
                ></vab-icon>
              </el-badge>
            </el-button>
          </el-popover>
        </el-col>
        <el-col
          :span="19"
          style="float: right; min-width: 100px； position: absolute; right: 0px; text-align:right"
        >
          <el-dropdown @command="handleCommand" placement="bottom">
            <span
              class="avatar-dropdown"
              style="padding-right: 20px; padding-left: 10px; text-align: right"
            >
              <el-avatar class="user-avatar" :src="avatar"></el-avatar>
              <!-- 这句代码下载的时候就是注释掉的 -->
              <!-- <img class="user-avatar" :src="avatar" alt="" /> -->
              <div class="user-name">
                {{ username }}
                <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
              </div>
            </span>
            <el-dropdown-menu slot="dropdown">
              <!-- <el-dropdown-item command="github">github地址</el-dropdown-item>
              <el-dropdown-item command="gitee" divided>
                码云地址
              </el-dropdown-item> -->
              <!-- <el-dropdown-item command="userCenter">
                <vab-icon :icon="['fas', 'user']"></vab-icon>
                个人中心
              </el-dropdown-item>
              <el-dropdown-item command="badgeSystem">
                <vab-icon :icon="['fas', 'file-alt']"></vab-icon>
                我的文章
              </el-dropdown-item>
              <el-dropdown-item command="badgeSystem">
                <vab-icon :icon="['fas', 'check-square']"></vab-icon>
                智能签到
              </el-dropdown-item>
              <el-dropdown-item command="badgeSystem">
                <vab-icon :icon="['fas', 'bookmark']"></vab-icon>
                成就系统
              </el-dropdown-item>
              <el-dropdown-item command="cardSystem">
                <vab-icon :icon="['fas', 'calendar-week']"></vab-icon>
                打卡系统
              </el-dropdown-item> -->
              <el-dropdown-item command="logout">
                <vab-icon :icon="['fas', 'times-circle']"></vab-icon>
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { recordRoute, tokenName } from '@/config'
  import { getAccessToken } from '@/utils/accessToken'
  import Ring from '@/assets/images/ring.png'
  import LoginBox from './components/LoginBox'
  import RegisterBox from './components/RegisterBox'
  import ForgetBox from './components/ForgetBox'
  import Event from '@/assets/js/inter.js'

  export default {
    data() {
      return {
        badgeValue: null,
      }
    },
    components: {
      LoginBox,
      RegisterBox,
      ForgetBox,
    },
    name: 'VabAvatar',
    computed: {
      ...mapGetters({
        avatar: 'user/avatar',
        username: 'user/username',
      }),
    },
    mounted() {
      Event.$on('toRegister', () => {
        this.register()
      })
      Event.$on('toLogin', () => {
        this.login()
      })
      Event.$on('toForget', () => {
        this.forget()
      })
      this.getLoginInfo()
      let _this = this
      setTimeout(function () {
        var accessToken = getAccessToken()
        if (
          accessToken == null ||
          accessToken == '' ||
          accessToken == undefined
        ) {
          _this.$refs['beforeLogin'].style.display = 'inline'
        } else {
          _this.$refs['afterLogin'].style.display = 'inline'
        }
      }, 1)
    },
    methods: {
      async getLoginInfo() {
        this.$store
          .dispatch('user/getLoginInfo', getAccessToken())
          .then(() => {
            return false
          })
          .catch(() => {})
      },
      login() {
        this.$refs['log'].showBox()
      },
      register() {
        this.$refs['reg'].showBox()
      },
      forget() {
        this.$refs['for'].showBox()
      },
      handleCommand(command) {
        switch (command) {
          case 'logout':
            this.logout()
            break
          case 'personalCenter':
            this.personalCenter()
            break
          case 'github':
            window.open('https://github.com/imustacm/imustacmFE')
            break
          case 'gitee':
            window.open('https://github.com/imustacm/imustacmFE')
            break
        }
      },
      personalCenter() {
        this.$router.push('/personalCenter/personalCenter')
      },
      logout() {
        this.$baseConfirm(
          '您确定要退出登录' + this.$baseTitle + '吗?',
          null,
          async () => {
            await this.$store.dispatch('user/logout')
            if (recordRoute) {
              const fullPath = this.$route.fullPath
              this.$router.push(`/login?redirect=${fullPath}`)
            } else {
              this.$router.push('/login')
            }
          }
        )
      },
    },
  }
</script>
<style lang="scss" scoped>
  .avatar-dropdown {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    height: 50px;
    padding: 0px;

    .user-avatar {
      width: 40px;
      height: 40px;
      cursor: pointer;
      border-radius: 50%;
    }

    .user-name {
      position: relative;
      margin-left: 5px;
      margin-left: 5px;
      cursor: pointer;
    }
  }

  .el-dropdown-menu__item {
    padding: 8px 35px !important;
  }
</style>
