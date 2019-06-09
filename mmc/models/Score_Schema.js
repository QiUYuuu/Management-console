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
    //分数详情
    scoreInfo: { type: [{
        //科目
        ExaminationName: {type: String,required: true},
        score: {type: Number,required:true}
      }]
    }
});

// ExaminationName: {
//   type: String,
//     required: true
// },
// //考试分数

const score = mongoose.model("Score", ScoreSchema);

module.exports = score;
