const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    balance:Number,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ","other"] //"falana" will give an error
    },
    age: Number,
    isFreeAppUser:{
        type: Boolean,
        default: false
    
}}, { timestamps: true });

module.exports = mongoose.model('user', userSchema) //users



// String, Number
// Boolean, Object/json, array


//userId: 622641f66902a030149cd6e4