const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 8000;

app.use("/uploads", express.static(__dirname + "/uploads"));


app.set("view engine", "ejs")
app.use(express.json())
app.use(express. urlencoded({ extended: true}))

app.get("/", function(req, res) {
    res.render("index-prac2");
});

const upload = multer({
    dest: "uploads/",
});

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination : function(req, file, done) {
            done(null, "uploads/")
        },
        filename: function(req, file, done){
            console.log(file) 
            const ext = path.extname(file.originalname) 
            const basename = path.basename(file.originalname, ext) 
            const filename =basename+"_"+req.body.id + "_" + Date.now() + ext;
            

            done(null, filename)
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024},
});

app.post("/upload/detail", uploadDetail.single("userfile") ,function(req, res){

    res.render("result-prac", {
        src: req.file.path,
        id : req.body.id,
        pw : req.body.pw,
        name : req.body.name,
        age : req.body.age,
      })
    }   
)

app.post("/upload/dynamic",uploadDetail.single("userfile"),function(req, res){
    res.send({
        src: req.file.path,
        id : req.body.id,
        pw : req.body.pw,
        name : req.body.name,
        age : req.body.age,
    })
   })

app.listen(PORT, function(){
    console.log(`Sever open${PORT}`);
});