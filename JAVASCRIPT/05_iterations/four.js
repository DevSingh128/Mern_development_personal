//reduce in js
const mynum = [1,2,3]
const mytotal = mynum.reduce( function (acc,currval){
    console.log(acc)
    console.log(currval)
    return acc+currval
},0)
console.log(mytotal)

const shopinggcart = [
    {
        item:"jscourse",
        price:2000
    },
    {
        item:"appdevcourse",
        price:5000
    },
    {
        item:"webdevcourse",
        price:8000
    }
]

const total = shopinggcart.reduce( (acc,item) => {
    return acc+item.price
},0)
console.log(total)
