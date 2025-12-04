const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //Db calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed")
})


//second promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})



const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"dev@123"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"chai aur code",email:"dev@123"})
        } else {
            reject('Error : something went wrong')
        }
    },1000)
})
promiseFour
.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("The problem is either resolved or rejected")
})



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"js",email:"dev@121113"})
        } else {
            reject('Error : something went wrong in js')
        }
    },1000)
});
async function consumepromisefive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error){
        console.log(error);
    }
}
consumepromisefive();


// async function getAllUser(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E : " , error)
//     }
// }
// getAllUser();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})