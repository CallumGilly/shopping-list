const express = require('express');
const databaseGetterSetter = require("./databaseGetterSetter");
const router = express.Router();

router.get("/", async (req,res) => {
  databaseGetterSetter.listNames(function(data) {
    var listNames = data.response;
    //console.log(itemList);
    res.render("home", {listNames});
  });
});

router.post("/list", async (req,res) => {
  //deal with inputs
  var item = {
    name: req.body.itemName || null,
    price: req.body.itemPrice || null,
    ammount: req.body.itemAmmount || null
  };
  var listName = req.body.listName;
  console.log(item);
  //push inputs to database if not null - wait for it to be pushed before rendering
  if (Object.values(item).includes(null)) {
    //Render the webpage:
    databaseGetterSetter.getList(listName, function(data) {
      var itemList = data.response;
      databaseGetterSetter.listNames(function(data) {
        var listNames = data.response;
        var message = "Fill in the boxes to add items to the list";
        res.render("listDisplay", {itemList,listNames,message});
      });
    });
  } else {
    //push to the database here

    //Render the webpage:
    databaseGetterSetter.getList(listName, function(data) {
      var itemList = data.response;
      databaseGetterSetter.listNames(function(data) {
        var listNames = data.response;
        res.render("listDisplay", {itemList,listNames});
      });
    });
  }

});

// router.post("/getList", async (req,res) => {
//   console.log(req.body);
//   var listName = req.body.listName;
//
//   databaseGetterSetter.getList(listName, function(data) {
//     var itemList = data.response;
//     databaseGetterSetter.listNames(function(data) {
//       var listNames = data.response;
//       res.render("listDisplay", {itemList,listNames})
//     });
//   });
//   // var itemList = ["this","is","a","list"]; //This MUST be declared
//   // res.render("listDisplay", {itemList})
// });


module.exports = router;
