import React, { useEffect, useState } from 'react'
import { airport_complete } from '../../f/airport_autocomplete'
import SelectPlace from './SelectPlace'
import TogglePlace from './TogglePlace'

const ChooseOriginAndDestination= (props)=> {
    const [o1, seto1]= useState(()=> false)
    const [o2, seto2]= useState(()=> false)
    const [airportAutocomplete, setAirportAutocomplete]= useState(()=> [])
    const outsidefunction= (e, ref)=> {
        if(ref?.current && !ref?.current?.contains(e?.target)) {
            seto1(()=> false)
        }
    }
    const outsidefunction2= (e, ref)=> {
        if(ref?.current && !ref?.current?.contains(e?.target)) {
            seto2(()=> false)
        }
    }
    useEffect(()=> {
        airport_complete(setAirportAutocomplete)
    }, [setAirportAutocomplete])
    return (
        <div className="ty-2">
            <SelectPlace choose={props.origin} setchoose={props.setorigin} airportAutocomplete={airportAutocomplete} setAirportAutocomplete={setAirportAutocomplete} opensuggest={o1} outsidefunction={outsidefunction} setopensuggest={seto1} ft={"Từ"} statePlane={"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/90850a422444ef949eca39e92bd9368e.svg"} pc="Origin" />
            <TogglePlace origin={props.origin} destination={props.destination} setorigin={props.setorigin} setdestination={props.setdestination} />
            <SelectPlace choose={props.destination} setchoose={props.setdestination} airportAutocomplete={airportAutocomplete} setAirportAutocomplete={setAirportAutocomplete} opensuggest={o2} outsidefunction={outsidefunction2} setopensuggest={seto2} ft={"Đến"} statePlane={"https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/65e2019ad45add446ab998c095d62833.svg"} pc="Destination" />
        </div>
    )
}

export default ChooseOriginAndDestination