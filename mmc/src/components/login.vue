<template>
  <!--登录界面-->
  <div id="login">
    <h1>阿里西信息管理控制平台</h1>
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
            this.$ajax({
              method: "post",
              url: "http://localhost:2222/login",
              data: newUser
            })
              .then(res => {
                if(res.data.code === 200){
                  this.$store.commit(`addToken(${res.data.token})`);
                  this.$router.push({path:"/index",query:{alert:res.data.msg}});
                }
                this.alert = res.data.msg;
              });
            e.preventDefault();
          }
      },
      components: {
          Alert
      }
    }
</script>

<style>
  html,body{
    height: 100%;
  }
  body>div{
    height: 100%;
  }
  #login{
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: beige;
  }
  h1{
    width: 23%;
    position: absolute;
    left: 0;
    right: 0;
    top: 130px;
    margin: auto;
  }
  #login #container{
    position: absolute;
    left: 0;
    right: 0;
    top: 200px;
    width: 430px;
    height: 200px;
    margin: auto;
    background-color:powderblue;
  }
  .input-group{
    margin: 25px;
  }
  #btn{
    margin-left: 40px;
  }
</style>
