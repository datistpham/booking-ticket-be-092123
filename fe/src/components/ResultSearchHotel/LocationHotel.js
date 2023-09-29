import React from 'react'

const LocationHotel = (props) => {
  return (
    <span className='kfpkropepeeas'>{props.detail_location&& props?.detail_location}, {props.location&& props?.location}</span>
  )
}

export default LocationHotel