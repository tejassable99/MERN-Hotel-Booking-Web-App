import './Contact.css'
import { useState } from "react";
import { Icon } from "semantic-ui-react";
import CalendarCard from '../CalendarCard';
import HeaderComp from '../HeaderComp';

 import FooterComp from "../FooterComp";

const Contact=()=>{

    let [name,setName]=useState();
    let [email,setEmail]=useState();
    let [phone,setPhone]=useState();
    let [msg,setMsg]=useState();
  
    const handleSubmit=()=>{
      let user={name,email,phone,msg};
      let data=JSON.stringify(user);
      localStorage.setItem(data);
    }

    return(
        <>
           <div class="fixed"  >
    <HeaderComp/>
    </div>
        <div className="container-div">
        <h1 className='contact-headding'>CONTACT US</h1>
        <h2 className='contact-msg'>WE ARE ALWAYS HERE TO ANSWER YOUR QUESTIONS</h2>
    </div>
    <CalendarCard/>
      <div className='container-contact'>  
          <div className="contact-form">
  <div className="contact-header ml-20">
    <h1>Send Us Message</h1>
  </div>
  <form >
    <input type="text" name="name" placeholder="Name*" required onChange={(e)=>setName(e.target.value)}/>
    <input type="email" name="email" placeholder="Email*" required onChange={(e)=>setEmail(e.target.value)}/>
    <input type="tel" name="phone" placeholder="Phone*" required onChange={(e)=>setPhone(e.target.value)}/>
    <textarea name="message" placeholder="Message" required onChange={(e)=>setMsg(e.target.value)}></textarea>
    <input type="submit" value="SUBMIT" onClick={handleSubmit}/>
  </form>
</div>
<div>
<div className="addresscard">
  <div className="header">
    <h1>Corporate Address</h1>
  </div>
  <div className="address">
   <Icon link name='location arrow' />
    <p>B2/15 Ahosk Vihar Phase 2, New Delhi 110052 India</p>
  </div>
  <div className="contact-info">
  <Icon link name='mail' />
    <p>info@goldenkeysinn.com</p>
    </div>
    <div className="contact-phone">
    <Icon link name='mobile' />
    <p>+91 1140514566</p>
    </div>
</div>
</div>
</div>
<div className='contact-card'>
<div className="card" >
  <div className="card-body">
    <div className='dsply-flx'>
    <Icon link name='location arrow' />
    <p className="card-text">B2/15 Ahosk Vihar Phase 2, New Delhi 110052 India</p>
    </div>
    <div className='dsply-flx'>
    <Icon link name='mail' />
    <p className="card-text">info@goldenkeysinn.com</p>
    </div>
    <div className='dsply-flx'>
     <Icon link name='mobile' />
    <p className="card-text">+91 7834801234</p>
    </div>
  </div>
</div>
</div>

<div>
<iframe width="100%" height="600"  id="gmap_canvas" src="https://maps.google.com/maps?width=523&amp;height=403&amp;hl=en&amp;q=chikodi%20chikodi+(India)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://google-map-generator.com/'></a>
</div>
<div  >
<FooterComp/>
</div>
        </>
    )
}
export default Contact;