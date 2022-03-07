const express = require("express");

const app = express();
app.use(logger)
app.get("/books", (req, res) => {
    console.log("books");
      // return res.send({ route: "/books" });
   });
   app.use(checkPermission)
   app.get("/libraries" ,(req, res) => {
    console.log("libraries");
       return res.send({ route: "/libraries" });
   });
   app.get("/authors" ,(req, res) => {
    console.log("authors");
       return res.send({ route: "/authors" });
   });
   function logger(req,res,next){
       console.log("logging")
       next();
   }
   function checkPermission(user){
    // return function logged(req,res,next)  {
    // if(user=="authors"){
    //         return next()
    //    }
    //    if(user=="libraries"){
    //        return next()
    //    }
    // }
    next();
      
   }
app.listen(1234, () => {
 console.log("listening on port 1234");
});