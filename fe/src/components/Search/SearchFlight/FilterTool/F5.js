import { useEffect, useRef, useState } from "react"
import RadioButtonsGroup from "../../../Sort/SortFlight/ListSort"

const F5= (props)=> {
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
      <div className="dpq-3 gaerara-1" ref={myRef}>
        <div className="vbe-1" onClick={()=> setopensuggest(()=> true)}>
          <div className="soe-1">
            Sắp xếp
          </div>
          <div className="sew-1">
          <img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/light/ic_system_checkmark_16px-e8c592e0f6219f8d6609753bf0b1198d.svg" width="12" height="12" alt="open"></img>
          </div>
        </div>
        {
          opensuggest=== true &&
          <div className="dsqeo-1 fdgwergr-1" style={{flexDirection: "column !important"}}>
            <div className="ddoeqw-1">
              <div className="teai-1"> 
                Sắp xếp
              </div>
            </div>
            <RadioButtonsGroup resultsearch={props.resultsearch} setresultsearch={props.setresultsearch} />
          </div>
        }
      </div>
    )
  }

export default F5