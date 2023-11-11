import { Icon } from "semantic-ui-react";
import './Amenities.css'
const Amenities=()=>{

    return(
        <>
        <div className="Container text-white ">
      <div className="m-2 ">
        <h1 className='text-center fw-bolder font-monospace fs-2  text-amzing'>Amazing</h1>
        <p className="text-center fw-bolder font-monospace fs-1 ">AMENITIES</p>
        <div className="flex-container d-flex ">
          <div className='icons'>         
           <Icon link name='wheelchair'/>
           </div >
            <div className="flx-div">
            <h4 className='fs-3 fw-bolder'>Wheelchair</h4>
            <p className='text-wrap fs-5'>Wheelschair Available for a person who cannot walk or any physical handicap.</p>
          </div>
          <div className='flx-itm d-flex m-100px'>
          <div className='icons'>   
            <Icon link name='bullhorn' />
            </div >
            <div className="flx-div">
            <h4 className='fs-3 fw-bolder'>Smoke Detector</h4>
            <p className='text-break fs-5'>fire-protection device Available in the hotel, automatically detects and gives a warning of the presence of smoke.</p>
          </div>
          </div>
        </div>
        <div className="flex-container d-flex">
        <div className='icons'>   
            <Icon  link name='tv' />
            </div >
            <div className="flx-div">
            <h4 className='fs-3 fw-bolder'>TV</h4>
            <p className='text-wrap fs-5'>In our hotel's Every Room TV Available. Guests can watch during their resting time.</p>
          </div>
          <div className='d-flex'>
          <div className='icons'>   
            <Icon link name='bell' />
            </div >
            <div className="flx-div">
            <h4 className='fs-3 fw-bolder'>Wake-up Call</h4>
            <p className='text-wrap fs-5'>When you want to wake up, tell us, and we will call you at your requested time.</p>
          </div>
          </div>
        </div>
        <div className="flex-container d-flex">
        <div className='icons'>   
            <Icon link name='spy' />
            </div >
            <div className="flx-div">
            <h4 className='fs-3 fw-bolder'>Bellboy Service</h4>
            <p className='text-wrap fs-5'>Our Bellboy Service helps you move or shift your luggage, etc.</p>
          </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Amenities;