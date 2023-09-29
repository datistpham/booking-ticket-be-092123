import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import useQuery from '../../../../f/get_query_parameter'
import * as Scroll from "react-scroll"
import Loading from '../../../../Loading/Loading'

const CostFlight = (props) => {
  let scroll= Scroll.animateScroll
  const [loading, setLoading]= useState(()=> false)
  const query= useQuery()
  return (
    <div className="fsm-1">
      {parseInt(props?.discount) > 0 ?  <CostWithDiscount cost_adult={props.cost_adult} discount={props.discount} />: <CostWithoutDiscount cost_adult={props.cost_adult} />}
        {
            props.xxxx !== true &&
            <Link onClick={()=> {
                scroll.scrollToTop()
                setLoading(()=> true)
            }} className="iwtap-3" to={"/pre-booking/flight?id="+props.id_flight} style={{textDecoration: "none", color: "#fff"}} state={{ps: query.get("ps") || props.ps, dt: query.get("dt") || props.dt, origin: props[0]?.location_airport || props.origin, destination: props[1]?.location_airport || props.destination, sc: query.get("sc") || props.sc}}>
                <div>
                    Chọn
                </div>
            </Link>
        }
        {
            loading=== true &&
            <Loading setLoading={setLoading} /> 
        }
    </div>        
  )
}

export default memo(CostFlight)

const CostWithoutDiscount= (props)=> {
    return (
        <div className="oweweo-2">
        <div className="dkoekw-1">
            {parseInt(props.cost_adult).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
        </div>
            <div className="dwejwe-1">
                /khách
            </div>
        </div>
    )
}
const CostWithDiscount= (props)=> {
    return (
        <>
            <div className="dkoew-1">
                {parseInt(props.cost_adult).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND /khách
            </div>
            <div className="oweweo-2">
                <div className="dkoekw-1">
                {(parseInt(props.cost_adult) - parseInt(props.discount)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
                </div>
                <div className="dwejwe-1">
                    /khách
                </div>
            </div>
        </>
    )
}