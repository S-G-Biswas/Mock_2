const express = require("express");
require("dotenv").config()
const {connection} =require("./config/db")
const {userRouter} = require("./routes/user.routes")
const {bookRouter} = require("./routes/note.route")
const {userRouter} = require("./routes/user.routes");
const { bookRouter } = require("./routes/book.route");
const app = express();
app.use(express.json());
app.use("/users",userRouter)
app.use("/books", bookRouter)
app.use("/books", bookRouter)

//Public Routes

app.get("/", (req,res)=>{
    res.send({"msg":"This is home Route"})
})

app.get("/about",(req,res)=>{
    res.send({"msg":"This is the about page"})
})



///Server connection

app.listen(process.env.port,async ()=>{
    try {
         await connection
         console.log("connected to DB")
         console.log(`Server is ruuning at port ${process.env.PORT}`);
    } catch (error) {
        console.log(error)
    }
    
})