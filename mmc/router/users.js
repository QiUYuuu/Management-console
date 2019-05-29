const express = require("express"),
  user = require("../models/User_Schema"),
  router = express.Router();


// router.get("/",passport.authenticate("jwt",{session:false}),(req,res) => {
//   Promise.all([
//     user.find().sort({Student_ID: -1})
//       .skip((req.body.page - 1) * req.body.limit).limit(Number(req.body.limit)),
//     user.countDocuments()
//   ]).then(function (data) {
//     res.send({code: 0, data: data[0], count: data[1]},req.user)
//   });
// });

// router.get("/",passport.authenticate("jwt",{session:false}),function (req,res) {
//   Promise.all([
//     user.find().sort({Student_ID: -1})
//       .skip((req.query.page - 1) * req.query.limit).limit(Number(req.query.limit)),
//     user.countDocuments()
//   ]).then(function (data) {
//     res.send({code: 200, data: data[0], count: data[1],user:req.user})
//   });
// });

router.get("/",function (req,res) {
  Promise.all([
    user.find().sort({Student_ID: -1})
      .skip((req.query.page - 1) * req.query.limit).limit(Number(req.query.limit)),
    user.countDocuments()
  ]).then(function (data) {
    res.send({code: 200, data: data[0], count: data[1]})
  });
});

router.get("/details",function (req,res) {
  user.findById(req.query.id)
    .then( data => {
      res.send({code: 200,data:data});
    })
});


router.get("/edit",function (req,res) {
  user.findById(req.query.id)
    .then( data => {
      console.log(data);
      res.send({code:200,data:data});
    })
}).post("/edit",function (req,res) {
  const newUser = {};
  if(req.body.user.name) newUser.name = req.body.user.name;
  if(req.body.user.Student_ID) newUser.Student_ID = req.body.user.Student_ID;
  if(req.body.user.age) newUser.age = req.body.user.age;
  if(req.body.user.sex) newUser.sex = req.body.user.sex;
  if(req.body.user.phone) newUser.phone = req.body.user.phone;
  if(req.body.user.nation) newUser.nation = req.body.user.nation;
  if(req.body.user.ID_number) newUser.ID_number = req.body.user.ID_number;
  if(req.body.user.address) newUser.address = req.body.user.address;
  if(req.body.user.college) newUser.college = req.body.user.college;
  if(req.body.user.major) newUser.major = req.body.user.major;
  if(req.body.user._class) newUser._class = req.body.user._class;
  if(req.body.user.position) newUser.position = req.body.user.position;
  if(req.body.user.Political_outlook) newUser.Political_outlook = req.body.user.Political_outlook;
  if(req.body.user.grade) newUser.grade = req.body.user.grade;

  user.findOneAndUpdate({_id:req.body.id},{$set:newUser},{new:true}).then(data => {
    res.send({code: 200,msg: "修改成功！"});
  });
});


router.get("/del",function (req,res) {
  console.log(req.query);
  user.findByIdAndDelete(req.query.id)
    .then( data => {
      res.send({code: 200,msg:"删除成功！"});
    })
});


module.exports = router;
