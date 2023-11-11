import { Divider } from "semantic-ui-react"

const PremiumRoomOnly=({totalChildren,totalAdults,ListRoom,calculateBill})=>{
    return(
        <>
        <h4>Premium Room Only</h4>
        <h4>{totalAdults} Adults, {totalChildren} Child, {ListRoom.length} Room</h4>
        <div style={{display:"flex",justifyContent:"end"}}>
        <h4>Rs{calculateBill()}</h4>
        </div>
        <Divider inverted />
        
        </>
    )
}
export default PremiumRoomOnly