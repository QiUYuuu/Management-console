const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creat Schema
//课程信息的数据库
const routesSchema = new Schema({
  //等级  数字越高所需要进入路由的等级越高
  grade: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  meta: {
    type: Object,
    required: true
  },
  path:{
    type: String,
    required: true
  },
  component: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  parent: {
    type: String
  },
  parentPath: {
    type: String
  },
  nodes: {
    type: [{
      node: {
        type: String
      }
    }]
  },
  children: {
    type: [{
      childrenPath: {
        type: String
      }
    }]
  }
});

const RoutesSchema = mongoose.model("routes", routesSchema);

module.exports = RoutesSchema;
