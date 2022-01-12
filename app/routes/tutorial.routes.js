/* var tutorialsController= require("../controllers/tutorial.controllers");

var express = require("express");
var router = express.Router();


//test router
//Retrieve all published tutorials

router.get("/published",tutorialsController.findAllPublished);

//Create a new tutorial
    
router.post("/create",tutorialsController.create);

//Retrieve all tutorials
   
router.get("/",tutorialsController.findAll);

//retrieve a single tutorial with id

router.get("/:id",tutorialsController.findOne);

//Update a tutorial with id
router.put("/:id",tutorialsController.update);

   //Delete a tutorial with id
router.delete("/:id",tutorialsController.delete);

//Create a new Tutorial
router.delete("/",tutorialsController.deleteAll); 

app.use("/api/tutorials",tutorialRouter);


module.exports = router; */

module.exports = app => {
   const tutorials = require("../controllers/tutorial.controllers");

   var router = require("express").Router();

   // Create a new Tutorial
   router.post("/", tutorials.create);

   // Retrieve all Tutorials
   router.get("/", tutorials.findAll);

   // Retrieve all published Tutorials
   router.get("/published", tutorials.findAllPublished);

   // Retrieve a single Tutorial with id
   router.get("/:id", tutorials.findOne);

   // Update a Tutorial with id
   router.put("/:id", tutorials.update);

   // Delete a Tutorial with id
   router.delete("/:id", tutorials.delete);

   // Create a new Tutorial
   router.delete("/", tutorials.deleteAll);

   app.use('/api/tutorials', router);
};