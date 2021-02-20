<template>
  <div class="nav-bar-container">
    <el-row :gutter="15">
      <el-col :xs="4" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="left-panel">
          <i
            :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            :title="collapse ? '展开' : '收起'"
            class="fold-unfold"
            @click="handleCollapse"
          ></i>
          <vab-breadcrumb class="hidden-xs-only" />
        </div>
      </el-col>
      <el-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="right-panel">
          <span style="margin-right: 20px; color: #83888c">
            Version: {{ updateTime | updateTimeFilter }} - Alpha
          </span>
          <vab-error-log />
          <vab-full-screen-bar @refresh="refreshRoute" />
          <vab-theme-bar class="hidden-xs-only" />
          <vab-icon
            title="重载所有路由"
            :pulse="pulse"
            :icon="['fas', 'redo']"
            @click="refreshRoute"
          />
          <vab-avatar />
          <!-- <vab-icon
            title="退出系统"
            :icon="['fas', 'sign-out-alt']"
            @click="logout"
          /> -->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'VabNavBar',
    data() {
      return {
        updateTime: process.env.VUE_APP_UPDATE_TIME,
        pulse: false,
      }
    },
    filters: {
      updateTimeFilter: function (value) {
        let year = process.env.VUE_APP_UPDATE_TIME.split('-')[0]
        let month =
          parseInt(process.env.VUE_APP_UPDATE_TIME.split('-')[1]) > 9
            ? process.env.VUE_APP_UPDATE_TIME.split('-')[1]
            : '0' + process.env.VUE_APP_UPDATE_TIME.split('-')[1]
        let day =
          parseInt(
            process.env.VUE_APP_UPDATE_TIME.split('-')[2].split(' ')[0]
          ) > 9
            ? process.env.VUE_APP_UPDATE_TIME.split('-')[2].split(' ')[0]
            : '0' + process.env.VUE_APP_UPDATE_TIME.split('-')[2].split(' ')[0]
        let hour =
          parseInt(
            process.env.VUE_APP_UPDATE_TIME.split(' ')[1].split(':')[0]
          ) > 9
            ? process.env.VUE_APP_UPDATE_TIME.split(' ')[1].split(':')[0]
            : '0' + process.env.VUE_APP_UPDATE_TIME.split(' ')[1].split(':')[0]
        let minute =
          parseInt(process.env.VUE_APP_UPDATE_TIME.split(':')[1]) > 9
            ? process.env.VUE_APP_UPDATE_TIME.split(':')[1]
            : '0' + process.env.VUE_APP_UPDATE_TIME.split(':')[1]
        let second =
          parseInt(process.env.VUE_APP_UPDATE_TIME.split(':')[2]) > 9
            ? process.env.VUE_APP_UPDATE_TIME.split(':')[2]
            : '0' + process.env.VUE_APP_UPDATE_TIME.split(':')[2]
        return year + month + day + '.' + hour + minute + second
      },
    },
    computed: {
      ...mapGetters({
        collapse: 'settings/collapse',
        visitedRoutes: 'tabsBar/visitedRoutes',
        device: 'settings/device',
        routes: 'routes/routes',
      }),
    },
    methods: {
      ...mapActions({
        changeCollapse: 'settings/changeCollapse',
      }),
      handleCollapse() {
        this.changeCollapse()
      },
      async refreshRoute() {
        this.$baseEventBus.$emit('reload-routerview')
        this.pulse = true
        setTimeout(() => {
          this.pulse = false
        }, 1000)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .nav-bar-container {
    position: relative;
    height: $base-nav-bar-height;
    padding-right: $base-padding;
    padding-left: $base-padding;
    overflow: hidden;
    user-select: none;
    background: $base-color-white;
    box-shadow: $base-box-shadow;

    .left-panel {
      display: flex;
      align-items: center;
      justify-items: center;
      height: $base-nav-bar-height;

      .fold-unfold {
        color: $base-color-gray;
        cursor: pointer;
      }

      ::v-deep {
        .breadcrumb-container {
          margin-left: 10px;
        }
      }
    }

    .right-panel {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: flex-end;
      height: $base-nav-bar-height;

      ::v-deep {
        svg {
          width: 1em;
          height: 1em;
          margin-right: 15px;
          font-size: $base-font-size-small;
          color: $base-color-gray;
          cursor: pointer;
          fill: $base-color-gray;
        }

        button {
          svg {
            margin-right: 0;
            color: $base-color-white;
            cursor: pointer;
            fill: $base-color-white;
            height: 1.2em;
          }
        }

        .el-badge {
          margin-right: 15px;
        }
      }
    }
  }
</style>
