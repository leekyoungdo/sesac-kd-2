
const mysql =  require("mysql")

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'membership',
    password: 'sba123$',
    database: 'sesac_test',
});

exports.getMembership = (cb) => {
    conn.query(`SELECT * FROM membership`,(err,rows) =>{
        if(err){
            throw err;
        }

        console.log('membership', rows);
        cb(rows);
    })
}

exports.insertMembership = (data, cb) => {
    const sql = `insert into membership (userid, name, pw) values ('${data.userid}', '${data.name}','${data.pw}');`
    conn.query (sql, (err, result)=>{
        if(err){
            throw err;
        }
        console.log("membership insert", result);
        cb(result.insertId)
    })
}