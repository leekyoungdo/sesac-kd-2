const express = require('express');
const app = express();
const PORT = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs")
app.use(express.json())
app.use(express. urlencoded({ extended: true}))
app.use(cookieParser());

const cookieConfig = {
    httpOnly: true, 
    maxAge : 60 * 24 * 1000,

}; 


app.get("/",(req, res)=>{
    const noPopup = req.cookies.popup
    res.render("index",{noPopup})
})

app.post("/setCookie", (req, res) =>{
    res.cookie("popup","y",cookieConfig)
    res.send({result:true})
})


app.listen(PORT, function(){
    console.log(`Sever open${PORT}`)
});
