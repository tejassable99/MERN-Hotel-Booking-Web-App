import "./Comp.css"
import "../App.css"
import CarouselComp from "./CarouselComp"
import CalendarCard from "./CalendarCard"

 import FooterComp from "./FooterComp";
import HeaderComp from "./HeaderComp";
const About=()=>{
    return(
        <>
           <div class="fixed"  >
    <HeaderComp/>
    </div>
        <CarouselComp/>
        <CalendarCard/>
        <div style={{padding:"5%"}}>
        <div style={{textAlign:"center"}} className="shrink">
            <img src="../abouthotel.jpg" size="massive"/><br></br>
            </div>
            <div class="right aligned" style={{width:"80%",textAlign:"left",marginLeft:"10%",padding:"2%"}}>
            <h1 > Welcome to TEJAS Hotels & Resorts</h1><br></br>
            <h3>TEJAS Hotels & Resorts is a new-age hotel management firm offering specialized services to Hotels across India. It offers exceptional service provided by a diverse team with a remarkable combined experience of over 50+ years across varied hospitality verticals. The emerging hospitality company has already made its mark with first hotel in Delhi and vies to manage 150+ keys by 2021 across India.</h3>
           <br/>
           <h3>We, as a brand, strive to provide exemplary service and give our customers “Stay in Style.” By combining luxury with simplicity, we help our customers to revitalize and experience elegance at a price that would not burn a hole in their pockets. Since the inception of brand, we have soared to new heights with properties in the best of locations in India and abroad and continue to expand aggressively.</h3>
           <br/>
           <h3>We continue to define everlasting experiences with unmatched service and an ever-evolving modern sensibility. We offer our customers an environment where they can relax and energize by providing them with unparalleled comfort and service. Estilo seamlessly combines modern with the traditional. Our contemporary hospitality solutions and advanced facilities are ingrained with traditional values to provide a holistic experience to our customers. We customize our offerings in accordance to the requirement and preference of the customers from varying financial and social classes. We go above and beyond in ensuring that the customers are satisfied and strive to exceed their expectations. Our area of expertise is the efficient management of all the properties and provision of exceptional service. Estilo leaves a signatory mark and continues to fly high with its novel hotels and resorts.</h3>
           <br/><br/>
           <h1>VISION & MISSION</h1>
           <br/><br/>
           <h2>OUR VISION</h2>
           <br/>
           <h3>We aspire to be India’s finest and largest hotel chain in the economy and mid market segment.</h3>
           <br/>
           <h2>OUR MISSION</h2>
           <br/>
           <h3>Our Mission is to provide clean and safe hospitality to our guests, each time, every time & to become the most preferred hotel company</h3>
           
           
            </div>
            </div>
           


        
            <div  >
<FooterComp/>
</div>
        </>
    )
}
export default About