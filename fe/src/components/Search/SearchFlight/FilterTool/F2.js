import { useEffect, useRef, useState } from "react"
import { M1, M2 } from "../SearchFlight"

const F2= (props)=> {
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
      <div className="sqo-1 oifairo-q2" ref={myRef}>
        <div className="qra-1" onClick={()=> setopensuggest(()=> true)}>
          Thời gian bay
        </div>
        <div className="dko-1">
  
        </div>
        {
          opensuggest=== true &&
          <div className="dsqeo-1" data-check="1">
            <div className="ddoeqw-1">
              <div className="teai-1"> 
                Giờ cất cánh
              </div>
              <div className="sjwroe-1">
                <div>
                  <M1 uid={1} settimeorigin={props.settimeorigin} b={"Buổi sáng sớm"} t={"00:00 - 06:00"} />
                  <M1 uid={2} settimeorigin={props.settimeorigin} b={"Buổi sáng"} t={"06:00 - 12:00"} />
                </div>
                <div>
                  <M1 uid={3} settimeorigin={props.settimeorigin} b={"Buổi chiều"} t={"12:00 - 18:00"} />
                  <M1 uid={4} settimeorigin={props.settimeorigin} b={"Buổi tối"} t={"18:00 - 24:00"} />
                </div>
              </div>
            </div>
  
            <div style={{marginTop: 16, marginBottom: 16, borderBottom: "1px solid #d9dbcd"}}></div>
  
            <div className="ddoeqw-1">
              <div className="teai-1"> 
                Giờ hạ cánh
              </div>
              <div className="sjwroe-1">
                <div >
                  <M2 uid={1} settimedestination={props.settimedestination} b={"Buổi sáng sớm"} t={"00:00 - 06:00"} />
                  <M2 uid={2} settimedestination={props.settimedestination} b={"Buổi sáng"} t={"06:00 - 12:00"} />
                </div>
                <div>
                  <M2 uid={3} settimedestination={props.settimedestination} b={"Buổi chiều"} t={"12:00 - 18:00"} />
                  <M2 uid={4} settimedestination={props.settimedestination} b={"Buổi tối"} t={"18:00 - 24:00"} />
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }

export default F2