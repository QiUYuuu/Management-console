const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creat Schema
//考级分数的数据库
const TestSchema = new Schema({
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
    //考级科目
    testName: {
        type: String,
        required: true
    },
    //考试分数
    score: {
        type: Number,
        required: true
    },
    //考级等级
    test_level: {
        type: String,
        required: true
    }
});

const test = mongoose.model("Test", TestSchema);

module.exports = test;
