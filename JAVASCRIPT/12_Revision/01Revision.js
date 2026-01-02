//var - redeclare , reassign
//let - reassign
//const - X
//datatypes on own

let x = 4
let arr = [1,2,3,4,5]
let nums = [6,7,8]
console.log(arr.splice(0,3)); //broke array into parts
console.log(arr.slice(0,3)); //not broke array
console.log(nums.join('-'))
console.log(x++);
console.log(++x);
console.log("1"+1+2);
console.log(1+1+"2");



/*  literals are fixed values written directly into the code, while constructors are functions (or special class methods) used to create and initialize multiple objects with a predefined structure
object literals => const car = {
    make: "Ford",
    model: "Mustang",
    year: 1969
};
object constructor => function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const car1 = new Car("Eagle", "Talon TSi", 1993);
const car2 = new Car("Nissan", "300ZX", 1992);





destructuring in react with help of js
function Greeting({ name, age }) {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}



Hoisting : "use a variable or call a function it appears in the code , it depend on function
and and variables used" example: 
console.log(myVar); // Output: undefined
var myVar = 5;
console.log(myVar); // Output: 5
hello(); // Output: "Hello, World!"

function hello() {
  console.log("Hello, World!");
}
(***never use arrow function in hoisting use regular functions)



***MAP FUNCTION***
The map() method creates a new array by performing a function on each array element.
The map() method does not execute the function for array elements without values.
The map() method does not change the original array.
example=> 
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
function myFunction(value) {
  return value * 2;
}



***FILTER METHOD***
The filter() method creates a new array with array elements that pass a test
example=>
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);
function myFunction(value) {
  return value > 18;
}



***REDUCE METHOD***
The reduce() method runs a function on each array element to produce a single value.
The reduce() method does not reduce the original array.
example=>
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);
function myFunction(total, value) {
  return total + value;
}



***MAPS METHOD***
const fruits = new Map();
KEY VALUE PAIR : Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
follow up : objects vs maps



***Promises***
Closures are functions that have access to variables in their outer function scope, even after the outer function has returned. 
Closures are created every time a function is defined, and 
they're used to create private variables and methods.(access of outer variables to inner function : used for data encapsulation)



#prototype use to make property of a object 
#constructor use to make a object blueprint for usage of that object type again and again
#Asynchronus Patterns
Events
Callbacks
Promises
Async/Await



****callback****
A callback is a function that is passed as an argument to another function, and 
is intended to be executed at a later point in time,
typically when a specific event occurs or an asynchronous operation completes.
In the example below, myDisplayer is a called a callback function.
It is passed to myCalculator() as an argument.
Example (Callbacks)
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
myCalculator(5, 5, myDisplayer);





****JavaScript Promises****
Promises represent a value that may be available now, later, or never.
Example (Promises)
fetch("https://api.example.com")
then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));




#async/await doesn't change how JavaScript works under the hood (it still uses Promises), 
but it makes your code look and behave like synchronous code. This makes it much easier to read, maintain, and debug.
async function getData() {
  try {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    console.log(data);
  } catch (err) {
  console.error(err);
  }
}



****event****
onclick etc the event that you trigger 
<p>Click the button to display the date.</p>
<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>


#end
*/







