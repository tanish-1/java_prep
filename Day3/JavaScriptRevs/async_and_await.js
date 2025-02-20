const API_URL  = "https://api.github.com/users/tanish-1";
async function handlePromise(){
            try{
          const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data); 
            }catch(err){
                console.log(err);
            }
}

handlePromise()
// const promise1 = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         resolve("Promise Resolved value!!");
//     }, 5000);
// })

// const promise2 = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         resolve("Promise Resolved value!!");
//     },10000);
// })


// // function getdata() {
// promise.then((value)=> console.log(value))
// console.log("nameste javascript");
// }
// getdata();
// async function handlePromise() {
//     console.log("ahhh")
//      const value1 = await promise1;
//      console.log("nameste javascript 1")
//      console.log(value1);

//      console.log("yess yess")

//      const value2 = await promise2;
//      console.log("nameste javascript 2")
//      console.log(value2);
// }
// handlePromise();
// console.log("uhhh")
// function getdata() {
//     promise.then((res)=> console.log(res))
// }
// getdata()
// async function getdata(){
//      return promise
// }
// const data = getdata();
// console.log(data);
// data
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))


