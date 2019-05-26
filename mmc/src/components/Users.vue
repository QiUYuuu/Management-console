<template>
  <div>
    <index></index>
    <div id="users">
      <table class="table table-bordered table-hover table-striped">
        <thead>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>学号</th>
          <th>年级</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="User in UserInfo" :key="User._id">
          <td>{{User.name}}</td>
          <td>{{User.sex}}</td>
          <td>{{User.age}}</td>
          <td>{{User.Student_ID}}</td>
          <td>{{User.college}} - {{User.major}} - {{User._class}}班</td>
          <td><router-link :num="User._id" class="btn btn-default" :to='"/users/details?id="+User._id'>详情</router-link><router-link class="btn btn-info" :to='"/users/edit?id="+User._id'>编辑</router-link><router-link class="btn btn-danger" :to='"/users/del?id="+User._id'>删除</router-link></td>
        </tr>
        </tbody>
      </table>
      <div id="pageee">
        <nav aria-label="Page navigation">
            <ul class="pagination">
              <li>
                <a @click="lastPage" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li v-for="(count,index) in counts"  @click="changePage(count)" :key="index"><a href="#">{{count}}</a></li>
              <li>
                <a @click="nextPage" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import Index from './index'
  import Alert from './Alert'
    export default {
        name: "Users",
        data(){
          return{
            UserInfo: [],
            page: 1,
            limit: 10,
            counts: 0,
            alert: ""
          }
        },
        components: {
            Index,
            Alert
        },
        methods: {
          fetchInfo(){
            this.$ajax({
              method: "get",
              url: "http://localhost:2222/users",
              params: {
                limit: this.limit,
                page: this.page < 0 ? 1 : this.page
              }
              // headers:{
              //   "Authorization": this.$store.state.token
              // }
            }).then(res => {
              this.UserInfo = res.data.data;
              this.counts = Math.ceil(res.data.count / this.limit);
            })
          },
          //分页相关 ---  下一页
          nextPage(){
            if(this.page < this.counts){
              this.page++;
            }else{
              this.page = this.counts;
            }
            this.fetchInfo();
          },
          //分页相关--- 上一页
          lastPage(){
            if(this.page > 1){
              this.page--;
            }else{
              this.page = 1;
            }
            this.fetchInfo();
          },
          changePage(count){
            this.page = count;
            this.fetchInfo();
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
    /* background-color: antiquewhite; */
  }
  tr,th{
    text-align: center;
    line-height: 48px;
  }
  #pageee{
    float: right;
    margin-bottom: 5px;
    margin-right: 25px;
  }
</style>
