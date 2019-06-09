<!--主页面-->
<template>
  <el-container>
   <el-header style="height: 50px" class="elheader">
     <el-menu
       class="el-menu-demo"
       mode="horizontal"
       background-color="#545c64"
       text-color="#fff"
       active-text-color="#AAAAAA">
       <el-row :gutter="20">
         <el-col :span="24"><div class="grid-content bg-purple">
             <router-link style="display: inline-block;width: 200px;height: 100%;text-align: center;font-size: 20px" to="/index/hello"><i style="margin-right: 20px;line-height: 17px" class="el-icon-monitor"></i>管理控制台</router-link>
         </div></el-col>
       </el-row>
     </el-menu>
   </el-header>
    <el-row :gutter="24">
      <el-col :span="3"><div class="grid-content bg-purple">
        <el-row class="tac">
          <el-col :span="12">

            <el-menu
              class="el-menu-vertical-demo"
              :unique-opened="true"
              background-color="#545c64"
              text-color="#AAAAAA"
              hover-text-color="#FFFFFF">
              <el-submenu v-for="(route,index) in getLevel2Router" :key="route.name" :index="index+''">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{route.name}}</span>
                </template>
                <el-submenu v-for="(node,index1) in route.nodes" :key="node.node" :index="index+'-'+index1 +''">
                  <template slot="title">{{node.node}}</template>
                  <el-menu-item v-for="(children,indexx) in getLevel3Router(node.node)" :key="children.name" :index="index+'-'+index1+'-'+indexx +''"><router-link :to=children.path>{{children.name}}</router-link></el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>

            <!--<el-menu-->
              <!--class="el-menu-vertical-demo"-->
              <!--:unique-opened="true"-->
              <!--background-color="#545c64"-->
              <!--text-color="#AAAAAA"-->
              <!--hover-text-color="#FFFFFF">-->
              <!--<el-submenu index="1">-->
                <!--<template slot="title">-->
                  <!--<i class="el-icon-location"></i>-->
                  <!--<span>信息中心</span>-->
                <!--</template>-->
                <!--<el-submenu index="1-1">-->
                  <!--<template slot="title">个人设置</template>-->
                  <!--<el-menu-item index="1-1-1"><router-link to="/information/changeUserInfo">修改个人信息</router-link></el-menu-item>-->
                  <!--<el-menu-item index="1-1-2"><router-link to="/information/changePassword">修改密码</router-link></el-menu-item>-->
                  <!--<el-menu-item index="1-1-3"><router-link to="/information/notice">提示信息</router-link></el-menu-item>-->
                <!--</el-submenu>-->
                <!--<el-submenu index="1-2">-->
                  <!--<template slot="title">公告留言</template>-->
                  <!--<el-menu-item index="1-2-1"><router-link to="/information/Issued_notice">已发公告</router-link></el-menu-item>-->
                  <!--<el-menu-item index="1-2-2"><router-link to="/information/Issued_message">已发留言</router-link></el-menu-item>-->
                  <!--<el-menu-item index="1-2-3"><router-link to="/information/Announcement_received">已收公告</router-link></el-menu-item>-->
                  <!--<el-menu-item index="1-2-4"><router-link to="/information/Message_received">已收留言</router-link></el-menu-item>-->
                <!--</el-submenu>-->
              <!--</el-submenu>-->
              <!--<el-submenu index="2">-->
                <!--<template slot="title">-->
                  <!--<i class="el-icon-menu"></i>-->
                  <!--<span>培养方案</span>-->
                <!--</template>-->
                <!--<el-menu-item index="2-1"><router-link to="/training_Program/Comprehensive_query">培养方案综合查询</router-link></el-menu-item>-->
              <!--</el-submenu>-->
              <!--<el-submenu index="3">-->
                <!--<template slot="title">-->
                  <!--<i class="el-icon-document"></i>-->
                  <!--<span>教务运行</span>-->
                <!--</template>-->
                <!--<el-menu-item index="3-1"><router-link  to="/educational/Classroom_borrowing">查询教室借用</router-link ></el-menu-item>-->
              <!--</el-submenu>-->
              <!--<el-submenu index="4">-->
                <!--<template slot="title">-->
                  <!--<i class="el-icon-setting"></i>-->
                  <!--<span>学生专区</span>-->
                <!--</template>-->
                <!--<el-submenu index="4-1">-->
                  <!--<template slot="title">培养方案</template>-->
                  <!--<el-menu-item index="4-1-1"><router-link to="/student/training_plan/general">培养方案总纲</router-link></el-menu-item>-->
                  <!--<el-menu-item index="4-1-2"><router-link to="/student/training_plan/profession">专业培养方案</router-link></el-menu-item>-->
                  <!--<el-menu-item index="4-1-3"><router-link to="/student/training_plan/schedule">教学进程表</router-link></el-menu-item>-->
                  <!--<el-menu-item index="4-1-3"><router-link to="/student/training_plan/teaching_plan">教学计划</router-link></el-menu-item>-->
                <!--</el-submenu>-->
                <!--<el-submenu index="4-2">-->
                  <!--<template slot="title">学生选课</template>-->
                  <!--<el-menu-item index="4-2-1"><router-link  to="/student/course/timetable">课表信息</router-link ></el-menu-item>-->
                  <!--<el-menu-item index="4-2-2"><router-link  to="/student/course/course">学生选课</router-link ></el-menu-item>-->
                  <!--<el-menu-item index="4-2-3"><router-link  to="/student/course/preselection">学生预选</router-link ></el-menu-item>-->
                  <!--<el-menu-item index="4-2-4"><router-link  to="/student/course/credit">学分学费</router-link ></el-menu-item>-->
                <!--</el-submenu>-->
                <!--<el-submenu index="4-3">-->
                  <!--<template slot="title">考试信息</template>-->
                  <!--<el-menu-item index="4-3-1"><router-link to="/student/examination/Examination_arrangement">考试安排</router-link></el-menu-item>-->
                  <!--<el-menu-item index="4-3-2"><router-link to="/student/examination/Examination_registration">考级报名</router-link></el-menu-item>-->
                <!--</el-submenu>-->
                <!--<el-submenu index="4-4">-->
                  <!--<template slot="title">学籍信息</template>-->
                  <!--<el-menu-item index="4-4-1"><router-link to="/student/status/professional">专业分流</router-link></el-menu-item>-->
                  <!--<el-menu-item index="4-4-2"><router-link to="/student/status/card">学籍卡片</router-link></el-menu-item>-->
                  <!--<el-menu-item index="4-4-3"><router-link to="/student/status/directional">方向分流</router-link></el-menu-item>-->
                <!--</el-submenu>-->
                <!--<el-submenu index="4-5">-->
                  <!--<template slot="title">教学评价</template>-->
                  <!--<el-menu-item index="4-5-1"><router-link to="/student/evaluation/teaching_evaluation">教学评价</router-link></el-menu-item>-->
                <!--</el-submenu>-->
                <!--<el-submenu index="4-6">-->
                  <!--<template slot="title">成绩信息</template>-->
                  <!--<el-menu-item index="4-6-1"><router-link to="/student/performance/score">成绩查询</router-link></el-menu-item>-->
                  <!--<el-menu-item index="4-6-2"><router-link to="/student/performance/achievement">成绩认证</router-link></el-menu-item>-->
                <!--</el-submenu>-->
                <!--<el-submenu index="4-7">-->
                  <!--<template slot="title">实验教学</template>-->
                  <!--<el-menu-item index="4-7-1"><router-link to="/student/experiment/timetable">实验课表</router-link></el-menu-item>-->
                  <!--<el-menu-item index="4-7-2"><router-link to="/student/experiment/appointment">实验预约</router-link></el-menu-item>-->
                <!--</el-submenu>-->
                <!--<el-submenu index="4-8">-->
                  <!--<template slot="title">辅修管理</template>-->
                  <!--<el-menu-item index="4-8-1"><router-link to="/student/minor/registration">辅修报名</router-link></el-menu-item>-->
                <!--</el-submenu>-->
                <!--<el-submenu index="4-9">-->
                  <!--<template slot="title">考级成绩管理</template>-->
                  <!--<el-menu-item index="4-9-1"><router-link to="/student/level/grade">考级成绩</router-link></el-menu-item>-->
                <!--</el-submenu>-->
              <!--</el-submenu>-->
              <!--<el-submenu index="5">-->
                <!--<template slot="title">-->
                  <!--<i class="el-icon-document"></i>-->
                  <!--<span>系统管理</span>-->
                <!--</template>-->
                <!--<el-menu-item index="5-1"> <router-link class="router" to="/reg">添加用户</router-link></el-menu-item>-->
                <!--<el-menu-item index="5-1"><router-link class="router" to="/users">用户管理</router-link> </el-menu-item>-->
              <!--</el-submenu>-->
            <!--</el-menu>-->
          </el-col>
        </el-row>
      </div></el-col>
      <el-col :span="18"><div class="grid-content bg-purple">
        <router-view style="width: 82%;height: 700px;margin: 20px auto"></router-view>
      </div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">
          <div id="rightDiv">
            <div id="top">大家好</div>
            <div id="bottom">我是练习时长两年半的个人练习生</div>
          </div>
      </div></el-col>
    </el-row>

  </el-container>
</template>

<script>
  export default {
        name: "index",
        data(){
          return {
            routes: []
          }
        },
        computed: {
          getLevel3Router: function(){
              return function (node) {
                return this.routes.filter(function (route) {
                  return route.level === 3 && route.parent === node;
                })
              }
          },
          getLevel2Router: function(){
            return this.routes.filter(function (route) {
              return route.level === 2;
            })
          }
        },
        methods: {
          //获取登录用户的个人信息
          getUserInfo(){
            this.$ajax({
              method: "get",
              url: "http://localhost:2222/index",
              headers: {
                "Authorization": this.$store.getters.token
              }
            }).then(res=>{
              //console.log(res);
              this.addUserInfo(res.data.user);
              this.getRoutes();
            })
          },
          //把用户个人信息添加到vuex中
          addUserInfo: function(amount) {
            this.$store.dispatch("addUserInfo", amount);
          },
          //获取权限过滤后的路由
          getRoutes(){
            this.$ajax({
              method: "get",
              url: "http://localhost:2222/getRoutes",
              params: {
                grade: this.$store.getters.personalInfo.grade
              }
            }).then(res=> {
              this.routes = res.data.data2;
              this.addRoutes(res.data.data1);
            })
          },
          addRoutes: function(amount) {
            this.$store.dispatch("addRoutes", amount);
          }
        },
      created(){
          this.getUserInfo();
      }
    }

</script>

<style scoped>
  .elheader{
    padding: 0;
    height: 50px;
  }
    #rightDiv {
        float: right;
        width: 190px;
        height: 550px;
        margin-top: 80px;
        background-color: #388e5a54;
    }
  .tac{
    width: 410px;
    height: 880px;
    background-color: #545c64;
  }
  a{
    color: #AAAAAA;
    text-decoration: none;
  }
  a:hover,
  span:hover{
    color: #f7f7f7;
  }
  .el-menu-demo{
    border: none;
    height: 50px;
  }
  .grid-content{
    line-height: 50px;
  }
  .router{
    font-size: 15px;
    margin: 0 10px;
  }
</style>
