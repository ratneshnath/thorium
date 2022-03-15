// const express = require('express');
// const mongoose = require('mongoose');
// const authorModel = require('./authorModel');

// const blogsSchema = new mongoose.Schema( {

// title : { type : String, required : true},

// body : { type : String, required : true},
// authorId:  { type : objectId, ref : "authorModel",required : true },
// tags : {type: [], deafult: []},  //check it later
// category : { type : String, required : true},
// subcategory : {type: [], deafult: []}, //check it later
// isDeleted: { type : boolean , default : false },
// publishedAt: Date.now,  // check later

// isPublished: {type : boolean, default: false}

// },  { timestamps : true})

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const blogsmodel = new mongoose.Schema( {
    title: { 
        required:true,
        type:String
   },
    body: {
     type:String,
     required :true
    },
    authorId: {
        type:ObjectId,
        required:true,
        ref:"AuthorModel"
    },
    tags: { 
        type:[]
    },
    category: {
        type:[],
         required:true,
    },
    subcategory: {
        type:[],
    },
    isDeleted: { 
        type:Boolean,
         default: false 
        },
    isPublished: {
        type:Boolean,
         default: false }

}, { timestamps: true });   
   
module.exports = mongoose.model('BlogsModel', blogsmodel)


//authorID: 622f95ffe9f5609510948986
//BlogId: 622f9861e9f5609510948989
