import express from "express";
import fs from 'fs'
import path from 'path'


const app = express()

app.use(express.static(path.join(path.resolve(), "public"))
)

app.set("view engine", "ejs") //need to install ejs

app.get("/", (req, res) => {
   res.render("index", { name: "ABhishek" })
 // res.sendFile("index")

})

app.listen(5000, () => {
    console.log("server is working")
})
