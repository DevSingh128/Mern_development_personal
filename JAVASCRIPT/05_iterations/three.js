//map
const mynum = [1,2,3,4,5,6]
const newnum = mynum.map( (num) => {
    return num*10
})
console.log(newnum)

//can apply multiple map also
const newnum1 = mynum
.map( (num) => {
    return num*10
})
.map( (num) => {
    return num+1
})
console.log(newnum1)

//can also apply filter on it