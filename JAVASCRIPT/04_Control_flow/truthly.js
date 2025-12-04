const username = [] 
if(username){
    console.log("have a username")
}
else{
    console.log("dont have username")
}

//falsy value
//false , 0 ,-0 , Bigint 0n , null . undefined , NaN

//truty value
//"0","false"," ",[],{},function(){}


//check empty array
if(username.length === 0){
    console.log("Array is empty")
}

//check empty object 
const myobj  = {}
if(Object.keys(myobj).length === 0){
    console.log("object is empty")
}

//Nullish coescalling operator
let val1
val1 = 5 ?? 10
val1 = null ?? 10 ?? 20
console.log(val1)

//terniary operator
const val = 10
val >= 5 ? console.log("value is greater than 5") : console.log("value is less than 5")