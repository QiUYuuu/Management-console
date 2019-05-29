<template>
    <div id="index">
        <nav style="background-color:#222;z-index: 2;border-radius: 0;border-color: #222" class="navbar navbar-default">
            <div style="width: 100%;" class="container">
                <div class="navbar-header">

                    <a class="navbar-brand navbar-left" href="/"><span class="glyphicon glyphicon-home"></span></a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul style="color: white" class="nav navbar-nav">
                        <li>
                            <router-link class="router" to="/">管理控制台</router-link>
                        </li>
                        <li class="router" style="margin-left: 70px"></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <router-link class="router" to="/reg">添加用户</router-link>
                        </li>
                        <li>
                            <router-link class="router" to="/login"><span class="glyphicon glyphicon-log-in"></span> 登录</router-link>
                        </li>
                        <li>
                            <router-link class="router" to="/users">用户</router-link>
                        </li>
                    </ul>
                </div>
                <!--/.nav-collapse -->
            </div>
        </nav>
        <div class="clearfix">
            <aside class="sidebar">
                <nav class="sidebar-nav">
                    <ul id="menu3">
                        <li>
                            <!--<router-link to="/Information_Center">信息中心 <span class="glyphicon arrow"></span></router-link>-->
                            <a href="#2">信息中心 <span class="glyphicon arrow"></span></a>
                            <ul>
                                <li>
                                  <a href="#2">个人设置 <span class="glyphicon arrow"></span></a>
                                  <ul>
                                    <li><router-link to="/information/changeUserInfo">修改个人信息</router-link></li>
                                    <li><router-link to="/information/changePassword">修改密码</router-link></li>
                                    <li><router-link to="/information/notice">提示信息</router-link></li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#2">公告留言 <span class="glyphicon arrow"></span></a>
                                  <ul>
                                    <li><a href="#2">已发公告</a></li>
                                    <li><a href="#2">已发留言</a></li>
                                    <li><a href="#2">已收公告</a></li>
                                    <li><a href="#2">已收留言</a></li>
                                  </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <!--<router-link to="/Training_Program">培养方案 <span class="glyphicon arrow"></span></router-link>-->
                            <a href="#2">培养方案 <span class="glyphicon arrow"></span></a>
                            <ul>
                                <li><a href="#">培养方案综合查询</a></li>
                            </ul>
                        </li>
                        <li>
                            <!--<router-link to="/educational">教务运行 <span class="glyphicon arrow"></span></router-link>-->
                            <a href="#2">教务运行 <span class="glyphicon arrow"></span></a>
                            <ul>
                                <li><a href="#">查询教室借用</a></li>
                            </ul>
                        </li>
                        <li>
                            <!--<router-link to="/student">学生专区 <span class="glyphicon arrow"></span></router-link>-->
                            <a href="#2">学生专区 <span class="glyphicon arrow"></span></a>
                            <ul>
                                <li>
                                  <a href="#">培养方案<span class="glyphicon arrow"></span></a>
                                  <ul>
                                    <li><a href="#">培养方案总纲</a></li>
                                    <li><a href="#">专业培养方案</a></li>
                                    <li><a href="#">教学进程表</a></li>
                                    <li><a href="#">教学计划</a></li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#">学生选课<span class="glyphicon arrow"></span></a>
                                  <ul>
                                    <li><a href="#">课表信息</a></li>
                                    <li><a href="#">学生选课</a></li>
                                    <li><a href="#">学生预选</a></li>
                                    <li><a href="#">学分学费</a></li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#">考试信息<span class="glyphicon arrow"></span></a>
                                  <ul>
                                    <li><a href="#">考试安排</a></li>
                                    <li><a href="#">考级报名</a></li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#">学籍信息<span class="glyphicon arrow"></span></a>
                                  <ul>
                                    <li><a href="#">专业分流</a></li>
                                    <li><a href="#">学籍卡片</a></li>
                                    <li><a href="#">方向分流</a></li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#">教学评价<span class="glyphicon arrow"></span></a>
                                  <ul>
                                    <li><a href="#">教学评价</a></li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#">成绩信息<span class="glyphicon arrow"></span></a>
                                  <ul>
                                    <li><a href="#">成绩查询</a></li>
                                    <li><a href="#">成绩认证</a></li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#">实验教学<span class="glyphicon arrow"></span></a>
                                  <ul>
                                    <li><a href="#">实验课表</a></li>
                                    <li><a href="#">实验预约</a></li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#">辅修管理<span class="glyphicon arrow"></span></a>
                                  <ul>
                                    <li><a href="#">辅修报名</a></li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#">考级成绩管理<span class="glyphicon arrow"></span></a>
                                  <ul>
                                    <li><a href="#">考级成绩</a></li>
                                  </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
        <router-view style="width: 1300px;height:700px;float: left;margin-left: 50px"></router-view>
        <div id="rightDiv">
            <div @click="this.cli" id="top">大家好</div>
            <div id="bottom">我是练习时长两年半的个人练习生</div>
        </div>
    </div>
</template>

<script>

    $(function() {
        $('#menu3').metisMenu({
            toggle: true
        });
    });
    export default {
        name: "index",
        methods: {
          getUserInfo(){
            this.$ajax({
              method: "get",
              url: "http://localhost:2222/index",
              headers: {
                "Authorization": this.$store.getters.token
              }
            }).then(res=>{
              console.log(res);
              this.addUserInfo(res.data.user);
            })
          },
          addUserInfo: function(amount) {
            this.$store.dispatch("addUserInfo", amount);
          },
          cli(){
            console.log(this.$store.getters.personalInfo);
          }
        },
      created(){
          this.getUserInfo();
      }
    }

</script>

<style scoped>

    #rightDiv {
        float: right;
        width: 190px;
        height: 550px;
        background-color: #333333;
    }

    #top {
        width: 90%;
        height: 30%;
        margin: 10px auto;
        background-color: aqua;
    }

    #bottom {
        width: 90%;
        height: 60%;
        margin: 20px auto;
        background-color: aquamarine;
    }

    .ull>li {
        height: 50px;
    }

    .ull>li>a {
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 0;
        line-height: 50px;
    }

    .navbar ul li a {
        color: #c7c2c2;
    }

    .navbar ul li a:hover,
    .navbar ul li a:focus,
    .navbar ul li a:active {
        color: white;
    }

</style>
