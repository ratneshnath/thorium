const bookModel = require("../../thorium/src/models/bookModel")

const createBook= async function(require,res){
    let data = req.body
    let savedData=await bookModel.create(data)
    res.send({msg:savedData})
}
const getBooks = async function(req,res){
    let allBooksData = await bookModel.find().select({bookName:1,authorName:1, _id:0})
    res.send(allBooksData)
}
const getBooksInYear = async function(req,res){
    let year = req.body;
    let getBooksInYear= await bookModel.find(year)
    res.send(getBooksInYear)
}
const getParticularBooks = async function(req,res){
let condition = req.body;
if("bookName" in condition){
    let particularBooks = await bookModel.find({bookName:{$regex:condition.bookName}})
    return res.send(particularBooks)
}
else if("authorName" in condition){
    let particularBooks=await bookModel.find({authorName:{$regex:condition.authorName}})
    return res.send(particularBooks)
}
else if ("tags" in condition){
    if(condition.tags in bookModel.tags){
        let particularBooks=await bookModel.find({tags: condition.tags})
        return res.send(particularBooks)
    }
}
else if ("prices" in condition.prices){
    if("indianPrice" in condition.prices){
        let particularBooks=await bookModel.find({"prices.indianPrice":condition.prices.indianPrice})
        return res.send(particularBooks)
    }
    else if("europeanPrice" in condition.prices){
        let particularBooks=await bookModel.find(condition)
        return res.send(particularBooks)
    }
}
else{
    let particularBooks=await bookModel.find(condition)
    return res.send(particularBooks)
}
}
const getINRBooks = async function(req,res){
    let xinrBooks = await bookModel.find({"prices.indianPrice":{$in :["Rs.500","Rs.200","Rs.100"]}})
    res.send(xinrBooks)
}
const getRandomBooks = async function(req,res){
    let randomBooks = await bookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send(randomBooks)
}
Module.exports.createBook = createBook;
Module.exports.getBooks=getBooks;