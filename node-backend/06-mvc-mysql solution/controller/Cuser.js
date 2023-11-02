const {User} = require ("../model")


exports.index = (req, res) => {
  res.render('index')
}

exports.signup = (req, res) => {
  res.render('signup')
}
exports.post_signup = (req, res) => {
    const data = {
        userid: req.body.userid,
        pw : req.body.pw,
        name : req.body.name
    }
    const createUser =  User.create(data)
    res.send(createUser)
}

exports.signin = (req, res) => {
  res.render('signin')
}
exports.post_signin = (req, res) => {
    User.findAll({
      where:{
        userid: req.body.userid,
        pw: req.body.pw}
    })
    .then((result)=>{
    if (result.length > 0) res.send({ result: true, id: result[0].id })
    else res.send({ result: false })
})

  }


exports.profile = (req, res) => {
  User.findOne({
    where:{
        id: req.body.id,
    }
  }).then((result)=>{
    if (result) res.render('profile', { data: result })
    else res.redirect('/user/signin')
  })
    
  }


exports.profile_edit = (req, res) => {
    const data = {
        ...req.body,
        id: req.params.id,
    };
    User.update(data,{
        where :{
            id: data.id,
        },
    }).then((result)=> {
        res.send({result: true})
    })
}

exports.profile_delete = (req, res) => {
    User.destroy ({
        where: {
            id:req.params.id,
        },
    }).then((result)=> {
        console.log("destroy: " ,result)
        res.send({result:true})
    })
}
