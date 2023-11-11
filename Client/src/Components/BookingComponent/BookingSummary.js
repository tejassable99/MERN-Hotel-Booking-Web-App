import React, { useState,useEffect} from 'react'
import { Divider, Button,Icon} from 'semantic-ui-react'
import "../Comp.css"

import PremiumRoomOnly from './PremiumRoomOnly'
import PremiumRoomBf from './PremiumRoomBf'


const BookingSummary=({bookMongo,handleTotal,dat,PremiumRoom,PremiumRoomwithBf,k,c,flagBs,totalChildren,totalAdults,ListRoom,calculateBill,totalChildrenBf,totalAdultsBf,calculateBillBf, ListRoomBf,startDate,endDate,differenceInDays})=>{
    // const [startDate, setStartDate] = useState("");
    // const [endDate, setEndDate] = useState("");
    // const [differenceInDays, setDifferenceInDays] = useState(0);
  
    // useEffect(() => {
    //   setStartDate(localStorage.getItem("startDate"));
    //   setEndDate(localStorage.getItem("endDate"));
    //   setDifferenceInDays(localStorage.getItem("differenceInDays"));
    //   console.log(startDate,endDate,differenceInDays)
    // }, []);
   
 
    return(
        <>
    {c<2 && k<2 ? 
    <div>
    <div style={{display:"flex", justifyContent:"center"}}>
    <Icon disabled name='bed' size='massive' /><br></br>
    
    </div>
    
    <div style={{display:"flex", justifyContent:"center",color:"gray"}}>
    <h1>No Room(s)</h1>
    </div>
    <div style={{display:"flex", justifyContent:"center",fontWeight:"bold",color:'gray'}} >
        <h2>Selected</h2>
    </div>
    </div>
    : 
    
    <div>
         <h1 style={{ color: 'goldenrod',textAlign:"center" }}>Booking Summary</h1>
         
     <h4 >Dates : {startDate} to {endDate}</h4>
    
     <h4>Night : {differenceInDays}</h4>
     <Divider inverted />
     

     { c<2? null:
     PremiumRoom.map(()=><PremiumRoomOnly totalChildren={totalChildren}  totalAdults={ totalAdults} ListRoom={ListRoom} calculateBill={calculateBill}/>)
     }


     { k<2? null:
     PremiumRoomwithBf.map(()=><PremiumRoomBf totalChildrenBf={totalChildrenBf}  totalAdultsBf={ totalAdultsBf} ListRoomBf={ListRoomBf} calculateBillBf={calculateBillBf} k={k}/>)
     }
     
     
     
     
     <div style={{display:"flex",justifyContent:"space-between", fontSize:"30px",fontWeight:"700"}}>
     <span>Total</span>

     <span>{handleTotal()}</span>
     
     </div>
<br></br>
     
     <Button style={{ backgroundColor: 'goldenrod',color:"white" }}fluid onClick={bookMongo}>Book</Button>
     
     </div>
     
     
    }
     
     
        </>
    )
}
export default BookingSummary