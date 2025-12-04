if(true){
    const username = "dev"
    if(username === "dev"){
        const website = "youtube"
        console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)

//**************** hoisting **************************
console.log(addone(5));
function addone(num){
    return num + 1;
}

console.log(addtwo(5))
const addtwo = function(num){
    return num + 2;
}