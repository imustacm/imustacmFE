<template>
  <div class="aboutUs1" style="margin: 20px">
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
    name: 'AboutUs1',
    components: {},
    data() {
      return {
        nothingUrl: nothing,
      }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>
<style lang="scss" scoped>
  .aboutUs1 {
    margin: 1px;
  }
</style>
