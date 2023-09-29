import React from 'react'
import { memo } from 'react'
import { scroll } from './TypeRoomHotel'

const EntityHotel = (props) => {
  // const entities= useMemo(()=> ["Wifi", "Hồ bơi", "Chỗ đậu xe", "Nhà hàng", "Lễ tân 24h", "Thang máy", "Trung tâm thể dục", "Phòng họp", "Đưa đón sân bay"], [])
 
  return (
    <>
    <div style={{marginBottom: 8}}>Tiện nghi</div>    
      <div className='gkorkawrklsgr'>
        <C v={1} item={"Wifi"} setfilter={props.setwifi} filter={props.wifi} />
        <C v={2} item={"Bể bơi"} setfilter={props.setpool} filter={props.pool} />
        <C v={3} item={"Bãi đỗ xe"} setfilter={props.setparking} filter={props.parking} />
        <C v={4} item={"Nhà hàng"} setfilter={props.setrestaurant} filter={props.restaurant} />
        <C v={5} item={"Lễ tân 24h"} setfilter={props.setreceptionist} filter={props.receptionist} />
        <C v={6} item={"Thang máy"} setfilter={props.setfitness_center} filter={props.fitness_center} />
        <C v={7} item={"Trung tâm thể dục"} setfilter={props.setelevator} filter={props.elevator} />
        <C v={8} item={"Phòng họp"} setfilter={props.setmeeting} filter={props.meeting} />
        <C v={9} item={"Đưa đón sân bay"} setfilter={props.setairport_shuttle} filter={props.airport_shuttle} />
      </div>
    </>
  )
}

const C= (props)=> {
  
  const handle= (e)=> {
    scroll.scrollToTop()
    // es-
    if(props.filter.toString() === "") {
      props.setfilter(()=> e.target.value)
    }
    else {
      props.setfilter(()=> "")
    }
  }
  
  return (
    <div className='djfiejwaejwew'>
      <input type="checkbox" name='r' value={props.v} onChange={(e)=> handle(e)} />
      <div className='opdrkoprkwopewe'>{props.item}</div>
    </div>
  )
}

export default memo(EntityHotel)