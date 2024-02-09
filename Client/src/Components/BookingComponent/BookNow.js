import React, { useState,useEffect } from 'react'
import { Grid, Segment,Image,Divider,Label, Button,Icon,Dropdown} from 'semantic-ui-react'
import "../Comp.css"
import Room from './RoomAc'
import PremiumRoomOnly from './PremiumRoomOnly'
import PremiumRoomBf from './PremiumRoomBf'
import RoomAc from './RoomAc'
import RoomAcWithBf from './RoomAcWithBf'
import PremiumCard from './PremiumCard'
import PremiumBfCard from './PremiumBfCard'
 import BookingSummary from './BookingSummary'
import CalendarCard from '../CalendarCard'
import CarouselComp from '../CarouselComp'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios" 
import HeaderComp from "../HeaderComp";
 import FooterComp from "../FooterComp";
 import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { nanoid } from 'nanoid';
 const BookNow=()=>{
  let[flag,SetFlag]=useState(false)
  let[flagBf,SetFlagBf]=useState(false)
  let[flagBs,SetFlagBs]=useState(false)
 let[ListRoom,setListRoom]=useState([])
 let[c,SetC]=useState(1)
 let[PremiumRoom,SetPremiumRoom]=useState([])

 let[ListRoomBf,setListRoomBf]=useState([])

 let[k,setk]=useState(1)

 let[PremiumRoomwithBf,SetPremiumRoomwithBf]=useState([])

let nav =useNavigate()

 const handleAddBf=()=>{

  const newRoomBf = { idBf: ListRoomBf.length + 1, adultsBf: 1, childrenBf: 0 };
  setListRoomBf([...ListRoomBf, newRoomBf]);
     setk(k+1)
   
     if(PremiumRoomwithBf.length<1){
       SetPremiumRoomwithBf([...PremiumRoomwithBf,k])
     }
     
     if(k>0){
       SetFlagBf(true)
       SetFlagBs(true)
     }
    }
 
    const handleRemBf=()=>{
   //   let d=PremiumRoomwithBf.splice(-1,1)
   //   SetPremiumRoomwithBf(d)
   setk(k-1)
     let d=ListRoomBf.splice(0,ListRoomBf.length-1)
     setListRoomBf(d)
 if(k<1){
   setk(1)
 }
 if(k==2){
   SetFlagBf(false)
   SetFlagBs(false)
 }
     }

 const handleAdd=()=>{ 

  const newRoom = { id: ListRoom.length + 1, adults: 1, children: 0 };
  setListRoom([...ListRoom, newRoom]);
     SetC(c+1)
     
     if(PremiumRoom.length<1){
       SetPremiumRoom([...PremiumRoom,c])
     }
     if(c>0){
       SetFlag(true)
       SetFlagBs(true)
     }
     
    }

    const handleRem=()=>{
     //   let d=PremiumRoomwithBf.splice(-1,1)
     //   SetPremiumRoomwithBf(d)
     SetC(c-1)
       let d=ListRoom.splice(0,ListRoom.length-1)
       setListRoom(d)
   if(c<1){
    
     SetC(1)
     
   }
   if(c==2){
     SetFlag(false)
     SetFlagBs(false)
   }
       }










// from here the code of calculation of number of adults,children,room and cost starts





       const roomRateBf = 55497; // Cost per room per night

       useEffect(() => {
          // Load saved values from local storage when the component mounts
         const savedListRoomBf = JSON.parse(localStorage.getItem('ListRoomBf'));
         if (savedListRoomBf) {
           setListRoomBf(savedListRoomBf);
         }
       }, []);


     
       useEffect(() => {
          // Save room data to local storage when ListRoom changes
         localStorage.setItem('ListRoomBf', JSON.stringify(ListRoomBf));
       }, [ListRoomBf]);
     


       const handleAdultsChangeBf = (roomId, newValue) => {
         setListRoomBf(
           ListRoomBf.map((room) => {
             if (room.idBf === roomId) {
               room.adultsBf = newValue;
             }
             return room;
           })
         );
       };


 



     
    
     
       const handleChildrenChangeBf = (roomId, newValue) => {
         setListRoomBf(
           ListRoomBf.map((room) => {
             if (room.idBf === roomId) {
               room.childrenBf = newValue;
             }
             return room;
           })
         );
       };
     

let[premiumBillBf,setPremiumBillBf]=useState()
      const calculateBillBf = () => {
       
        let totalBillBf = 0;
    
        // for (let i = 0; i < ListRoom.length; i++) {
        //   const room = ListRoom[i];
          const roomCostBf = totalAdultsBf * 50 + totalChildrenBf * 25 ;
          totalBillBf += roomCostBf * differenceInDays;
        
    
        totalBillBf += ListRoomBf.length * roomRateBf * differenceInDays; // Room cost
    console.log(totalBillBf)
      setPremiumBillBf(totalBillBf)
        return totalBillBf;
      };

     
       let totalAdultsBf = 0;
     
       ListRoomBf.map((room) => {
         totalAdultsBf += room.adultsBf;
       });



     
       let totalChildrenBf = 0;
     
       ListRoomBf.map((room) => {
         totalChildrenBf += room.childrenBf;
       });
     
 
     


      // let y =useLocation()
      // let {dat}=y.state
      // console.log("y"+dat)

      const roomRate = 22497; // Cost per room per night

      useEffect(() => {
         // Load saved values from local storage when the component mounts
        const savedListRoom = JSON.parse(localStorage.getItem('ListRoom'));
        if (savedListRoom) {
          setListRoom(savedListRoom);
        }
      }, []);


    
      useEffect(() => {
         // Save room data to local storage when ListRoom changes
        localStorage.setItem('ListRoom', JSON.stringify(ListRoom));
      }, [ListRoom]);
    


      const handleAdultsChange = (roomId, newValue) => {
        setListRoom(
          ListRoom.map((room) => {
            if (room.id === roomId) {
              room.adults = newValue;
            }
            return room;
          })
        );
      };






    
   
    
      const handleChildrenChange = (roomId, newValue) => {
        setListRoom(
          ListRoom.map((room) => {
            if (room.id === roomId) {
              room.children = newValue;
            }
            return room;
          })
        );
      };
    


     let[premiumBill,setPremiumBill]=useState()
     const calculateBill = () => {
      let totalBill = 0;
      
   
       // for (let i = 0; i < ListRoom.length; i++) {
       //   const room = ListRoom[i];
         const roomCost = totalAdults * 50 + totalChildren * 25 ;
         totalBill += roomCost * differenceInDays;
       
   
       totalBill += ListRoom.length * roomRate * differenceInDays; // Room cost
       setPremiumBill(totalBill)
       return totalBill;
     };

    
      let totalAdults = 0;
    
      ListRoom.map((room) => {
        totalAdults += room.adults;
      });



    
      let totalChildren = 0;
    
      ListRoom.map((room) => {
        totalChildren += room.children;
      });
    
let[total,setTotal]=useState();


const handleTotal = () => {
  const total = calculateBill() + calculateBillBf();
  setTotal(total);
  return total
};


const [dates, setDates] = useState([]);
const [differenceInDays, setDifferenceInDays] = useState(0);
let[startDate,setStartDate]=useState();
let[endDate,setEndDate]=useState();


const handleDatesChange = (newDates) => {
  setDates(newDates);
  if(newDates==null){
    alert("select both dates")
  }
  else{
  const d = Math.abs(newDates[0].diff(newDates[1], "days"));
  setDifferenceInDays(d);
   setStartDate(newDates[0].format("DD-MM-YYYY"));
  setEndDate( newDates[1].format("DD-MM-YYYY"));
  }


};


let[msg,setMsg]=useState()
let uid;
let [Bno,setBno]=useState();



const bookMongo = () => {
  // Generate a unique ID for Bno
  const Bno = nanoid();

  const uid = sessionStorage.getItem("id");

  if (total === 0) {
    alert("Select both dates");
  } else {
    axios
      .post("https://mern-hotel-booking-web-app-git-main-tejas-projects-c8790610.vercel.app/saveData", {
        Bno,
        uid,
        totalChildrenBf,
        totalAdultsBf,
        premiumBillBf,
        totalChildren,
        totalAdults,
        premiumBill,
        startDate,
        endDate,
        differenceInDays,
        total,
      })
      .then((res) => {
        setMsg(res);
        console.log(res);

        // Display SweetAlert on success
        Swal.fire(
          'SUCCESS',
          'Your room has been booked successfully!',
          'success'
        ).then(() => {
          // Reload the page after clicking "OK" in SweetAlert
          window.location.reload();
        });
      })
      .catch((e) => {
        setMsg(e);
        console.log(e);

        // Display SweetAlert on error
        Swal.fire(
          'ERROR',
          'Failed to book room. Please try again later.',
          'error'
        );
      });
  }
};

 
   return(
       <>
          <div class="fixed"  >
    <HeaderComp/>
    </div>
       <CarouselComp/>
       <CalendarCard handleDatesChange={handleDatesChange}/>
        <Grid columns={3} divided>
   <Grid.Row stretched>
     <Grid.Column>
       <Segment>
           <Image src="../hotelbook.jpg" />
       </Segment>
     </Grid.Column>
     <Grid.Column>
      
       <Segment>

         
          <PremiumCard handleAdd={handleAdd} ListRoom={ListRoom} flag={flag} handleRem={handleRem} handleAdultsChange={handleAdultsChange} handleChildrenChange={handleChildrenChange}/>

       </Segment>
       
       <Segment>
         
          <PremiumBfCard handleAddBf={handleAddBf} handleRemBf={handleRemBf} ListRoomBf={ ListRoomBf} flagBf={flagBf} handleAdultsChangeBf={handleAdultsChangeBf} handleChildrenChangeBf={handleChildrenChangeBf} />
       
       </Segment>
     </Grid.Column>
     <Grid.Column>
     
       <Segment >

   <BookingSummary bookMongo={bookMongo}  handleTotal={handleTotal} ListRoomBf={ListRoomBf} ListRoom={ListRoom} PremiumRoom={ PremiumRoom} PremiumRoomwithBf={ PremiumRoomwithBf} k={k} c={c} SetFlagBs={SetFlagBs} totalChildren={totalChildren}  totalAdults={ totalAdults} calculateBill={calculateBill} totalAdultsBf={totalAdultsBf} totalChildrenBf={totalChildrenBf} calculateBillBf={calculateBillBf} startDate={startDate} endDate={endDate} differenceInDays={differenceInDays}/>
       
       </Segment>
      
    
     </Grid.Column>
   </Grid.Row>
 </Grid>
 <div  >
<FooterComp/>
</div>
       </>
   )
}
export default BookNow