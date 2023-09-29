import React, { memo } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ResultSearchHotel from '../components/ResultSearchHotel/ResultSearchHotel'
import { suggest } from '../f/suggest'
import _ from "lodash"
import ResultFlightDetail from '../components/Search/SearchFlight/ResultFIightSearch/ResultFlightSearch'

const Suggest = (props) => {
  const { id }= useParams()
  const [data, setdata]= useState(()=> [])
  const location= useLocation()
  useEffect(()=> {
    if(id=== "hotel") {
      suggest(setdata, id, props.location )
    }
    else if(id=== "flight") {
      suggest(setdata, id, [props.origin, props.destination, props.dayflight, props.daydestination])
    }

  }, [id, props.location, props.origin, props.destination, props.dayflight, props.daydestination])
  return (
    <div className="_oowaw_ewiq02" style={{width: "calc(100% - 20px)", boxSizing: "border-box", padding: 10, boxShadow: "rgb(0 0 0 / 24%) 0px 3px 8px",  borderRadius: 8, margin: "20px 10px 10px 10px", marginTop: 30, background: "#fff"}} >
        <div style={{fontWeight: 600, fontSize: 20, marginBottom: 10}}>{props.title}</div>
        <div className={`fjiasjfdiafsae ${props.flight=== true ? "dkekqopwa" : "dsdsklwe"}`} style={{width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: 'center', background: "#fff"}}>
            {
             props.hotel=== true && data?.length>0 && _.shuffle(data)?.map((item, key)=> <ResultSearchHotel key={key} {...item} {...location.state} ooo1={true} />)
            }

              
            {
              props.flight=== true && data?.length>0 && _.shuffle(data)?.map((item, key)=> <ResultFlightDetail key={key} {...item} {...location.state} ooo1={true} />)
            }
        </div>
    </div>
  )
}

export default memo(Suggest)