const express = require("express")
const app = express();
const PORT = 8000;

app.set("view engine", "ejs")
app.use(express.json())
app.use(express. urlencoded({ extended: true}))//body를 읽어오기위함

app.get("/", function(req, res) {
    res.render("index-prac2");
})

app.post("/axios", function(req, res){
    console.log(req.body)

    const id = "lee";
    const pw = "123";

    if(req.body.id == id && req.body.pw == pw) {
        res.send("good")
    } else res.send("false")
    res.send(data)
})

app.listen(PORT, function(){
    console.log(`Sever open${PORT}`);
})