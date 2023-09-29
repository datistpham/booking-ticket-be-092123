import React from 'react'
import _ from "lodash"
import { memo } from 'react'

const LimitCost = (props) => {
  return (
    <div className='grhfrwthrwtertw'>
        {
          props.ooo=== true ?
          <>
            <MinCost2 list={props.list} />
            <MaxCost2 list={props.list} />
          </>
          :
          <>
            <MinCost list={props.list} />
            <MaxCost list={props.list} />
          </>
        }
    </div>
  )
}
const MinCost= (props)=> {
  return (
    <div className='dgertryoyup'>
        {_.minBy(props.list, o=> o.cost_adult)?.cost_adult} VND
    </div>
  )
}
const MinCost2= (props)=> {
  return (
    <div className='dgertryoyup'>
      {parseInt(_.minBy(props.list, o=> (parseInt(o.cost_adult_hotel) + parseInt(o.cost_adult_flight)))?.cost_adult_hotel) + parseInt(_.minBy(props.list, o=> (parseInt(o.cost_adult_hotel) + parseInt(o.cost_adult_flight)))?.cost_adult_flight)} VND
    </div>
  )
}
const MaxCost= (props)=> {
  return (
    <div className='grthorpetrypr'>
        {_.maxBy(props.list, o=> o.cost_adult)?.cost_adult} VND
    </div>
  )
}
const MaxCost2= (props)=> {
  return (
    <div className='grthorpetrypr'>
      {parseInt(_.maxBy(props.list, o=> (parseInt(o.cost_adult_hotel) + parseInt(o.cost_adult_flight)))?.cost_adult_hotel) + parseInt(_.maxBy(props.list, o=> (parseInt(o.cost_adult_hotel) + parseInt(o.cost_adult_flight)))?.cost_adult_flight)} VND
    </div>
  )
}

export default memo(LimitCost)