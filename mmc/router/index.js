const express = require("express"),
  user = require("../models/User_Schema"),
  routes = require('../models/Routes'),
  Score = require("../models/Score_Schema"),
  crypto = require("crypto"),
  jwt = require("jsonwebtoken"),
  keys = require("../config/key"),
  passport = require("passport"),
  router = express.Router();

/*
* 200  成功
* 400  失败
*
* */



//注册/添加用户
router.get("/reg",function (req,res) {
  res.send("reg")
}).post("/reg",function (req,res) {
  user.findOne({Student_ID: req.body.Student_ID}, function (err,data) {
    if(data){
      res.send({code: 400,msg: "学号已存在"});
      return;
    }
    const c = crypto.createHash('sha256'); // 1. 指定用什么方式加密
    const password = c.update(req.body.password).digest('hex'); // 2. 加密

    user.create({
      name: req.body.name,
      Student_ID: req.body.Student_ID,
      password: password,
      age:req.body.age,
      nation:req.body.nation,
      sex:req.body.sex,
      phone: req.body.phone,
      address: req.body.address,
      ID_number: req.body.ID_number,
      college: req.body.college,
      major: req.body.major,
      _class: req.body._class,
      date: new Date(),
      position: req.body.position,
      Political_outlook: req.body.Political_outlook,
      grade: req.body.grade
    }).then((response) => {
      res.send({code: 200, msg: "注册成功"});
    }).catch(function (err) {
      console.log(err);
    })
  }).catch(function (err) {
    console.log(err);
  });
});

//登陆
router.post("/login",function (req,res) {
  //学号是否存在
  user.findOne({Student_ID: req.body.Student_ID}, function (err,data) {
    if(data){
      const c = crypto.createHash('sha256'); // 1. 指定用什么方式加密
      const password = c.update(req.body.password).digest('hex'); // 2. 加密
      if(data.password === password){
        req.session.login = true;
        req.session.user = data;

        const rule = {id: req.body.id,name: req.body.name,Student_ID: req.body.Student_ID};
        //jwt.sign("规则","加密名字","过期时间","箭头函数")
        jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(err,token) => {
            if(err) throw err;
            res.send({
                code: 200,
                msg: "登陆成功！",
                token: "Bearer " + token
          });
        });
      }else{
        res.send({code: 400,msg: "密码错误！"});
      }
    }else{
      res.send({code: 400,msg: "学号错误！"});
    }
  })
});

//首页验证
router.get("/index",passport.authenticate("jwt",{session:false}),function (req,res) {
  res.send({code: 200,user:req.user})
});

//添加成绩
router.post("/addScore",function (req,res) {
  Score.updateOne({
    StudentName: req.body.StudentName,
    Student_ID: req.body.Student_ID,
  },{$push: {scoreInfo: {
        ExaminationName: req.body.ExaminationName,
        score: req.body.score
      }}},
    {upsert:true}
    ).then((response) => {
    res.send({code:200,msg:"成绩添加成功！"});
  }).catch(function (err) {
    console.log(err);
  })
});

//成绩查询
router.get("/getAllScore",function (req,res) {
  Promise.all([
    Score.findOne({Student_ID: req.query.Student_ID},{scoreInfo:1})
    // .skip((req.body.page - 1) * req.body.limit).limit(Number(req.body.limit)).countDocuments()
  ]).then(function (data) {
    res.send({code: 200, data: data[0]})
  });
});

//添加动态路由
router.post("/addRouter",function (req,res) {
  // let newRouter = {};
  // newRouter.nodes = [];
  // if(req.body.path) newRouter.path = req.body.path;
  // if(req.body.name) newRouter.name = req.body.name;
  // if(req.body.meta) newRouter.meta = req.body.meta;
  // if(req.body.grade) newRouter.grade = req.body.grade;
  // if(req.body.component) newRouter.component = req.body.component;
  // if(req.body.level) newRouter.level = req.body.level;
  // if(req.body.node) newRouter.nodes.push(req.body.node);

  routes.updateOne({
      path : req.body.path,
      name : req.body.name,
      meta : req.body.meta,
      grade : req.body.grade,
      component : req.body.component,
      level : req.body.level,
      parent: req.body.parent
    },{$push: {nodes: {
          node: req.body.node
        }}},
    {upsert:true}
  ).then(data=> {
    res.send({code: 200,data:data,msg: "添加成功！"});
  })
});

router.get("/getRoutes",function (req,res) {
  routes.find({grade: { $lte : req.query.grade}})
    .then( data=> {
      let newData = [];
      data.forEach((item) => {
        let newD = {};
        newD.path = item.path;
        if(item.parentPath) newD.parentPath = item.parentPath;
        newD.children = item.children;
        newD.level = item.level;
        newD.name = item.name;
        newD.component = item.component;
        newD.meta = item.meta;
        newData.push(newD);
      });
      res.send({code: 200,data1: newData,data2: data});
    }).catch(err => {
    console.log(err);
  })
});


module.exports = router;
