import { Carousel } from 'antd';
const CarouselComp=()=>{
    return(
        <>
        
<Carousel autoplay autoplaySpeed={2000}>
    <div>
      <img src="../caras1.jpg" style={{height:"800px",width:"100%"}}></img>
    </div>
    <div>
      <img src="../caras2.jpg" style={{height:"800px",width:"100%"}}></img>
    </div>
    <div>
      <img src="../caras3.jpg" style={{height:"800px",width:"100%"}}></img>
    </div>
    <div>
      <img src="../cara1.jpg" style={{height:"800px",width:"100%"}}></img>
    </div>
  </Carousel>
        </>
    )
}
export default CarouselComp