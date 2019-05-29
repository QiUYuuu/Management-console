const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creat Schema
//实验信息的数据库
const ExperimentSchema = new Schema({
    //实验名字
    ExperimentName: {
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
    //实验时间
    ExperimentDate: {
        type: String,
        required: true
    },
    //实验室地点
    ExperimentAdress: {
        type: String,
        required: true
    },
    //实验人数
    ExperimentNumber: {
        type: Number,
        required: true
    }
});

const Experiment = mongoose.model("Experimentinfo", ExperimentSchema);

module.exports = Experiment;
