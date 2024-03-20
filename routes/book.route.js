const express = require("express")
const { BooksModel } = require("../model/book.model")
const bcrypt = require("bcrypt")
const bookRouter= express.Router()
const jwt = require("jsonwebtoken")
const {auth} = require("../middleware/auth")



//Adding new book

bookRouter.post("/",auth,async(req,res)=>{
    try {
        const note = new BooksModel(req.body)
        await note.save()
        res.send({"msg":"New Book is added"})
    } 
    catch (error) {
        res.send({"Erroe":error})
    }
})

//Getting all the books 

bookRouter.get("/",auth,async(req,res)=>{
    
    try {
         const books = await BooksModel.find()
         res.send({books})
    } 
    catch (error) {
        res.send({"error":error})
    }
})


//update books
bookRouter.patch("/:bookID",auth,async(req,res)=>{
    const {bookID} = req.params
    try {
        const note = await BooksModel.findOne({_id:bookID})

        if(note.bookID === req.body.userID){
            await BooksModel.findByIdAndUpdate({_id:bookID},req.body)
            res.send({"msg":`The book with id ${bookID} has been updated`}) 
        }
        else{
            res.send({"msg":"you are not authorised"})
        }
           
    } 
    catch (error) {
        res.send({"Error":error})
    }
})

//delete books
bookRouter.delete("/:bookID",auth,async(req,res)=>{
    const {bookID} = req.params
    try {
        const book = await BooksModel.findOne({_id:bookID})

        if(book.bookID === req.body.bookID){
            await BooksModel.findByIdAndDelete({_id:bookID})
            res.send({"msg":`The Note with id ${bookID} has been deleted`}) 
        }
        else{
            res.send({"msg":"you are not authorised"})
        }
           
    } 
    catch (error) {
        res.send({"Error":error})
    }
})



module.exports={
    bookRouter
}