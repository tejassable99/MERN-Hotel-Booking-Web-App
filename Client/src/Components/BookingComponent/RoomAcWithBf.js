import { Icon,Divider } from "semantic-ui-react"

const RoomAcWithBf=({k, handleAdultsChangeBf,handleChildrenChangeBf,idBf,adultsBf,childrenBf})=>{
  
    return(
        <>
        
          <Divider inverted />
          <div style={{display:"flex",justifyContent:'space-around'}}>
          <h4>Room {idBf}</h4>
          
         <div >
            <h4>
          <Icon name="user"/>Adult
          <select  value={adultsBf}
              onChange={(e) => handleAdultsChangeBf(idBf, parseInt(e.target.value))} >
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </select>
  </h4>
  </div>

<div>
    <h4>
        
  <Icon name="child"/>Children
  <select value={childrenBf}
              onChange={(e) => handleChildrenChangeBf(idBf, parseInt(e.target.value))} >
        
    <option>0</option>
    <option>1</option>
    <option>2</option>
  </select>
  
  </h4>
  </div>
  </div>
        </>
    )
}
export default RoomAcWithBf