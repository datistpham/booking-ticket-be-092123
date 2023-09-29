import React, { memo, useEffect, useMemo, useRef, useState } from 'react'

const ClassSeatComponent= memo((props)=> {
    const [opensuggest, setopensuggest]= useState(()=> false)
    const seat= useMemo(()=> [{v: "Phổ thông", e: "ECONOMY"}, {v: "Phổ thông cao cấp", e: "PREMIUM_ECONOMY"}, {v: "Thương gia", e: "BUSINESS"}, {v: "Hạng nhất", e: "FIRST"}], [])
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
        <div className="cs-2">
            <div className="wo-1">Hạng ghế</div>
            <div className="gr-1" ref={myRef} onClick={()=> setopensuggest(()=> true)} style={{ outline: opensuggest=== true ? "2px solid #2e89ff" : "none"}}>
                <div className="ic-1">
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c6fbc7de62382bf792c44d7ff99c32ce.svg" alt="open" width="24" height="24" />
                </div>
                <div className="it-1">
                    <input type="text" value={props.value.v} spellCheck={true} aria-invalid={false} autoCapitalize={"sentences"} autoComplete={"on"} dir="auto" className="it-1" readOnly={true} style={{textTransform: "capitalize"}}  />
                </div>
                <svg style={{transform: opensuggest=== true ? "rotate(-180deg)" : "rotate(0)"}} className="dr-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemChevronDown"><title>Toggle Options</title><path d="M6 9L12 15L18 9" stroke="#0194f3" strokeWidth="2" ></path></svg>
                {
                    opensuggest=== true &&
                    <div className="vf-2">
                        <div className="ro-1">
                            {
                                seat?.map((item, key)=> <div key={key} onClick={(e)=> {
                                    e.stopPropagation()
                                    setopensuggest(()=> false)
                                    props.setValue((prev)=> ({...prev, v: item.v, e: item.e}))
                                }} className="cw-1">
                                <div className="vn-1">
                                </div>
                                <div className="ka-1">
                                    <div className="pw-1">
                                        {item.v}
                                    </div>
                                </div>
                            </div>)
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
})

export default ClassSeatComponent