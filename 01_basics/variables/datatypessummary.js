 
 //********************************************** */
 
 // primitive => 7
 // types => String, Number, Boolean, null, undefined, Symbol, BigInt
 
const score = 100
const scorevalue = 100.3
const isLoggedValue = false
const outsideTemp = null
let userEmail;

//console.log("hii")

// **********************************************************

 // Refrence (Non primitive)
 // types => Array, Objects, Functions

 const id = Symbol('123')
 const anotherId = Symbol('123')

 //console.log(id === anotherId);

 const heros = ["shaktiman", "naagraj", "doga"];

 let myOBJ = {
     name: "hitesh",
     age: 22,
     height: 56.4
 }

 const myFunction = function(){
    console.log("hello world");
 }

//  console.log(typeof myFunction);

//  console.log(heros);
//  console.log(myOBJ);
 
/** stack and heap memory */


let name = "hitesh"
let anothername = name
console.log(anothername)

anothername = "chaiaurcode"
console.log(anothername)



let userone = {
    email : "user@google.com",
    upi : "user@ybl"
}

let usertwo = userone

usertwo.email = "hitesh@google.com"

console.log(userone.email);
console.log(usertwo.email);