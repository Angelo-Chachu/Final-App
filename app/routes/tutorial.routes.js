var tutorialsController= require("../controllers/tutorial.controllers");

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

module.exports = router;