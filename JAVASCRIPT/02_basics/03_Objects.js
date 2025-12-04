//objects literals
const mysmb = Symbol("key1")
const obj = {
    name:"dev",
    [mysmb]:"key2",
    email:"dev123@mail.com",
    rollno:"14"
}
console.log(obj.name)
console.log(obj[mysmb])
console.log(mysmb)

obj.email = "Dev012@mail.com"
//Object.freeze(obj)
obj.email = "DevS@mail.com"
console.log(obj)

obj.greetings = function(){
    console.log("happy diwali")
}
obj.greetings2 = function(){
    console.log(`happy diwali to all`)
}
console.log(obj)
