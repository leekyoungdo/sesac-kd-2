const express = require('express');
const app = express();
const PORT = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs")
app.use(express.json())
app.use(express. urlencoded({ extended: true}))
app.use(cookieParser()); // 쿠키를 해석할 수 있게 해줌;

const cookieConfig = {
    httpOnly: true, // document.cookie 로 접근 불가. 서버에서만 쿠키에 접근할 수 있다.
    maxAge : 60 * 24 * 1000, // 보존하고자 하는 기간을 ms 단위로 설정
    // expires : "2023-11-04T18:00",
    // path : "/", // "/test" -> localhost: 8000/test/~~~~~~~~~~~
    // secure : true, // https 보안 서버에서만 쿠키를 동작하게 한다.
    // signed: true // 쿠키 암호화 -> req.signedCookies
}; 


// app.get("/",(req, res)=>{
//     res.send("hello world")
// })

app.get("/",(req, res)=>{
    res.render("index")
})

// app.get("/set", (req, res)=> {
//     // 서버가 쿠기를 만들어서 응답으로 보낸다.
//     res.cookie("key1", "value1", cookieConfig);
//     // key : key1 / value : value1
//     res.render ("index")
// });

// app.get("/get", (req, res)=> {
//     console.log("cookie: " , req.cookies);
//     res.send(req.cookies)
// });



app.listen(PORT, function(){
    console.log(`Sever open${PORT}`)
});

