const User = require("../models/User_Schema");
const Class = require("../models/Class_Schema");
const Examination = require("../models/Examination_Schema");
const Experiment = require("../models/Experiment_Schema");
const Grading = require("../models/Grading_test_Schema");
const Training = require("../models/Training-plan_Schema");
const Score = require("../models/Score_Schema");

//连接mongodb数据库
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/chenxi",{useNewUrlParser: true});

mongoose.connection.once("open",function () {
  console.log("连接成功");
});
mongoose.connection.once("error",function () {
  console.log("连接失败");
});

User.create({
  name: "qiuyu",
  Student_ID: 201402127106,
  password: "123456",
  phone: 15671551894,
  address: "B6-5033",
  ID_number: "220322199611126312",
  college: "CaiYe",
  major: "JinCai",
  _class: "3",
  date: new Date(),
  position: "none",
  Political_outlook: "tuanyuan",
  grade: 1
});
