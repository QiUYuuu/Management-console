<template>
  <div id="student">
    <h1>学生专区</h1>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "student"
    }
</script>

<style scoped>
  #student{
    border: 2px solid #b3d4fc;
  }
</style>
