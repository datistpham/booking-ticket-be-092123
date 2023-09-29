import moment from 'moment'
import React from 'react'
import { useLocation } from 'react-router-dom'
import LocationIcon from '../component/LocationIcon'

const AboutHotel = (props) => {
  const location= useLocation()
  return (
    <div style={{maxWidth: 1024, width: "100%", borderRadius: 10, backgroundColor: "#fff", padding: 16, boxSizing: "border-box", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <div style={{fontSize: 18}}>
            <img className="_1Mamo" src="https://ik.imagekit.io/tvlk/image/imageResource/2018/04/03/1522754232742-552d078378e134fb3df3b659a7d527f4.png?tr=q-75" alt="open"style={{width: 16, height: 16, objectFit: 'cover'}}  /> Hotel <strong>{props?.name_hotel}</strong> at <strong>{props?.detail_location}</strong>
        </div>
        <br />
        <div style={{display: "flex", gap: 10}}>
            <LocationIcon />
          <span>{props?.detail_location}, {props?.location}, {props?.country_location}</span>
        </div>
        <div>
            <strong>From</strong>: {moment(location.state.time.split(".")[0], "DD-MM-YYYY").format("DD-MMM-YYYY")} <strong>to</strong>: {moment(location.state.time.split(".")[1], "DD-MM-YYYY").format("DD-MMM-YYYY")}
        </div>
        <br />
        <div>
            {parseInt(location.state.detail_customer.split(".")[0]) > 0 &&
            <span>{location.state.detail_customer.split(".")[0]} người lớn</span>
            }
            {parseInt(location.state.detail_customer.split(".")[1]) > 0 &&
            <span>{location.state.detail_customer.split(".")[1]} trẻ em</span>
            }
            &nbsp;&nbsp;|&nbsp;&nbsp;{parseInt(location.state.room) >0 && location.state.room + " phòng "} 
        </div>
    </div>
  )
}

export default AboutHotel