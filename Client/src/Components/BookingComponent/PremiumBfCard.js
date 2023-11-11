import { Icon } from "semantic-ui-react"
import React, { useState } from 'react'
import { Grid, Segment,Image,Divider,Label, Button,Dropdown} from 'semantic-ui-react'
import "../Comp.css"
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import RoomAcWithBf from './RoomAcWithBf'

const PremiumBfCard=({handleAddBf,handleRemBf,ListRoomBf,flagBf,k,handleAdultsChangeBf, handleChildrenChangeBf})=>{
   
  return(
      <>
      
      
       <h1 style={{ color: 'goldenrod' }}>Premium Room  with Breakfast</h1><br/>
          <h4 >Room Capacity :
          <Icon name='user' /> Adults: 3, <Icon name='child' /> Children: 2</h4><br/>
       
       <div style={{display:"flex",justifyContent:'space-between'}}>
         
          <h4 >Room Rates Exclusive of Tax:</h4>
          <div className='roomino'>
          <h1 style={{ color: 'goldenrod' }}>Rs 55,497.00 </h1>
          </div>
          </div>
         <br/>
          <Divider inverted />
          
        <h4 style={{ color: 'goldenrod' }}>Room Info</h4><br/>
        <Label as="a" color="red" tag size="tiny">
          Promo Offer
        </Label>
        {flagBf==true?
     <div>
        <Button.Group  floated="right">
      <Button onClick={handleRemBf} style={{ backgroundColor: 'goldenrod',color:"white"}} icon={<MinusOutlined />} />
      <Button onClick={handleAddBf} style={{ backgroundColor: 'goldenrod',color:"white"}} icon={<PlusOutlined />} />
    </Button.Group>
    <br></br><br></br>
    </div>
    :
    <div>
        <Button floated="right" size='large' style={{ backgroundColor: 'goldenrod',color:"white"}} onClick={handleAddBf}>Add Room</Button><br/><br/>
        </div>
        }
      
      
      
        
        {ListRoomBf.map((room)=><RoomAcWithBf ListRoomBf={ListRoomBf} idBf={room.idBf} adultsBf={room.adultsBf} childrenBf={room.childrenBf} k={room} handleAdultsChangeBf={handleAdultsChangeBf} handleChildrenChangeBf={handleChildrenChangeBf}/>)}
      

      
      </>
  )
}
export default PremiumBfCard