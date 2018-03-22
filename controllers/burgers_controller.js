var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database function
var burger = require("../models/burger.js");

//create routes
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], function (data) {
        res.redirect("/")
            
        
    });
});

router.put('/burger/eat/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burger.update({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
  });
});



// Export routes for server.js to use.
module.exports = router;