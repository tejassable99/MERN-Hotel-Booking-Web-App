const express=require("express");
const route=require("./routes.js")
const cors=require("cors")
const app=express();
const dotenv=require("dotenv")
dotenv.config({path:"./config.env"})
const port=process.env.port;
app.use(express.json())
app.use(cors())
app.use(route)

app.listen(9000,()=>
{
    console.log("server on ")
})