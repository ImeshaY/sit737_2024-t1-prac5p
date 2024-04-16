//import express module
const express= require("express");
const res = require("express/lib/response");
const app = express();
//defining subTwoNumbers function. n1 and n2 are function input parameters. function returns the substraction result.
const subTwoNumbers= (n1,n2) => {
    return n1-n2;
}
//defining the route handler for GET requests to the URL path /subTwoNumbers
app.get("/subTwoNumbers", (req,res)=>{
    //set the constant values n1 and n2 by extracting the value from the query string and parsing it as an integer 
    const n1= parseInt(req.query.n1);
    const n2= parseInt(req.query.n2);
    //calls subTwoNumbers function to calculate the substraction of n1 and n2 and save it in the result variable.
    const result = subTwoNumbers(n1,n2);
    //sending JSON response to the client
    res.json({statuscocde:200, data: result }); 
});

//intentional project error break
app.get("/break", ()=>{
    process.exit(1);
})


//calling subTwoNumbers function with 20 and 10 as arguments. The result 10 is logged to the console.
console.log (subTwoNumbers(20,10));
//define port number
const port=3000;
//start the server and listen to port 3000
app.listen(port,()=> {
    console.log("Hello! I'm listening to port "+port);
})