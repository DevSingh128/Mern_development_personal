//Maps

const map = new Map();
map.set("IN", "india")
map.set("USA","united states of america")
map.set("Fr","France")
//console.log(map)

for(const [key,value] of map){
    console.log(key , value)
} 

//cannot apply for each loop on object => solve by for in loop

const myobj = {
    java : 'java816',
    javascript : 'javascriptmern',
    c : 'c-compiler'
}

for (const key in myobj){
    console.log(key)
    console.log(myobj[key])
}

//if use for in loop in array then key automatically store index of the array

// cannot apply for in loop in map also

//for each loop
const mycoding = [
    {
        languagename : "javascript",
        languagefilename : "js"
    }
] 

mycoding.forEach( (item) => {
    console.log(item.languagename)
})