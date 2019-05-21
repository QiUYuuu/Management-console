const User = require("../models/User_Schema");
const Class = require("../models/Class_Schema");
const Examination = require("../models/Examination_Schema");
const Experiment = require("../models/Experiment_Schema");
const Grading = require("../models/Grading_test_Schema");
const Training = require("../models/Training-plan_Schema");
const Score = require("../models/Score_Schema");
const express = require("express");
const app = express();
const session = require("express-session");
const Mongosession = require("connect-mongo")(session);

//连接mongodb数据库
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/chenxi",{useNewUrlParser: true});

mongoose.connection.once("open",function () {
  console.log("连接成功");
});
mongoose.connection.once("error",function () {
  console.log("连接失败");
});

// 使用方式  req.session.xxx = xxx
app.use(session({
  secret: 'alsdkfj', // 密钥
  rolling: true, // 每次操作(刷新页面  点击a标签  ajax) 重新设定时间
  resave: false, // 是否每次请求都重新保存数据
  saveUninitialized: false, // 初始值
  cookie: {maxAge: 1000 * 60 * 60},
  store: new Mongosession({
    url: 'mongodb://localhost/mongosession'
  })
}));


// 获取post参数
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//配置路由
app.use('/', require('../router/index'));



//监听端口
app.listen(2222);


// User.create({
//   name: "qiuyu",
//   Student_ID: 201402127106,
//   password: "123456",
//   phone: 15671551894,
//   address: "B6-5033",
//   ID_number: "220322199611126312",
//   college: "CaiYe",
//   major: "JinCai",
//   _class: "3",
//   date: new Date(),
//   position: "none",
//   Political_outlook: "tuanyuan",
//   grade: 1
// });
