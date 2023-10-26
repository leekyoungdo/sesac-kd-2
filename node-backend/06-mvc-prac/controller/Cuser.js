const User = require("../model/User");
// User = {getUser: ()=>{}}


exports.main = (req, res) => {
    res.render("index");
  };

exports.membership = (req, res) =>{
    res.send(req.query);
  }


exports.login = (req, res) => {

    const userData = User.getUser();
    // userData = {id:"lee" pw:"123"}
    let data;
    if (req.body.userid == userData.id && req.body.password == userData.pw) {
      data = {
        isSuccess: true,
        msg: "로그인 성공!",
      };
    } else {
      data = {
        isSuccess: false,
        msg: "로그인 실패!",
      };
    }
    res.send(data);
  };