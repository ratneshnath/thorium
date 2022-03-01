const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        required:true
    }, 
    authorName: String, 
    tags: [String],
    stockAvailable: Boolean,
    year: {
        type: Number,
        default: 2022
    },
        prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPages:Number
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
