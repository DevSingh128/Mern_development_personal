function loginmessage(username = "dev"){
    if(!username){
        console.log("enter valid username")
        return
    }
    return `${username} is logged in`
}
console.log(loginmessage())


//REST IN JAVASCRIPT
function calculatecartprice(nums1,nums2,...num) {
    return num
}
console.log(calculatecartprice(200,300,4000,5000))
