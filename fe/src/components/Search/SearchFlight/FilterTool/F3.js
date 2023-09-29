import { useEffect, useRef, useState } from "react"
import { B } from "../SearchFlight"
import _ from "lodash"

const F3= (props)=> {
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
      <div className="sqo-1 dsuew-1" ref={myRef}>
        <div className="qra-1" onClick={()=> setopensuggest(()=> true)}>
          Hãng hàng không
        </div>
        <div className="dko-1">
  
        </div>
        {
          opensuggest=== true &&
          <div className="dsqeo-1">
            <div className="ddoeqw-1">
              <div className="teai-1"> 
                Hãng hàng không
              </div>
              <div className="skfrtw-4">
                <div className="dsdewrowq-1">Chọn tất cả</div>
                <div className="fr0wowe-3">Từ</div>
              </div>
            </div>
            {
              _(props.resultsearch)
              .groupBy("brand")
              .map(group=> _.minBy(group, "cost_adult"))
              .value()
              .map((item, key)=> <div key={key} className="dkwoewew-1">
              <div className="wejwekwje-1">
                <B setopensuggest={setopensuggest} brand={item.brand} setfindbybrand={props.setfindbybrand} findbybrand={props.findbybrand} />
                <div className="dokwee-1">
                  <img src={item.logo_brand} alt="" style={{width: 16, height: 16, objectFit: "contain", objectPosition: "50% 50%"}} />
                  <div className="skeeqwqwp-1">{item.brand}</div>
                </div>
                <div className="drwor-ew3kq">
                    VND {item.cost_adult}
                </div>
              </div>
            </div>)
            }
          </div>
        }
      </div>
    )
  }

export default F3