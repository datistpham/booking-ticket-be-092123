import React, { useEffect, useState } from 'react'
import _ from "lodash"
import useQuery from '../../../f/get_query_parameter'
import { result_hotel } from '../../../f/result_hotel'
import FilterRangeCostHotel from '../../Filter/FilterRangeCostHotel'
import ResultSearchHotel from '../../ResultSearchHotel/ResultSearchHotel'
import TitleSearchHotel from './TitleSearchHotel'
import SortHotel from '../../Sort/SortHotel/SortHotel'
import LimitCost from './LimitCost'
import EntityHotel from './EntityHotel'
import Collape from './Collape'
import TypeRoomHotel from './TypeRoomHotel'
import FilterByStar from './FilterByStar'
import { CircularProgress } from '@mui/material'

const SearchHotel = () => {
  const query= useQuery()
  const [list, setlist]= useState(()=> [])
  const [listRange, setListRange]= useState(()=> [])
  const [reviewstar, setreviewstar]= useState(()=> [])
  const [entities, setentities]= useState(()=> ([0 ,0 ,0 ,0 ,0 ,0 ,0, 0, 0]))
  const [typehotel, settypehotel]= useState(()=> "")
  const [wifi, setwifi]= useState(()=> "")
  const [pool, setpool]= useState(()=> "")
  const [parking, setparking]= useState(()=> "")
  const [restaurant, setrestaurant]= useState(()=> "")
  const [receptionist, setreceptionist]= useState(()=> "")
  const [fitness_center, setfitness_center]= useState(()=> "")
  const [elevator, setelevator]= useState(()=> "")
  const [meeting, setmeeting]= useState(()=> "")
  const [airport_shuttle, setairport_shuttle]= useState(()=> "")
  const [loading, setloading]= useState(()=> false)
  useEffect(()=> {
    document.body.style.height= "auto"
    return ()=> document.body.style.height="100%"
  }, [])
  useEffect(()=> {
    result_hotel(setlist, query.get("spec"), query.get("l"), query.get("c"), query.get("r"), setloading)
    return ()=> setlist(()=> ([]))
  },[query])
  return (
    <div className='aoe-1'>
        <TitleSearchHotel />
      <div className="dsjiewwew" style={{width: "100%", display: "flex", justifyContent: 'center',alignItems: 'center',}}>
        <div className="dsijeesawdad">
            <div className="sjskeekweow">
                <SortHotel setlist={setlist} list={list} />
                <Collape settypehotel={settypehotel} setreviewstar={setreviewstar} setListRange={setListRange} />
                <div className='dfsfgwrterww'>
                    <div className='gdfjerdgrwttew'>Khoảng giá/đêm</div>
                    <LimitCost list={list}/> 
                    <FilterRangeCostHotel listRange={listRange} setListRange={setListRange} mincost={_.minBy(list, o=> o.cost_adult)} maxcost={_.maxBy(list, o=> o.cost_adult)} />
                </div>
                <FilterByStar reviewstar={reviewstar} setreviewstar={setreviewstar} />
                <div className='fkkfdgrwketoepre'>
                    <EntityHotel entities={entities} setentities={setentities} wifi={wifi} setwifi={setwifi} pool={pool} setpool={setpool} parking={parking} setparking={setparking} meeting={meeting} setmeeting={setmeeting} 
                      restaurant={restaurant} setrestaurant={setrestaurant} receptionist={receptionist} setreceptionist={setreceptionist} fitness_center={fitness_center} setfitness_center={setfitness_center}
                      elevator={elevator} setelevator={setelevator} airport_shuttle={airport_shuttle} setairport_shuttle={setairport_shuttle}
                    />
                </div>
                <TypeRoomHotel type={typehotel} settypehotel={settypehotel} />
            </div>
            <div className="rijererwrwe">
              {
                loading=== true ? 
                <div style={{width: "100%", height: 100, display: "flex", justifyContent: "center", alignItems: 'center', gap: 5, zIndex: 99999999}}>
                  <span style={{fontSize: 24, fontWeight: 600, color: "#3a3b3c"}}>Searching...</span>
                  <CircularProgress />
                </div> 
                :
                <>
                  {
                    (wifi+pool+parking+restaurant+receptionist+elevator+fitness_center+meeting+airport_shuttle).toString().trim().length> 0 &&
                    list?.filter(item=> (item.wifi+item.pool+item.parking+item.restaurant+item.receptionist+item.elevator+item.fitness_center+item.meeting+item.airport_shuttle).toString().trim().includes((wifi+pool+parking+restaurant+receptionist+elevator+fitness_center+meeting+airport_shuttle).toString().trim())=== true)?.map((item, key)=> <ResultSearchHotel key={key} {...item} />)
                  }
                  {
                      (wifi+pool+parking+restaurant+receptionist+elevator+fitness_center+meeting+airport_shuttle).toString().trim().length<= 0 &&
                      list?.length>0 && listRange?.length<=0 && typehotel?.length<=0 && reviewstar?.length<=0 &&
                      list?.map((item, key)=> <ResultSearchHotel key={key} {...item} />)
                  }
                  {
                      listRange?.length>0 && 
                      list?.filter(item=> parseInt(item.cost_adult)>= parseInt(Math.min.apply(Math, listRange)) && parseInt(item.cost_adult)<= parseInt(Math.max.apply(Math, listRange))).map((item, key)=> <ResultSearchHotel key={key} {...item} />)
                  }
                  {
                      reviewstar?.length>0 &&
                      list?.filter(item=> reviewstar?.includes(parseInt(item.review))).map((item, key)=> <ResultSearchHotel key={key} {...item} />)                    
                  }
                  {
                    typehotel?.length>0 &&
                    list?.filter(item=> item.type.toString() === typehotel.toString()).map((item, key)=> <ResultSearchHotel key={key} {...item} />)                    
                  }
                  {
                    list?.length<=0 && <div>Không tìm thấy thứ bạn cần</div>
                  }
                </>
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchHotel