const User = require('../model/User')

exports.index = (req, res) => {
  res.render('index')
}

exports.signup = (req, res) => {
  res.render('signup')
}
exports.post_signup = (req, res) => {
    console.log("ss")
    // 모델과 연결하여, user 테이블에 회원가입 정보 insert
    User.post_signup (req.body, ()=> {
        res.send ({result: true});
    });
    // send ({result:true})
}


exports.signin = (req, res) => {
  res.render('signin')
}
exports.post_signin = (req, res) => {
    // 모델과 연결해서 실제로 회원이 존재하는 지 검색
    User.post_signin(req.body, (rows) => {
        if(rows.length > 0) {
                res.send({result:true, id: rows[0].id});
        } else {
                res.send({result:false})
        }
    })
    // 성공 : {result : true, id: 숫자 }
    // 실패 : {reuslt : false}
}

exports.profile = (req, res) => {
    // req.body {id (number)}
    // id에 해당하는 user를 select
    User.get_user(req.body.id, (row) => {
        res.render("profile", {data:row});
    });
};

exports.profile_edit = (req, res) => {
    // model 연결해서 update
    const data = {
        ...req.body,
        id: req.prams.id
    }
    User.update_profile (data, ()=> {
        req.send({result: true});
    });
}

exports.profile_delete = (req, res) => {
    User.delete_user (req.prams.id, () => {
        res.send ({result : true});
    });
};