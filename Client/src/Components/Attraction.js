import "../App.css"
import CalendarCard from "./CalendarCard"
import CarouselComp from "./CarouselComp"
import HeaderComp from "./HeaderComp";
 import FooterComp from "./FooterComp";
const Attraction=()=>{
    return(
        <>
           <div class="fixed"  >
    <HeaderComp/>
    </div>
        <CarouselComp/>
        <CalendarCard/>
 <div>

<div className="div2">
  <h1 className="topfont">Find the Best Attractions Near Our Hotel</h1><br/>
  <h3 className="font">Life is an adventure that needs to be lived to the utmost. Travel far and wide not to escape life but to live it in all its glory…Travel is more than sightseeing. It is a transformation that goes deep and permanent in your very ideas of life!</h3>
<br/>
  <div className="main">
    <div className="image-container">
      <img src="../statue.jpg" style={{ height: "600px", width: "400px" }} />
      <p className="caption">STATUE OF LIBERTY</p>
    </div>

    <div className="image-container">
      <img src="../rome.jpg" style={{ height: "600px", width: "400px" }} />
      <p className="caption">Rome </p>
    </div>

    <div className="image-container">
      <img src="../tower.jpg" style={{ height: "600px", width: "400px" }} />
      <p className="caption">EIFFEL Tower </p>
    </div>
  </div>
</div>
        
        </div>
        <div  >
<FooterComp/>
</div>
        </>
    )
}
export default Attraction