const redis = require("redis");
const redisclient = redis.createClient();
  
(async () => {
    await redisclient.connect();
})();
  
console.log("Connecting to the Redis");
  
redisclient.on("ready", () => {
    console.log("Connected!");
});
  
redisclient.on("error", (err) => {
    console.log("Error in the Connection");
});



// const demo = async() =>{
//     await redisclient.set('foo', 'bar'); // 'OK'
// } 
// const get= async()=>{
//     const res=await redisclient.get("foo");
//     console.log(res);
// }
// redisclient.set('mystring', 'this is a string', redis.print);
// redisclient.get('mystring', function(err, result) {  console.log(result); // this is a string
// });


// const demo=async()=>{
// const value = await client.json.get("mystring")
// console.log(value);
// };

// redisclient.get('foo', (error, value) =>
// {   if (error) {console.error('Error getting value:', error);   } 
// else {     console.log('Retrieved value:', value);   } });

module.exports=redisclient;