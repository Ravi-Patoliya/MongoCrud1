module.exports = app => {
    const Users = require("../controllers/User.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", Users.create);
  
    // Retrieve all Users
    router.get("/", Users.findAll);
    
    // Retrieve a single User with id
    router.get("/:User_id", Users.findOne);
  
    // Update a User with id
    router.put("/:User_id", Users.update);
  
    // Delete a User with id
    router.delete("/:User_id", Users.delete);
  
    // Create a new User
    router.delete("/", Users.deleteAll);
  
    app.use('/api/Users', router);
  };