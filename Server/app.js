const express=require("express");
const route=require("./routes.js")
const cors=require("cors")
const app=express();
const dotenv=require("dotenv")
dotenv.config({path:"./config.env"})
const port=process.env.port;
app.use(express.json())
app.use(cors({origin:'https://mern-hotel-booking-web-app-s-git-76056b-tejas-projects-c8790610.vercel.app/'}))
app.use(route)

app.listen(port,()=>
{
    console.log(`server on ${port}`)
})
