import React, { useEffect, useRef, useState } from 'react'
import 'moment/locale/vi'  
import { Link } from 'react-router-dom'
import ClassSeatComponent from './ClassSeatComponent'
import ComponentChooseTypeCustomer from './ComponentChooseTypeCustomer'
import ChooseOriginAndDestination from './ChooseOriginAndDestination'
import ChooseTimeOriginAndTimeDestination from './ChooseTimeOriginAndTimeDestination'
import Mode from './Mode'
import moment from 'moment'

const BookTicketPlane = (props) => {
  const [check, setcheck]= useState(()=> false)
  return (
    <div className={`cp-2 ${props.classNameWithout || "ews_4"}`}>
        <ChooseTimeAndPlace
            origin={props.origin} 
            setorigin={props.setorigin} 
            destination={props.destination} 
            setdestination={props.setdestination}
            startdate={props.startdate}
            setstartdate={props.setstartdate}
            arrivaldate={props.arrivaldate}
            setarrivaldate={props.setarrivaldate}
            check={check}
            setcheck={setcheck}
            {...props}
         />
        <SearchFlight
            origin={props.origin} 
            destination={props.destination}
            startdate={props.startdate}
            arrivaldate={props.arrivaldate}
            notFindFlight={props.notFindFlight}
            check={check}
            {...props}
        />
    </div>
  )
}

export const ChooseTimeAndPlace= (props)=> {
    return (
        <div className={"su-1 "+props.className || ""}>
            <Mode category={"Một chiều / Khứ hồi"} />
            <ChooseOriginAndDestination
            origin={props.origin} 
            setorigin={props.setorigin} 
            destination={props.destination} 
            setdestination={props.setdestination}
            {...props}
             />
            <ChooseTimeOriginAndTimeDestination
            startdate={props.startdate}
            setstartdate={props.setstartdate}
            arrivaldate={props.arrivaldate}
            setarrivaldate={props.setarrivaldate}
            check={props.check}
            setcheck={props.setcheck}
            {...props}
             />
        </div>
    )
}


const SearchFlight= (props)=> {
    const [opensuggest, setopensuggest]= useState(()=> false)
    const myRef= useRef()
    const outsidefunction= (e)=> {
        if(myRef.current && !myRef.current.contains(e.target)) {
            setopensuggest(()=> false)
        }
    }
    useEffect(()=> {
        document.addEventListener("mousedown", outsidefunction)
        return ()=> document.removeEventListener("mousedown", outsidefunction)
    }, [])
    return (
        <div className="su-2">
            <div className="nn-1"></div>    
            <div className="cs-1">
                <div className="wo-1">Số hành khách</div>
                <div className="gr-1" ref={myRef} onClick={()=> setopensuggest(()=> true)} style={{ outline: opensuggest=== true ? "2px solid #2e89ff" : "none"}}>
                    <div className="ic-1">
                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/accfeba7f43edb20e4858113abf756d2.svg" alt="open" width="24" height="24" />
                    </div>
                    <input type="text" value={`${props.data?.adult} người lớn, ${props.data?.kid} trẻ em, ${props.data?.baby} em bé`} spellCheck={true} aria-invalid={false} autoCapitalize={"sentences"} autoComplete={"on"} dir="auto" className="it-1" readOnly={true} style={{textTransform: "capitalize"}}  />
                    {
                        opensuggest=== true &&
                        <ComponentChooseTypeCustomer {...props} opensuggest={opensuggest} setopensuggest={setopensuggest} /> 
                    }
                </div>
            </div>
            <ClassSeatComponent value={props.seatclass} setValue={props.setseatclass} />
            {
                props.notFindFlight!== true &&
                <div className="sw-1" style={{width: "100%", display: "flex", justifyContent: "flex-end",}}>
                    <Link to={`/flight/fullsearch?ap=${props.origin?.code_airport}.${props.destination?.code_airport}&dt=${moment(new Date(props.startdate)).format("DD-MM-YYYY")}&ps=${props.data.adult}.${props.data.kid}.${props.data.baby}&sc=${props.seatclass.e}&roundtrip=${props.check=== true ? moment(new Date(props.arrivaldate)).format("DD-MM-YYYY") : "none"}`} className="dkw-1">
                        <ComponetSearch />
                    </Link>
                </div>
            }
        </div>
    )
}
const ComponetSearch= ()=> 
    <div className="ia-1">
        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6109dccccb4bbae97f5ded035b3853d9.svg" alt="open" />
        <div className="so-1" style={{whiteSpace: "nowrap"}}>Tìm chuyến bay</div>
    </div>

export default BookTicketPlane