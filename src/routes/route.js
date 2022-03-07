const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const productController= require("../controllers/productController")
const userController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const middleware= require("../middleware/middleware2")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser",middleware.middleware3, userController.createUser)
//router.post("/getOrder", orderController.getOrderer)


//router.get("/getUsersData", userController.getUsersData)

router.post("/createProduct", productController.createProduct)
router.post("/orderCreate",orderController.orderCreate)

//router.get("/getBooksData", BookController.getBooksData)

//router.post("/updateBooks", BookController.updateBooks)
//router.post("/deleteBooks", BookController.deleteBooks)

//MOMENT JS
//const moment = require('moment');
//router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    // const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    // const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    // let x= dateB.diff(dateA, "days")
    // console.log(x)

    // res.send({ msg: "all good"})
//})

module.exports = router;