const express = require('express');
const router = express.Router();
const assignment2 = require("../controllers/assignment2Controller.js") 
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)
router.post("/createBook",assignment2.createBook)
router.get('/getBooks',assignment2.getBooks)
router.post('/getBooksInYear',assignment2.getBooksInYear)
router.post('/getParticularBooks',assignment2.getParticularBooks)
router.get('/getINRBooks',assignment2.getINRBooks)
router.get('/getRandomBooks',assignment2.getRandomBooks)

module.exports = router;