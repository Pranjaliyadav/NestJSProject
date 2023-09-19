//onst http = require('http')
import http from 'http'
import randomFile from './randomfile.js'
import fs from 'fs'
import path from 'path'

const home  = fs.readFileSync('./index.html')

// console.log(path.dirname("/home/index.js"))

const server =  http.createServer((req, res)=>{
    console.log("server is working")
    
    console.log(randomFile)
 
    if(req.url === "/about"){
        res.end("<h1>About</h1>")
    }
    else if(req.url === "/home"){
        res.end("home")
    }
    else if(req.url === "/"){
        res.end("<h1>Dashboard</h1>")
    }
    else{
        res.end("<h1>Page not found</h1>")
    }
 
    
})

server.listen(5000, ()=>{
    console.log("Server is working")
})