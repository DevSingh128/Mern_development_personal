const marvelheros = new Array("spiderman" , "ironman")
const dcheros = new Array("batman" , "superman")

marvelheros.push(dcheros) // 1 array in another array [[]]
const newarray = marvelheros.concat(dcheros) //merge arrays into new array
const newarr = [...dcheros,...marvelheros]//optimal any array spread method

console.log(newarr)

//convert anything to array

let s = "irueiurev"
console.log(Array.from(s))

