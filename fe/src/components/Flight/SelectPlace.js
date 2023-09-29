import { useEffect, useRef, useState } from "react"
import { flight_autocomplete } from "../../f/flight_autocomplete"
import { fts_flight } from "../../f/fts_flight"
import ComponentSuggestSearch from "./ComponentSuggestSearch"

const SelectPlace= (props)=> {
    const [opensuggest, setopensuggest]= useState(()=> false)
    const [flightAutocomplete, setFlightAutocomplete]= useState(()=> [])
    const myRef= useRef()
    const outsidefunction= (e)=> {
        if(myRef.current && !myRef.current.contains(e.target)) {
            setopensuggest(()=> false)
        }
    }
    useEffect(()=> {
        document.addEventListener("mousedown", (e)=> outsidefunction(e, myRef))
        return ()=> document.removeEventListener("mousedown",(e)=>  outsidefunction(e, myRef))
        // eslint-disable-next-line
    }, [])
    const [suggest, setsuggest]= useState(()=> undefined)
    const [listsearch, setlistsearch]= useState(()=> [])
    return (
        <div className="ft-1">
            <div className="ks-1">
                {props.ft}
            </div>
            <div className="fk-1" ref={myRef} onClick={()=> {
                setopensuggest(()=> true)
                flight_autocomplete(setFlightAutocomplete)
            }}>
                <div className="lq-1">
                    <div className="fl-1">
                        <img src={props.statePlane} alt="open" className="il-1" />
                    </div>
                    <input placeholder={props.pc} onFocus={(e)=> {
                         if(e.target.value.length <= 0) {
                        setlistsearch(props?.airportAutocomplete)
                        }
                    }} onChange={(e)=> {
                        if(e.target.value.length <= 0) {
                        setlistsearch(props?.airportAutocomplete)
                        }
                        setsuggest(e.target.value)
                        fts_flight(setlistsearch, e.target.value)
                    }} value={suggest!== undefined ? suggest : `${props.choose.code_airport !== undefined ? props.choose.location_airport + "(" + props.choose.code_airport + ")" : props?.airportAutocomplete[0]?.location_airport+ "("+props?.airportAutocomplete[0]?.code_airport+")"}`} type="text" spellCheck={true} aria-invalid={false} autoCapitalize={"sentences"} autoComplete={"on"} dir="auto" className="it-1"  />
                </div>
                {
                    opensuggest=== true &&
                    <div className="kd-1">
                        <div className="ow-1">  
                            <div className="as-2">
                                <div className="jg-2">
                                    Thành phố hoặc sân bay phổ biến
                                </div>
                            </div>
                            {
                                listsearch?.length<=0 && flightAutocomplete && flightAutocomplete?.map((item, key)=> <div key={key} className="lm-4" onClick={(e)=> {
                                    e.stopPropagation()
                                    setsuggest((prev)=> undefined)
                                    setopensuggest(()=> false)                                    
                                    props.setchoose((prev)=> ({...prev, location_airport: item.location_airport, code_airport: item.code_airport}))
                                }}>
                                <div>
                                    {item.location_airport}, {item.country_airport}
                                </div>
                                <div>
                                    {item?.code_airport} -  {item?.name_airport}
                                </div>
                            </div>)
                            }
                            {
                                listsearch?.length>0 && listsearch?.map((item, key)=> <ComponentSuggestSearch key={key} {...item} setsuggest={setsuggest} setopensuggest={props.setopensuggest} setchoose={props.setchoose} />)
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default SelectPlace