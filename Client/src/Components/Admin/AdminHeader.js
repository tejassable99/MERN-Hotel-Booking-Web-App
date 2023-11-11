import { Link } from "react-router-dom";
import React from 'react'
import { Dropdown,Menu } from 'semantic-ui-react'
const AdminHeader=()=>{
    return(
        <>
         <div class="ui  top fixed  massive menu" style={{padding:"20px"}}>
      <div class="right menu">
    
      <Link to="/UserBookings"> <a class=" item">Bookings</a></Link>
      
   <Link to="/UserInfo">  <a class="item">UserInfo</a></Link> 

    
    <Menu compact>
      <Dropdown text="Logout" simple item>
        <Dropdown.Menu>
     <Link to="/">    <Dropdown.Item >Logout</Dropdown.Item></Link> 
          {/* <Link to="/MyBookings"><Dropdown.Item>My Bookings</Dropdown.Item></Link> */}
        </Dropdown.Menu>
      </Dropdown>
    </Menu>

    {/* <Link to="/Login"> <a class="item">Logout</a></Link> */}
          </div></div>
        </>
    )
}
export default AdminHeader