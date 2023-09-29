import React from 'react'
import { useState } from 'react'
import useQuery from '../../f/get_query_parameter'
import Combo from '../ComboHotelFlight/Combo'
import BookTicketPlane from '../Flight/BookTicketPlane'
import SelectType from '../Flight/SelectType'
import Hotel from '../Hotel/Hotel'
import Suggest from './Suggest'
// import moment from 'moment'
const initialValue = new Date()

const Container = (props) => {
  
  const [origin,  setorigin]= useState(()=> ({
  location_airport: "Đà Nẵng",
  code_airport: "DAN"
  }))
  const [destination, setdestination]= useState(()=> ({
      location_airport: "TP HCM",
      code_airport: "SGN"
  })) 
  const [startdate, setstartdate]= useState(initialValue)
  const [arrivaldate, setarrivaldate]= useState(initialValue)
  const [timenight, settimenight]= useState(()=> 1)
  const [value, setValue]= useState(initialValue)
  const [choose, setchoose]= useState(()=> "")
  const [addi, setaddi]= useState(()=> "")
  const [data, setData]= useState(()=> ({
    adult: 1,
    kid: 0,
    room: 1
  }))
  const [dataflight, setDataFlight]= useState(()=> ({
    adult: 1,
    kid: 0,
    baby: 0
  }))
  const [seatclass, setseatclass]= useState(()=> ({
      v: "Phổ thông",
      e: "ECONOMY"
  }))
  const query= useQuery()
  return (
    <>
      <div style={{position: "absolute", top: 60, left: 0, backgroundImage: "url(https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png)", width: "100%", height: 400, backgroundRepeat: "no-repeat", zIndex: 99, backgroundSize: "cover"}}>
      </div>
      <div className="gl-2" style={{position: "relative", top: 180, zIndex: 100}}>
          <SelectType setbookplane={props.setbookplane} />
          {
            (props.bookplane=== true || query.get("q")=== "flight") &&
            <BookTicketPlane 
              origin={origin} 
              setorigin={setorigin} 
              destination={destination} 
              setdestination={setdestination}
              startdate={startdate}
              setstartdate={setstartdate}
              arrivaldate={arrivaldate}
              setarrivaldate={setarrivaldate}
              data={dataflight}
              setData={setDataFlight}
              seatclass={seatclass}
              setseatclass={setseatclass}
              /> 
          }
          {
            (props.bookplane=== false || query.get("q")=== "hotel") &&
            <Hotel
              timenight={timenight}
              settimenight={settimenight}
              value={value}
              choose={choose}
              addi={addi}
              setValue={setValue}
              setchoose={setchoose}
              setaddi={setaddi} 
              data={data}
              setData={setData}
            />
          }
          {
            (props.bookplane=== undefined || query.get("q")=== "combo") &&
            <Combo />
          } 
          <div style={{display: "flex", justifyContent: "center", width: "100%", flexDirection: 'column', marginTop: 50}}>
            <div style={{fontSize: 24, fontWeight: 600, textAlign: "center"}}>
              Những chỗ nghỉ nổi bật khuyến nghị cho bạn 
            </div>
            <br />
            <Suggest />
          </div>
      </div>
    </>
  )
}

export default Container