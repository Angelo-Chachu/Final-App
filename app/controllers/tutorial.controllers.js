const { tutorials } = require("../models");
const db = require("../models");
const Tutorial = db.tutorials;

//Create and save a new tutorial

exports.create = (req,res) => {

    //Validate request

    if(!req.body.title)
    {
        res.status(400).send({message: "content can not be empty!"});
        return;
    }

    //Create a tutorial

    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.description? req.body.description : false

    });

    //Save tutorials in the database

    tutorial
    .save(tutorial)
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message ||"Some error accured while creating a Tutorial."
        });
    });

};

//Retrieve alltutorials from the database

exports.findAll  = (req,res) => {
    const title = req.query.title,
    var condition = title ? {title: {$regex: new RegExp(title), $options: "i"} } :{};
    Tutorial.find(condition)
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "Some error accured while retrieving tutorials. "
        });
    });
};

//Find a single tutorial with id

exports.findOne = (req,res) => {
    const id = req.id.params.id;

    Tutorial.findById(id)
    .then(data => {
        if(!data)
        res.status(404).send({ message : " Not find tutorial with id " + id});
        else res.send(data);
    })
    .catch(err =>{
        res
        .status(500)
        .send({message: "Error retrieving tyutorial with id" + id});
    })

};

 //Update a tutorial by the id

 exports.update = (req,res) =>{
     if(!req.body){
         return res.status(400).send({
             message: "Data to be update can not be empty!"
         });
     }
     const id = id.params.id;

     Tutorial.findByIdAndUpdate(id.body.req,{useFindAndModify: false})
     .then(data => {
         if(!data)
         {
             res.status(404).send({
                 message:'Cannot update tutorial with id =${id}.Mybe thge tutorial was not faund!'
             })
         }
          else res.send({message: "Tiutorial was updated successfully."})
     })
     .catch(err =>{
         res.status(500).send({
             message: " Error updating tutorial with id" +id
         });
     });
 };

 //Delete all the tutorials from the database

 exports.delete = (req,res) =>{
    //  const id = req.params.id;

    //  Tutorial.findByIdAndRemove(id)
    //  .then(data => {
    //      if(!data){
    //          res.send(404).send({
    //              message: 'Cannot delete tutorial with id = ${id}.mybe tutorial was not faund!'
    //          });
    //      } else{
    //          res.send({
    //              message: "Tutorial was  deleted successfully!"
    //          });
    //      }
         
    //  })
    //   .catch(err =>{
    //       res.status(500).send({
    //           message:"could not delete Tutorial with id" + id
    //       });
    //   });
    Tutorial.deleteMany({})
    .then(data =>{
        res.send({
            message:`${data.deletedCount} Tutorials were deleted siccessfully!`
        });
    })
       .catch(err =>{
           res.status(500).send({
               message:
               err.message || " Some erors occured while removing all tutorials."
           });
       });
 };

 //Find all published trials

exports.findAllPublished = (req,res) =>{
    Tutorial.find({published:true})
    .then(dats =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({

        
        message:
        err.message ||"Some error occured while retrieving tutorials."
        });
    });
 };

