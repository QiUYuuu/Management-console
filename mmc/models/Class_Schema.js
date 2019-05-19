const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creat Schema
//课程信息的数据库
const ClassSchema = new Schema({
  //学院
  college: {
    type: String,
    required: true
  },
  //科系
  major: {
    type: String,
    required: true
  },
  //课程名称
  _className: {
    type: String,
    required: true
  },
  //上课老师
  Teacher: {
    type: String,
    required: true
  },
  //上课时间
  _Date: {
    type: String,
    required: true
  },
  //地点
  classAdress: {
    type: String,
    required: true
  },
  //上课人数
  studentNumber: {
    type: Number
  }
});

const classSchema = mongoose.model("classinfo",ClassSchema);

module.exports = classSchema;
