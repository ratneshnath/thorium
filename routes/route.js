// const express = require('express');
// const router = express.Router();
// const authorController= require("../controller/authorController.js")



// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/authorcreation",authorController.createAuthor);


// module.exports = router;


const express = require('express');
const router = express.Router();
const controller= require("../controller/controller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/blogs", controller.getblog)
// router.get("/get/blogs", controller.getblog)
// router.post("/author", controller.createAuthor)
// router.get("/get/author", controller.createAuthor)
// router.post("/blogs", controller.createBlog)

router.post("/createAuthor", controller.createAuthor)
router.post("/createBlog", controller.createBlog)
router.get("/getBlogs", controller.getBlog)
router.put("/blogs/:blogId", controller.updateBlog)
router.delete("/deleteBlogs/:blogId", controller.deleteById)
router.delete("/deleteBlogs",controller.deleteByQuery)



module.exports = router;
