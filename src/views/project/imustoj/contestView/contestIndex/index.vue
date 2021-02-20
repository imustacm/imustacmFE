<template>
  <div class="contestIndex">
    <div>
      <h4>{{ rot }}须知：</h4>
      <p>
        这里是{{ rot }}须知内容这里是{{ rot }}须知内容这里是{{
          rot
        }}须知内容这里是{{ rot }}须知内容这里是{{ rot }}须知内容这里是{{
          rot
        }}须知内容
      </p>
      <p>
        这里是{{ rot }}须知内容这里是{{ rot }}须知内容这里是{{
          rot
        }}须知内容这里是{{ rot }}须知内容这里是{{ rot }}须知内容这里是{{
          rot
        }}须知内容这里是{{ rot }}须知内容这里是{{ rot }}须知内容这里是{{
          rot
        }}须知内容这里是{{ rot }}须知内容这里是{{ rot }}须知内容
      </p>
      <p>这里是{{ rot }}须知内容</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContestIndex',
    components: {},
    data() {
      return {
        rot:
          this.$route.path.split('/')[2] == 'practice'
            ? '练习'
            : this.$route.path.split('/')[2] == 'contest'
            ? '竞赛'
            : '实验',
      }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>
