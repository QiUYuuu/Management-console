<template>
  <div id="login">
    <Alert :message="alert" v-show="alert"></Alert>
    <div id="container">
      <form @submit="submit">
        <div class="input-group">
          <span class="input-group-addon" id="sizing-addon2">学号</span>
          <input v-model="user.Student_ID" type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2">
        </div>
        <div class="input-group">
          <span class="input-group-addon" id="sizing-addon2">密码</span>
          <input v-model="user.password" type="password" class="form-control" placeholder="Password" aria-describedby="sizing-addon2">
        </div>
        <button type="submit" id="btn">登陆</button>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Alert from './Alert'
    export default {
        name: "login",
        data(){
            return{
              user: {},
              alert: ""
            }
        },
      methods: {
          submit(e){
            let newUser = {
              Student_ID : this.user.Student_ID,
              password: this.user.password
            };
            axios.post('http://localhost:2222/login',newUser)
              .then((response) => {
                console.log(response);
                if(response.data.code === 200){
                  this.$router.push({path:"/index",query:{alert:response.data.msg}});
                }
                this.alert = response.data.msg;
              });
            e.preventDefault();
          }
      },
      components: {
          Alert
      }
    }
</script>

<style scoped>
  #login{
    width: 100%;
    height: 880px;
    overflow: hidden;
    background-color: beige;
  }
  #container{
    width: 430px;
    height: 200px;
    padding: 1px;
    margin: 200px auto;
    background-color:powderblue;
  }
  .input-group{
    margin: 25px;
  }
  #btn{
    margin-left: 40px;
  }
</style>
