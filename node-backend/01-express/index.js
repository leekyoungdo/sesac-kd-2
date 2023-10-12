const express = require("express"); // express 모듈 import
const app = express(); //server 객체
const PORT = 8000; // 포트
// 1 ~ 65536. 1 ~ 1023 까지는 정해진 기능이 있음.
// 3000, 8000, 8080, 8010, 3010
// 3306 : mysql에서 사용됨.

// app객체의 view engine 설정을 ejs로 변경
app.set("view engine", "ejs")
// app 객체의 view 폴더 설정. 기본값 : ./views
// 만약 ./view 폴더로 바꾸고 싶다면 아래처럼 작성하면됨.
// app.set("views","./view")

app.use("/static",express.static(__dirname + "/static"))
// __dirname : c:/user ~~/ 01-express/static 에 클라이언트가 /static 이름으로 들어올 수 있다.

// app.use("/public",express.static(__dirname + "/static"))
// __dirname : c:/user ~~/ 01-express/static 에 클라이언트가 /public 이름으로 들어올 수 있다.

// get 메소드 (http 메소드) : 클라이언트가 요청할 수 있는 방법들을 정의
// localhost:8000
app.get("/", function (req, res) {
    // 응답 객체 내의 send 메소드 실행. "hello express" 문자열을 응답으로 전송하겠다
    // send : 값을 보냄
    res.send("hello express");
});

app.get("/ejs", function(req, res){
    // render 메소드의 기본 dir "./veiws"
    res.render("test/index")
    // res.render("index")
})

app.get("/lee", function(req, res){
  res.render("lee",{
  name : "lee",
  product:["운동화","후드집업","스웨터"]
});
})
// http 메소드의 두번째 인자로 넘겨주는 콜백함수의 매개변수  2개
// 첫번째 매개변수 : request 객체 (요청)
// 두번째 매개변수 : response 객체 (응답)

//localhost:8000/test
// app.get("/test", function(req, res){
// res.send("<div style ='color: red'>안녕</div>");


// 서버를 연다.
// localhost:8000;
// 127.0.0.1:8000;
app.listen(PORT, function () {
  console.log(`server open ${PORT}`);
});