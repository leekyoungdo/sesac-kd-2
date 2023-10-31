const {Visitor} = require ("../model")
exports.home = (req, res) => {
  res.render("index");
};

// GET / visitors = > 기존 방명록 전체 조회 후 render("visitor")
exports.visitor = (req, res) => {
   
        //select * form visitor
        Visitor.findAll()
        .then((result)=> {
            console.log("findAll result :", result);
            console.log("0 index의 username",result[0].username)// dataValues는 생략해도됨
            // 기대 : [{id: , username: , comment: }], {id: , username: , comment}
            res.render("visitor",{data: result});
        })
        // Visitor.findAll({
        // where : {username : "lee"}
        //   })
};

// POST /visitor => 방명록 insert
exports.postVisitor = async(req, res) => {
    const data = {
        username: req.body.username,
        comment: req.body.comment
    }
    // Visitor.create(data).then((result)=>{
    //     console.log("cerate result :", result)
    //     res.send(result)
    // }).catch((err)=>{
    //     console.log(err)
    //     res.send("오류발생")
    // })

    const createVisiotr =  await Visitor.create(data)
    res.send(createVisiotr)
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
    Visitor.destroy({
        where: {
            id:req.params.id,
        },
    }).then((result) =>{
        console.log("destroy :", result)
        res.send({result: true})
    })

};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
    // select * from visitor where id =  ? ? ? ? ?
    Visitor.findOne({
        where:{
            id:req.params.id,
        },
    }).then((result) => {
        console.log("findOne :", result)
        res.send(result)
    })

};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
    const data ={
        username : req.body.username,
        comment: req.body.comment,
    };
    // update visitor set username ="??", comment="???" where id = ?;
    Visitor.update(data,{
        where:{
            id:req.body.id,
        },
    }).then((result)=>{
        console.log("update result :", result);
        res.send({result:true})
    })

};

exports.getTest = (req, res) => {
    //select username from visitor where id = 16 limit 1;
    Visitor.findAll({
      attributes: ["username", "id"],
      // where: {
      //   id: req.params.id,
      // },
      order: [["username", "asc"]],
    }).then((result) => {
      // console.log("findOne", result);
      res.send(result);
    });
  };