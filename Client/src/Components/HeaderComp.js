import { Link } from "react-router-dom";
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Dropdown,Menu } from 'semantic-ui-react'
const HeaderComp=()=>{
  const nav = useNavigate();

  const handleLogout = () => {
    nav("/", { replace: true });
  };
    return(
        <>
         <div class="ui  top fixed  massive menu" style={{padding:"20px"}}>
      <div class="right menu">
    
      <Link to="/Home"> <a class=" item">HOME</a></Link>
      
   <Link to="/About">  <a class="item">ABOUT US</a></Link> 
   <Link to="/Team">     <a class="item">OUR TEAM</a></Link> 
  <Link to="/OurHotel"> <a class="item">OUR HOTEL</a></Link> 
    <Link to="/Gallery"> <a class="item">GALLERY</a></Link> 
    <Link to="/Contact"> <a class="item">CONTACT</a></Link> 
    
    <Menu compact>
      <Dropdown text="Logout" simple item>
        <Dropdown.Menu>
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          <Link to="/MyBookings"><Dropdown.Item>My Bookings</Dropdown.Item></Link>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>

    {/* <Link to="/Login"> <a class="item">Logout</a></Link> */}
          </div></div>
        </>
    )
}
export default HeaderComp