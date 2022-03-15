let axios = require("axios");
const AuthorModel = require("../authorModel/authorModel.js");
const blogsmodel = require("../blogModel/blogModel.js")
let validator =require("email-validator");

const createAuthor = async function (req, res) {
    try{
       let data = req.body;
       if(Object.keys(data).length != 0){
       let savedData = await AuthorModel.create(data);
       res.status(201).send({ msg: savedData });
     }
     else res.status(400).send({msg:"bad request"})
    }
    catch(err){
       console.log("this is the error:",err.message)
        res.status(500).send({msg:"Error",error:err.message})
     }
  };


const createBlog = async function (req, res) {
    try{
               let blog = req.body
               let authorId = req.body.authorId
               let author = await AuthorModel.findById(authorId)
               if(!author)
               {
                  res.status(400).send({status : false, msg:"No Such Author is Present,Please check authorId"})
               }
               let blogCreated = await blogsmodel.create(blog)
               return res.status(201).send({status:true,data: blogCreated})
         }
     catch(error)
          {
                console.log(error)
                res.status(500).send({status : false, msg : error.message})
          }  
 };

 const getBlog = async function (req, res) {
    try {
        let allblogs = await blogsmodel.find({isDeleted:false})
        if (allblogs.length === 0){
        return res.status(404).send({ status: false, msg: "No such blog exists" });
        }
        else{
        res.status(201).send({ status:true,data: allblogs });
        }
    }
    catch (err) {
        console.log("this is the error:", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
};

// const updateBlog = async function (req, res) {
//     try{
//     let blog = await blogsmodel.findById(blogId);
//     //Return an error if no user with the given id exists in the db
//     if (!blog) {
//       return res.status(401).send({msg:"No such user exists"});
//     }

//     let userBlog = req.body;
//     let updatedBlog = await userModel.findOneAndUpdate({ _id: updateblog },{title : updatedata.title, body:updatedata.body, tags : updatedata.tags},{new : true, upsert : true});
//     res.status(202).send({ status: updatedBlog, data: updatedBlog });
//   }catch (error) {
//     console.log("This is the error", err.message)
//     res.status(500).send({ status:true, msg : error.message });
//   }
// };

const updateBlog = async function(req,res){
    try{
    let updateblog = req.params.blogId
    let hey = await blogsmodel.findById(updateblog)
  if (!hey) {
    return res.status(404).send({msg:"Invalid Blog"})
  }
  let updatedata = req.body;
  updatedata.isPublished = true
  let updatedUser = await blogsmodel.findOneAndUpdate({ _id: updateblog },{title : updatedata.title, body:updatedata.body, tags : updatedata.tags},{new : true, upsert : true});
  res.status(200).send({ status: true, data: updatedUser })
}catch(err){
    res.status(500).send({Error : err.message})
    }
}

const deleteById = async function(req,res){
  try{
  let deleteblog = req.params.blogId;
  let hey = await blogsmodel.findById(deleteblog)
  if (!hey) {
    return res.status(404).send({ msg: "Is not deleted" });
  }
  let blogId = req.params.blogId;
  let userDel = await blogsmodel.findOneAndUpdate({_id: blogId},{isDeleted: true},{new:true});
  res.status(200).send({status:true, data:userDel})
  }catch(err){
    res.status(500).send({Error : err.message})
  }
};


 const deleteByQuery = async function(req,res){
  try{  
          let query = req.query
          let filter = {...query}
          let filterByquery = await blogsmodel.find(filter)
          if(filterByquery.length == 0){
              return res.status(400).send({msg:"Blog Not Found"})
          }
          else{
              let deletedDetails = await blogsmodel.findOneAndUpdate({filter}, {isDeleted : true}, {new : true})
              return res.status(200).send({msg:deletedDetails})
          }
  }catch(err){
      res.status(500).send({Error : err.message})
  }
}  

module.exports.createAuthor=createAuthor
module.exports.createBlog=createBlog
module.exports.getBlog=getBlog
module.exports.updateBlog=updateBlog
module.exports.deleteById=deleteById
module.exports.deleteByQuery=deleteByQuery