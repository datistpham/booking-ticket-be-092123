import React from 'react'

const CostHotel = (props) => {
  return (
    <div className='fjsijpskopwopwoa'>
        {props.cost_adult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
        
    </div>
  )
}

export default CostHotel