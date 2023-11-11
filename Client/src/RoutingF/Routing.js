import { Route, Routes } from "react-router-dom"
import Team from "../Components/Team"
import About from "../Components/About"
import Attraction from "../Components/Attraction"
import Home from "../Components/Home"
import BookNow from "../Components/BookingComponent/BookNow"
import Contact from "../Components/Contacts/Contact"
import Gallery from "../Components/Gallery/Gallery"
import OurHotel from "../Components/OurHotel/OurHotel"
import ViewAllRooms from "../Components/ViewAllRooms/ViewAllRooms"
import Login from "../Components/Login"
import MyBookings from "../Components/BookingComponent/MyBookings"
import UserBookings from "../Components/Admin/UserBookings"
import UserInfo from "../Components/Admin/UserInfo"






const Routing=()=>{
    return(
        <>
        <Routes>
            <Route path="/Team" element={<Team/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Attraction" element={<Attraction/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/BookNow" element={<BookNow/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
            <Route path="/OurHotel" element={<OurHotel/>}/>
            <Route path="/ViewAllRooms" element={<ViewAllRooms/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/MyBookings" element={<MyBookings/>}/>
            <Route path="/UserBookings" element={<UserBookings/>}/>
            <Route path="UserInfo" element={<UserInfo/>}/>
            
            
            
    
        </Routes>
        
        
        </>
    )
}
export default Routing