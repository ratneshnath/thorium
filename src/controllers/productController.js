const productModel = require("../models/productModel")
const createProduct = async function (req,res){
    let data = req.data
    let savedData = await productModel.create(data)
    res.send({msg: savedData})
}
module.exports.createProduct = createProduct