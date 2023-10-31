const membership = require("../model/Membership")

exports.main = (req, res) => {
    res.render("index")
}

exports.index = (req, res) => {
    Membership.getMembership(function(result){
        res.render("index", {data: result});
    })
}

exports.postMembership = (req, res) => {
    console.log("req.body", req.body)
    Membership.insertMembership(req.body, (id) =>{
        console.log("ctrl postMembership", id)
        res.send({
            ...req.body,
            id
        })
    })
};