const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");

const app = express();

 var corsOptions =
 {
   origin: "http://localhost:8081" 
 };

 app.use(cors(corsOptions));

//Json application
 app.use(express.json());

 //URL Application

 app.use(express.urlencoded({extended : true}));

 //Simple Route

 app.get("/",(req,res) => {
     res.json({message: "Welcome to bezkoder application."})
 });
  
 const db = require("./app/models");
 db.mongoose
   .connect(db.url, {
     useNewUrlParser: true,
     useUnifiedTopology: true
   })
   .then(() => {
     console.log("Connected to the database!");
   })
   .catch(err => {
     console.log("Cannot connect to the database!", err);
     process.exit();
   });
 //set port,listen for requests

 const PORT = process.env.PORT || 8000;
 app.listen(PORT,() => {
 console.log(`server is running on port ${PORT}.`);
 });



 