const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creat Schema
//考试分数的数据库
const ScoreSchema = new Schema({
  //学生姓名
  StudentName: {
    type: String,
    required: true
  },
  //学生学号
  Student_ID: {
    type: Number,
    required: true
  },
  //考试科目
  ExaminationName: {
    type: String,
    required: true
  },
  //考试分数
  score: {
    type: Number,
    required: true
  }
});

const score = mongoose.model("classinfo",ScoreSchema);

module.exports = score;
