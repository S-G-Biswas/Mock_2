const express = require("express");
// const { connection } = require("mongoose");
require("dotenv").config()
// const {connection} =require("./config/db")
// const {notesRouter} = require("./routes/note.route")
const {connection} = require("./config/db");
const { userRouter } = require("./routes/user.routes");

const app = express();
app.use(express.json());
app.use("/users",userRouter)
// app.use("/books", bookRouter)
// app.use("/orders", orderRouter)

//Public Routes

app.get("/", (req,res)=>{
    res.send({"msg":"This is home Route"})
})


///Server connection

app.listen(process.env.port,async ()=>{
    try {
         await connection
         console.log("connected to DB")
         console.log(`Server is ruuning at port ${process.env.port}`);
    } catch (error) {
        console.log(error)
    }
    
})