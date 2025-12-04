const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);
// console.log(Math.PI);
// Math.PI =5
// console.log(Math.PI);

const chai = {
    name : 'ginger chai',
    price: 250,
    isAvailable: true

     
}
console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

// Object.defineProperty(chai,'price',{
//   writable: false,
//   enumerable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(chai,"price"))

for(const[key,value] of Object.entries(chai) ) {
    console.log(`${key} : ${value}`);
}

//we iterate function inside object and if enumerable is false 
// then we cant iterate on object property

