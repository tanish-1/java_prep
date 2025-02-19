const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
.then(function(orderId){
    console.log(orderId)
    // proceedToPayment(orderId);
    return orderId;
})
.then(function(orderId){
   return proceedToPayment(orderId);
    
})
.then(function(PaymentInfo){
    console.log(PaymentInfo);
})
.catch(function(err){
    console.log(err.message);
})
.then(function(){
 console.log("this is will be called automatically , even after there is error")
})

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment sucessfully");
    })

}
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
           //createOrder
           //validateCart
           //orderId
           if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
             reject(err)
           }
           // logic for createOrder
           const orderId = "12345";
           if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000)
          
           }
    }); 

    return pr;
}

function validateCart(cart){
    return false;
}