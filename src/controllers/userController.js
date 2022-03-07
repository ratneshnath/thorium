// const UserDocument= require("../models/userDocument")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserDocument.create(data)
//     console.log(req.newAtribute)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserDocument.find()
//     console.log(req.newAtribute)
//     res.send({msg: allUsers})
// }

const userModel = require("../models/userModel")
const createUser = async function (req,res){
    let data = req.data
    let savedData = await userModel.create(data)
    res.send({msg: savedData})
}
module.exports.createUser = createUser

module.exports.createUser= createUser
//module.exports.getUsersData= getUsersData