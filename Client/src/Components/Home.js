import { Link } from 'react-router-dom';
import { Button ,Image,Grid} from 'semantic-ui-react'
import { Container, Divider,  Header, List, Segment } from 'semantic-ui-react';
import { DatePicker, Space } from 'antd';
import CarouselComp from './CarouselComp';
import CalendarCard from './CalendarCard';
import HeaderComp from "./HeaderComp";
 import FooterComp from "./FooterComp";
import "../App.css";
const Home=()=>{
 
    return(
        <>
           <div class="fixed"  >
    <HeaderComp/>
    </div>
<CarouselComp/>
<CalendarCard/>
          <div className="div" >
            <h1 className="topfont">
              
All Day, All Night. </h1><br></br>
<div className="margin">
<h1 className="font">TEJAS HOTELS & RESORTS</h1><br></br><br></br>
<h3>
TEJAS Hotels & Resorts is a new-age hotel management firm offering specialized services to Hotels across India. It offers exceptional service provided by a diverse team with a remarkable combined experience of over 50+ years across varied hospitality verticals. The emerging hospitality company has already made its mark with first hotel in Delhi and vies to manage 150+ keys by 2021 across India.
</h3>
</div>
          </div>

<div className="explore">
<h1 className="topfont">
              
Luxurious Experience</h1>
<h1 className="font">EXPLORE ESTILO'S</h1><br></br><br></br>
<div className='shrink'>
<img src="../hotel.jpg" style={{height:"400px", width:"350px"}}/><br/><br/><br/>
</div>
<Link to="/OurHotel"><Button  size="large" inverted color="yellow">EXPLORE MORE</Button></Link>



</div>
<div className="div2">
  <h1 className="topfont">Traveler's Insights</h1>
  <h1 className="font">ATTRACTIONS</h1>

  <div className="main">
    <div className="image-container">
      <div className='shrink'>
    <Link to="/Attraction"> <img src="../statue.jpg" style={{ height: "600px", width: "400px" }} /></Link> 
    </div>
      <p className="caption">STATUE OF LIBERTY</p>
    </div>
    <div className='shrink'>
    <div className="image-container"></div>
   <Link to="/Attraction">   <img src="../rome.jpg" style={{ height: "600px", width: "400px" }} /></Link> 
      <p className="caption">Rome </p>
    </div>

    <div className="image-container">
    <div className='shrink'>
    <Link to="/Attraction">   <img src="../tower.jpg" style={{ height: "600px", width: "400px" }} /></Link> </div>
      <p className="caption">EIFFEL Tower </p>
    </div>
  </div>
</div>
<div  >
<FooterComp/>
</div>
        </>
    )
}
export default Home