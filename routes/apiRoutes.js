var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/lostanimals", function(req, res) {
    db.Lost_Animals.findAll({}).then(function(animals) {
      res.json(animals);
    });
  });
  
  app.get("/api/foundanimals", function(req, res) {
    db.Found_Animals.findAll({}).then(function(animals) {
      res.json(animals);
    });
  });

  app.get("/api/lost/:zipcode", function(req,res){
    db.Lost_Animals.findAll({
      where:{
        zip_code: req.params.zipcode
      }
    })
    .then(function(animals){
      res.json(animals);
    })
  });
  // Create a new example
  app.post("/api/animals", function(req, res) {
    db.Animals.create(req.body).then(function(animals) {
      res.json(animals);
    });
  });

  // Delete an example by id
  app.delete("/api/animals/:id", function(req, res) {
    db.Animals.destroy({ 
      where: { 
        id: req.params.id 
      } 
    })
    .then(function(animals) {
      res.json(animals);
    });
  });

  app.put("/api/animals/", function(req, res) {
    db.Animals.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(animals) {
      res.json(animals);
    });
  });
};
