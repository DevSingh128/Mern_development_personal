const myuser = {
    email:"dev123@mail.com",
    rollno:"14",
    fullname : {
        firstname:"dev",
        lastname:"singh"
    }
}
console.log(myuser.fullname.firstname)


//add two object in one
const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);
console.log(Object.keys(myuser))
console.log(Object.values(myuser))
console.log(Object.entries(obj1))
console.log(Object.hasOwnProperty('rollno'));


//destructing objects
const course = {
    coursename : "js",
    price : "99",
    courseins : "hitesh"
}
const {courseins : ci} = course
console.log(ci)



