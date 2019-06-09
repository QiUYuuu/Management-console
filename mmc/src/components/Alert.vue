<template>
  <el-alert
    type="success">
    {{message}}
  </el-alert>
</template>

<script>
  export default {
    name: 'alert',
    props:["message"],
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  width: 50%;
  margin: 0 auto;
  z-index: 1000;
}
</style>
