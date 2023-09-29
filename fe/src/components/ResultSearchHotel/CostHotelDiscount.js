import React from 'react'

const CostHotelDiscount = (props) => {
  return (
    <> 
        <div className='dkoakaepkeopwkpaw'>
            {parseInt(props.cost_adult).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
        </div>
        <div className='fjsijpskopwopwoa'>
            {(parseInt(props.cost_adult) - parseInt(props.discount)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
        </div> 
    </>
  )
}

export default CostHotelDiscount