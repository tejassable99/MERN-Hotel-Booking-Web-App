import { useState } from 'react'
import { Grid, Segment,Image,Divider,Label, Button,Icon,Dropdown} from 'semantic-ui-react'
import RoomAc from './RoomAc'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
const PremiumCard=({handleAdd,ListRoom,flag,handleRem,handleAdultsChange, handleChildrenChange})=>{
  
  
    
  return(
      <>
      
       <h1 style={{ color: 'goldenrod' }}>Premium Room Only</h1><br/>
          <h4 >Room Capacity :
          <Icon name='user' /> Adults: 3, <Icon name='child' /> Children: 2</h4><br/>
       
       <div style={{display:"flex",justifyContent:'space-between'}}>
         
          <h4 >Room Rates Exclusive of Tax:</h4>
          <div className='roomino'>
          <h1 style={{ color: 'goldenrod' }}>Rs 22,497.00 </h1>
          </div>
          </div>
         <br/>
          <Divider inverted />
          
        <h4 style={{ color: 'goldenrod' }}>Room Info</h4><br/>
        <Label as="a" color="red" tag size="tiny">
          Promo Offer
        </Label>
        {flag==true?
     <div>
        <Button.Group  floated="right">
      <Button onClick={handleRem} style={{ backgroundColor: 'goldenrod',color:"white"}} icon={<MinusOutlined />} />
      <Button onClick={handleAdd} style={{ backgroundColor: 'goldenrod',color:"white"}} icon={<PlusOutlined />} />
    </Button.Group>
    <br></br><br></br>
    </div>
    :
    <div>
        <Button floated="right" size='large' style={{ backgroundColor: 'goldenrod',color:"white"}} onClick={handleAdd}>Add Room</Button><br/><br/>
        </div>
}
        {ListRoom.map((room)=><RoomAc id={room.id} adults={room.adults} children={room.children}  c={room} handleAdultsChange={handleAdultsChange} handleChildrenChange={handleChildrenChange} ListRoom={ListRoom}/>)}

        
      </>
  )
}
export default PremiumCard