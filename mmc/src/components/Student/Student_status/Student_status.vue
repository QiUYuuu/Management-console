<template>
  <div id="Student_status">
    <h1>学籍信息</h1>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Student_status"
    }
</script>

<style scoped>
  #Student_status{
    border: 2px solid #b3d4fc;
  }
</style>
