const express = require("express")
const app = express();
const PORT = 8000;

app.set("view engine", "ejs")
app.use(express.json())
app.use(express. urlencoded({ extended: true}))//body를 읽어오기위함

// [before]
// app.get("/", function(req, res) {
//     res.render("index");
// });

// const router = require("./routes"/index)
// 폴더이름 까지만 접근해도 index.js를 자동으로 불러옴
const router = require("./routes")
app.use ("/", router); //라우터 자체를 미들웨어로 걸음
//localhost:8000/~~~~~~~



// 존재하지 않는 get 요청에대해서
app.get("*", function(req, res){
    res.send("페이지를 찾을수 없습니다.")
});

app.listen(PORT, function(){
    console.log(`Sever open${PORT}`)
});