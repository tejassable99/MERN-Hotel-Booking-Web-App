import { useEffect, useState } from 'react';
import axios from "axios"
import HeaderComp from '../HeaderComp';
import CarouselComp from '../CarouselComp';
import   './Admin.css';
import { Card, Button } from 'semantic-ui-react';
import { Grid, Image, Segment,Icon,Form,Input } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import FooterComp from '../FooterComp';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';

const UserInfo=()=> {
    let [Data,setData]=useState([]);
    // let[uid,setUid]=useState();
let uid;

let[search,setSearch]=useState()
let[searchit,setSearchit]=useState([])

   
  useEffect(() => {
    uid = sessionStorage.getItem("id");
    axios.get("https://mern-hotel-booking-web-app-git-main-tejas-projects-c8790610.vercel.app/UserInfo")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    
  }, []);

     let m=Data.total;
    //  console.log(m+"jasadsj")
    //  console.log(Data)
      // const remove=(jkuid,jktotal)=>
      // {console.log(jkuid+"anknd"+jktotal)
      // axios.delete(`http://localhost:9000/cancelBooking/${jkuid}/${jktotal}`).then((res)=> console.log(res) ).catch((e)=> console.log("error "))
      // }

      // const remove = (jkuid) => {
      //   console.log(jkuid + "anknd" );
      
      //   axios.delete(`http://localhost:9000/cancelBooking/${jkuid}`)
      //     .then((res) => {
      //       console.log(res);
      //       // Display SweetAlert on success
      //       Swal.fire(
      //         'SUCCESS',
      //         'Booking has been canceled successfully!',
      //         'success'
      //       ).then(() => {
      //         // Reload the page after clicking "OK" in SweetAlert
      //         window.location.reload();
      //       });
      //     })
      //     .catch((e) => {
      //       console.log("error");
      //       // Display SweetAlert on error
      //       Swal.fire(
      //         'ERROR',
      //         'Failed to cancel booking. Please try again later.',
      //         'error'
      //       );
      //     });
      // };
      const handleSearch=(e)=>{
        setSearch(e.target.value)
        
        setSearchit(Data.filter((temp)=>temp.uid.includes(search)))
       }

  return (
   




   <div>
    
    <AdminHeader/> <br></br><br></br><br></br><br></br>
      {/* <CarouselComp/> */}
      <div className="Admincontainer-div">
        <h1 className='Admincontact-headding'>Admin UserInfo</h1>
        {/* <h2 className='contact-msg'>WE ARE ALWAYS HERE TO ANSWER YOUR QUESTIONS</h2> */}
    </div><br></br>
    
    <Form>
    <Form.Field inline>
    
      <Input placeholder='uid' onChange={handleSearch}/>
      <Icon name="search" size='large'/>
    </Form.Field>
  </Form>
{/* <input type='text'onChange={handleSearch}/> */}
{searchit.length ? (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {searchit.map((temp) => (
      <Card key={temp.uid} style={{ margin:"5%" }}>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>Name:{temp.firstName} {temp.lastName}</Card.Header><br></br>
          <strong>Username:{temp.name}</strong><br></br>
          <strong><br></br>
            {`UID: ${temp.uid}`}
            <br /><br></br>
            {`Phone: ${temp.phNumber}`}
          </strong>
        </Card.Content>
        <Card.Content extra>
          {/* Add any additional buttons or actions here */}
        </Card.Content>
      </Card>
    ))}
  </div>
)
:
    Data.length ? (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Data.map((temp) => (
      <Card key={temp.uid} style={{ margin:"5%" }}>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>Name:{temp.firstName} {temp.lastName}</Card.Header><br></br>
          <strong>Username:{temp.name}</strong><br></br>
          <strong><br></br>
            {`UID: ${temp.uid}`}
            <br /><br></br>
            {`Phone: ${temp.phNumber}`}
          </strong>
        </Card.Content>
        <Card.Content extra>
          {/* Add any additional buttons or actions here */}
        </Card.Content>
      </Card>
    ))}
  </div>
) : (
  <div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Icon disabled name='bed' size='massive' /><br></br>
    </div>
    <div style={{ display: "flex", justifyContent: "center", color: "gray" }}>
      <h1>No Booking(s)</h1>
    </div>
    <div style={{ display: "flex", justifyContent: "center", fontWeight: "bold", color: 'gray' }} >
      <h2>Yet</h2>
    </div>
  </div>
)}



     
        
<br></br><br></br>
<AdminFooter/>


   </div>
   
      
  );
}

 export default UserInfo;

// import { useEffect, useState } from 'react';

// const MyBookings=()=> {
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
//     alert(Data)

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

// export default MyBookings;

// import { useEffect, useState } from 'react';

// const MyBookings = () => {
//   const [Data, setData] = useState([]);
//   const [uid, setUid] = useState('');

//   const fetchData = async () => {
//     try {
//       let s = sessionStorage.getItem("id");
//       setUid(s);
      
//       const response = await fetch(`http://localhost:9000/getData/${s}`);
//       if (!response.ok) {
//         throw new Error(`Failed to fetch data (HTTP status: ${response.status})`);
//       }

//       const temp = await response.json();
//       setData(temp);
//       alert(JSON.stringify(temp)); // Use alert or console.log here to see the data
//     } catch (e) {
//       console.log(e);
//     }
//   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []); // The dependency array is empty since we don't have dependencies for this effect

//   return (
//     <div>
//       {Data.length ? (
//         Data.map((temp) => (
//           <div >
//             <h2>{temp.uid}</h2>
//             <h2>{temp.totalChildrenBf}</h2>
//             <h2>{temp.totalAdultsBf}</h2>

//             <h2>{temp.premiumBillBf}</h2>
//             <h2>{temp.premiumBillBf}</h2>

//             <h2>{temp.totalChildren}</h2>
//             <h2>{temp.totalAdults}</h2>

//             <h2>{temp.premiumBill}</h2>

//             <h2>{temp.startDate}</h2>
//             <h2>{temp.endDate}</h2>
//             <h2>{temp.differenceInDays}</h2>
//             <h2>{temp.total}</h2>

//             <h1>"===================================================="</h1>
//           </div>
//         ))
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default MyBookings;
