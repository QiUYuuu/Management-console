const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creat Schema
//学生信息的数据库
const UserSchema = new Schema({
    //学生姓名
    name: {
        type: String,
        required: true
    },
    //学号
    Student_ID:{
        type: String,
        required: true
    },
    //密码
    password: {
        type: String,
        required: true
    },
    //年龄
    age: {
      type: Number,
      required: true
    },
    //民族
    nation: {
      type: String,
      required: true
    },
    //性别
    sex: {
      type: String,
      required: true
    },
    //电话
    phone: {
        type: String,
        required: true
    },
    //宿舍住址
    address: {
        type: String,
        required: true
    },
    //身份证号
    ID_number: {
        type: String,
        required: true
    },
    //学院
    college:{
        type: String,
        required:true
    },
    //科系
    major:{
      type: String,
      required:true
    },
    //班级
    _class:{
      type: String,
      required:true
    },
    //创建时间
    date: {
        type: Date,
        default: Date.now
    },
    //职位
    position: {
        type:String,
        required: true
    },
    //政治面貌
    Political_outlook:{
        type: String,
        required: true
    },
    //等级
    grade: {
        type: Number,
        required: true
    }
});

const user = mongoose.model("user",UserSchema);

module.exports = user;
