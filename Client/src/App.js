import "./App.css"
import React from 'react'
import { Button ,Image,Grid} from 'semantic-ui-react'
import { Container, Divider,  Header, List, Segment } from 'semantic-ui-react';
import Home from "./Components/Home";
import About from "./Components/About";
import Team from "./Components/Team";
import Attraction from "./Components/Attraction";
// import Routing from "./Routing";
import { Link } from "react-router-dom";
import { Carousel } from 'antd';
import CarouselComp from "./Components/CarouselComp";
import HeaderComp from "./Components/HeaderComp";
 import FooterComp from "./Components/FooterComp";
import CalendarCard from "./Components/CalendarCard";
import Routing from "./RoutingF/Routing";
import Login from "./Components/Login";

const App=()=>{


  

  // const contentStyle = {
  //   height: '160px',
  //   color: '#fff',
  //   lineHeight: '160px',
  //   textAlign: 'center',
  //   background: '#364d79',
  // };
  return(
    <>
    
    <div>
 


{/* <CarouselComp/> */}
{/* <CalendarCard/> */}
          {/* <img src="../cara1.jpg" style={{height:"900px",width:"100%"}}/> */}
          
        <div >
        <Routing/>
        </div>

</div>




       
           
            
    </>
  )
}
export default App