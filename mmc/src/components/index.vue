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
              <li><router-link to="/reg">添加用户</router-link></li>
              <li><router-link to="/add">打卡</router-link></li>
              <li><router-link to="/"><span class="glyphicon glyphicon-log-in"></span> 登录</router-link></li>
              <li><router-link to="/add">头像</router-link></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </nav>
      <nav style="width: 50px;height:100%;top: 51px; background-color: #F8F8F8" class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper"
           role="navigation">
        <ul class="nav sidebar-nav">
          <li class="sidebar-brand"> <a href="#"> <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span> </a> </li>
          <li> <a href="#"> <i class="fa fa-fw fa-home"> </i> <span class="glyphicon glyphicon-fire" aria-hidden="true"></span> </a> </li>
          <li> <a href="#"> <i class="fa fa-fw fa-folder"> </i>  <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> </a> </li>
          <li> <a href="#"> <i class="fa fa-fw fa-file-o"> </i> <span class="glyphicon glyphicon-folder-close" aria-hidden="true"></span>  </a> </li>
          <li> <a href="#"> <i class="fa fa-fw fa-cog"> </i> <span class="glyphicon glyphicon-comment" aria-hidden="true"></span> </a> </li>
          <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-fw fa-plus"> </i> <span class="glyphicon glyphicon-globe" aria-hidden="true"></span>  </a>
            <ul class="dropdown-menu" role="menu">
              <li class="dropdown-header"> <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span> </li>
              <li> <a href="#"> <span class="glyphicon glyphicon-phone" aria-hidden="true"></span> </a> </li>
              <li> <a href="#"> <span class="glyphicon glyphicon-copyright-mark" aria-hidden="true"></span> </a> </li>
              <li> <a href="#"> <span class="glyphicon glyphicon-tree-deciduous" aria-hidden="true"></span> </a> </li>
              <li> <a href="#"> <span class="glyphicon glyphicon-cd" aria-hidden="true"></span> </a> </li>
              <li> <a href="#"> <span class="glyphicon glyphicon-king" aria-hidden="true"></span> </a> </li>
            </ul>
          </li>
          <li> <a href="#"> <i class="fa fa-fw fa-bank"> </i> <span class="glyphicon glyphicon-apple" aria-hidden="true"></span> </a> </li>
          <li> <a href="#"> <i class="fa fa-fw fa-dropbox"> </i> <span class="glyphicon glyphicon-ice-lolly" aria-hidden="true"></span></a> </li>
          <li> <a href="#"> <i class="fa fa-fw fa-twitter"> </i> <span class="glyphicon glyphicon-grain" aria-hidden="true"></span> </a> </li>
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
