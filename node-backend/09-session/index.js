const express = require('express');
const app = express();
const PORT = 8000;
const session = require("express-session")


app.set("view engine", "ejs")
app.use(express.json())
app.use(express. urlencoded({ extended: true}))

app.use (session({
    secret:"secret key",
    resave: false, // 모든 요청마다 session을 다시 저장할 거냐?
    saveUninitialized: true, // 클라이언트가 처음 접속할때 세션을 한번 초기화 할건지 말건지? 
    cookie: {
        httpOnly: true,  //document.cookie로는 접속 x
        maxAge: 30000,
    },
    // secure: true // https에서만 동작하겠다 함 (true)
}));


// app.get("/",(req, res)=>{
//     res.render("login")

// })

app.get("/", (req, res)=>{
    res.render("index", {user: req.session.user})

})
app.get("/login", (req,res) => {
    // 로그인 성공한 시점에 req.session.user 에 user를 식별할 수 있는 고유한 값
    req.session.user = "lee"
    res.send("로그인 성공")
})

// app.get("/get", (req, res) =>{ 

//     if(req.session.user) {
//         res.render("/")
//     }
//     console.log("user : ", req.session.user)
//     res.send({user: req.session.user})
// })

app.listen(PORT, function(){
    console.log(`Sever open${PORT}`)
});