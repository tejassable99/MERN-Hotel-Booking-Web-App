// const  express =require("express");
// const Login=require("./login.js")
// const route=express.Router();
// require("./conn.js")
// route.get("/",(req,res)=>
// {

//       res.end("home Page ")
// })

// route.post('/signUp', async (req,res)=>{
//     try{
//         const {uid,name,pass}=req.body;
//         let user= new Login({uid,name,pass})
//         await user.save();
//         res.send("user created ");
//     }
//     catch(e){
//         console.log(e);
//     }
// })
// route.get("/getData", async(req,res)=>
// {   
//     try
//     {
//       let d= await Data.find()
//        res.send(d)
//     }
//     catch(e)
//     {

//        console.log(e)
//     }

// })/*
// route.get("/getDataId/:id", async(req,res)=>
// {


//     try{

    
//       let {id}=req.params;
//       let data=await Data.findById({_id:id})
//       res.send(data);
//     }
//     catch(e)
//     {
//         console.log(e)
//     }


// })

// route.delete("/removeUser/:id", async(req,res)=>
// { 
 
//     try
//     {
// const {id}=req.params;
// await Data.findByIdAndDelete({_id:id})

// res.send("  Reccord Remove")
//     }
//     catch(e)
//     {
//        console.log(e)
//     }


// })

// route.put("/updateData/:id", async(req,res)=>
// {
//    try
//    {
//     let {id}=req.params;
//       await Data.findByIdAndUpdate(id,req.body,{new :true})
//       res.send("recored updated ")
//    }
//    catch(e)
//    {
//       console.log(e)
//    }

// })
// route.get("/getName/:nm",async(req,res)=>{
    
//     try{

    
//         let {nm}=req.params;
//         let data=await Data.find({model:nm})
//         res.send(data);
//       }
//       catch(e)
//       {
//           console.log(e)
//       }
// })*/
// module.exports=route;


const  express =require("express");
const bcrypt=require("bcrypt")
const Total=require("./total.js")
const router=express.Router();
const Login=require("./login.js")
require("./conn.js")
router.get("/",(req,res)=>
{

      res.end("home Page ")
})




router.get("/userInfo", async(req,res)=>
{
    try
    {
 let data=await Login.find()
 if(data.length==0)
 {
    res.send("no information ")
 }
 else{
    res.send(data)
 }
}
catch(e)
{
 console.log(e)
}



})

router.get("/bookingInfo", async(req,res)=>
{
    try
    {
 let data=await Total.find()
 if(data.length==0)
 {
    res.send("no information ")
 }
 else{
    res.send(data)
 }
}
catch(e)
{
 console.log(e)
}



})





// router.get("/getInfoName/:name", async(req,res)=>
// {
   
//   let {name} =req.params ;

//       let data = await Login.find({name:name})

//       if(data.length==0)
// {
//     res.send("not found ....")
// }
// else{

//     res.send(data);
// }









// })













// router.delete("/removeUser/:uid", async(req,res)=>{ 
//     try {
//         const {uid}=req.params;
//         // console.log("tejas"+" "+uid)
//         let Data=await Login.findOne({uid:uid})
//         // console.log("zzzzzzzzzzz"+Data)
//         // console.log()
//         if(Data==null)
//         {
            
//             res.send("not found ....")
//         }
//         else{
//              let id=Data._id; 
//             //  console.log("hjsdjh"+Data.id)
//             await Login.findByIdAndDelete(id)
        
//             res.send("Reccord Remove")
//         }
        
//     }
//     catch(error) {
//         console.log(error.message);
//     }
// })



// router.delete("/cancelBooking/:uid/:total", async(req,res)=>{ 
//     try {
//         const {uid,total}=req.params;
      
// console.log("uid:", uid);
// console.log("total:", total);
// let Data=null;
//  Data=await Total.findOne( { $and: [ {uid: uid},{total: total} ] } )
// // let Data = await Total.findOne({ uid: uid });
// // let Data2 = await Total.findOne({ total: total });

// // console.log("Data:", Data);
// // console.log("Data2:", Data2);
// console.log(Data+"dsjbcndsjndc")
// if (Data.length==0) {
//     console.log("Record not found");
//     res.send("not found ....");
// } else {
//     let id = Data._id;
//     console.log("Deleting record with id:"+Data._id);
    
//     let w=await Total.findByIdAndDelete(id);
    
//     console.log("Record Removed");
//     res.send(Data);
// }

        
//     }
//     catch(error) {
//         console.log(error.message);
//     }
// })



router.delete("/cancelBooking/:uid/:Bno", async(req,res)=>{ 
    try {
        const {uid,Bno}=req.params;
      
console.log("uid:", uid);
console.log("total:", Bno);
let Data=null;
 Data=await Total.findOne( { $and: [ {uid: uid},{Bno: Bno} ] } )
// let Data = await Total.findOne({ uid: uid });
// let Data2 = await Total.findOne({ total: total });

// console.log("Data:", Data);
// console.log("Data2:", Data2);
console.log(Data+"dsjbcndsjndc")
if (Data==null) {
    console.log("Record not found");
    res.send("not found ....");
} else {
    let id = Data._id;
    console.log("Deleting record with id:"+Data._id);
    
    let w=await Total.findByIdAndDelete(id);
    
    console.log("Record Removed");
    res.send(Data);
}

        
    }
    catch(error) {
        console.log(error.message);
    }
})


// router.put("/updateData/:name", async(req,res)=>
// {
//    try
//    {
//         const {name}=req.params;
//         let Data=await Login.find({name:name})
//         if(Data.length==0)
//         {
//             res.send("not found ....")
//         }
//         else{
//              let id=Data._id; 
//            await Login.Data.findByIdAndUpdate(id,req.body,{new :true})
//             res.send("recored updated ")
//         }
        
//     }
//     catch(error) {
//         console.log(error.message);
//     }
// })

// router.get("/signIn/:name/:pass", async(req,res)=>
// {
   
//   let {name,pass} =req.params ;

//       let data = await Login.findOne({name:name})
  
//       console.log(data)
//       if(data.length==0)
// {
//     res.send("not found ....")
// }
// else{  
//        console.log(pass+  " "+   data.pass)
    
//        if(data.pass==pass)
//     res.send("welcome ");
// else{
//     res.send("not valid ")
// }
// }




// })












router.post('/signUp', async (req,res)=>{
    try{
        
  let {id,name,pass,phNumber,firstName,lastName} =req.body;
  let uid=id
console.log(uid+name+pass)
  let data = await Login.findOne({name:name})

  console.log(data)
  if(data==null){
        // const {uid,name,pass}=req.body;
        let user= new Login({uid,name,pass,phNumber,firstName,lastName})
        await user.save();
        res.send(true);
  }else{
    res.send(false)
  }
    }
    catch(e){
        console.log(e);
    }
})


router.get("/getData/:uid", async(req,res)=>
{   
    try
    {
        let {uid} =req.params ;
      let d= await Total.find({uid:uid})
       res.send(d)
    }
    catch(e)
    {
       console.log(e)
    }

})


router.get("/signIn/:name/:pass", async(req,res)=>
{
   try{
  let {name,pass} =req.params ;

      let data = await Login.findOne({name:name})
  
      console.log(data)
      if(data==null)
{
    res.send("not found ....")
}
else {if  (await bcrypt.compare( pass,data.pass)){  
       console.log(pass+  " "+   data.pass)
    
    
    console.log("hi")
    res.send(data.uid);
}
       

else{
    res.send(false)
    console.log("bye")
}
}
   }
   catch (err) {
    console.log(err);
  }




})
















// route.post('/signUp', async (req,res)=>{
//     try{
//         const {uid,name,pass}=req.body;
//         let user= new Login({uid,name,pass})
//         await user.save();
//         res.send("user created ");
//     }
//     catch(e){
//         console.log(e);
//     }
// })









 router.post('/saveData', async (req,res)=>{
        try{
            const {Bno,uid,totalChildrenBf,
                totalAdultsBf,
             
                
                premiumBillBf,
             
                totalChildren,
                totalAdults,
             
                premiumBill,
             
                startDate,
                endDate,
                differenceInDays,
                total}=req.body;
            let user= new Total({Bno,uid,totalChildrenBf,
                totalAdultsBf,
             
                
                premiumBillBf,
             
                totalChildren,
                totalAdults,
             
                premiumBill,
             
                startDate,
                endDate,
                differenceInDays,
                total})
             await user.save();
            res.send("user created ");
        }
        catch(e){
            console.log(e);
        }
    })



module.exports=router;