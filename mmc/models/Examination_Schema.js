const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creat Schema
//考试信息的数据库
const ExaminationSchema = new Schema({
  //考试科目
  ExaminationName: {
    type: String,
    required: true
  },
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
  //考试时间
  ExaminationDate: {
    type: String,
    required: true
  },
  //考试地点
  ExaminationAdress:{
    type: String,
    required: true
  },
  //考试人数
  ExaminationNumber: {
    type: Number,
    required: true
  }
});

const Examination = mongoose.model("Examinationinfo",ExaminationSchema);

module.exports = Examination;
