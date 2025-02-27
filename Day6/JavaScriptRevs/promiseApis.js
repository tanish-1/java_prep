//promise APIs 
// promise.all 
// promise.allSetteled
// promise.race
// promise.any


const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject("P1 reject"), 3000);
}) 
const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject("P2 reject"), 4000);
}) 
const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject("P3 fail"), 2000);
})  

// a) promise.all

// Promise.all([p1,p2 ,p3])
// .then(function(result){
//     console.log(result)
// })
// .catch((err)=>console.log(err))

// b) promise.allSetteled

// Promise.allSettled([p1,p2 ,p3])
// .then(function(result){
//     console.log(result)
// })
// .catch((err)=>console.log(err))

// c) promise.race

// Promise.race([p1,p2 ,p3])
// .then(function(result){
//     console.log(result)
// })
// .catch((err)=>console.log(err))

// d) promise.any
Promise.any([p1,p2 ,p3])
.then(function(result){
    console.log(result)
})
.catch((err)=>{ 
  console.log(err.errors)
})