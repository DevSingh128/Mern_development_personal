//named iife
(function chai(){
    console.log(`db connected`);
})();

//single iife
((name)=>{
    console.log(`db connected to ${name}`);
    
})('dev');

