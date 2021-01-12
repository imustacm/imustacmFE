<template>
  <div v-if="routerView" class="app-main-container">
    <!-- <vab-github-corner /> -->
    <transition mode="out-in" name="fade-transform">
      <keep-alive :include="cachedRoutes" :max="keepAliveMaxNum">
        <router-view :key="key" class="app-main-height" />
      </keep-alive>
    </transition>
    <footer v-show="footerCopyright" class="footer-copyright">
      Copyright
      <vab-icon :icon="['fas', 'copyright']"></vab-icon>
      2009 - {{ fullYear }} ACM Camp of Inner Mongolia University of Science &
      Technology Laboratory All Rights Reserved
      <br />
      <span @click="openGxba" style="cursor: pointer; display: inline">
        <el-image
          style="width: 13px; height: 13px"
          :src="urlGx"
          fit="fill"
        ></el-image>
        冀ICP备17006982号-1
      </span>
      <span
        @click="openGaba"
        style="cursor: pointer; display: inline; margin-left: 15px"
      >
        <el-image
          style="width: 13px; height: 13px"
          :src="urlGa"
          fit="fill"
        ></el-image>
        冀公网安备13082102000025号
      </span>
    </footer>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { copyright, footerCopyright, keepAliveMaxNum, title } from '@/config'
  import gaba from '@/assets/images/gaba.png'
  import gxba from '@/assets/images/gxba.png'

  export default {
    name: 'VabAppMain',
    data() {
      return {
        show: false,
        fullYear: new Date().getFullYear(),
        copyright,
        title,
        keepAliveMaxNum,
        routerView: true,
        footerCopyright,
        urlGx: gxba,
        urlGa: gaba,
      }
    },
    computed: {
      ...mapGetters({
        visitedRoutes: 'tabsBar/visitedRoutes',
        device: 'settings/device',
      }),
      cachedRoutes() {
        const cachedRoutesArr = []
        this.visitedRoutes.forEach((item) => {
          if (!item.meta.noKeepAlive) {
            cachedRoutesArr.push(item.name)
          }
        })
        return cachedRoutesArr
      },
      key() {
        return this.$route.path
      },
    },
    watch: {
      $route: {
        handler(route) {
          if ('mobile' === this.device) this.foldSideBar()
        },
        immediate: true,
      },
    },
    created() {
      //重载所有路由
      this.$baseEventBus.$on('reload-routerview', () => {
        this.routerView = false
        this.$nextTick(() => {
          this.routerView = true
        })
      })
    },
    mounted() {},
    methods: {
      ...mapActions({
        foldSideBar: 'settings/foldSideBar',
      }),
      openGxba() {
        window.open('http://www.beian.miit.gov.cn/', '_blank')
      },
      openGaba() {
        window.open(
          'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=13082102000025',
          '_blank'
        )
      },
    },
  }
</script>

<style lang="scss" scoped>
  .app-main-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    .vab-keel {
      margin: $base-padding;
    }
    .app-main-height {
      min-height: $base-app-main-height;
    }

    .footer-copyright {
      padding: 15px 0px;
      min-height: 50px;
      line-height: 25px;
      color: rgba(0, 0, 0, 0.45);
      text-align: center;
      border-top: 1px dashed $base-border-color;
    }
  }
</style>
