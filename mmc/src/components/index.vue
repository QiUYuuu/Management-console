<template>
    <div id="index">
      <nav class="navbar navbar-default">
        <div style="width: 100%;" class="container">
          <div class="navbar-header">

            <a class="navbar-brand navbar-left" href="/"><span class="glyphicon glyphicon-home"></span></a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><router-link to="/">管理控制台</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><router-link to="/add">交易记录</router-link></li>
              <li><router-link to="/add">客户信息管理</router-link></li>
              <li><router-link to="/add">添加用户</router-link></li>
              <li><router-link to="/add">打卡</router-link></li>
              <li><router-link to="/add"><span class="glyphicon glyphicon-log-in"></span> 登录</router-link></li>
              <li><router-link to="/add">头像</router-link></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </nav>
      <nav style="width: 70px;top: 51px; background-color: #F8F8F8" class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper"
           role="navigation">
        <ul class="nav sidebar-nav">
          <li class="sidebar-brand"> <a href="#">  3 </a> </li>
          <li> <a href="#"> <i class="fa fa-fw fa-home"> </i> Home </a> </li>
          <li> <a href="#"> <i class="fa fa-fw fa-folder"> </i>  one </a> </li>
          <li> <a href="#"> <i class="fa fa-fw fa-file-o"> </i> Second  </a> </li>
          <li> <a href="#"> <i class="fa fa-fw fa-cog"> </i> Third </a> </li>
          <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-fw fa-plus"> </i> Dropdown  </a>
            <ul class="dropdown-menu" role="menu">
              <li class="dropdown-header"> Dropdown heading </li>
              <li> <a href="#"> Action </a> </li>
              <li> <a href="#"> Another action </a> </li>
              <li> <a href="#"> Something else here </a> </li>
              <li> <a href="#"> Separated link </a> </li>
              <li> <a href="#"> One more separated link </a> </li>
            </ul>
          </li>
          <li> <a href="#"> <i class="fa fa-fw fa-bank"> </i> Page four </a> </li>
          <li> <a href="#"> <i class="fa fa-fw fa-dropbox"> </i> Page 5 </a> </li>
          <li> <a href="#"> <i class="fa fa-fw fa-twitter"> </i> Last page </a> </li>
        </ul>
      </nav>
    </div>
</template>

<script>

    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
