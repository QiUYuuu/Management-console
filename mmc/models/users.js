const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creat Schema
//员工信息的数据库
const UserSchema = new Schema({
    //员工姓名
    name: {
        type: String,
        required: true
    },
    //员工邮件地址
    email: {
        type: String,
        required: true
    },
    //密码
    password: {
        type: String,
        required: true
    },
    //电话
    phone: {
        type: Number,
        required: true
    },
    //家庭住址
    address: {
        type: String,
        required: true
    },
    //身份证号
    ID_number: {
        type: Number,
        required: true
    },
    //头像
    avatar: {
        type: String
    },
    //时间
    date: {
        type: Date,
        default: Date.now
    },
    //职位
    position: {
        type:String,
        required: true
    },
    //等级
    grade: {
        type: Number,
        required: true
    }
});

module.exports = User = mongoose.model("users",UserSchema);