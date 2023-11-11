import { useState } from "react"
import { Icon,Divider } from "semantic-ui-react"

const RoomAc=({c,handleAdultsChange, handleChildrenChange,id,adults,children})=>{
// let[AdultPrem,SetAdultPrem]=useState(0)
// let[ChildPrem,SetChildPrem]=useState()
// // console.log(AdultPrem,ChildPrem)
//  const func=(e)=>{
//   SetAdultPrem(e.target.value)
//   alert("hi"+AdultPrem)
//   let x=parseInt (localStorage.getItem("r"))
//   x=x+parseInt(AdultPrem)
//   localStorage.setItem("r",x)
// alert("bye"+x)
//  }
// console.log("ListRoom:", ListRoom);
  
    return(
        <>
        
          <Divider inverted />
          
            
          <div style={{display:"flex",justifyContent:'space-around'}}>
          
            
          <h4>Room {id}</h4>
          
         <div >
            <h4>
          <Icon name="user"/>Adult
          <select  value={adults}
              onChange={(e) => handleAdultsChange(id, parseInt(e.target.value))} >
          
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </select>
  </h4>
  </div>

<div>
    <h4>
        
  <Icon name="child"/>Children
  <select value={children}
              onChange={(e) => handleChildrenChange(id, parseInt(e.target.value))} >
        
    <option>0</option>
    <option>1</option>
    <option>2</option>
  </select>
  
  </h4>
  </div>

  </div>
  

  
  {/* {d}
   <button onClick={handlePremTot}>show</button>  */}
        </>
    )
}
export default RoomAc