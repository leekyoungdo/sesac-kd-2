const express = require("express")
const app = express();
const PORT = 8000;
const router = require("./routes")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express. urlencoded({ extended: true}))//body를 읽어오기위함



app.use("/", router)


app.get("*", function(req, res){
    res.render("404")
});

app.listen(PORT, function(){
    console.log(`Sever open${PORT}`)
});