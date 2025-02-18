// console.log("Nameste");

// setTimeout(function() {
//     console.log("javascript");
// },5000)

// console.log("Season 2"); 

const cart = ["shoes", "pants", "kurta"]

api.createOrder(cart, function(){
    api.proceedToPayment()
})

