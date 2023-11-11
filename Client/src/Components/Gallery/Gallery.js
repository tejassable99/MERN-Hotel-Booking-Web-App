import CalendarCard from '../CalendarCard';
import './Gallery.css'
import {Image} from 'semantic-ui-react'
import HeaderComp from "../HeaderComp";
 import FooterComp from "../FooterComp";

const Gallery=()=>{

    return(
        <>
           <div class="fixed"  >
    <HeaderComp/>
    </div>
         <div className="container-gallary">
        <h1 className='Gallary-headding'>GALLERY</h1>
        <h2 className='Gallary-msg'>HAVE A LOOK AT OUR BRAND HOTELS</h2>
    </div>
    <CalendarCard/>
    <div className='galary-div'>
<h1 className='mx-auto gallary-subhead'>TEJAS Hotels & Resorts</h1>
 
 <Image.Group size='large' className='imgs' >
 <div className='shrink'><Image src="http://data.1freewallpapers.com/download/spa-beach-hotel-1680x1050.jpg" /></div>
   <div className='shrink'> <Image src="https://i.pinimg.com/originals/67/8e/28/678e28fc2b672118fb297e3b88e6eb69.jpg" /></div>
   <div className='shrink'> <Image src="https://wallpapercave.com/wp/wp6957233.jpg" /></div>
   <div className='shrink'> <Image src="https://revenue-hub.com/wp-content/uploads/2018/04/boutique-hotel.jpeg" /></div>
   <div className='shrink'><Image src="https://www.wallpaperup.com/uploads/wallpapers/2013/12/16/196349/120a672d510ad3ff94fe180e8421f2b2.jpg" /></div>
  <div className='shrink'> <Image src="https://www.hotelmogel.com/wp-content/uploads/2017/11/TAL1.jpg" style={{height:"82%"}}/></div>
 </Image.Group>
</div>
<div  >
<FooterComp/>
</div>
        </>
    )
}
export default Gallery;