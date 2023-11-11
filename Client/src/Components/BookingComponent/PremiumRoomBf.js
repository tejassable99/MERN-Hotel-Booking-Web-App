import { Divider } from "semantic-ui-react"

const PremiumRoomBf=({totalChildrenBf,totalAdultsBf, ListRoomBf,calculateBillBf,k})=>{
    
    return(
        <>
        <h4>Premium Room with Breakfast</h4>
        <h4>{totalAdultsBf} Adults, {totalChildrenBf} Child, {ListRoomBf.length} Room</h4>
        <div style={{display:"flex",justifyContent:"end"}}>
        <h4>Rs{calculateBillBf()}</h4>
        </div>
        <Divider inverted />
        
        </>
    )
}
export default PremiumRoomBf