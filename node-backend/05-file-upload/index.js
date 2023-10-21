const express = require("express");
const multer = require("multer"); // multer 불러오기
const path = require("path");
// path: 파일 경로를 받았을 때, 그 조작을 도와준다.
// ex) 확장자를 추출. 파일이름을 추출
console.log("hi.txt의 확장자:", path.extname("hi.jpg")); 
console.log("hi.txt의 확장자:", path.basename("hi.jpg", path.extname("hi.txt"))); 



const app = express();
const PORT = 8000;

// 클라이언트가 uploads 폴더에 저장한 이미지파일에 접근할 수 있도록, 미들웨어 작성
app.use("/uploads", express.static(__dirname + "/uploads"));

// upload라는 객체 안에는 미들웨어 함수가 존재. single() , array(),
// 미들웨어 : 요청과 응답 사이에 존재.
// multer가 임의의 문자열을 생성해서 그 문자열을 파일 이름으로 만듦.
// 심지어 확장자도 바꿔주지않음.
const upload = multer({
    dest: "uploads/",
});

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination : function(req, file, done) {
            done(null, "uploads/")
        },
        filename: function(req, file, done){
            console.log(file) // file.originalname : 말티푸.jpg
            const ext = path.extname(file.originalname) // .jpg
            const basename = path.basename(file.originalname, ext) // 말티푸
            const filename = basename + "_" + Date.now() + ext; // 말티푸_123456789.jpeg 
            

            done(null, filename)
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024}, // 5MB 제한
});

// storage : 파일을 저장 할 정보
// -- diskStorge : 파일을 디스크에 저장을 하기 위한 기능을 제공하는 메소드 
// ----- destination : 파일이 저장될 경로
// ----- filename : 파일이 저장 될 이름

//limits
// -- filesize : 파일의 최대 크기

app.set("view engine", "ejs")
app.use(express.json())
app.use(express. urlencoded({ extended: true}))

app.get("/", function(req, res) {
    res.render("index");
});
// ejs의 input 의 file 이 name과 미들웨어의 이름이 같아야한다 ex) userfile
// single(), array(), fields() : 미들웨어 => 클라이언트가 보낸 요청 중에 userfile이라는 name 파일 데이터가 있다면,
// 파일을 multer의 설정대로 저장해서, req.file or req.files 이라는 객체를 생성해서 다음 함수에 넘겨줌!!
// single() : 파일 하나만 업로드할 때 사용함. -> req.file생성
app.post("/upload",upload.single("userfile"),function(req, res){
    console.log("file", req.file)
    console.log("body", req.body)
    res.send("파일 업로드");
});

//--------------------------------------------------------------sigle------------------------------------
app.post("/upload/detail", uploadDetail.single("userfile") ,function(req, res){
    console.log("file detail:", req.file)
    console.log("body detail:", req.body)
    // res.send("파일 업로드")
    res.render("result", {
        src: req.file.path,
        title : req.body.title
      })
    }   
)


//--------------------------------------------------------------array------------------------------------
//array() : 파일 여러개 업로드 name(input)하나로 여러개의 파일을 받는 방법)
// req.file() 생성
app.post("/upload/array", uploadDetail.array("userfile"), function(req, res){
    console.log("file 여러개(ver1)", req.files)
    res.send("여러개 업로드 성공") 
})

//--------------------------------------------------------------fiedls------------------------------------
// fields() : 파일 여러개 업로드. name 이 두개 이상 (input이 2개 이상).
// req.files
app.post("/upload/fields",uploadDetail.fields([{ name:"userfile1"},{name:"userfile2"}]), function(req, res){
    console.log("file 여러개 (ver2)", req.files)
    
    console.log("req.body: ", req.body)

    res.send("여러개 업로드 성공(ver2)")
})

app.post("/upload/dynamic",uploadDetail.single("userfile"),function(req, res){
 res.send({src: req.file.path})
})

app.listen(PORT, function(){
    console.log(`Sever open${PORT}`);
});