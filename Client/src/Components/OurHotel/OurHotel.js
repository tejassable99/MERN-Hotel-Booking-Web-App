import './OurHotel.css'
import {Button, Image} from 'semantic-ui-react'
import { AiOutlineDesktop , AiOutlineGlobal, AiTwotonePhone, } from "react-icons/ai";
import { BsFillCupHotFill,BsFillStopwatchFill } from "react-icons/bs";
import Amenities from '../Amenities/Amenities';

import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarCard from '../CalendarCard';
import { Link } from 'react-router-dom';
import CarouselComp from '../CarouselComp';
import Attraction from '../Attraction';

 import FooterComp from "../FooterComp";
import HeaderComp from '../HeaderComp';




const OurHotel=()=>{



    return(
        <>
           <div class="fixed"  >
    <HeaderComp/>
    </div>
          <CarouselComp/>
          <CalendarCard/>
        
           <div>    
            
           <div className="row  g-0 bg-light position-relative" style={{marginTop:""}}>
  <div className="col-md-6 mb-md-0 p-md-4 ">
    <div className='shrink'>
    <img src='../OurHotel.jpg' className="w-100 discimg" alt="Room"/></div>
  </div>
  <div className="col-md-6 p-4 ps-md-0">
    <h5 className="mt-0 discheading">TEJAS Hotels</h5>
    <p className='discsubheadding'>TEJAS Hotels & Resorts is a new-age hotel management firm offering specialized services to Hotels across India. It offers exceptional service provided by a diverse team with a remarkable combined experience of over 50+ years across varied hospitality verticals. The emerging hospitality company has already made its mark with first hotel in Delhi and vies to manage 150+ keys by 2021 across India.
We provide B2B services in the form of hospitality solutions and cater to the B2C market as well. The group is fiercely determined to be the best choice for large scale as well as medium scale investors and developers by lending their expertise in managing hospitality solutions. The company is a beacon of elegance and a treasure trove providing contemporary facilities.</p>
  </div>
</div>
</div>

<div style={{marginTop:"50px"}}>
<h1 className='d-grid gap-2 col-3 mx-auto'>ROOMS FOR PLAY</h1>
<div className='shrink'>
 <div className="card custom-card">
      <img
        src="../premiumRoom.jpg"
        className="card-img-top custom-card-img"
        alt="DreamRoom"
      />
      <div className="card-body">
        <h5 className="card-title">Premium Room</h5>
        <p className="card-text">
          Room facilities like Wheelchair, Smoke Detector, TV, Wake-up Call, and Bellboy Service, the property provides a comfortable stay experience.
        </p>
        <div className="d-flex align-items-center custom-icon-container">
          <h2 className="m-3 custom-icon">
            <BsFillStopwatchFill />
          </h2>
          <h2 className="m-3 custom-icon">
            <AiOutlineDesktop />
          </h2>
          <h2 className="m-3 custom-icon">
            <AiOutlineGlobal />
          </h2>
          <h2 className="m-3 custom-icon">
            <AiTwotonePhone />
          </h2>
          <h2 className=" m-3 custom-icon">
            <BsFillCupHotFill />
          </h2>
        </div>
        <Link to="/BookNow">
        <Button
                    style={{ backgroundColor: 'goldenrod', color: 'white' }}
                    size="large"
                
                    
                  >Book Now</Button>
                  </Link>
      </div>
    </div>
    </div>
    <div className='d-grid gap-2 col-2 mx-auto'>
      <Link to="/ViewAllRooms">
    <Button
                    style={{ backgroundColor: 'goldenrod', color: 'white' }}
                    size="large"
                
                    
                  >View All Rooms</Button></Link>
      </div>
      
</div>

<div className='Amenities-container'>
  <Amenities/>
</div>
<div className='galarydiv'>
<h1 className='d-grid gap-3 col-2 mx-auto'>Gallery</h1>
 
 <Image.Group size='large' className='imgs' >
  
  <div className='shrink'> <Image src="http://data.1freewallpapers.com/download/spa-beach-hotel-1680x1050.jpg" /></div>
  <div className='shrink'><Image src="https://i.pinimg.com/originals/67/8e/28/678e28fc2b672118fb297e3b88e6eb69.jpg" /></div>
  <div className='shrink'> <Image src="https://wallpapercave.com/wp/wp6957233.jpg" /></div>
  <div className='shrink'> <Image src="https://revenue-hub.com/wp-content/uploads/2018/04/boutique-hotel.jpeg" /></div>
  <div className='shrink'> <Image src="https://www.wallpaperup.com/uploads/wallpapers/2013/12/16/196349/120a672d510ad3ff94fe180e8421f2b2.jpg" /></div>
  <div className='shrink'> <Image src="https://www.hotelmogel.com/wp-content/uploads/2017/11/TAL1.jpg" style={{height:"82%"}} /></div>
 </Image.Group>
</div>
<div className='d-grid gap-2 col-2 mx-auto' style={{marginBottom:"50px"}}>
   <Link to="/Gallery">     <Button
                    style={{ backgroundColor: 'goldenrod', color: 'white' }}
                    size="large"
                
                    
                  >EXPLORE Gallery</Button></Link>  
      </div>
<div  style={{backgroundColor:"gray",width:"100%",padding:"1px"}}>
<div class="container">
        <h1 className='headding'>WHAT CUSTOMER SAY</h1>
        <h2 className='msg'>Booked 10 + rooms in this wonderful pocket friendly hotel . One of the best service provided by golden keys team . Mainly Aakash bhaiya (manager) attitude and hospitality was so good that I recommend everyone.</h2>
        <p className='name'>— Ankur J.</p>
    </div>
</div>
<div  >
<FooterComp/>
</div>
        </>
    )
}
export default OurHotel;