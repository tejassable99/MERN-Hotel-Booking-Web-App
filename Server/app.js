const express=require("express");
const route=require("./routes.js")
const cors=require("cors")
const app=express();
const dotenv=require("dotenv")
dotenv.config({path:"./config.env"})
const port=process.env.port;
app.use(express.json())
app.use(cors({
origin:'https://mern-hotel-booking-web-app-w17x.vercel.app/'}))
app.use(route)

app.listen(port,()=>
{
    console.log(`server on ${port}`)
})
// origin:'https://mern-hotel-booking-web-app-s7y7.vercel.app'