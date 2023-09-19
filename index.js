import express from "express";
import fs from 'fs'
import path from 'path'


const app = express()


app.get("/getproducts", (req,res)=>{
   // res.sendStatus(401) //400 - bad request, 404 -not found, 500- internal server error, 200 - ok, 401 - unauthorized

//    res.json({
    //created a simple API
//     success : true,
//     products : [],
//    })

//res.status(400).send("oops hehe") //can send something to display along with status

//console.log(__dirname) //only can be used with commonJS, gives currentd directory

const pathLocation = path.resolve() //gives current path
//res.sendFile(path.join(pathLocation, "./index.html"))

res.render("./index.ejs")


})

app.listen(5000, ()=>{
    console.log("server is working")
})
