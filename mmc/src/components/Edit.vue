<template>
  <div id="edit">
    <index></index>
    <div id="edit2">
      <form @submit="updateInfo">
        <ul>
          <li>姓名：<input v-model="UserInfo.name" type="text"></li>
          <li>学号：<input v-model="UserInfo.Student_ID" type="text"></li>
          <li>年龄：<input v-model="UserInfo.age" type="text"></li>
          <li>性别：<input v-model="UserInfo.sex" type="text"></li>
          <li>电话：<input v-model="UserInfo.phone" type="text"></li>
          <li>民族：<input v-model="UserInfo.nation" type="text"></li>
          <li>身份证号：<input v-model="UserInfo.ID_number" type="text"></li>
          <li>宿舍住址：<input v-model="UserInfo.address" type="text"></li>
          <li>学院：<input v-model="UserInfo.college" type="text"></li>
          <li>专业：<input v-model="UserInfo.major" type="text"></li>
          <li>班级：<input v-model="UserInfo._class" type="text"></li>
          <li>职位：<input v-model="UserInfo.major" type="text"></li>
          <li>政治面貌：<input v-model="UserInfo.Political_outlook" type="text"></li>
          <li>等级：<input v-model="UserInfo.grade" type="number"></li>
        </ul>
        <button type="submit" class="btn btn-success">确定</button>
      </form>
    </div>
  </div>
</template>

<script>
  import Index from './index'
  import Alert from './Alert'
    export default {
        name: "edit",
      components: {
          index: Index,
          alert: Alert
      },
      data(){
          return{
            UserInfo: {},
            alert: ""
          }
      },
      methods: {
        fetchInfos(){
          this.$ajax({
            method: "get",
            url: "http://localhost:2222/users/details",
            params: {
              id: this.$route.query.id
            }
          }).then( res => {
            this.UserInfo = res.data.data;
          })
        },
        updateInfo(e){
          console.log(this.UserInfo);
          let newuser = this.UserInfo;
          this.$ajax({
            method: "post",
            url: "http://localhost:2222/users/edit?_id="+this.UserInfo._id,
            data: {
              id: this.$route.query.id,
              user: newuser
            }
          }).then(res => {
            if(res.data.code === 200){
              this.$router.push({path:"/users",query:{alert:res.data.msg}});
            }
            this.alert = this.data.msg;
          });
          e.preventDefault();
        }
      },
      created(){
          this.fetchInfos();
      }
    }
</script>

<style scoped>
  #edit2{
    position: relative;
    width: 60%;
    height: 400px;
    margin: 10px auto;
  }
  li{
    list-style: none;
    width: 260px;
    height: 50px;
    margin: 10px;
    float: left;
  }
  .btn{
    position: absolute;
    left: 50px;
    bottom: 10px;
  }
</style>
