const express = require("express"),
  user = require("../models/User_Schema"),
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

router.get("/",function (req,res) {
  res.render({
    login: req.session.login,
    user: req.session.user,
    title: "首页"
  })
});


//注册
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
router.get("/login",function (req,res) {
  res.render({
    login: req.session.login,
    title: '首页'
  });
}).post("/login",function (req,res) {

  //学号是否存在
  user.findOne({Student_ID: req.body.Student_ID}, function (err,data) {
    if(data){
      const c = crypto.createHash('sha256'); // 1. 指定用什么方式加密
      const password = c.update(req.body.password).digest('hex'); // 2. 加密
      if(data.password === password){
        req.session.login = true;
        req.session.user = data;

        const rule = {id:user.id,name:user.name};
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


// router.get("/users",passport.authenticate("jwt",{session:false}),(req,res) => {
//   Promise.all([
//     user.find().sort({Student_ID: -1})
//       .skip((req.body.page - 1) * req.body.limit).limit(Number(req.body.limit)),
//     user.countDocuments()
//   ]).then(function (data) {
//     res.send({code: 0, data: data[0], count: data[1]},req.user)
//   });
// });

router.get("/users",function (req,res) {
  Promise.all([
    user.find().sort({Student_ID: -1})
      .skip((req.query.page - 1) * req.query.limit).limit(Number(req.query.limit)),
    user.countDocuments()
  ]).then(function (data) {
    res.send({code: 200, data: data[0], count: data[1]})
  });
});

module.exports = router;
