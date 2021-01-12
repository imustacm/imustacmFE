<template></template>

<script>
  export default {
    name: 'Page404',
    data() {
      return {
        jumpTime: 0,
        timer: 0,
      }
    },
    mounted() {
      this.timeChange()
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    methods: {
      timeChange() {
        this.timer = setInterval(() => {
          if (this.jumpTime) {
            this.jumpTime--
          } else {
            this.$router.push({ path: '/' })
            this.$store.dispatch('tagsBar/delOthersRoutes', {
              path: '/',
            })
            clearInterval(this.timer)
          }
        }, 1000)
      },
    },
  }
</script>
