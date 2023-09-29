import { Tooltip } from '@mui/material'
import React from 'react'
import { memo } from 'react'

const Entity = (props) => {
  return (
    <div className="lit-4" style={{marginLeft: 12, display: "flex", flexDirection: "row", gap: 10}}>
        {parseInt(props.package)=== 1 && <Tooltip title="Hành lý"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><rect width="24" height="24"></rect><path stroke="#0194f3" strokeWidth="2" d="M9,5 L15,5 C15.5522847,5 16,5.44771525 16,6 L16,8 L8,8 L8,6 C8,5.44771525 8.44771525,5 9,5 Z M4.5638852,8 L19.4361148,8 C20.3276335,8 20.6509198,8.09282561 20.9768457,8.2671327 C21.3027716,8.4414398 21.5585602,8.69722837 21.7328673,9.0231543 C21.9071744,9.34908022 22,9.67236646 22,10.5638852 L22,17.4361148 C22,18.3276335 21.9071744,18.6509198 21.7328673,18.9768457 C21.5585602,19.3027716 21.3027716,19.5585602 20.9768457,19.7328673 C20.6509198,19.9071744 20.3276335,20 19.4361148,20 L4.5638852,20 C3.67236646,20 3.34908022,19.9071744 3.0231543,19.7328673 C2.69722837,19.5585602 2.4414398,19.3027716 2.2671327,18.9768457 C2.09282561,18.6509198 2,18.3276335 2,17.4361148 L2,10.5638852 C2,9.67236646 2.09282561,9.34908022 2.2671327,9.0231543 C2.4414398,8.69722837 2.69722837,8.4414398 3.0231543,8.2671327 C3.34908022,8.09282561 3.67236646,8 4.5638852,8 Z"></path><text x="5.5" y="18" fill="#0194f3" fontSize="11" fontFamily="MuseoSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol" fontWeight="900"></text></g></svg></Tooltip>}
        {parseInt(props.eating)=== 1 && <Tooltip title="Ăn uống"><div style={{width: 16, height: 16, marginRight: 8, display: "flex", justifyContent: 'center',alignItems: "center"}}><img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_facilities_meal_24px-c66421c72d506576cf9851e390b04a28.svg" width="20" height="20" alt="open" ></img></div></Tooltip>}             
        {parseInt(props.entertainment)=== 1 && <Tooltip title="Giải trí"><div style={{width: 16, height: 16, marginRight: 8, display: "flex", justifyContent: 'center',alignItems: "center"}}><img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_facilities_entertainment_24px-8ddbf131a0adec74006d5072a5ee75a4.svg" width="20" height="20" alt="open"></img></div></Tooltip>}
        {parseInt(props.charger)=== 1 && <Tooltip title="Cáp sạc USB"><div style={{width: 16, height: 16, marginRight: 8, display: "flex", justifyContent: 'center',alignItems: "center"}}><img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_facilities_power_plug_24px-911f99799fec150c05c235d1a1993375.svg" width="20" height="20" alt="open"></img></div></Tooltip>}             
    </div>
  )
}

export default memo(Entity)