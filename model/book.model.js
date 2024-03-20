const mongoose=require("mongoose")

const booksSchema=mongoose.Schema({
    title:{type:String, required:true},
    author:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true}
},{
    versionKey:false
})

const BooksModel = mongoose.model("books",booksSchema)

module.exports={
    BooksModel
}