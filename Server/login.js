const mongoose = require("mongoose")
const bcrypt=require("bcrypt")
const login=new mongoose.Schema(
{

   uid:{type:String},
   name:{type:String},

   pass:{type:String},

   phNumber:{type:String},
   firstName:{type:String},
   lastName:{type:String}



}



)

login.pre('save', async function (next)
{

   if(this.isModified('pass'))
   {
    this.pass= await bcrypt.hash(this.pass,12)
    

   }
  next();

})
const Login=new mongoose.model("Login",login);
module.exports=Login;