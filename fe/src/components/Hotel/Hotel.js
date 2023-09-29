import moment from 'moment'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fts } from '../../f/fts'
import { hotel_autocomplete } from '../../f/hotel_autocomplete'
import D from '../Date/D'

const initialValue = new Date()
const Hotel = (props) => {
  return (
    <div className={`cp-2 ${props.classNameWithout|| "ews_4"} ${props.classNamesecret|| "fkwe-d"}`}>
        <div className="pg-1">
            {
                props.chooseAdd=== true &&
                <div style={{padding: 8, fontSize: 18, color: "#2e89ff", marginBottom: 10}}>
                    <input type="checkbox" style={{width: 20, height: 20}} onChange={()=> props.setNotFindHotel(prev=> !prev)} />
                    <span>Tìm khách sạn ở thành phố hoặc ngày khác</span>
                </div>
            }
            {
                props.notFindHotel!== true &&
                <>
                    <E {...props} addi={props.addi} setaddi={props.setaddi} choose={props.choose} setchoose={props.setchoose} />
                    <br />
                    <F {...props} value={props.value} setValue={props.setValue} timenight={props.timenight} settimenight={props.settimenight} />
                    <br />
                </>
            }
            <G {...props} addi={props.addi} value={props.value} timenight={props.timenight} choose={props.choose} setchoose={props.setchoose} />
        </div>
    </div>
  )
}
export default Hotel    

const E= (props)=> {
    const [opensuggest, setopensuggest]= useState(()=> false)
    const [hotelAutocomplete, setHotelAutocomplete]= useState(()=> [])
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
    const [listsearch, setlistsearch]= useState(()=> [])
    return (
        <div className="eo-1">
            <div className="bm-1">
                Thành phố, địa điểm hoặc tên khách sạn: 
            </div>
            <div className="sds-2" ref={myRef} style={{ outline: opensuggest=== true ? "2px solid #2e89ff" : "none"}} onClick={()=> {
                setopensuggest(()=> true)
                hotel_autocomplete(setHotelAutocomplete)
            }}>
                <div className="ic-3">
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/06c6fdcf3e33d2950e2743ea8c3d2208.svg" alt="open" width="24" height="24" />
                </div>
                <input onChange={(e)=> {
                    props.setchoose(e.target.value)
                    fts(setlistsearch, e.target.value)
                }} value={props.choose} type="text" spellCheck={true} aria-invalid={false} autoCapitalize={"sentences"} autoComplete={"on"} dir="auto" className="it-1" placeholder="Thành phố, khách sạn, điểm đến" />
                {
                    opensuggest=== true &&
                    <div className="sg-1">
                        <div className="gt-1">
                            Điểm đến phổ biến
                        </div>
                        {
                            listsearch?.length>0 && listsearch?.map((item, key)=> <X addi={props.addi} setaddi={props.setaddi} key={key} setopensuggest={setopensuggest} setchoose={props.setchoose} {...item.item}  />)
                        }
                        {
                            listsearch?.length<=0 && hotelAutocomplete && hotelAutocomplete?.map((item, key)=> <X addi={props.addi} setaddi={props.setaddi} key={key} setopensuggest={setopensuggest} setchoose={props.setchoose}  {...item}  />)
                        }
                    </div>
                }
            </div>
        </div>
    )
}
const X= (props)=> {
    return (
        <div className="ip-1" onClick={(e)=> {
            e.stopPropagation()
            props.setopensuggest(()=> false)
            props.setchoose(props?.destination)
            props.setaddi(props?.location_travel)
        }}>
        <div className="gf-1">
            <div className="at-1">
                <div className="hr-1">
                    {props?.destination}
                </div>
                    {props?.type?.length>0 &&
                    <div className="ut-1">
                        {props?.type}
                    </div>
                    }
            </div>
            <div className="iw-1">
                <div className="hr-2">
                    {props?.location_travel}
                </div>
                <div className="ut-2">
                    {
                        props?.c_hotel > 0 &&
                    props?.c_hotel+ " khách sạn"
                    }
                </div>
            </div>
        </div>
    </div>
    )
}
const F= (props)=> {
    
    return (
        <div className="ce-1">
            {
                props.notFindHotel!== true &&
                <F1 value={props.value} setValue={props.setValue} disable={props.disable} />
            }
            <F2 value={props.value} timenight={props.timenight} settimenight={props.settimenight} /> 
            <F3 value={props.value} timenight={props.timenight} />
        </div>
    )
}
const F1= (props)=> {
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
        <div ref={myRef} className="fa-1" >
            <div className="ri-1">
                Nhận phòng: 
            </div>
            <div className="ei-1 hv-1" onClick={()=> setopensuggest(prev=> true)}>
                <div className="rw-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemCalendar"><path d="M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z" stroke="#687176" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.5 11.5V12.5H6.5V11.5H7.5Z" stroke="#0194F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>  
                <div className="jw-1">
                    <p>
                        {moment(new Date(props?.value)).format("dddd")},&nbsp;   
                    </p>
                    <D disable={props.disable} open={opensuggest} value={props.value} setValue={props.setValue} initialValue={initialValue} />
                </div>
            </div>
        </div>
    )
}
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
        <div className="fa-1 lt-3">
            <div className="ri-1">
                Số đêm:
            </div>
            <div ref={myRef} className="ei-1 hv-1 lm-4" onClick={()=> setopensuggest(()=> true)} style={{ outline: opensuggest=== true ? "2px solid #2e89ff" : "none"}}>
                <div className="rw-1">
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b0ee9b0e2caa9d0b970177b0c2ee77d0.svg" width="24" height="24" alt="open" />
                </div>  
                <div className="jw-1">
                    <input type="text" readOnly={true} value={`${props.timenight} đêm`} spellCheck={true} aria-invalid={false} autoCapitalize={"sentences"} autoComplete={"on"} dir="auto" className="it-1"  />
                </div>
                <div className="os-1" style={{transform: opensuggest=== false ? "rotate(0)" : "rotate(-180deg)", width: 20}}>
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/96f78c74ef882223cecd102ba1e47812.svg" width="16" height="16" alt="open" />
                </div>
                {
                    opensuggest=== true &&
                    <div className="vf-2">
                        <div className="ro-1">
                            {
                                Array.from(Array(30).keys()).map((item, key)=> <div key={key} className="cw-1" onClick={(e)=> {
                                    e.stopPropagation()
                                    setopensuggest(()=> false)
                                    props.settimenight(()=> parseInt(item)+1)
                                }}>
                                <div className="vn-1">
                                    
                                </div>
                                <div className="ka-1">
                                    <div className="pw-1">
                                        {parseInt(item) + 1} đêm
                                    </div>
                                    <div className="vk-2" style={{textTransform: "capitalize"}}>
                                        {moment(moment(new Date(props?.value))).add(parseInt(item) + 1, "days").format("dddd, DD/MM/YYYY")}
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
}
const F3= (props)=> {
    return (
        <div className="fa-1">
            <div className="ri-1">
                Trả phòng:
            </div>
            <div className="es-1 ld-1 er-1" style={{height: 40, display: "flex", justifyContent: 'center',alignItems: "center"}}>
                <div className="jw-1" style={{height: "100%", textTransform: "capitalize", display: "flex", alignItems: "center"}}>
                    {moment(moment(new Date(props?.value))).add(parseInt(props.timenight), "days").format("dddd, DD/MM/YYYY")}
                </div>
            </div>
        </div>
    )
}
const G= (props)=> {
    
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
        <div className="do-1">
            <div className="fa-1">
                <div className="ri-1">
                    Khách và phòng
                </div>  
                <div className="ei-1">
                    <div className="hv-1" ref={myRef} onClick={()=> setopensuggest(()=> true)} style={{ outline: opensuggest=== true ? "2px solid #2e89ff" : "none"}}>
                        <div className="rw-1">
                            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/98a7579ccebe5a779c32bc1da67853a8.svg" width="24" height="24" alt="open" />
                        </div>  
                        <input type="text" value={`${props.data.adult} người lớn, ${props.data.kid} trẻ em, ${props.data.room} phòng`} readOnly={true} spellCheck={true} aria-invalid={false} autoCapitalize={"sentences"} autoComplete={"on"} dir="auto" className="it-1"  />
                        <div className="os-1" style={{transform: opensuggest=== false ? "rotate(0)" : "rotate(-180deg)",}}>
                            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/96f78c74ef882223cecd102ba1e47812.svg" width="16" height="16" alt="open" />
                        </div>
                        {
                            opensuggest=== true &&
                            <div className="ao-1">
                                <div className="ap-1">
                                    <div>
                                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9c6f6176aba4da5748d57b769726d76e.svg" alt="open" style={{marginRight: 12}} />
                                        <div>Người lớn</div>
                                    </div>
                                    <div>   
                                        <button disabled={(parseInt(props.data.adult) === 0) ? true : false} className="gh-1" onClick={()=> props.setData(prev=> ({...prev, adult: parseInt(props.data.adult) - 1}))}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddMinus"><path d="M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </button>
                                        <div className="rw-1">
                                            {props.data.adult}
                                        </div>
                                        <button className="gh-1" onClick={()=> props.setData(prev=> ({...prev, adult: parseInt(props.data.adult) + 1}))}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddPlus"><path d="M12 5V19M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="ap-1">
                                    <div>
                                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9c6f6176aba4da5748d57b769726d76e.svg" alt="open" style={{marginRight: 12}} />
                                        <div>Trẻ em</div>
                                    </div>
                                    <div>   
                                        <button disabled={(parseInt(props.data.kid) === 0) ? true : false} className="gh-1" onClick={()=> props.setData(prev=> ({...prev, kid: parseInt(props.data.kid) - 1}))}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddMinus"><path d="M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </button>
                                        <div className="rw-1">
                                            {props.data.kid}
                                        </div>
                                        <button className="gh-1" onClick={()=> props.setData(prev=> ({...prev, kid: parseInt(props.data.kid) + 1}))}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddPlus"><path d="M12 5V19M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="ap-1">
                                    <div>
                                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9c6f6176aba4da5748d57b769726d76e.svg" alt="open" style={{marginRight: 12}} />
                                        <div>Phòng</div>
                                    </div>
                                    <div>   
                                        <button disabled={(parseInt(props.data.room) === 0) ? true : false} className="gh-1" onClick={()=> props.setData(prev=> ({...prev, room: parseInt(props.data.room) - 1}))}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddMinus"><path d="M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </button>
                                        <div className="rw-1">
                                            {props.data.room}
                                        </div>
                                        <button className="gh-1" onClick={()=> props.setData(prev=> ({...prev, room: parseInt(props.data.room) + 1}))}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSymbolAddPlus"><path d="M12 5V19M5 12H19" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="de-1">
                                    <button onClick={(e)=> {
                                        e.stopPropagation()
                                        setopensuggest(()=> false)
                                    }} className="fk-1">Xong</button>
                                </div>
                            </div>
                        }
                    </div>
                    {
                        props.notfindSearch!==true &&
                        <div>
                            <Link to={"/hotel/search?spec=" + moment(new Date(props.value)).format("DD-MM-YYYY")+"."+moment(moment(new Date(props?.value))).add(parseInt(props.timenight), "days").format("DD-MM-YYYY") +"&tn="+props.timenight+"&l="+props.choose.toString().replaceAll(" ", "-") + "&c="+ (parseInt(props.data.adult) + parseInt(props.data.kid)).toString()+"&g="+props.data.adult+"."+props.data.kid+"&r=" + (parseInt(props.data.room)).toString()} style={{textDecoration: "none"}} state={{location_travel: props.addi}}>
                                <div className="ld-1">
                                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6109dccccb4bbae97f5ded035b3853d9.svg" alt="open" />
                                    <div className="so-1">Tìm khách sạn</div>
                                </div>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}