const cart = ["Shoes", "Shirts", "pants", "tShirts"];

createOrder(cart, function(orderId){
    proceedToPayment(orderId);
}); //orderid

// * PROMISES
/** Promise is an Object
 * Promise is a callback function which accepts 2 callback functions.
 * Pending
 * fulfilment/resolve
 * reject
 * 
 * !EXAMPLE:
 * var p1 = new promise(function(resolve, reject){
 * var res = true;
 * if(res){
 * resolve("It's true");
 * }
 * else{
 * reject("It's False")}
 * console.log(p1);
 * p1.then(function(val){
 * console.log(val);} //OUTPUT- PROMISE FULFILLED IT'S TRUE
 * ).catch(function(val){
 * console.log(val);})
 *  }
 * )
 */