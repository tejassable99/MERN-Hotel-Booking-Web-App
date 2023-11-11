// import { useEffect, useState } from 'react';

// const UserBookings=()=> {
//     let [Data,setData]=useState([]);
//     let[uid,setUid]=useState();


//    useEffect(()=>
//    {
//     let s=sessionStorage.getItem("id");
//     setUid(s)
//     fetch(`http://localhost:9000/getData/${uid}`)
//     .then((res)=> res.json())
//     .then((temp)=> setData(temp))
//     .catch((e)=>console.log(e) )

//    },[])




 

     

//   return (
   

 


//    <div>

// {



// Data.length ? Data.map((temp)=>
// {
//  return  <div>
// <h2>{temp.uid}</h2>
// <h2>{temp.totalChildrenBf}</h2>
// <h2>{temp.totalAdultsBf}</h2>         
             
                
// <h2>   {temp.premiumBillBf}</h2>    
// <h2>{temp.premiumBillBf}</h2>       
             
// <h2>{temp.totalChildren}</h2>       
// <h2>{temp.totalAdults}</h2>       
             
// <h2>{temp.premiumBill}</h2>       
             
// <h2>{temp.startDate}</h2>       
// <h2>  {temp.endDate}</h2>     
// <h2>{temp.differenceInDays}</h2>       
// <h2>{temp.total}</h2>       

 
//  <h1>"===================================================="</h1> 
//   </div>


// }): <p> Loading </p>
// }
      


     
        




//    </div>
  
      
//   );
// }

// export default UserBookings;