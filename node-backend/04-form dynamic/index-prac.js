const express = require("express")
const app = express();
const PORT = 8000;

app.set("view engine", "ejs")
app.use(express.json())
app.use(express. urlencoded({ extended: true}))//body를 읽어오기위함

app.get("/", function(req, res) {
    res.render("index-prac");
})


app.get("/axios", function(req, res){
    console.log(req.query)
    res.send(req.query)
})



app.listen(PORT, function(){
    console.log(`Sever open${PORT}`);
})