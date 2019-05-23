<template>
  <div>
    <index></index>
    <div id="users">
      <table class="table table-bordered table-hover table-striped">
        <thead>
        <tr>
          <th>姓名</th>
          <th>学号</th>
          <th>年级</th>
          <th>性别</th>
          <th>年龄</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>5</td>
          <td>4</td>
          <td><router-link class="btn btn-default" :to='"/reg"'>详情</router-link></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Index from './index'
    export default {
        name: "Users",
        data(){
          return{
            UserInfo: []
          }
        },
        components: {
            Index
        },
        methods: {
          fetchInfo(){
            this.$ajax({
              url: "http://localhost:2222/users",
              method: "get",
              headers:{
                "Authorization": this.$store.state.token
              }
            }).then(res => {
              console.log(res);
            })
          }
        },
        created(){
          this.fetchInfo();
        }
    }
</script>

<style scoped>
  #users{
    float: left;
    margin-top: 20px;
    margin-left: 140px;
    width: 75%;
    height: 650px;
    background-color: antiquewhite;
  }
</style>
