const express = require("express")
const app = express();
const PORT = 8000;

app.set("view engine", "ejs")
app.use(express.json())
app.use(express. urlencoded({ extended: true}))//body를 읽어오기위함

app.get("/", function(req, res) {
    res.render("index");
})

// ------------------------------------ajax

app.get("/ajax", function(req, res) {
    console.log(req.query)
    //{ key: value, key: value }
    res.send(req.query);
})

app.post("/ajax", function(req, res) {
    console.log(req.body)
    //{ key: value, key: value }
    res.send(req.body);
})

// -------------------------------------axios

app.get("/axios", function(req, res){
    console.log(req.query)
    res.send(req.query)
})

app.post("/axios", function(req, res){
    console.log(req.body)
    const data ={
        ...req.body,
        msg: "반가워요",
    };
    res.send(data)
})

// -------------------------------------fetch

app.get("/fetch", function(req, res){
    console.log(req.query)
    res.send(req.query)
})

app.post("/fetch", function(req, res){
    console.log(req.body)
    res.send(req.body)
})

// ------------------------------------

app.listen(PORT, function(){
    console.log(`Sever open${PORT}`);
})


app.post("/~~~~~~~~~", function(req, res){
    const id ="lee"
    const pw = "123"
    // req.body 와 id, pw 를 비교하는 코드를 작성해서
    //일치하지 X -> "틀렸다."
    //일치 O -> "맞았다."
})