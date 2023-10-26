let users = `spreatics//12341234//코딩온
codee//4321//코디
lily//1234//릴리`;

let userEntries = users.split("\n");
let userArray = [];

for (let i = 0; i < userEntries.length; i++) {
  let userInfo = userEntries[i].split('//');
  userArray.push(userInfo);
}

console.log(userArray);

exports.getUser = () => {
    const id = "lee";
    const pw = "123";
    return{id, pw};
}