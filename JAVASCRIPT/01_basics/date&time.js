let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

let mytimestamp = Date.now();
let mycreatedate = new Date("10-11-2025")
console.log(mytimestamp)
console.log(mycreatedate.getTime())
console.log(Math.floor(Date.now()/1000))

let newdate = new Date()
console.log(newdate.getMonth())
console.log(newdate)