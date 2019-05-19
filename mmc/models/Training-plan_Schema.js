const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creat Schema
//培养方案的数据库
const Training_planSchema = new Schema({
  //版本号
  edition: {
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
  //内容
  content: {
    type: String,
    required: true
  }
});

const classSchema = mongoose.model("training_planinfo",Training_planSchema);

module.exports = classSchema;
