const orderModel = require("../models/orderModel")
const orderCreate = async function (req,res){
    let data = req.data
    let savedData = await orderModel.create(data)
    res.send({msg: savedData})
}
module.exports.orderCreate = orderCreate