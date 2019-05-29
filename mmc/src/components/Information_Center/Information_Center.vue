<template>
  <div id="information">
      <h1>信息中心</h1>
      <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Information_Center"
    }
</script>

<style scoped>
  #information{
    border: 2px solid #b3d4fc;
  }
</style>
