const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
var bodyParser = require('body-parser')
//const rojuter = expressss.Router();
const app = express();
const router= require("./app/routes/tutorial.routes");
/*  var corsOptions =
 {
   origin: "http://localhost:8081" 
 }; */

 app.use(cors());

//Json application
 app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

 //connecting to mongodb
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

 //Simple Route
app.use("/api/tutorials",router);

app.get("/",(req,res) => {
    res.json({message: "Welcome to bezkoder application."})
});

//set port,listen for requests

 const PORT = process.env.PORT || 8081;
 app.listen(PORT,() => {
 console.log(`server is running on port ${PORT}.`);
 });



 