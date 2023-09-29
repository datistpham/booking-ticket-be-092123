import React, { useMemo } from 'react'
import * as Scroll from 'react-scroll'

const TypeRoomHotel = (props) => {
  const entities2= useMemo(()=> ["Tất cả", "Chọn nhiều nhất","Khách sạn", "Thanh toán khi nhận phòng","Phù hợp gia đình", "Biệt thự", "Căn hộ", "Nhà nghỉ", "Ưu đãi đặc biệt", "Khu nghỉ dưỡng"], [])
  return (
    <div className='fkkfdgrwketoepre'>
        <div style={{marginBottom: 8}}>Loại phòng nghỉ</div>    
        <div className='gkorkawrklsgr'>
            {
                entities2?.map((item, key)=> <C typehotel={props.typehotel} settypehotel={props.settypehotel} key={key} item={item} />)
            }
        </div>
    </div>
  )
}
export const scroll= Scroll.animateScroll
const C= (props)=> {
    
    return (
        <div className='djfiejwaejwew'>
            <input type="radio" name='v'value={props.item} onChange={(e)=> {
                scroll.scrollToTop()
                if(e.target.value.toString() === "Tất cả") return props.settypehotel("")
                props.settypehotel(e.target.value)
                
            }}  />
            <div className='opdrkoprkwopewe'>{props.item}</div>
        </div>
    )
}

export default TypeRoomHotel