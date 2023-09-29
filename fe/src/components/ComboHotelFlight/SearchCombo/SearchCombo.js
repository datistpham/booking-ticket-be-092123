import React, { useEffect, useState } from 'react'
import useQuery from '../../../f/get_query_parameter'
import { search_combo } from '../../../f/search_combo'
import { FilterRangeCostHotel2 } from '../../Filter/FilterRangeCostHotel'
import ResultSearchHotel from '../../ResultSearchHotel/ResultSearchHotel'
import Collape from '../../Search/SearchHotel/Collape'
import EntityHotel from '../../Search/SearchHotel/EntityHotel'
import FilterByStar from '../../Search/SearchHotel/FilterByStar'
import LimitCost from '../../Search/SearchHotel/LimitCost'
import TitleSearchHotel from '../../Search/SearchHotel/TitleSearchHotel'
import TypeRoomHotel from '../../Search/SearchHotel/TypeRoomHotel'
import SortHotel from '../../Sort/SortHotel/SortHotel'
import _ from "lodash"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { CircularProgress } from '@mui/material'

const SearchCombo = () => {
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
  const [list, setlist]= useState(()=> [])
  const [paginateList, setPaginateList]= useState(()=> [])
  const query= useQuery()
  const [page, setPage] = useState(()=> 1);
  const [loading, setloading]= useState(()=> false)
  const handleChange = (event, value) => {
    setPage(value);
    if(listRange?.length>0) {
      setPaginateList(list?.filter(item=> parseInt(item.cost_adult)>= parseInt(Math.min.apply(Math, listRange)) && parseInt(item.cost_adult)<= parseInt(Math.max.apply(Math, listRange))).slice(8 * parseInt(page), 8 * (parseInt(page)+ 1)))
      return
    }
    if(reviewstar?.length>0) {
      setPaginateList(list?.filter(item=> reviewstar?.includes(parseInt(item.review))).slice(8 * parseInt(page), 8 * (parseInt(page)+ 1)))
      return
    }
    if(typehotel?.length>0) {
      setPaginateList(list?.filter(item=> item.type.toString() === typehotel.toString()).slice(8 * parseInt(page), 8 * (parseInt(page)+ 1)))
      return
    }
    if((wifi+pool+parking+restaurant+receptionist+elevator+fitness_center+meeting+airport_shuttle).toString().trim().length> 0) {
      setPaginateList(paginateList?.filter(item=> (item.wifi+item.pool+item.parking+item.restaurant+item.receptionist+item.elevator+item.fitness_center+item.meeting+item.airport_shuttle).toString().trim().includes((wifi+pool+parking+restaurant+receptionist+elevator+fitness_center+meeting+airport_shuttle).toString().trim())=== true).slice(8 * parseInt(page), 8 * (parseInt(page)+ 1)))
      return
    }
    setPaginateList(list?.slice(8 * parseInt(page), 8 * (parseInt(page)+ 1)))
  };
  useEffect(()=> {
    search_combo(query.get("origin"), query.get("destination"), query.get("dt"), query.get("cs"), query.get("sc"), query.get("location"), query.get("timein"), query.get("guest"), query.get("room"), query.get("back"), setlist, setPaginateList, setloading)
  }, [query])
  return (
    <div className='aoe-1'>
        <TitleSearchHotel a={true} /><div className="dsjiewwew" style={{width: "100%", display: "flex", justifyContent: 'center',alignItems: 'center',}}>
        <div className="dsijeesawdad">
            <div className="sjskeekweow">
                <SortHotel setlist={setlist} list={list} />
                <Collape settypehotel={settypehotel} setreviewstar={setreviewstar} setListRange={setListRange} />
                <div className='dfsfgwrterww'>
                    <div className='gdfjerdgrwttew'>Khoảng giá/đêm</div>
                    <LimitCost ooo={true} list={list}/> 
                    <FilterRangeCostHotel2 ooo={true} listRange={listRange} setListRange={setListRange} mincost={_.minBy(list, o=> parseInt(o.cost_adult_hotel) + parseInt(o.cost_adult_flight))} maxcost={_.maxBy(list, o=> parseInt(o.cost_adult_hotel) + parseInt(o.cost_adult_flight))} />
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
                loading=== true  &&
                <div style={{width: "100%", height: 100, display: "flex", justifyContent: "center", alignItems: 'center', gap: 5, zIndex: 99999999}}>
                  <span style={{fontSize: 24, fontWeight: 600, color: "#3a3b3c"}}>Searching...</span>
                  <CircularProgress />
                </div> 
              }
              {
                loading=== false && paginateList?.length> 0 && paginateList?.map((item, key)=> <ResultSearchHotel detail_customer={query.get("guest")} ooo={true} key={key} {...item}  />)
              }
              {
                loading=== false && list?.length<=0 && <div>Không tìm thấy thứ bạn cần</div>
              }
              <Stack spacing={2}>
                <Pagination color="primary" count={Math.ceil(list?.length / 8)} page={page} onChange={handleChange} />
              </Stack>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchCombo