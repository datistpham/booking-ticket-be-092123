import { CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { suggest2 } from '../../f/suggest2'
import ResultSearchHotel from '../ResultSearchHotel/ResultSearchHotel'

const Suggest = (props) => {
  const suggest_place= useMemo(()=> ["Hồ Chí Minh", "Đà Nẵng", "Hà Nội", "Vũng Tàu","Đà Lạt"], [])
  const [loading, setloading]= useState(()=> false)
  const [selected, setselected]= useState(()=> 1)
  const [data, setdata]= useState(()=> [])
  useEffect(()=> {
    suggest2(selected, setdata, setloading)
  }, [selected])
  return (
    <div style={{width: "100%", display: "flex", justifyContent: 'center',alignItems: 'center',}}>
      <div style={{display: 'flex',justifyContent: 'center',alignItems: "center", flexDirection: "column"}}>
        <div style={{borderBottom: "1px solid #dddfe2", display: 'flex',justifyContent: 'center',alignItems: "center", }}>
          {
           suggest_place?.map((item, key)=> <div data-id={parseInt(key) +1} style={{padding: "8px 16px", cursor: "pointer", boxShadow: selected.toString() === (parseInt(key) + 1).toString() ? "0 4px 0 -2px #2e89ff" : "none"}} key={key} onClick={()=> setselected(parseInt(key) + 1)}>{item}</div>)
          } 
        </div>
        <br />  
        <div className="gwedgdergferg" style={{width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
        {
          loading=== true && <div style={{width: '100%', height: 50, display: "flex", justifyContent: 'center',alignItems: "center"}}><CircularProgress /> </div>
        }
        {
          loading=== false && data?.length>0 && data?.map((item, key)=> <ResultSearchHotel xxxx={true} key={key} {...item} />)
        }
      </div>
      </div>
      <br />
    </div>
  )
}

export default Suggest