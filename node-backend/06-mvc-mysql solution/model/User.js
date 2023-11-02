// 테이블의 구조를 정의
// orm은 객체와 db의 table을 매핑
// sequelize를 이용해서 table의 구조를 정의할 필요가 있음.

function User(Sequelize, DataTypes) {
    return Sequelize.define(// 모델(테이블)정의, sequelize 객체의 define
        "membership", //테이블 이름
        {
            id :{  //int not null primary key auto_increment
                    type:DataTypes.INTEGER,
                    allowNull: false, // true가 기본값 not null일 경우 false
                    primaryKey: true, // false가 기본값
                    autoIncrement: true,
            },
            userid: {
                type:DataTypes.STRING(20),
                allowNull: true, // true가 기본값으로  안적어도됨 
            },
            name: {
                    type:DataTypes.STRING(10),
                    allowNull: true, // true가 기본값으로  안적어도됨 

            },
            pw: {
                    type : DataTypes.STRING(20),
                    allowNull: true, // true가 기본값으로  안적어도됨 
            }   
        }, //컬럼 정의
        {
            tableName : "membership",
            frezzeTableName: true,
            // sequelize에서 간혹 단수로 지정해둔 테이블 이름을 sql문을 날릴때 
            // 복수로 변경을 시켜서 = visitors(처럼) 방지하기 위해 테이블 네임을 고정시키는 
            // insert into visitor ~~ => create() => insert into visitors ~~~
            timestamps : false,
            // insert, update 시에 그 시간을 자동으로 저장하겠다. (저장을 하는것이 기본값)
            // 저장시키지 않기위해 false로 지정 
            // createAt, updateAt
        }
    )
}

module.exports = User;