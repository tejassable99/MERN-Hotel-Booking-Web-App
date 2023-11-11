import FooterComp from '../FooterComp';
import HeaderComp from '../HeaderComp';
import './ViewAllRooms.css'
const ViewAllRooms=()=>{
    return(
        <>
        
        <HeaderComp/><br></br><br></br><br></br><br></br>
        <div className="container-Rooms">
        <h1 className='Rooms-headding'>ROOMS </h1>
        <h2 className='Rooms-msg'>RAISING COMFORT TO THE HIGHEST LEVEL</h2>
    </div>
    <div className='Rooms-subhead'>
        <h1>Our hotels have a wide range of rooms for you to offer</h1>
        <p className='subhead-description'>We offer our customers an environment where they can relax and energize by providing them with unparalleled comfort and service. Estilo seamlessly combines modern with the traditional. Our contemporary hospitality solutions and advanced facilities are ingrained with traditional values to provide a holistic experience to our customers. We customize our offerings in accordance to the requirement and preference of the customers from varying financial and social classes. We go above and beyond in ensuring that the customers are satisfied and strive to exceed their expectations. Our area of expertise is the efficient management of all the properties and provision of exceptional service. Estilo leaves a signatory mark and continues to fly high with its novel hotels and resorts.</p>
    </div>
    <FooterComp/>
        </>
    )
}
export default ViewAllRooms;