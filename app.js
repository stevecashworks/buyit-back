import { config } from "dotenv"
import express from "express"
config()

const  server=express()

// use environment port if available
const port= process.env.port||5000




server.listen(port, ()=>{
console.log(`server is listening on port : ${port}`)
})