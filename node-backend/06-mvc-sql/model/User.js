
const mysql = require("mysql");
const cnn = mysql.createConnection({
  host: "localhost",
  user: "membership",
  password: "sba123$",
  database: "sesac_test",
});

exports.post_signup = (data, cb) => {
    //insert
    const sql = `insert into membership (userid, name, pw) values('${data.userid}','${data.name}','${data.pw}')`;

    cnn.query(sql, (err, rows) => {
        if(err) {
            throw err;
        }
        cb(rows);
    })
};

exports.post_signin = (data, cb) => {
    // data = {userid, pw}
    // select
    const sql = `select * from membership where userid = '${data.userid}' and pw = '${data.pw}'`;
    cnn.query(sql, (err, rows) => {
        if(rows.length > 0) {

        }else {

        }
    }) 
};
exports.get_user = (id, cb) => {
    const sql = `select * from membership where id = ${id}`;
    cnn.query(sql, (err,rows)=> {
        if (err) {
            throw err;
        }
        cb(row[0])
    })
};

exports.update_profile = (data, cb) => {
    const sql = `update membership set name = '${data.name}' userid = '${data.userid}' pw = '${data,pw}' where id = ${data.id} `;    
    cnn.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        cb ();
    })
};
exports.delete_user = (id, cb) => {
    const sql = `delete from membership where id =${id}`
    cnn.query(sql, (err,result) => {
        if(err) {
            throw err;
        }
        cb();
    })

}