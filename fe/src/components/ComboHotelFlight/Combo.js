import moment from 'moment'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import C2 from '../Flight/BookTicketPlane'
import Hotel from '../Hotel/Hotel'

const initialValue = new Date()

const Combo = (props) => {
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
  const [dataflight, setDataFlight]= useState(()=> ({
    adult: 1,
    kid: 0,
    baby: 0
  }))
  const [seatclass, setseatclass]= useState(()=> ({
      v: "Phổ thông",
      e: "ECONOMY"
  }))
  const [data, setData]= useState(()=> ({
    adult: 1,
    kid: 0,
    room: 1
  }))
  const [notFindFlight, setNotFindFlight]= useState(()=> true)
  const [notFindHotel, setNotFindHotel]= useState(()=> true)
  return (
    <div className='iad-1' style={{boxShadow: "rgb(0 0 0 / 24%) 0px 3px 8px"}}>
        <C2 notFindFlight={notFindFlight}setNotFindFlight={setNotFindFlight} classNameWithout={"wi_2"}
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
        <Hotel chooseAdd={true} notfindSearch={true} notFindHotel={notFindHotel}setNotFindHotel={setNotFindHotel} classNameWithout={"wi_2"} 
          timenight={timenight}
          settimenight={settimenight}
          value={startdate}
          choose={choose}
          addi={addi}
          setValue={setValue}
          setchoose={setchoose}
          setaddi={setaddi} 
          data={data}
          setData={setData}
          disable={true}
          classNamesecret={"kso-1"}
        />
        <Link style={{textDecoration: "none"}} to={`/search/combo?origin=${origin.code_airport}&destination=${destination.code_airport}&dt=${moment(`${new Date(startdate).getDate().toString()}/${((parseInt(new Date(startdate).getMonth()) + 1) <10) ? '0'+(parseInt(new Date(startdate).getMonth())+1).toString() : new Date(startdate).getMonth()}/${new Date(startdate).getFullYear().toString()}`, "DD MM YYYY").format("DD-MM-YYYY")}.${moment(`${new Date(arrivaldate).getDate().toString()}/${((parseInt(new Date(arrivaldate).getMonth()) + 1) <10) ? '0'+(parseInt(new Date(arrivaldate).getMonth())+1).toString() : new Date(arrivaldate).getMonth()}/${new Date(arrivaldate).getFullYear().toString()}`, "DD MM YYYY").format("DD-MM-YYYY")}&cs=${dataflight.adult}.${dataflight.kid}.${dataflight.baby}&sc=${seatclass.e}&location=${choose.toLowerCase().replaceAll(" ","-")}&timein=${timenight}&guest=${data.adult}.${data.kid}&room=${data.room}&back=${moment(moment(`${new Date(value).getDate().toString()}${((parseInt(new Date(value).getMonth() +1).toString()) <10) ? '0' + (parseInt(new Date(value).getMonth() ) + 1).toString() : (parseInt(new Date(value).getMonth()) + 1).toString()}${new Date(value).getFullYear().toString()}`, "DDMMYYYY")).add(parseInt(timenight), "days").format("DD-MM-YYYY")}`}
          state={{location_origin: origin.location_airport, location_destination: destination.location_airport}}
        >
          <div className="ld-2"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6109dccccb4bbae97f5ded035b3853d9.svg" alt="open"/>
              <div className="so-1">Tìm chuyến bay + khách sạn
              </div>
          </div>
        </Link>
    </div>

  )
}

export default Combo