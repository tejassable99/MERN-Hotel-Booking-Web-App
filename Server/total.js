const mongoose = require("mongoose")
const total=new mongoose.Schema(
{

 
  Bno:{type:String},  
  uid:{type:String},

   totalChildrenBf :{type:String},
   totalAdultsBf : {type:String},

   premiumBillBf : {type:String},

   totalChildren :{type:String},
   totalAdults : {type:String},
   
   premiumBill : {type:String},

   startDate:{type:String},
   endDate : {type:String},
   differenceInDays : {type:String},
   total : {type:String}



}



)
const Total=new mongoose.model("Total",total);
module.exports=Total;