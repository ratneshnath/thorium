const mongoose = require('mongoose');
const productSchema = new mongoose.Schema( {

name: String,
category: String,
price:{
    type: Number,
    default: 70
}},{timestamps:true});
module.exports = mongoose.model('product', productSchema)