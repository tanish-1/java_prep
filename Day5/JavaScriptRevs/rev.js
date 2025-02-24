// console.log(name);
// abc();
// var name = 10;
// var value = 300;
// function abc(){
//     //   var value = 200;
//     function inner(){
//         console.log(value);
       
//         console.log("hello")
//     }
//     inner();
// }
// console.log(value)
// console.log("-------------")
// abc();


// let name;
// console.log(name);
// abc();

// function abc(){
//     console.log(name);
//     name = "wowo"
//     console.log(name);
// }
function abc() {
    let k = 10;
   return function (){  
        console.log(k);
        k++;
        return k;
    }
   
}

const result = abc();
console.log(result());
console.log("-------------")
console.log(result());
let value = 0;

// IIFE
(function(){
    console.log("helllo worlds");
})()
let arr = [1,2,4,5]
console.log(arr.slice(1,3))
arr.splice(1,4,30,40,50,60)
console.log(arr)