const http = require("http");
const express = require("express");
const app = express();
// 소켓이 http모듈로 생성된 서버에서만 동작
const server = http.createServer(app);
const PORT = 8000;

const io = require("socket.io")(server);

// const Socket = require("socket.io")
// const io = Socket(server)

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("client1");
});

io.on("connection", (socket) => {
  // 콜백함수의 매게변수에 있는 socket 객체
  // 접속한 클라이언트의 소켓
  //   console.log("socket id :", socket.id);
  // on을 이용해, 클라이언트에서 socket을 이용해서 보내준 데이터를
  // 받을 이벤트를 등록함.
  socket.on("hello", (res) => {
    console.log(res);
    socket.emit("bye", {
      msg: "잘가세요.",
    });
  });
  socket.on("entry", (res) => {
    console.log(res);
    io.emit("notice", { msg: `${socket.id}님이 입장했습니다.` });
  });

  socket.on("hi", (res) => {
    console.log("client:", res);
    io.emit("himsg", "hello: 안녕?");
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
