const data = {name:"lee", gender:"남자"};

const jsonData = JSON.stringify(data);
console.log("json: ", jsonData);

console.log("js object: ", JSON.parse(jsonData))